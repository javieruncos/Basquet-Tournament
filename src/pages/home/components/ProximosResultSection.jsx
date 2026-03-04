import React, { useContext } from 'react';
import fixtureResultado from '../../detalleResultado/components/fixtureResultado';
import { Tour } from '@mui/icons-material';
import TournamentContext from '../../../context/TournamentContext';
import ClubesContext from '../../../context/ClubesContext';
import CardProximos from '../../../components/cards/CardProximos';


const ProximosResultSection = () => {
    const {fixture} = useContext(TournamentContext)
    const {clubes} = useContext(ClubesContext)

    const partidosFilter = fixture.filter((item)=> item.estado === "Programado")
    
    return (
         <section className="pt-10 px-5 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-12 flex justify-between items-center">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                        Próximos <span className="text-amber-300">Partidos</span>
                      </h2>
                      <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
                    </div>
                    <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
                      <span className="hidden md:inline">Ver Fixture</span>
                    </button>
                  </div>
        
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {partidosFilter.map((item) => (
                     <CardProximos key={item._id}  partido={item} clubes={clubes}/>
                    ))}
                  </div>
                </div>
              </section>
    );
};

export default ProximosResultSection;