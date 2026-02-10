import { FaCalendarAlt } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";

const fixtureResultado = () => {
  return (
    <div className="h-auto w-full grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
      <div className="bg-[#171717] h-full w-full col-span-2 md:col-span-3 rounded-md px-5 py-5">
        <div className="flex gap-4 h-15  w-full items-center">
          <FaCalendarAlt className="text-2xl text-yellow-400 mb-1" />
          <h2 className="text-3xl">Proximos Encuentros</h2>
        </div>
        <div className="flex flex-col gap-4 h-auto w-full ">
          <div className="h-20 w-full bg-[#222222] rounded-md flex justify-between items-center overflow-hidden">
            <div className="h-full w-full  flex items-center px-3 gap-5 font-bold text-xl uppercase">
              <span className="numberFonts text-gray-400">03 ABR</span>
              <span>Est. Experimental</span>
              <span> vs </span>
              <span> atle. tucuman</span>
            </div>
            <div className="w-70 text-gray-400  numberFonts font-bold flex items-center gap-5">
              <span>21:00</span>
              <button className="px-3 py-2 bg-amber-300 rounded-md text-black">
                ver detalle
              </button>
            </div>
          </div>
          <div className="h-20 w-full bg-[#222222] rounded-md flex justify-between items-center overflow-hidden">
            <div className="h-full w-full  flex items-center px-3 gap-5 font-bold text-xl uppercase">
              <span className="numberFonts text-gray-400">03 ABR</span>
              <span>Est. Experimental</span>
              <span> vs </span>
              <span> atle. tucuman</span>
            </div>
            <div className="w-70 text-gray-400  numberFonts font-bold flex items-center gap-5">
              <span>21:00</span>
              <button className="px-3 py-2 bg-amber-300 rounded-md text-black">
                ver detalle
              </button>
            </div>
          </div>
          <div className="h-20 w-full bg-[#222222] rounded-md flex justify-between items-center overflow-hidden">
            <div className="h-full w-full  flex items-center px-3 gap-5 font-bold text-xl uppercase">
              <span className="numberFonts text-gray-400">03 ABR</span>
              <span>Est. Experimental</span>
              <span> vs </span>
              <span> atle. tucuman</span>
            </div>
            <div className="w-70 text-gray-400  numberFonts font-bold flex items-center gap-5">
              <span>21:00</span>
              <button className="px-3 py-2 bg-amber-300 rounded-md text-black">
                ver detalle
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] h-full w-full rounded-md py-5 px-2">
        <div className="flex gap-4 h-15  w-full items-center px-5">
          <FaBasketballBall className="text-2xl text-yellow-400 mb-1" />
          <h2 className="text-3xl">Maximo Anotador</h2>
        </div>
        <div className="h-68 w-full  flex flex-col justify-center items-center numberFonts font-bold gap-3">
          <div className="h-30 w-30 bg-[#202020] rounded-full flex justify-center items-center overflow-hidden">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/021/113/130/small/basketball-ball-3d-render-png.png" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <span>Carlos Gomez</span>
          </div>
          <div className="h-20 w-full grid grid-cols-2 md:grid-col-2 gap-5 mt-5 px-2 ">
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
