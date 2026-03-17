import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { reservacionService } from '../services/api';

// Mover hoy fuera para evitar re-creación constante
const today = new Date();
today.setHours(0, 0, 0, 0);

const Disponibilidad = () => {

    const navigate = useNavigate();

    const [currentDate, setCurrentDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const [bookedDates, setBookedDates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [direction, setDirection] = useState(0);

    // 🔹 OBTENER RESERVAS DEL BACKEND
    useEffect(() => {

        const fetchReservations = async () => {

            setLoading(true);

            try {

                const response = await reservacionService.getAll();

                console.log("Reservas recibidas:", response?.data);

                if (!response?.data || response.data.length === 0) {
                    setBookedDates([]);
                    return;
                }

                const mapped = response.data
                    .filter(res => res.estado !== 'Cancelada')
                    .map(res => {

                        const fecha = res.fecha_evento;

                        if (!fecha) return null;

                        const [year, month, day] = fecha.split('-').map(Number);

                        return {
                            day: day,
                            month: month - 1,
                            year: year,
                            type: res.estado === 'Pendiente' ? 'pending' : 'booked',
                            label: "Evento Reservado"
                        };

                    })
                    .filter(Boolean);

                setBookedDates(mapped);

            } catch (error) {

                console.error("Error fetching availability:", error);
                setBookedDates([]);

            } finally {

                setLoading(false);

            }

        };

        fetchReservations();

    }, []);

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const handlePrevMonth = () => {

        setDirection(-1);

        setCurrentDate(prev => {

            const next = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);

            const currentMonthStart = new Date(
                today.getFullYear(),
                today.getMonth(),
                1
            );

            return next >= currentMonthStart ? next : prev;

        });

    };

    const handleNextMonth = () => {

        setDirection(1);

        setCurrentDate(prev =>
            new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
        );

    };

    const isDateBooked = (day) => {

        return bookedDates.find(d =>
            d.day === day &&
            d.month === currentDate.getMonth() &&
            d.year === currentDate.getFullYear()
        );

    };

    const variants = {

        enter: (direction) => ({
            x: direction > 0 ? 40 : -40,
            opacity: 0
        }),

        center: {
            x: 0,
            opacity: 1
        },

        exit: (direction) => ({
            x: direction < 0 ? 40 : -40,
            opacity: 0
        })

    };

    const renderCalendar = () => {

        if (loading) {

            return (
                <div className="col-span-7 py-40 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm">
                    <div className="w-12 h-12 border-t-2 border-black rounded-full animate-spin mb-6"></div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">
                        Sincronizando Agenda Luxury...
                    </span>
                </div>
            );

        }

        const totalDays = daysInMonth(
            currentDate.getFullYear(),
            currentDate.getMonth()
        );

        const startDay = firstDayOfMonth(
            currentDate.getFullYear(),
            currentDate.getMonth()
        );

        const calendarDays = [];

        for (let i = 0; i < startDay; i++) {

            calendarDays.push(
                <div
                    key={`empty-${i}`}
                    className="h-40 border-b border-r border-black/5 bg-gray-50/10"
                ></div>
            );

        }

        for (let d = 1; d <= totalDays; d++) {

            const booking = isDateBooked(d);

            const dateInCalendar = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                d
            );

            const isPast = dateInCalendar < today;

            calendarDays.push(

                <div
                    key={d}
                    className={`h-40 border-b border-r border-black/5 relative group p-6 transition-all ${
                        isPast
                            ? 'bg-transparent opacity-40'
                            : 'hover:bg-black/5 cursor-pointer'
                    }`}
                >

                    <span className={`text-xl font-serif ${booking ? 'opacity-20' : 'opacity-100'}`}>
                        {d}
                    </span>

                    {booking && (

                        <div className="absolute inset-x-2 inset-y-2 flex flex-col items-center justify-center">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`w-full h-full ${
                                    booking.type === 'pending'
                                        ? 'bg-black/5 border border-black/10'
                                        : 'bg-black'
                                } flex flex-col items-center justify-center text-center p-4 shadow-xl overflow-hidden`}
                            >

                                <span className={`text-[8px] uppercase tracking-[0.3em] font-black mb-1 ${
                                    booking.type === 'pending'
                                        ? 'text-black/60'
                                        : 'text-white'
                                }`}>
                                    {booking.type === 'pending'
                                        ? 'En Proceso'
                                        : 'Confirmado'}
                                </span>

                                <span className={`text-[9px] font-serif italic truncate w-full ${
                                    booking.type === 'pending'
                                        ? 'text-black/30'
                                        : 'text-white/40'
                                }`}>
                                    {booking.label}
                                </span>

                            </motion.div>

                        </div>

                    )}

                    {!booking && !isPast && (

                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <CheckCircle2 size={16} className="text-black/10" />
                        </div>

                    )}

                </div>

            );

        }

        return calendarDays;

    };

    return (

        <div className="bg-[#fcfcfc] min-h-screen pt-32">

            <Navbar />

            <div className="container mx-auto px-10 mb-32">

                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 border-b border-black pb-20">

                    <div className="max-w-2xl">

                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 block mb-6 px-4 border-l-2 border-black inline-block">
                            Disponibilidad Luxury
                        </span>

                        <h1 className="text-7xl md:text-8xl font-serif uppercase tracking-tighter">
                            Event <br />
                            <span className="italic font-light opacity-60">
                                Calendar
                            </span>
                        </h1>

                    </div>

                </div>

                <div className="bg-white border-t border-l border-black/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">

                    <div className="flex justify-between items-center p-12 border-b border-black/5 bg-white relative z-20">

                        <button
                            onClick={handlePrevMonth}
                            className="w-14 h-14 flex items-center justify-center hover:bg-black hover:text-white transition-all border border-black/5 rounded-full"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <h2 className="text-5xl font-serif uppercase tracking-widest italic">
                            {monthNames[currentDate.getMonth()]}{' '}
                            <span className="not-italic font-light opacity-30">
                                {currentDate.getFullYear()}
                            </span>
                        </h2>

                        <button
                            onClick={handleNextMonth}
                            className="w-14 h-14 flex items-center justify-center hover:bg-black hover:text-white transition-all border border-black/5 rounded-full"
                        >
                            <ChevronRight size={20} />
                        </button>

                    </div>

                    <div className="grid grid-cols-7 border-r border-black/5">
                        {renderCalendar()}
                    </div>

                </div>

            </div>

            <Footer />

        </div>

    );

};

export default Disponibilidad;