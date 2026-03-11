import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Catálogo', path: '/catalogar' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Galería', path: '/galeria' },
        { name: 'Menús', path: '/menus' },
        { name: 'Disponibilidad', path: '/disponibilidad' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 transition-all duration-500 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl border-b border-black/5'
            : 'bg-white py-6 border-b border-black/5'
            }`}>
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                <Link to="/" className="no-underline group">
                    <img
                        src="/images/logo.png"
                        alt="LUXURY Salón Social"
                        className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                        style={{ filter: 'brightness(0)' }}
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative text-[10px] uppercase tracking-[0.4em] font-semibold text-black/60 hover:text-black transition-colors no-underline"
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="navUnderline"
                                    className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-black"
                                />
                            )}
                        </Link>
                    ))}
                    <Link to="/reservar" className="bg-black text-white text-[9px] uppercase tracking-[0.3em] px-8 py-3 font-bold hover:bg-black/80 transition-colors no-underline shadow-lg">
                        RESERVAR
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-black p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/98 backdrop-blur-3xl overflow-hidden border-t border-black/5"
                    >
                        <div className="container px-6 py-12 flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-3xl font-serif font-light tracking-tight ${location.pathname === link.path ? 'text-black font-medium italic' : 'text-black/40'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-black/5" />
                            <Link
                                to="/reservar"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-3 px-8 py-5 bg-black text-white font-bold text-[10px] uppercase tracking-[0.4em] shadow-2xl"
                            >
                                <User size={18} />
                                RESERVAR AHORA
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;