import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section style={{
            padding: '6rem 0',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000") no-repeat center center/cover`
        }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem' }}>
                    ¿Listo Para Crear Momentos Inolvidables?
                </h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
                    Reserva ahora y obtén asesoramiento personalizado gratuito para planificar tu evento perfecto
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <Link to="/reservar" className="btn-luxury">
                        Reservar ahora
                    </Link>
                    <Link to="/registro" className="btn-outline" style={{ background: '#fff', color: 'var(--text-primary)' }}>
                        Crear cuenta
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
