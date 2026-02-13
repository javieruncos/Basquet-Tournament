import portada from "../../../assets/images/portadaClub.png"
import { FaCalendarAlt } from "react-icons/fa";


const PortadaClub = () => {
    return (
       <div className=" h-130 w-full gap-5 bg-dark-gradient rounded-md relative border border-white/10 overflow-hidden">
        <img
          src={portada}
          className="object-cover w-full h-full radial-gradient(circle at center, rgba(250,204,21,0.15) 0%, transparent 70%);"
          alt=""
        />
        <div
          className="h-full w-full bg-black/70  absolute top-0 left-0 
        grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="h-full w-full  pt-10 px-10 z-10">
            <span className="text-amber-300">
              Club oficial - Temporada 2026 - Torneo Regional Amateur
            </span>
            <div className="py-3">
              <h1 className="text-7xl">Estacion Experimental</h1>
              <p className="text-amber-300 text-2xl">Posicion actual  #3 en la tabla</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
               <div className="h-40 w-full  numberFonts rounded-md backdrop-blur bg-white/5 border border-white/10">
                <div className="p-5 text-amber-300">
                  <span>Victorias</span>
                </div>
                <div className="text-center">
                  <span className=" text-6xl">3</span>
                </div>
              </div>
              <div className="h-40 w-full  numberFonts rounded-md backdrop-blur bg-white/5 border border-white/10">
                <div className="p-5 text-amber-300">
                  <span>Derrotas</span>
                </div>
                <div className="text-center">
                  <span className=" text-6xl">3</span>
                </div>
              </div>
              <div className="h-40 w-full  numberFonts rounded-md backdrop-blur bg-white/5 border border-white/10">
                <div className="p-5 text-amber-300">
                  <span>Promedio</span>
                </div>
                <div className="text-center">
                  <span className=" text-6xl">%3</span>
                </div>
              </div>
            </div>
            <div className="h-20 w-full backdrop-blur bg-white/5 border border-white/10 mt-5 rounded-md flex items-center gap-5 px-5">
             <FaCalendarAlt className="text-3xl text-amber-300"></FaCalendarAlt>  
             <p className="text-xl">Proximo encuentro vs Est. Experimental</p>
             <span className="text-xl text-amber-300">12/12/2026</span>
            </div>
          </div>
          <div className="h-full w-full  overflow-hidden relative flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
              alt="club"
              className="h-100  object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default PortadaClub;