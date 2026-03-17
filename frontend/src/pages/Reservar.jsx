import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { paqueteService, reservacionService, servicioService } from '../services/api';
import { Calendar, Users, Info, Star, Shield, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Reservar = () => {

const navigate = useNavigate();
const { user } = useAuth();

const [paquetes, setPaquetes] = useState([]);
const [servicios, setServicios] = useState([]);
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
paquete: '',
tipo_evento: '',
fecha_evento: '',
num_personas: '',
nombre_festejado: '',
servicios_adicionales: [],
notas: '',
hora_inicio: '18:00',
hora_fin: '22:00'
});

useEffect(() => {
paqueteService.getAll().then(res => setPaquetes(res.data));
servicioService.getAll().then(res => setServicios(res.data));
}, []);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData(prev => ({ ...prev, [name]: value }));
};

const handleServiceToggle = (id) => {
setFormData(prev => {
const current = prev.servicios_adicionales;
const updated = current.includes(id)
? current.filter(sId => sId !== id)
: [...current, id];
return { ...prev, servicios_adicionales: updated };
});
};

/* CALCULAR HORA FINAL */
const calcularHoraFin = (horaInicio, duracion) => {

if(!horaInicio || !duracion) return '';

const [h,m] = horaInicio.split(':').map(Number);

const fecha = new Date();
fecha.setHours(h);
fecha.setMinutes(m);

fecha.setHours(fecha.getHours() + duracion);

const horas = String(fecha.getHours()).padStart(2,'0');
const minutos = String(fecha.getMinutes()).padStart(2,'0');

return `${horas}:${minutos}`;

};

/* CAMBIAR HORA INICIO */

const cambiarHoraInicio = (e) => {

const hora = e.target.value;

const paquete = paquetes.find(p => p.id === formData.paquete);

const nuevaHoraFin = paquete
? calcularHoraFin(hora, paquete.duracion_horas)
: '';

setFormData(prev => ({
...prev,
hora_inicio: hora,
hora_fin: nuevaHoraFin
}));

};

const handleSubmit = async (e) => {

e.preventDefault();

if (!user || !user.cliente_id) {
alert("Debes iniciar sesión como cliente para reservar.");
return;
}

setLoading(true);

try {

const payload = {
...formData,
cliente: user.cliente_id,
observaciones: `Evento: ${formData.tipo_evento}. Festejado: ${formData.nombre_festejado}. Notas: ${formData.notas}`
};

await reservacionService.create(payload);

alert("¡Reservación realizada con éxito!");
navigate('/');

} catch (error) {

console.error(error);
alert(error.response?.data?.error || "Error al procesar la reserva. Verifica disponibilidad.");

} finally {
setLoading(false);
}

};

