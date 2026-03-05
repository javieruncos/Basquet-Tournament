import React from "react";


const SponsorCTA = () => {
  return (
    <section className="flex justify-center bg-[#0f0f0f] py-20 px-4">
      <div className="relative flex flex-col lg:flex-row max-w-7xl w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">

        <div className="w-full lg:w-2/5 h-64 md:h-96 lg:h-auto relative">
          <img
            src="https://imagenesyogonet.b-cdn.net/data/imagenes/2025/05/05/75171/1746467072-betsson-grand-sponsor-final-four-basketball-champions-league.jpg"
            alt="Sponsorship"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-amber-400/20 mix-blend-multiply"></div>
        </div>

       
        <div className="relative w-full lg:w-3/5 bg-[#1a1a1a] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-4xl font-black uppercase italic tracking-tighter text-white mb-4">
              Impulsa tu marca <span className="text-amber-400">con nosotros</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl lg:text-lg leading-relaxed mb-8">
              Únete a la red de sponsors del torneo más importante de la región. 
              Conecta tu empresa con la pasión de miles de aficionados, obtén visibilidad en cancha y transmisiones en vivo, 
              y apoya el desarrollo del básquet local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorCTA;