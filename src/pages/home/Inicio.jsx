import PortadaInicio from "./components/PortadaInicio";
import Footer from "../../components/layout/Footer";
import { FaPlus } from "react-icons/fa";
import ResultadosSection from "./components/ResultadosSection";
import NoticiasSection from "./components/NoticiasSection";
import ProximosResultSection from "./components/ProximosResultSection";
import ClubesSection from "./components/ClubesSection";
import LideresSection from "./components/LideresSection";
import TablaPosicionesSection from "./components/TablaPosicionesSection";
import TournamentContext from "../../context/TournamentContext";
import { useContext } from "react";
import ClubesContext from "../../context/ClubesContext";

export const Inicio = () => {
 
  return (
    <div className=" text-white mt-0">
      <PortadaInicio />
      <ResultadosSection />
      <NoticiasSection />
      <ProximosResultSection />
      <ClubesSection />
      <LideresSection />
      <TablaPosicionesSection />
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
            <span className="text-amber-300">Únete</span> a la Acción
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            No te quedes afuera. Registra tu equipo para la próxima temporada o
            asegura tus entradas para ver a las futuras estrellas del básquet.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-amber-400 text-black font-bold uppercase tracking-widest py-3 px-8 rounded-lg hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20 hover:scale-105">
              Registrar Equipo
            </button>
            <button className="border-2 border-amber-400 text-white font-bold uppercase tracking-widest py-3 px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105">
              Comprar Entradas
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 border-y border-white/5 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-[0.3em] mb-8">
            Main Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {["SPALDING", "GATORADE", "NIKE", "TISSOT"].map((brand) => (
              <h3
                key={brand}
                className="text-3xl md:text-5xl font-black text-white tracking-tighter cursor-pointer hover:text-amber-300 transition-colors"
              >
                {brand}
              </h3>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Inicio;
