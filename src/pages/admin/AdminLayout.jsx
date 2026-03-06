import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaHome, FaNewspaper, FaShieldAlt, FaCalendarAlt, FaTrophy, FaChartBar, FaBars, FaTimes } from 'react-icons/fa';

const AdminLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Inicio', icon: <FaHome />, path: '/' },
        { name: 'Noticias', icon: <FaNewspaper />, path: 'noticias' },
        { name: 'Resultados', icon: <FaTrophy />, path: 'resultadosAdmin' },
        { name: 'Clubes', icon: <FaShieldAlt />, path: 'clubesAdmin' },
        { name: 'Fixture', icon: <FaCalendarAlt />, path: 'fixtureAdmin' },
        { name: 'Jugadores', icon: <FaChartBar />, path: 'jugadoresAdmin' },
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#111]">
            {/* MOBILE HEADER */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-black border-b border-white/10 sticky top-0 z-50">
                <h2 className="text-xl font-black uppercase tracking-tighter text-amber-300">
                    Admin<span className="text-white">Panel</span> 
                </h2>
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-amber-300 p-2"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* SIDEBAR */}
            <aside className={`
                fixed lg:sticky top-0 left-0 z-40 w-64 h-screen bg-black text-white p-5 border-r border-white/10 transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="mb-10 pt-10 lg:pt-25 hidden lg:block">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-amber-300">
                        Admin<span className="text-white">Panel</span>
                    </h2>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Gestión de Torneo</p>
                </div>
                
                <nav className="space-y-2 mt-16 lg:mt-0">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 font-bold uppercase text-xs tracking-widest
                                ${item.path === '/' 
                                    ? location.pathname === '/admin' || location.pathname === '/admin/'
                                    : location.pathname.includes(item.path) 
                                    ? 'bg-amber-300 text-black' 
                                    : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 p-4 lg:p-8 pt-6 lg:pt-30 text-white w-full overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;