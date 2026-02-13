import { FaCalendarAlt } from "react-icons/fa";
import PortadaClub from "./components/PortadaClub";

const ClubDetalle = () => {
  return (
    <div className="pt-5 px-10">
      <PortadaClub></PortadaClub>
      <div className="mt-10 h-120 w-full grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          <h3 className="text-5xl">Resultados Recientes</h3>
          <div className="h-auto bg-dark-gradient mt-5  rounded-md  py-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-3 px-5 bg-[#222222]">
              <div className="h-10 w-full text-gray-400 flex items-center">
                <span>Fecha</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center ">
                <span>Rival</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center">
                <span>Puntos</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center ">
                <span>Resultado</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-3 px-5">
              <div className="h-10 w-full text-gray-400 flex items-center">
                <span>Fecha</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center ">
                <span>Rival</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center">
                <span>Puntos</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center ">
                <span>Resultado</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-3 px-3 border-b border-white/10">
              <div className="h-10 w-full text-gray-400 flex items-center">
                <span>Fecha</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center ">
                <span>Rival</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center">
                <span>Puntos</span>
              </div>
              <div className="h-10 w-full text-gray-400 flex items-center ">
                <span>Resultado</span>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetalle;
