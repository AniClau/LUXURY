import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-32 pb-16 px-10 border-t border-white/10">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    <div>
                        <h3 className="font-serif text-3xl mb-10 uppercase tracking-widest italic font-light">Luxury</h3>
                        <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
                            Redefiniendo el arte de celebrar con la exclusividad y el refinamiento
                            que solo una revista de lujo puede capturar.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-white/60">Explorar</h4>
                        <ul className="space-y-4 text-xs tracking-widest font-medium uppercase list-none p-0 opacity-80">
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Bodas</li>
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Banquetes</li>
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Menús</li>
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Disponibilidad</li>
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Ubicación</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-white/60">Servicios</h4>
                        <ul className="space-y-4 text-xs tracking-widest font-medium uppercase list-none p-0 opacity-80">
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Graduaciones</li>
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Corporativos</li>
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">XV Años</li>
                            <li className="hover:opacity-50 cursor-pointer transition-opacity">Aniversarios</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-white/60">Contacto</h4>
                        <ul className="space-y-6 text-sm font-light list-none p-0">
                            <li className="flex items-center gap-4 text-white/60"><MapPin size={18} className="text-white" /> AV. Principal 123, Luxury City</li>
                            <li className="flex items-center gap-4 text-white/60"><Phone size={18} className="text-white" /> +52 234 567 8900</li>
                            <li className="flex items-center gap-4 text-white/60"><Mail size={18} className="text-white" /> info@luxury-social.com</li>
                        </ul>
                        <div className="flex gap-10 mt-12 pt-10 border-t border-white/10">
                            <Facebook size={20} className="hover:opacity-50 cursor-pointer transition-opacity" />
                            <Instagram size={20} className="hover:opacity-50 cursor-pointer transition-opacity" />
                            <Twitter size={20} className="hover:opacity-50 cursor-pointer transition-opacity" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-[9px] uppercase tracking-[0.5em] text-white/30 font-bold">
                    <span>© 2024 Luxury Salón Social. All Rights Reserved.</span>
                    <div className="flex gap-12 mt-6 md:mt-0">
                        <span>Legal</span>
                        <span>Privacy</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;