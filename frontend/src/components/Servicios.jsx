import React from 'react';
import { Star, Layout, Utensils, Music, Shield, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        viewport={{ once: true }}
        className="card-luxury p-10 flex flex-col items-start gap-6 group hover:border-accent/40"
    >
        <div className="bg-accent-light w-16 h-16 rounded-2xl flex items-center justify-center text-accent-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
            <Icon size={32} />
        </div>
        <div>
            <h3 className="text-2xl font-serif mb-4 text-primary-900 group-hover:text-accent transition-colors duration-300">{title}</h3>
            <p className="text-primary-500 leading-relaxed text-lg">
                {desc}
            </p>
        </div>
    </motion.div>
);

const Servicios = () => {
    const features = [
        { icon: Heart, title: 'Atención Exclusiva', desc: 'Un coordinador dedicado acompañará cada paso de tu planeación para garantizar la perfección.' },
        { icon: Layout, title: 'Espacios Flexibles', desc: 'Salones transformables que se adaptan desde una cena íntima hasta una gala de 500 invitados.' },
        { icon: Utensils, title: 'Gastronomía de Autor', desc: 'Experiencias culinarias diseñadas por reconocidos chefs con ingredientes de la más alta calidad.' },
        { icon: Zap, title: 'Tecnología de Punta', desc: 'Sistemas de iluminación robótica y sonido envolvente para crear atmósferas inmersivas.' },
        { icon: Shield, title: 'Seguridad y Confort', desc: 'Instalaciones seguras con estacionamiento privado y personal capacitado en cada área.' },
        { icon: Star, title: 'Eventos con Alma', desc: 'Más que un salón, somos el escenario donde tus celebraciones se vuelven legendarias.' },
    ];

    return (
        <section className="py-24 bg-primary-50/20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-bold tracking-[0.2em] uppercase text-sm"
                    >
                        Nuestros Pilares
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl mt-6 mb-8"
                    >
                        Excelencia en Cada <span className="text-accent italic font-light">Detalle</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-500 text-xl leading-relaxed"
                    >
                        Nos enorgullecemos de ofrecer un servicio integral que redefine el estándar de los eventos de lujo, combinando tradición con innovación constante.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;