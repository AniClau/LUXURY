import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Award, Leaf, Flame } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Menus = () => {
    const [activeCategory, setActiveCategory] = useState('fuertes');

    const menuData = {
        cremas: {
            title: 'Cremas & Sopas',
            items: [
                'Crema de poro y papa con un toque de chipotle',
                'Crema de champiñón',
                'Crema a los tres quesos con uva',
                'Crema de setas perfumada con vino blanco',
                'Crema de tres morrones',
                'Crema campesina (calabacita, champiñón, grano de elote y queso panela)',
                'Crema de cilantro con un toque de jalapeño y nuez',
                'Sopa de milpa (flor de calabaza, grano de elote, champiñón, raja poblana)',
                'Sopa azteca (caldillo de jitomate, tortilla frita, queso panela, chicharrón y aguacate)',
            ]
        },
        pastas: {
            title: 'Pastas & Entradas',
            items: [
                'Spaghetti boloñesa (salsa de tomate aromatizada con hierbas aromáticas y vino blanco)',
                'Pasta a los tres quesos (gruyere, manchego y gouda)',
                'Fetuccine Alfredo (acompañado salsa cremosa con jamón, tocino y perejil)',
                'Tornillos a la crema aromatizada con finas hiervas',
                'Spaghetti en salsa de cilantro (con tocino y queso parmesano)',
                'Pasta en salsa cremosa de chipotle adobado con camarón pacotilla',
                'Tallarines cremosos con atún y espinaca',
            ]
        },
        ensaladas: {
            title: 'Ensaladas Frescas',
            items: [
                'Ensalada fresca (lechugas, durazno, kiwi, naranja, toronja nueces caramelizadas)',
                'Ensalada silvestre (mix de lechugas con fresa, durazno, aceituna, nuez y yogurt natural)',
                'Ensalada de espinaca con manzana, piña y nuez',
                'Ensalada italiana (lechuga, jitomate, pepino, morrones, crotones y vinagreta estilo italiana)',
                'Ensalada frutal (lechuga sangría, mango, manzana, piña y nuez de la india, vinagreta de mostaza con miel)',
            ]
        },
        fuertes: {
            title: 'Platos Fuertes',
            subtitle: 'Ave, Lomo o Pierna',
            items: [
                'Suprema de pollo en salsa reina (salsa cremosa de chipotle y trozos de champiñón)',
                'Filete de ave en salsa de naranja',
                'Suprema de pollo en salsa roqueford',
                'Suprema de pollo en salsa de pimiento morron',
                'Suprema de pollo en salsa de flor de calabaza',
                'Suprema de pollo a la beberé blanc (salsa blanca a base de mantequilla)',
                'Lomo en salsa de vino tinto',
                'Lomo adobado (con chile ancho)',
                'Lomo mechado (con ciruela pasa y almendra) en salsa de tamarindo',
                'Pierna en salsa de ciruela',
                'Pierna en agridulce en salsa de tamarindo',
                'Pierna enchilada a los tres chiles',
            ]
        },
        guarniciones: {
            title: 'Guarniciones',
            items: [
                'Puré de papa al parmesano',
                'Papas cambray a la mantequilla con pimiento deshidratado',
                'Papa horno',
                'Risotto poblano',
                'Puré de camote',
                'Rollitos de ejotes con pimiento morron envuelto en tocino',
                'Verduras de temporada a la mantequilla',
            ]
        }
    };

    return (
        <div className="bg-[#f9f9f9] min-h-screen pt-32">
            <Navbar />

            {/* Gastronomy Header */}
            <div className="container mx-auto px-10 mb-32 text-center">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 block mb-6 px-4 border-l-2 border-black inline-block">Culinaria Luxury</span>
                <h1 className="text-7xl md:text-8xl font-serif uppercase tracking-tighter mb-10">Signature <br /><span className="italic font-light text-black/80">Menus</span></h1>
                <p className="max-w-xl mx-auto text-black/50 text-[10px] uppercase tracking-[0.3em] font-medium leading-loose border-t border-black/10 pt-10">
                    Una experiencia gastronómica de alta costura diseñada para cautivar los sentidos.
                    Ingredientes frescos, técnicas vanguardistas.
                </p>
            </div>

            {/* Menu Navigator */}
            <div className="sticky top-24 z-50 bg-white/80 backdrop-blur-xl border-y border-black/5 py-8 mb-20">
                <div className="container mx-auto px-10 flex flex-wrap justify-center gap-12 md:gap-20">
                    {Object.keys(menuData).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-300 relative group ${activeCategory === cat ? 'text-black' : 'text-black/30 hover:text-black'
                                }`}
                        >
                            {menuData[cat].title.split(' ')[0]}
                            {activeCategory === cat && (
                                <motion.div layoutId="menuTab" className="absolute -bottom-4 left-0 right-0 h-px bg-black" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-10 mb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Visual Aspect */}
                    <div className="relative aspect-[3/4] bg-black overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                        <div className="absolute inset-x-10 top-10 flex justify-between items-start border-b border-white/20 pb-10">
                            <Utensils className="text-white" size={24} strokeWidth={1} />
                            <span className="text-white/40 text-[9px] uppercase tracking-[0.4em]">Section {activeCategory.toUpperCase()}</span>
                        </div>
                        <div className="absolute inset-x-10 bottom-10">
                            <h2 className="text-white text-6xl font-serif italic mb-6 leading-tight">{menuData[activeCategory].title}</h2>
                            <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Reserva Gastronómica Exclusiva</p>
                        </div>
                        {/* Decorative Icons */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 scale-150">
                            <Utensils size={400} />
                        </div>
                    </div>

                    {/* Listing Aspect */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-10 py-10"
                    >
                        {menuData[activeCategory].subtitle && (
                            <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-black/20 mb-10">{menuData[activeCategory].subtitle}</h3>
                        )}

                        <div className="space-y-12">
                            {menuData[activeCategory].items.map((item, i) => (
                                <div key={i} className="group cursor-default border-b border-black/5 pb-10 hover:border-black transition-all duration-500">
                                    <div className="flex items-start gap-8">
                                        <span className="text-xl font-serif text-black/20 group-hover:text-black transition-colors">{i < 9 ? `0${i + 1}` : i + 1}</span>
                                        <div className="space-y-4">
                                            <p className="text-lg font-light leading-relaxed text-black tracking-tight">{item}</p>
                                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Leaf size={12} className="text-black/30" title="Ingredientes frescos" />
                                                <Award size={12} className="text-black/30" title="Selección del Chef" />
                                                <Flame size={12} className="text-black/30" title="Preparación al momento" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 pt-10 border-t border-black/10">
                            <button className="bg-black text-white w-full py-8 text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-black/90 transition-all shadow-2xl">
                                Consultar Disponibilidad
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Menus;
