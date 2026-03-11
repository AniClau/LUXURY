import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Disponibilidad = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Mock booked dates
    const bookedDates = [
        { day: 15, month: 2, year: 2024, type: 'booked', label: 'Boda Real' },
        { day: 22, month: 2, year: 2024, type: 'booked', label: 'XV Años Editorial' },
        { day: 10, month: 3, year: 2024, type: 'booked', label: 'Cena de Gala' },
        { day: 18, month: 3, year: 2024, type: 'cleaning', label: 'Mantenimiento' },
    ];

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const isDateBooked = (day) => {
        return bookedDates.find(d =>
            d.day === day &&
            d.month === currentDate.getMonth() &&
            d.year === currentDate.getFullYear()
        );
    };

    const renderCalendar = () => {
        const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
        const startDay = firstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
        const calendarDays = [];

        // Padding for first week
        for (let i = 0; i < startDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="h-32 border-b border-r border-black/5 bg-gray-50/30"></div>);
        }

        for (let d = 1; d <= totalDays; d++) {
            const booking = isDateBooked(d);
            calendarDays.push(
                <div key={d} className="h-32 border-b border-r border-black/5 relative group p-4 transition-colors hover:bg-black/5">
                    <span className={`text-lg font-serif ${booking ? 'opacity-20' : 'opacity-100'}`}>{d}</span>

                    {booking && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                            <div className={`w-full h-full ${booking.type === 'cleaning' ? 'bg-black/5' : 'bg-black'} flex flex-col items-center justify-center text-center p-2 overflow-hidden`}>
                                <span className={`text-[7px] uppercase tracking-[0.2em] font-black ${booking.type === 'cleaning' ? 'text-black/40' : 'text-white'}`}>
                                    {booking.type === 'cleaning' ? 'Limpieza' : 'Reservado'}
                                </span>
                                <span className={`text-[8px] font-serif italic truncate w-full ${booking.type === 'cleaning' ? 'text-black/20' : 'text-white/40'}`}>
                                    {booking.label}
                                </span>
                            </div>
                        </div>
                    )}

                    {!booking && (
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <CheckCircle2 size={12} className="text-black/20" />
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
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 border-b border-black pb-20">
                    <div className="max-w-2xl">
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 block mb-6 px-4 border-l-2 border-black inline-block">Disponibilidad Luxury</span>
                        <h1 className="text-7xl md:text-8xl font-serif uppercase tracking-tighter">Event <br /><span className="italic font-light opacity-60">Calendar</span></h1>
                    </div>

                    <div className="flex flex-col items-end gap-6 text-right">
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 max-w-xs leading-loose">
                            Consulte las fechas disponibles para su próximo evento editorial en nuestro recinto exclusivo.
                        </p>
                        <div className="flex gap-10 text-[9px] uppercase tracking-widest font-black">
                            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-black"></div> Reservado</div>
                            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-black/10"></div> Limpieza</div>
                            <div className="flex items-center gap-3"><div className="w-2 h-2 border border-black/10"></div> Disponible</div>
                        </div>
                    </div>
                </div>

                {/* Calendar Desktop */}
                <div className="bg-white border-t border-l border-black/5 shadow-2xl">
                    {/* Navigation */}
                    <div className="flex justify-between items-center p-10 border-b border-black/5">
                        <button onClick={handlePrevMonth} className="p-4 hover:bg-black hover:text-white transition-all border border-black/5">
                            <ChevronLeft size={20} />
                        </button>
                        <h2 className="text-4xl font-serif uppercase tracking-widest italic">{monthNames[currentDate.getMonth()]} <span className="not-italic font-light opacity-30">{currentDate.getFullYear()}</span></h2>
                        <button onClick={handleNextMonth} className="p-4 hover:bg-black hover:text-white transition-all border border-black/5">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Weekdays */}
                    <div className="grid grid-cols-7 text-center border-b border-black/5 bg-gray-50/50">
                        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
                            <div key={d} className="py-6 text-[10px] uppercase tracking-[0.5em] font-black text-black/40 border-r border-black/5 last:border-r-0">
                                {d}
                            </div>
                        ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 border-r border-black/5">
                        {renderCalendar()}
                    </div>
                </div>

                {/* Reservation Call to Action */}
                <div className="mt-40 max-w-4xl mx-auto text-center border border-black/5 p-20 bg-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                    <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40 block mb-6">Planifique hoy</span>
                        <h3 className="text-5xl font-serif italic mb-10">¿Encontró su fecha ideal?</h3>
                        <p className="text-[11px] uppercase tracking-[0.3em] font-medium mb-12 opacity-60">Inicie su proceso de reserva exclusiva para asegurar el recinto bajo los estándares LUXURY.</p>
                        <button className="px-16 py-6 border border-black/10 group-hover:border-white/20 text-[10px] uppercase tracking-[0.5em] font-black transition-all hover:bg-white hover:text-black">
                            Iniciar Reserva
                        </button>
                    </div>
                    {/* Background visual element */}
                    <CalendarIcon size={300} className="absolute -bottom-20 -right-20 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Disponibilidad;
