import React, { useContext } from 'react';
import fixtureResultado from '../../detalleResultado/components/fixtureResultado';
import { Tour } from '@mui/icons-material';
import TournamentContext from '../../../context/TournamentContext';
import ClubesContext from '../../../context/ClubesContext';


const ProximosResultSection = () => {
    const {fixture} = useContext(TournamentContext)
    const {clubes} = useContext(ClubesContext)
    
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
                    {fixture.filter((item) => item.estado === "Programado").map((item) => (
                      <div key={item} className="w-full rounded-2xl p-1">
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10  hover:bg-white/10 transition-all duration-300 shadow-xl rounded-md p-6 text-white relative overflow-hidden group hover:border-amber-300/30 ">
                          <p className="text-center text-xs text-amber-300 mb-4 tracking-[0.2em] uppercase font-bold numberFonts">
                            Regional Amateur
                          </p>
        
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex flex-col items-center gap-2">
                              <img
                                src={item.local.logo.url}
                                className="w-14 h-14 object-contain"
                                alt="Local"
                              />
                              <span className="text-2xl font-bold uppercase tracking-tighter">
                               { clubes?.find((club) => club._id === item.local._id)?.shortname}
                              </span>
                            </div>
        
                            <div className="text-center">
                              <p className="text-2xl font-black numberFonts text-white">
                                VS
                              </p>
                              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
                                Programado
                              </p>
                            </div>
        
                            <div className="flex flex-col items-center gap-2">
                              <img
                                src={item.visitante.logo.url}
                                className="w-14 h-14 object-contain"
                                alt="Visitante"
                              />
                              <span className="text-2xl font-bold uppercase tracking-tighter">
                               { clubes?.find((club) => club._id === item.visitante._id)?.shortname}
                              </span>
                            </div>
                          </div>
        
                          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col items-center gap-1">
                            <span className="text-sm font-bold numberFonts text-amber-300">
                              {item.fecha}
                            </span>
                            <span className="text-xs text-gray-500">
                              {item.hora} HS - Estadio Central
                            </span>
                            <button className="mt-4 w-full py-2 bg-white/5 hover:bg-amber-300 hover:text-black transition-colors rounded-lg text-xs font-bold uppercase tracking-widest">
                              Ver Previa
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    );
};

export default ProximosResultSection;