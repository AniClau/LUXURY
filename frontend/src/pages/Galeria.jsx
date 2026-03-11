import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, url: '/images/Foto 1.jpg', title: 'Apertura de Gala' },
        { id: 111, url: '/images/Foto 111.jpg', title: 'Brillo Editorial' },
        { id: 115, url: '/images/Foto 115.jpg', title: 'Esencia Social' },
        { id: 116, url: '/images/Foto 116.jpg', title: 'Destellos Luxury' },
        { id: 22, url: '/images/Foto 22.jpg', title: 'Vanguardistas' },
        { id: 220, url: '/images/Foto 220.jpg', title: 'Noches Icónicas' },
        { id: 23, url: '/images/Foto 23.jpg', title: 'Sinfonía Visual' },
        { id: 36, url: '/images/Foto 36.jpg', title: 'Retrato de Evento' },
        { id: 38, url: '/images/Foto 38.jpg', title: 'Tradición Premium' },
        { id: 51, url: '/images/Foto 51.jpg', title: 'Atmósfera de Autor' },
        { id: 88, url: '/images/Foto 88.jpg', title: 'Gala Minimalista' },
        { id: 180, url: '/images/Foto-180.jpg', title: 'Celebración Editorial' },
        { id: 181, url: '/images/Foto-181.jpg', title: 'Brindis de Lujo' },
        { id: 182, url: '/images/Foto-182.jpg', title: 'Detalles de Gala' },
        { id: 183, url: '/images/Foto-183.jpg', title: 'Iluminación Premium' },
        { id: 184, url: '/images/Foto-184.jpg', title: 'Momentos Exclusivos' },
        { id: 185, url: '/images/Foto-185.jpg', title: 'Atmósfera Luxury' },
        { id: 186, url: '/images/Foto-186.jpg', title: 'Banquete de Autor' },
        { id: 187, url: '/images/Foto-187.jpg', title: 'Estilo Social' },
        { id: 188, url: '/images/Foto-188.jpg', title: 'Arquitectura de Eventos' },
        { id: 189, url: '/images/Foto-189.jpg', title: 'Noches de Gala' },
        { id: 190, url: '/images/Foto-190.jpg', title: 'Elegancia Atemporal' },
        { id: 191, url: '/images/Foto-191.jpg', title: 'Decoración Minimalista' },
        { id: 192, url: '/images/Foto-192.jpg', title: 'Vanguardia Social' },
        { id: 193, url: '/images/Foto-193.jpg', title: 'Texturas de Lujo' },
        { id: 194, url: '/images/Foto-194.jpg', title: 'Escenarios Icónicos' },
        { id: 195, url: '/images/Foto-195.jpg', title: 'Refinamiento Pura' },
        { id: 196, url: '/images/Foto-196.jpg', title: 'Pasión por el Detalle' },
        { id: 197, url: '/images/Foto-197.jpg', title: 'Sueños de Cristal' },
        { id: 198, url: '/images/Foto-198.jpg', title: 'Gran Salón' },
        { id: 199, url: '/images/Foto-199.jpg', title: 'Esplendor de Noche' },
        { id: 201, url: '/images/Foto-201.jpg', title: 'Diseño de Mesa' },
        { id: 202, url: '/images/Foto-202.jpg', title: 'Floristería de Gala' },
        { id: 209, url: '/images/Foto-209.jpg', title: 'Momentos Íntimos' },
        { id: 212, url: '/images/Foto-212.jpg', title: 'Coctelería de Lujo' },
        { id: 216, url: '/images/Foto-216.jpg', title: 'Aires de Fiesta' },
        { id: 234, url: '/images/Foto-234.jpg', title: 'Sombras de Arte' },
        { id: 235, url: '/images/Foto-235.jpg', title: 'Brillo Etéreo' },
        { id: 236, url: '/images/Foto-236.jpg', title: 'Luz y Perfección' },
        { id: 237, url: '/images/Foto-237.jpg', title: 'Magia Social' },
        { id: 250, url: '/images/Foto-250.jpg', title: 'Inspiración Pura' },
        { id: 260, url: '/images/Foto-260.jpg', title: 'Cena de Gala' },
        { id: 261, url: '/images/Foto-261.jpg', title: 'Pasarela de Eventos' },
        { id: 262, url: '/images/Foto-262.jpg', title: 'Reflejos Luxury' },
        { id: 278, url: '/images/Foto-278.jpg', title: 'Destellos de Noche' },
        { id: 287, url: '/images/Foto-287.jpg', title: 'Gala Presidencial' },
        { id: 293, url: '/images/Foto-293.jpg', title: 'Vibras Luxury' },
        { id: 310, url: '/images/Foto-310.jpg', title: 'Gran Escenario' },
        { id: 392, url: '/images/Foto-392.jpg', title: 'Memorias de Gala' },
        { id: 428, url: '/images/Foto-428.jpg', title: 'Arte en Vivo' },
        { id: 476, url: '/images/Foto-476.jpg', title: 'Final de Fiesta' },
    ];

    return (
        <div className="bg-white min-h-screen pt-32">
            <Navbar />

            {/* Gallery Header */}
            <div className="container mx-auto px-10 mb-20 text-center">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 block mb-6">Visual Storytelling</span>
                <h1 className="text-7xl md:text-8xl font-serif uppercase tracking-tighter mb-10">Editorial <br /><span className="italic font-light">Gallery</span></h1>
                <div className="w-20 h-px bg-black mx-auto mb-10"></div>
                <p className="max-w-2xl mx-auto text-black/60 text-sm font-light leading-relaxed uppercase tracking-widest">
                    Una curaduría visual de los momentos más exclusivos capturados en Luxury Salón Social.
                    Donde cada evento es una portada de revista.
                </p>
            </div>

            {/* Masonry-like Grid */}
            <div className="px-5 md:px-20 mb-32">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group cursor-none overflow-hidden bg-gray-100"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/60 mb-2">Luxury Moments</span>
                                <h3 className="text-white text-xl font-serif italic">{img.title}</h3>
                                <Maximize2 className="text-white absolute top-8 right-8" size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-black flex items-center justify-center p-10 md:p-20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full object-contain shadow-2xl"
                        />

                        <div className="absolute bottom-10 left-10 md:left-20">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40 block mb-2 px-4 border-l border-white/40">Portfolio</span>
                            <h2 className="text-white text-4xl md:text-5xl font-serif italic px-4">{selectedImage.title}</h2>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Galeria;
