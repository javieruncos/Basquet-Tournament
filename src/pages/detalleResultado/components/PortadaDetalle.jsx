import portada from "../../../assets/images/stadium.png";

const PortadaDetalle = () => {
  return (
    <div className="min-h-60 md:h-90 lg:h-120 w-full rounded-md border-gray-400/30  bg-[#171717] relative flex flex-col">
      <img
        src="https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2016/04/08/14600951269464.jpg"
        className="absolute inset-0 w-full h-full object-cover overflow-hidden rounded-md"
      />
      <div className="relative z-10 bg-black/85 min-h-60 h-full overflow-hidden rounded-md flex flex-col">
        <div className="py-5 px-4 md:px-14">
          <div className="flex gap-4 items-center justify-center pt-3">
            <div className="flex gap-3 md:gap-5 border-b border-amber-400 pb-3">
              <span className="px-3 py-1 bg-yellow-300 rounded-md text-black text-sm md:text-base">
                Fecha 5{" "}
              </span>
              <span className="font-bold text-md md:text-2xl numberFonts text-white">
                31/12/2022
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center grow px-2 md:px-4 pb-6 md:pb-0 gap-5 md:gap-10 ">
          <div className="flex flex-col items-center gap-2 md:gap-4  text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
              alt="Local"
              className="h-16 w-16 md:h-32 md:w-32 lg:h-52 lg:w-52 object-contain"
            />
            <h2 className="text-sm md:text-2xl lg:text-4xl font-bold text-white uppercase">
              {"atle. tucuman".split(" ").slice(0, 2).join(" ")}
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 md:gap-4 text-4xl md:text-7xl lg:text-9xl font-bold text-white numberFonts">
              <span>88</span>
              <span className="text-amber-300">-</span>
              <span>74</span>
            </div>
            <span className="text-amber-300 mt-2 uppercase tracking-widest md:tracking-[0.5em] text-xs md:text-base numberFonts text-center">
              Finalizado
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4 text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
              alt="Visitante"
              className="h-16 w-16 md:h-32 md:w-32 lg:h-52 lg:w-52 object-contain"
            />
            <h2 className="text-sm md:text-2xl lg:text-4xl font-bold text-white uppercase ">
              {"Est. Experimental".split(" ").slice(0, 2).join(" ")}
            </h2>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default PortadaDetalle;
