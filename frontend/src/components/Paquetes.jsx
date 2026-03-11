import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventCard = ({ img, category, title, desc, capacity, price, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className="card-luxury p-0 overflow-hidden group border-primary-100 hover:border-accent/40"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
        ${price}
      </div>
    </div>
    <div className="p-8">
      <span className="text-accent text-xs font-bold uppercase tracking-widest">{category}</span>
      <h3 className="text-2xl font-serif mt-2 mb-4 text-primary-950 group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-primary-500 text-sm leading-relaxed mb-6 line-clamp-2">
        {desc}
      </p>
      <div className="flex items-center justify-between border-t border-primary-50 pt-6">
        <div className="flex items-center gap-2 text-primary-400 text-sm font-medium">
          <Users size={18} className="text-accent" /> Hasta {capacity} personas
        </div>
        <Link to="/catalogar" className="text-accent hover:text-accent-dark transition-colors">
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Paquetes = () => {
  const events = [
    {
      category: 'Bodas',
      title: 'Bodas elegantes',
      price: '2,500',
      capacity: '200',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
      desc: 'Celebra el día más importante de tu vida en nuestro elegante salón. Capacidad para 200 personas, decoración personalizada...'
    },
    {
      category: 'Quinceañeras',
      title: 'Quinceañeras de Ensueño',
      price: '1,800',
      capacity: '150',
      img: 'https://images.unsplash.com/photo-1549416801-6387088484d7?auto=format&fit=crop&q=80&w=800',
      desc: 'Haz realidad los sueños de tu princesa con una celebración inolvidable. Incluye decoración temática, pista de baile iluminada...'
    },
    {
      category: 'Corporativos',
      title: 'Eventos Corporativos',
      price: '1,500',
      capacity: '100',
      img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800',
      desc: 'Espacio profesional ideal para conferencias, presentaciones y eventos empresariales. Equipado con tecnología audiovisual de última generación.'
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="container mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent font-bold tracking-[0.2em] uppercase text-sm"
        >
          Categorías Populares
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl mt-6 mb-8 font-serif"
        >
          Eventos <span className="text-accent italic font-light">Destacados</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary-500 text-xl max-w-2xl mx-auto mb-20 leading-relaxed font-sans"
        >
          Descubre nuestros espacios más populares, diseñados meticulosamente para cada tipo de celebración.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {events.map((e, i) => (
            <EventCard key={i} {...e} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/catalogar" className="btn-luxury inline-flex items-center gap-3">
            Explorar Catálogo Completo <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Paquetes;