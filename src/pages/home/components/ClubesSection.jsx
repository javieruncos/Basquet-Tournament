import React from 'react';

const ClubesSection = () => {
    return (
        <section className="py-20 px-5 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-12 flex justify-between items-center">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                        Nuestros <span className="text-amber-300">Clubes</span>
                      </h2>
                      <div className="w-24 h-1 bg-amber-300 mt-4 rounded"></div>
                    </div>
                    <button className="text-amber-300 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-amber-300 pb-1 whitespace-nowrap ml-4 flex items-center gap-2">
                      <span className="hidden md:inline">Ver Todos</span>
                      
                    </button>
                  </div>
        
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {[1, 2, 3, 4,5,6].map((club) => (
                      <div class=" w-full flex items-center justify-center bg-black">
                        <div class="relative w-full rounded-3xl bg-linear-to-b from-[#0b0b0b] to-black p-6 shadow-2xl overflow-hiddenb border border-white/3">
                          <div class="absolute top-5 right-5 grid grid-cols-2 gap-1 opacity-40">
                            <div class="w-3 h-3 bg-white/70"></div>
                            <div class="w-3 h-3 bg-white/70"></div>
                            <div class="w-3 h-3 bg-white/70"></div>
                            <div class="w-3 h-3 bg-white/70"></div>
                          </div>
        
                          <p class="text-xs tracking-[0.3em] text-amber-300 font-semibold">
                            REGIONAL AMATEUR
                          </p>
        
                          <h2 class="text-4xl font-extrabold italic text-white mt-1">
                            Estacion Experimental
                          </h2>
        
                          <div class="flex items-center gap-2 text-sm text-gray-400 mt-1">
                          <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                             TUCUMAN
                          </div>
        
                          <div class="relative flex items-center justify-center mt-10 mb-8">
                            <div class="absolute w-52 h-52 rounded-full bg-amber-400/30 blur-3xl"></div>
        
                            <div class="relative w-44 h-44 rounded-full bg-black  flex items-center justify-center">
                              <div class="absolute inset-0 rounded-full border  border-amber-300/30"></div>
                              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg" alt="escudo" className="w-full h-25" />
        
                              <span class="absolute bottom-4 text-[10px] tracking-widest text-white/60">
                                POC. #2
                              </span>
                            </div>
                          </div>
        
                          <div class="flex items-center justify-between gap-3">
                            <div class="flex-1 bg-amber-300 text-black text-xs font-bold rounded-full py-2 text-center shadow-lg">
                              PARTICIPANTE 2026
                            </div>
        
                            <button class="flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold rounded-full px-4 py-2 border border-white/10 cursor-pointer">
                              <span class="w-2 h-2 bg-amber-300 rounded-full"></span>
                              ver detalles
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

export default ClubesSection;