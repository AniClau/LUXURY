import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            {/* Background with zoom effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000") no-repeat center center/cover`,
                    zIndex: -1
                }}
            />

            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.2, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    <span className="text-white text-[10px] uppercase tracking-[0.6em] mb-10 opacity-70">
                        Bienvenidos a LUXURY
                    </span>
                    <h1 className="text-6xl md:text-8xl text-white font-serif mb-12 uppercase tracking-tighter leading-tight max-w-4xl">
                        Eventos de <span className="italic font-light">Colección</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-16 leading-relaxed">
                        Redefiniendo el arte de celebrar con la exclusividad y el refinamiento
                        que solo una revista de lujo puede capturar.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <Link to="/reservar" className="bg-white text-black px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gray-200 transition-all">
                            Planear Evento
                        </Link>
                        <Link to="/catalogar" className="border border-white/30 text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all">
                            Ver Catálogo
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Social proof dots */}
            <div style={{
                position: 'absolute', bottom: '4rem',
                display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.6
            }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
            </div>
        </section>
    );
};

export default Hero;