return (

<div style={{ background:'#f8fafc', minHeight:'100vh' }}>

<Navbar />

<div className="container" style={{ padding:'8rem 0 6rem' }}>

<motion.div
className="card-luxury"
style={{
maxWidth:'1000px',
margin:'0 auto',
background:'#fff',
padding:'4rem',
borderRadius:'20px',
boxShadow:'0 10px 30px rgba(0,0,0,0.08)'
}}
>

<h1 style={{
marginBottom:'3rem',
fontSize:'2.5rem',
letterSpacing:'2px'
}}>
RESERVAR AHORA
</h1>

<form onSubmit={handleSubmit}>

{/* 1. Selecciona Paquete */}

<div style={{ marginBottom:'4rem' }}>

<h3 style={{
marginBottom:'1.5rem',
display:'flex',
alignItems:'center',
gap:'0.8rem',
letterSpacing:'2px'
}}>
<Star color="var(--accent)" />
SELECCIONA UN PAQUETE *
</h3>

<div style={{
display:'grid',
gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
gap:'1.5rem'
}}>

{paquetes.map(p => (

<div
key={p.id}
onClick={() => {

const nuevaHoraFin = calcularHoraFin(formData.hora_inicio, p.duracion_horas);

setFormData({
...formData,
paquete: p.id,
hora_fin: nuevaHoraFin
});

}}
style={{
position:'relative',
padding:'2rem',
border:'1px solid #e5e7eb',
cursor:'pointer'
}}
>

<div style={{
position:'absolute',
top:'1rem',
right:'1rem',
width:'20px',
height:'20px',
borderRadius:'50%',
border:'2px solid var(--accent)',
display:'flex',
alignItems:'center',
justifyContent:'center'
}}>

{formData.paquete === p.id &&
<div style={{
width:'10px',
height:'10px',
borderRadius:'50%',
background:'var(--accent)'
}}/>}

</div>

<h4 style={{ fontSize:'1.2rem' }}>
{p.nombre}
</h4>

<div style={{
fontSize:'1.5rem',
fontWeight:'700',
margin:'0.5rem 0'
}}>
${p.precio_base}
</div>

<p style={{
fontSize:'0.8rem',
color:'#6b7280'
}}>
{p.descripcion}
</p>

<div style={{
marginTop:'1rem',
display:'flex',
gap:'1rem',
fontSize:'0.75rem',
color:'#6b7280'
}}>

<span style={{ display:'flex',alignItems:'center',gap:'3px' }}>
<Clock size={12}/>
{p.duracion_horas}h
</span>

<span style={{ display:'flex',alignItems:'center',gap:'3px' }}>
<Users size={12}/>
{p.capacidad_personas}p
</span>

</div>

</div>

))}

</div>

</div>


{/* HORARIO DEL EVENTO */}

<div style={{
display:'grid',
gridTemplateColumns:'1fr 1fr',
gap:'2rem',
marginBottom:'3rem'
}}>

<div>

<label style={{
fontSize:'0.75rem',
letterSpacing:'2px',
fontWeight:'600',
color:'#6b7280'
}}>
HORA DE INICIO *
</label>

<input
type="time"
name="hora_inicio"
value={formData.hora_inicio}
onChange={cambiarHoraInicio}
required
style={{
width:'100%',
border:'none',
borderBottom:'1px solid #d1d5db',
padding:'10px 0',
outline:'none'
}}
/>

</div>

<div>

<label style={{
fontSize:'0.75rem',
letterSpacing:'2px',
fontWeight:'600',
color:'#6b7280'
}}>
HORA DE FINALIZACIÓN
</label>

<input
type="time"
name="hora_fin"
value={formData.hora_fin}
readOnly
style={{
width:'100%',
border:'none',
borderBottom:'1px solid #d1d5db',
padding:'10px 0',
outline:'none',
color:'#6b7280'
}}
/>

</div>

</div>


{/* 2. Datos generales */}

<div style={{
display:'grid',
gridTemplateColumns:'1fr 1fr',
gap:'2rem',
marginBottom:'3rem'
}}>

<div>

<label style={{
fontSize:'0.75rem',
letterSpacing:'2px',
fontWeight:'600',
color:'#6b7280'
}}>
TIPO DE EVENTO *
</label>

<select
name="tipo_evento"
value={formData.tipo_evento}
onChange={handleChange}
required
style={{
width:'100%',
border:'none',
borderBottom:'1px solid #d1d5db',
padding:'10px 0',
background:'transparent',
outline:'none'
}}
>

<option value="">Selecciona un tipo</option>
<option value="Boda">Boda</option>
<option value="XV Años">XV Años</option>
<option value="Bautizo">Bautizo</option>
<option value="Corporativo">Corporativo</option>
<option value="Social">Social</option>

</select>

</div>

<div>

<label style={{
fontSize:'0.75rem',
letterSpacing:'2px',
fontWeight:'600',
color:'#6b7280'
}}>
FECHA DEL EVENTO *
</label>

<input
type="date"
name="fecha_evento"
value={formData.fecha_evento}
onChange={handleChange}
required
style={{
width:'100%',
border:'none',
borderBottom:'1px solid #d1d5db',
padding:'10px 0',
outline:'none'
}}
/>

</div>

<div>

<label style={{
fontSize:'0.75rem',
letterSpacing:'2px',
fontWeight:'600',
color:'#6b7280'
}}>
NÚMERO DE INVITADOS *
</label>

<input
type="number"
name="num_personas"
min="0"
value={formData.num_personas}
onChange={handleChange}
placeholder="Ej: 100"
required
style={{
width:'100%',
border:'none',
borderBottom:'1px solid #d1d5db',
padding:'10px 0',
outline:'none'
}}
/>

</div>

<div>

<label style={{
fontSize:'0.75rem',
letterSpacing:'2px',
fontWeight:'600',
color:'#6b7280'
}}>
NOMBRE DEL FESTEJADO *
</label>

<input
type="text"
name="nombre_festejado"
value={formData.nombre_festejado}
onChange={handleChange}
placeholder="Nombre de quien celebra"
required
style={{
width:'100%',
border:'none',
borderBottom:'1px solid #d1d5db',
padding:'10px 0',
outline:'none'
}}
/>

</div>

</div>


{/* 3. Servicios */}

<div style={{ marginBottom:'4rem' }}>

<h3 style={{
marginBottom:'1.5rem',
letterSpacing:'2px'
}}>
SERVICIOS ADICIONALES
</h3>

<div style={{
display:'grid',
gridTemplateColumns:'repeat(2,1fr)',
gap:'1rem'
}}>

{servicios.map(s => (

<div
key={s.id}
onClick={() => handleServiceToggle(s.id)}
style={{
padding:'1rem',
border:'1px solid #e5e7eb',
display:'flex',
alignItems:'center',
gap:'1rem',
cursor:'pointer'
}}
>

<input
type="checkbox"
checked={formData.servicios_adicionales.includes(s.id)}
readOnly
/>

<span>
{s.nombre}
</span>

</div>

))}

</div>

</div>


{/* 4. Notas */}

<div style={{ marginBottom:'3rem' }}>

<label style={{
fontSize:'0.75rem',
letterSpacing:'2px',
fontWeight:'600',
color:'#6b7280'
}}>
NOTAS ADICIONALES
</label>

<textarea
name="notas"
value={formData.notas}
onChange={handleChange}
rows="4"
maxLength="500"
placeholder="Cuéntanos más sobre tu evento..."
style={{
width:'100%',
border:'none',
borderBottom:'1px solid #d1d5db',
padding:'10px 0',
resize:'none',
outline:'none'
}}
></textarea>

<span style={{
fontSize:'0.75rem',
color:'#6b7280'
}}>
{formData.notas.length}/500 caracteres
</span>

</div>

<button
type="submit"
disabled={loading}
className="btn-luxury"
style={{
width:'100%',
padding:'1.2rem',
fontSize:'0.9rem',
letterSpacing:'4px',
background:'#000',
color:'#fff',
border:'none',
borderRadius:'14px'
}}
>

{loading ? 'PROCESANDO...' : 'CONFIRMAR RESERVA →'}

</button>

</form>

</motion.div>

</div>

<Footer/>

</div>

);

};

export default Reservar;