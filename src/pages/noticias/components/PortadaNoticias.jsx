import React from "react";

const PortadaNoticias = () => {
  return (
    <div className="mt-10 h-125 rounded-xl relative overflow-hidden bg-[#171717]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/31169292/pexels-photo-31169292.jpeg"
          alt="Portada Noticias"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Decorative Diagonal Elements (Home Style) */}
      <div className="absolute top-0 -left-20 h-full w-40 bg-amber-400/10 skew-x-45 z-10 border-r border-amber-400/20"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 max-w-4xl gap-6">
        <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm animate-pulse">
          Actualidad & Novedades
        </span>
        <h1 className="text-5xl md:text-8xl font-black uppercase italic leading-none tracking-tighter text-white">
          Noticias del <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-500">Torneo</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-lg max-w-xl leading-relaxed border-l-4 border-amber-400 pl-4">
          Mantente al día con los resultados, crónicas de partidos y todo lo que sucede en el Torneo Regional Amateur de Tucumán.
        </p>
        <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-amber-400 text-black font-black uppercase tracking-widest text-xs md:text-sm w-fit overflow-hidden transition-transform hover:scale-105 skew-x-[-10deg]">
          <span className="relative z-10 skew-x-10 inline-block">Suscribirse</span>
          <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
        </button>
      </div>
    </div>
  );
};

export default PortadaNoticias;
