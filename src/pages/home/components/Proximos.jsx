import React, { useContext } from 'react';
import TournamentContext from '../../../context/TournamentContext';
import ClubesContext from '../../../context/ClubesContext';
import CardProximos from '../../../components/cards/CardProximos';
import { motion } from 'framer-motion';

const Proximos = () => {
    const { fixture } = useContext(TournamentContext);
    const { clubes } = useContext(ClubesContext);

    const proximosPartidos = fixture?.filter(partido => partido.estado === "Programado") || [];

    return (
        <section className="py-16 px-5 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
                        Próximos <span className="text-amber-300">Encuentros</span>
                    </h2>
                    <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {proximosPartidos.length > 0 ? (
                        proximosPartidos.slice(0, 6).map((partido) => (
                            <CardProximos key={partido._id} partido={partido} clubes={clubes} />
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No hay partidos programados próximamente.</p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Proximos;