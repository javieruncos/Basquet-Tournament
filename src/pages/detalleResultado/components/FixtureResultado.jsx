import { FaCalendarAlt } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";

const fixtureResultado = () => {
  return (
    <div className="h-auto w-full grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
      <div className="bg-[#171717] bg-dark-gradient h-full w-full col-span-2 md:col-span-4 lg:col-span-3 rounded-md px-5 py-5">
        <div className="flex gap-4 h-15  w-full items-center">
          <FaCalendarAlt className="text-2xl text-yellow-400 mb-1" />
          <h2 className="text-2xl md:text-3xl">Proximos Encuentros</h2>
        </div>
        <div className="flex flex-col gap-4 h-auto w-full ">
          <div className="h-auto  md:h-20 w-full bg-[#222222] rounded-md flex flex-col md:flex-row justify-between items-center overflow-hidden py-10 md:py-0">
            <div className="h-full w-full flex flex-col md:flex-row items-center px-3 gap-5 md:gap-5 font-bold text-sm lg:text-xl uppercase md:lowercase lg:uppercase md:text-lg">
              <span className="numberFonts text-gray-400">03 ABR</span>
              <div className="flex gap-2 text-center items-center">
                <span>Est. Experimental</span>
                <span className="text-amber-300"> vs </span>
                <span> atle. tucuman</span>
              </div>
            </div>
            <div className="w-full md:w-78  text-gray-400 numberFonts font-bold flex justify-center md:justify-start flex-col md:flex-row items-center gap-5 mt-8 md:mt-0 text-sm">
              <span>21:00</span>
              <button className="px-3 py-2  bg-amber-300 rounded-md text-black text-xs md:text-sm font-bold  md:lowercase">
                ver detalle
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-gradient h-full w-full rounded-md py-5 px-2 md:col-span-4 lg:col-span-1">
        <div className="flex gap-4 h-15  w-full items-center px-5 justify-center md:justify-center lg:justify-start lg:mb-0 md:mb-5 ">
          <FaBasketballBall className="text-2xl text-yellow-400 mb-1" />
          <h2 className="text-2xl md:text-3xl">Maximo Anotador</h2>
        </div>
        <div className="h-68 w-full  flex flex-col justify-center items-center numberFonts font-bold gap-3">
          <div className="h-30 w-30 bg-[#202020] rounded-full flex justify-center items-center overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/113/130/small/basketball-ball-3d-render-png.png"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <span>Carlos Gomez</span>
          </div>
          <div className="h-20 w-full grid grid-cols-2 gap-5 mt-5 px-2 ">
            <div className="flex flex-col items-center justify-center w-full bg-[#202020] rounded-md">
              <p>Puntos</p>
              <span className="text-amber-300">33</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-[#202020] rounded-md">
              <p>Asistencias</p>
              <span className="text-amber-300">33</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fixtureResultado;
