import React, { useEffect } from 'react';
import TablaPosicionesSection from '../home/components/TablaPosicionesSection';
import Footer from '../../components/layout/Footer';

const Tabla = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white pt-34">
            <div className="relative py-0 ">
                <div className="max-w-7xl lg:px-10 px-5 sm:px-6 ">
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
                        Clasificación <span className="text-amber-300">General</span>
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl uppercase tracking-widest text-sm font-bold">
                        Temporada Regular 2026 • Torneo Regional Amateur
                    </p>
                </div>
            </div>

            <div className="pb-20">
                <TablaPosicionesSection />
            </div>

            <Footer />
        </div>
    );
};
export default Tabla;