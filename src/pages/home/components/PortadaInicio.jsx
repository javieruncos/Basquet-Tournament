import Portada from "../../../assets/images/portadaInicio.png";

const PortadaInicio = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center bg-[#171717] overflow-hidden border-b border-white/10">
      <img src={Portada} alt="" className="h-full w-full object-cover" />
      <div className="h-full w-full absolute top-0 left-0 bg-black/70 flex justify-center items-center">
        <div className="relative z-10 text-center px-5 max-w-4xl numberFonts">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 uppercase tracking-widestr">
            {" "}
            Torneos Regional <span className="text-amber-300">Amateur</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Organiza, compite y sigue los resultados de tus ligas favoritas en
            un solo lugar con estadísticas en tiempo real.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-amber-300 text-black font-bold rounded-md hover:bg-amber-400 transition-all uppercase text-sm tracking-widest w-full md:w-auto">
              Ver Torneos
            </button>
            <button className="px-8 py-3 border border-white/20 text-white font-bold rounded-md hover:bg-white/10 transition-all uppercase text-sm tracking-widest w-full md:w-auto">
              Registrar Equipo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortadaInicio;
