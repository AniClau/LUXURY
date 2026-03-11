import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ img, name, role, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.8 }}
        viewport={{ once: true }}
        className="card-luxury"
        style={{ textAlign: 'left', padding: '4rem 3rem', background: '#fff', position: 'relative' }}
    >
        <div style={{ position: 'absolute', top: '2rem', right: '3rem', opacity: 0.05, color: 'var(--accent)' }}>
            <Quote size={80} fill="currentColor" />
        </div>

        <div style={{ display: 'flex', gap: '4px', color: 'var(--accent)', marginBottom: '2.5rem' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--accent)" />)}
        </div>

        <p style={{
            color: 'var(--text-primary)',
            fontSize: '1.25rem',
            lineHeight: '1.8',
            marginBottom: '3rem',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            position: 'relative',
            zIndex: 1
        }}>
            "{text}"
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '2.5rem' }}>
            <img src={img} alt={name} style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-light)' }} />
            <div>
                <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: '700' }}>{name}</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{role}</p>
            </div>
        </div>
    </motion.div>
);

const Testimonios = () => {
    const reviews = [
        {
            name: 'María González', role: 'Novia',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
            text: 'Fue el día más especial de nuestras vidas. LUXURY superó todas nuestras expectativas. La atención al detalle y el montaje fueron simplemente impecables, nos sentimos en un cuento de hadas.'
        },
        {
            name: 'Carlos Ramírez', role: 'Director General - TechCorp',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
            text: 'Organizamos nuestra gala anual aquí y el profesionalismo es de otro nivel. El equipo técnico y la coordinación logística hicieron que todo fluyera sin un solo contratiempo. Altamente recomendados.'
        },
        {
            name: 'Ana Martínez', role: 'Quinceañera',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
            text: 'Hicieron realidad los sueños de mi hija. La decoración era exactamente lo que imaginamos y la comida fue el comentario de todos nuestros invitados. Gracias por hacer esto posible.'
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Testimonios</span>
                    <h2 style={{ fontSize: '4rem', marginTop: '1.5rem' }}>Lo Que Dicen Nuestros Invitados</h2>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '3rem'
                }}>
                    {reviews.map((r, i) => (
                        <TestimonialCard key={i} {...r} delay={i * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
