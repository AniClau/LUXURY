import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Package,
    Utensils,
    CalendarCheck,
    Settings,
    Users,
    TrendingUp,
    LogOut,
    Plus,
    Filter,
    Clock,
    UserCircle,
    Image as ImageIcon,
    Trash2,
    Edit3,
    X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [userRole, setUserRole] = useState('admin'); // admin | encargado
    const [scrolled, setScrolled] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin'] },
        { id: 'reservations', label: 'Reservaciones', icon: CalendarCheck, roles: ['admin', 'encargado'] },
        { id: 'packages', label: 'Paquetes', icon: Package, roles: ['admin'] },
        { id: 'menus', label: 'Menús', icon: Utensils, roles: ['admin'] },
        { id: 'gallery', label: 'Galería', icon: ImageIcon, roles: ['admin'] },
        { id: 'users', label: 'Usuarios / Roles', icon: Users, roles: ['admin'] },
        { id: 'settings', label: 'Configuración', icon: Settings, roles: ['admin'] },
    ];

    // Sidebar Component
    const Sidebar = () => (
        <div className="w-80 h-screen bg-black text-white p-10 flex flex-col fixed left-0 top-0 border-r border-white/5">
            <div className="mb-20">
                <h1 className="font-serif text-3xl uppercase tracking-widest italic font-light">Luxury</h1>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block mt-2">Panel de Control</span>
            </div>

            <nav className="flex-1 space-y-10">
                {menuItems.filter(item => item.roles.includes(userRole)).map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-6 group transition-all duration-300 ${activeTab === item.id ? 'text-white' : 'text-white/40 hover:text-white'
                            }`}
                    >
                        <div className={`p-3 transition-colors ${activeTab === item.id ? 'bg-white text-black' : 'bg-white/5 text-white/40 group-hover:bg-white group-hover:text-black'}`}>
                            <item.icon size={18} />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{item.label}</span>
                        {activeTab === item.id && (
                            <motion.div layoutId="sidebarActive" className="ml-auto w-1 h-8 bg-white" />
                        )}
                    </button>
                ))}
            </nav>

            <div className="mt-auto pt-10 border-t border-white/5 flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <UserCircle size={24} className="text-white/60" />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold">{userRole}</p>
                    <button className="text-[9px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2 mt-1">
                        <LogOut size={12} /> Salir
                    </button>
                </div>
            </div>
        </div>
    );

    // Dashboard Content Example
    const DashboardView = () => (
        <div className="space-y-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                    { label: 'Ingresos Totales', val: '$1.2M', icon: TrendingUp, color: 'text-black' },
                    { label: 'Reservas del Mes', val: '48', icon: CalendarCheck, color: 'text-black' },
                    { label: 'Horas de Limpieza', val: '4H', icon: Clock, color: 'text-black' },
                ].map((stat, i) => (
                    <div key={i} className="p-10 border border-black/5 bg-white hover:shadow-2xl transition-all duration-500">
                        <div className="flex justify-between items-start mb-10">
                            <stat.icon size={20} className={stat.color} />
                            <span className="text-[9px] uppercase tracking-widest font-bold text-black/40">Real-time</span>
                        </div>
                        <p className="text-6xl font-serif mb-4">{stat.val}</p>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/60">{stat.label}</h4>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
                {/* Popular Events Table */}
                <div className="p-12 border border-black/5 bg-white">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-4xl font-serif uppercase tracking-tight">Top <span className="italic font-light">Eventos</span></h2>
                        <button className="text-[10px] uppercase tracking-widest font-bold border-b border-black pb-2">Ver todo</button>
                    </div>
                    <div className="space-y-8">
                        {['Banquete Premium', 'Banquete Clásico', 'Básico 150'].map((ev, i) => (
                            <div key={i} className="flex justify-between items-center pb-8 border-b border-black/5 group">
                                <span className="text-2xl font-serif opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                <span className="flex-1 px-10 text-[11px] uppercase tracking-[0.3em] font-bold">{ev}</span>
                                <span className="text-xl font-light">42 Res.</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interface Settings Preview */}
                <div className="p-12 bg-black text-white">
                    <h2 className="text-4xl font-serif uppercase tracking-tight mb-16">Config <span className="italic font-light">Sistema</span></h2>
                    <div className="space-y-12">
                        <div className="flex justify-between items-center pb-6 border-b border-white/10">
                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Horas de Limpieza Post-Evento</span>
                            <div className="flex items-center gap-4 bg-white/5 px-6 py-2">
                                <span className="text-2xl font-serif">04</span>
                                <span className="text-[9px] uppercase tracking-widest opacity-40">Horas</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pb-6 border-b border-white/10">
                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Visibilidad de Precios</span>
                            <div className="w-12 h-6 bg-white flex items-center px-1">
                                <div className="w-4 h-4 bg-black ml-auto" />
                            </div>
                        </div>
                        <button className="w-full py-5 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white/90 transition-all">
                            Aplicar Configuración
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Paquetes State
    const [packages, setPackages] = useState([
        { id: 1, name: 'Básico 150 Personas', price: 17900, capacity: 150, image: '/images/basico150Imag1.jpeg', layout: 'Minimalist' },
        { id: 2, name: 'Banquete Clásico', price: 26000, capacity: 50, image: '/images/banqueteClasico50Imag1.png', layout: 'Traditional' },
        { id: 3, name: 'Banquete Premium', price: 73500, capacity: 150, image: '/images/banquetePremiumImag1.jpeg', layout: 'Editorial' },
    ]);

    const [editingPackage, setEditingPackage] = useState(null);

    const handleUpdatePackage = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updated = {
            ...editingPackage,
            name: formData.get('name'),
            price: formData.get('price'),
            capacity: formData.get('capacity'),
        };
        setPackages(packages.map(p => p.id === updated.id ? updated : p));
        setEditingPackage(null);
    };

    const PackagesView = () => (
        <div className="space-y-16 animate-in fade-in slide-in-from-right-5 duration-700">
            <div className="flex justify-between items-end mb-10 border-b border-black pb-10">
                <h2 className="text-5xl font-serif uppercase tracking-tight">Catálogo de <span className="italic font-light">Paquetes</span></h2>
                <button className="bg-black text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold flex items-center gap-4 hover:bg-black/90 transition-all">
                    <Plus size={16} /> Crear Paquete
                </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="flex bg-white border border-black/5 hover:shadow-2xl transition-all duration-500 overflow-hidden h-64 group">
                        <div className="w-1/3 overflow-hidden">
                            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
                        </div>
                        <div className="flex-1 p-8 flex flex-col justify-between">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.4em] text-black/40 font-bold block mb-2">ID: #00{pkg.id}</span>
                                <h3 className="text-2xl font-serif uppercase tracking-tighter mb-4">{pkg.name}</h3>
                                <div className="flex gap-10">
                                    <div>
                                        <p className="text-[8px] uppercase tracking-widest text-black/30 font-bold mb-1">Inversión</p>
                                        <p className="text-xl font-light">${Number(pkg.price).toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-[8px] uppercase tracking-widest text-black/30 font-bold mb-1">Aforo Max</p>
                                        <p className="text-xl font-light">{pkg.capacity} Pax</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start gap-6 border-t border-black/5 pt-6">
                                <button onClick={() => setEditingPackage(pkg)} className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:opacity-50 transition-opacity">
                                    <Edit3 size={14} /> Editar Contenido
                                </button>
                                <button className="text-[10px] uppercase tracking-widest font-bold text-red-900/40 hover:text-red-600 flex items-center gap-2 transition-colors">
                                    <Trash2 size={14} /> Archivar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Editor Modal */}
            <AnimatePresence>
                {editingPackage && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3000] bg-black/95 flex items-center justify-center p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white max-w-2xl w-full p-20 relative"
                        >
                            <button onClick={() => setEditingPackage(null)} className="absolute top-10 right-10 opacity-40 hover:opacity-100 transition-opacity"><X size={30} /></button>

                            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 block mb-6">Editor de Catálogo</span>
                            <h2 className="text-5xl font-serif uppercase tracking-tight mb-16">Paquete <span className="italic font-light">{editingPackage.name}</span></h2>

                            <form onSubmit={handleUpdatePackage} className="space-y-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/60">Nombre del Paquete</label>
                                    <input name="name" defaultValue={editingPackage.name} className="w-full border-b border-black/10 py-4 px-2 focus:border-black outline-none font-serif text-2xl transition-all" />
                                </div>
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-black/60">Precio ($)</label>
                                        <input name="price" type="number" defaultValue={editingPackage.price} className="w-full border-b border-black/10 py-4 px-2 focus:border-black outline-none text-xl font-light transition-all" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-black/60">Capacidad (Pax)</label>
                                        <input name="capacity" type="number" defaultValue={editingPackage.capacity} className="w-full border-b border-black/10 py-4 px-2 focus:border-black outline-none text-xl font-light transition-all" />
                                    </div>
                                </div>
                                <div className="pt-10">
                                    <button type="submit" className="w-full bg-black text-white py-6 text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-black/90 shadow-2xl transition-all">
                                        Guardar Cambios Editoriales
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    // Menus State
    const [menus, setMenus] = useState({
        cremas: ['Crema de poro y papa con chipotle', 'Crema de champiñón', 'Crema a los tres quesos'],
        pastas: ['Spaghetti boloñesa', 'Fetuccine Alfredo', 'Pasta tres quesos'],
        ensaladas: ['Ensalada fresca', 'Ensalada silvestre', 'Ensalada italiana'],
        fuertes: ['Suprema en salsa reina', 'Lomo en vino tinto', 'Pierna en salsa de ciruela'],
        guarniciones: ['Puré de papa al parmesano', 'Risotto poblano', 'Papas cambray'],
    });

    const [editingMenuCategory, setEditingMenuCategory] = useState(null);
    const [newItemName, setNewItemName] = useState('');

    const handleAddItem = (category) => {
        if (!newItemName) return;
        setMenus({
            ...menus,
            [category]: [...menus[category], newItemName]
        });
        setNewItemName('');
    };

    const handleRemoveItem = (category, index) => {
        const updatedCategory = menus[category].filter((_, i) => i !== index);
        setMenus({
            ...menus,
            [category]: updatedCategory
        });
    };

    const MenusView = () => (
        <div className="space-y-16 animate-in fade-in slide-in-from-right-5 duration-700">
            <div className="flex justify-between items-end mb-10 border-b border-black pb-10">
                <h2 className="text-5xl font-serif uppercase tracking-tight">Gestión de <span className="italic font-light">Gastronomía</span></h2>
                <div className="flex gap-6">
                    <button className="text-[10px] uppercase tracking-widest font-bold px-8 py-4 border border-black/10 hover:border-black transition-all">
                        Imprimir Menús
                    </button>
                    <button className="bg-black text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold flex items-center gap-4 hover:bg-black/90 transition-all">
                        <Plus size={16} /> Nueva Categoría
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Object.keys(menus).map((cat) => (
                    <div key={cat} className="p-10 bg-white border border-black/5 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        {/* Decorative Background Icon */}
                        <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <Utensils size={120} />
                        </div>

                        <div className="flex justify-between items-start mb-10 relative z-10">
                            <div>
                                <span className="text-[8px] uppercase tracking-[0.5em] font-black text-black/20 block mb-1">Sección</span>
                                <h3 className="text-xl font-serif uppercase tracking-widest font-bold text-black italic">{cat}</h3>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => setEditingMenuCategory(cat)} className="p-2 border border-black/5 hover:bg-black hover:text-white transition-all"><Edit3 size={12} /></button>
                            </div>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            {menus[cat].slice(0, 4).map((item, i) => (
                                <li key={i} className="text-[11px] uppercase tracking-[0.1em] font-medium border-b border-black/5 pb-4 flex justify-between items-center group/item hover:border-black transition-colors">
                                    <span className="opacity-60 group-hover/item:opacity-100 transition-opacity">{item}</span>
                                    <button
                                        onClick={() => handleRemoveItem(cat, i)}
                                        className="opacity-0 group-hover/item:opacity-100 text-red-900/40 hover:text-red-600 transition-all"
                                    >
                                        <X size={12} />
                                    </button>
                                </li>
                            ))}
                            {menus[cat].length > 4 && (
                                <li className="text-[9px] uppercase tracking-widest font-bold text-black/30 italic pt-2">
                                    + {menus[cat].length - 4} platillos más...
                                </li>
                            )}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-black/5 relative z-10 flex gap-4">
                            <input
                                placeholder="Añadir platillo..."
                                className="flex-1 bg-transparent border-none outline-none text-[10px] uppercase tracking-widest font-bold placeholder:text-black/10 focus:placeholder:text-black/30 transition-all"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleAddItem(cat);
                                        e.target.value = '';
                                    }
                                }}
                                onChange={(e) => setNewItemName(e.target.value)}
                            />
                            <button className="text-black/20 hover:text-black transition-colors">
                                <Plus size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Editor Modal for Menu Categories */}
            <AnimatePresence>
                {editingMenuCategory && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3000] bg-black/95 flex items-center justify-center p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white max-w-2xl w-full p-20 relative max-h-[85vh] overflow-y-auto"
                        >
                            <button onClick={() => setEditingMenuCategory(null)} className="absolute top-10 right-10 text-black/20 hover:text-black transition-all"><X size={30} /></button>

                            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 block mb-6">Editor de Gastronomía</span>
                            <h2 className="text-5xl font-serif uppercase tracking-tight mb-16 italic">Sección <span className="not-italic font-black">{editingMenuCategory}</span></h2>

                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/60 block">Platillos en esta categoría</label>
                                    <div className="space-y-4">
                                        {menus[editingMenuCategory].map((item, i) => (
                                            <div key={i} className="group relative flex items-center border border-black/5 p-6 hover:border-black transition-all bg-gray-50/30">
                                                <span className="text-xl font-serif text-black/10 mr-8">{i < 9 ? `0${i + 1}` : i + 1}</span>
                                                <input
                                                    value={item}
                                                    className="bg-transparent border-none outline-none flex-1 text-sm font-light tracking-tight"
                                                    onChange={(e) => {
                                                        const newArr = [...menus[editingMenuCategory]];
                                                        newArr[i] = e.target.value;
                                                        setMenus({ ...menus, [editingMenuCategory]: newArr });
                                                    }}
                                                />
                                                <button
                                                    onClick={() => handleRemoveItem(editingMenuCategory, i)}
                                                    className="p-3 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-black/10">
                                    <div className="flex gap-4">
                                        <input
                                            placeholder="Nombre del nuevo platillo..."
                                            className="flex-1 border-b border-black/10 py-4 px-2 focus:border-black outline-none font-serif text-2xl transition-all italic"
                                            value={newItemName}
                                            onChange={(e) => setNewItemName(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleAddItem(editingMenuCategory)}
                                        />
                                        <button
                                            onClick={() => handleAddItem(editingMenuCategory)}
                                            className="px-10 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black/90 transition-all"
                                        >
                                            Añadir
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setEditingMenuCategory(null)}
                                    className="w-full bg-black text-white py-8 text-[11px] uppercase tracking-[0.5em] font-bold shadow-2xl hover:bg-black/90 transition-all mt-10"
                                >
                                    Guardar Cambios Gastronómicos
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    const ReservationsView = () => (
        <div className="space-y-16 animate-in fade-in slide-in-from-right-5 duration-700">
            <div className="flex justify-between items-end mb-10 border-b border-black pb-10">
                <h2 className="text-5xl font-serif uppercase tracking-tight">Control de <span className="italic font-light">Reservas</span></h2>
                <div className="flex gap-4">
                    {['Todas', 'Confirmadas', 'Pendientes', 'Canceladas'].map(f => (
                        <button key={f} className="text-[9px] uppercase tracking-widest font-bold px-6 py-2 border border-black/5 hover:bg-black hover:text-white transition-all">
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-black/10">
                        <th className="py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">ID</th>
                        <th className="py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Cliente / Evento</th>
                        <th className="py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Fecha</th>
                        <th className="py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Paquete</th>
                        <th className="py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Estado</th>
                        <th className="py-8 text-right text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Inversión</th>
                        <th className="py-8 text-right text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Ajustes</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                    {reservas.map((res) => (
                        <tr key={res.id} className="group hover:bg-primary-50 transition-colors">
                            <td className="py-10 text-xl font-serif opacity-30">{res.id}</td>
                            <td className="py-10">
                                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-black mb-1">{res.cliente}</p>
                                <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold">{res.invitados} Invitados</span>
                            </td>
                            <td className="py-10 text-sm font-light text-black/60">{res.fecha}</td>
                            <td className="py-10 text-[10px] uppercase tracking-widest font-bold text-black/80">{res.paquete}</td>
                            <td className="py-10">
                                <span className={`text-[8px] uppercase tracking-widest font-black px-4 py-1.5 ${res.estado === 'Confirmada' ? 'bg-black text-white' :
                                    res.estado === 'Pendiente' ? 'bg-primary-100 text-black/40' :
                                        'border border-black/10 text-black/20'
                                    }`}>
                                    {res.estado}
                                </span>
                            </td>
                            <td className="py-10 text-right text-xl font-medium tracking-tighter">{res.total}</td>
                            <td className="py-10 text-right">
                                <button className="p-3 border border-black/5 hover:border-black transition-all">
                                    <Filter size={14} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const GalleryView = () => (
        <div className="space-y-16 animate-in fade-in slide-in-from-right-5 duration-700">
            <div className="flex justify-between items-end mb-10 border-b border-black pb-10">
                <h2 className="text-5xl font-serif uppercase tracking-tight">Gestión de <span className="italic font-light">Galería</span></h2>
                <button className="bg-black text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold flex items-center gap-4 hover:bg-black/90 transition-all">
                    <Plus size={16} /> Subir Imagen
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                    { id: 1, title: 'Banquete Real', url: '/images/Foto 1.jpg' },
                    { id: 180, title: 'Celebración Editorial', url: '/images/Foto-180.jpg' },
                    { id: 23, title: 'Sinfonía Visual', url: '/images/Foto 23.jpg' },
                    // More images...
                ].map((img, i) => (
                    <div key={i} className="group relative aspect-square bg-black overflow-hidden border border-black/5">
                        <img src={img.url} alt={img.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-between">
                            <div className="flex justify-end gap-4">
                                <button className="p-3 bg-white text-black hover:bg-white/90 transition-colors"><Edit3 size={14} /></button>
                                <button className="p-3 bg-white text-black hover:bg-white/90 transition-colors"><Trash2 size={14} /></button>
                            </div>
                            <div>
                                <h4 className="text-white text-sm font-serif italic">{img.title}</h4>
                                <p className="text-white/40 text-[9px] uppercase tracking-widest mt-2">{img.url}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Empty state for more */}
                <div className="aspect-square border border-black/5 border-dashed flex flex-col items-center justify-center p-10 text-center">
                    <ImageIcon size={30} className="text-black/10 mb-4" />
                    <span className="text-[10px] uppercase tracking-widest text-black/20 font-bold italic">Cargar más archivos editorial...</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-[#fcfcfc] min-h-screen flex">
            <Sidebar />

            <main className="flex-1 ml-80 p-20">
                {/* Topbar */}
                <header className="flex justify-between items-end mb-32">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 block mb-6 px-1 border-l-2 border-black">LUXURY OPS</span>
                        <h1 className="text-6xl font-serif uppercase tracking-tight">Administración <span className="italic font-light">Central</span></h1>
                    </div>

                    <div className="flex gap-6">
                        <button className="w-16 h-16 border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                            <Filter size={20} />
                        </button>
                        <button className="bg-black text-white px-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black/90 shadow-2xl transition-all">
                            <Plus size={18} /> Nueva Acción
                        </button>
                    </div>
                </header>

                <div className="max-w-[1400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'dashboard' && <DashboardView key="dash" />}
                        {activeTab === 'reservations' && <ReservationsView key="res" />}
                        {activeTab === 'gallery' && <GalleryView key="gal" />}
                        {activeTab === 'packages' && <PackagesView key="pkg" />}
                        {activeTab === 'menus' && <MenusView key="menu" />}
                        {activeTab !== 'dashboard' && activeTab !== 'reservations' && activeTab !== 'gallery' && activeTab !== 'packages' && activeTab !== 'menus' && (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-40 border border-black/5 border-dashed"
                            >
                                <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-black/20 italic">Módulo {activeTab} en desarrollo editorial...</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
