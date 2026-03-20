import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase">
          <span className="text-amber-300">Conocé</span> la Acción
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Conocé más sobre nuestro torneo y su organización. Información,
          equipos y toda la actualidad en un solo lugar.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to={"/noticias"}
            className="bg-amber-400 text-black font-bold uppercase tracking-widest py-3 px-8 rounded-lg hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20 hover:scale-105"
          >
            Conocer el Torneo
          </Link>
          <Link
            to="/fixture"
            className="border-2 border-amber-400 text-white font-bold uppercase tracking-widest py-3 px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105"
          >
            ver Fixture
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
