import React from "react";

const CardReultados = () => {
  return (
    // <div className="h-auto lg:h-75  w-full bg-dark-gradient rounded-md">
    //   <div className="p-4 flex gap-6 items-center justify-between lg:justify-start">
    //     <span className="bg-amber-300 px-2 py-1 rounded-md text-black">
    //       Finalizado
    //     </span>
    //     <p>Fecha 3 - 20/03/2026</p>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-4 px-4 pt-3">
    //     <div className="flex flex-col gap-3 items-center justify-center">
    //       <div className="bg-black/10 rounded-2xl h-30 lg:w-full w-70 py-20 lg:py-0 flex justify-center items-center flex-col  border border-red-500/20">
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
    //           alt="club"
    //           className="h-30 lg:h-20 w-full"
    //         />
    //       </div>
    //       <p className="truncate max-w-40.5">CAEE</p>
    //     </div>
    //     <div className=" h-30 flex justify-center items-center gap-3 font-bold px-10">
    //       <p className="text-5xl">50</p>
    //       <span className="text-4xl">-</span>
    //       <p className="text-5xl text-amber-300">100</p>
    //     </div>
    //    <div className="flex flex-col gap-3 items-center justify-center">
    //       <div className="bg-black/10 rounded-2xl h-30 lg:w-full w-70 py-20 lg:py-0 flex justify-center items-center flex-col  border border-green-500/20">
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Escudo_del_Club_Estaci%C3%B3n_Experimental_Tucum%C3%A1n.svg"
    //           alt="club"
    //           className="h-30 lg:h-20 w-full"
    //         />
    //       </div>
    //       <p>CATBB</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center py-10 lg:py-0">
    //     <button
    //       className="px-5 py-2 bg-amber-300 text-black rounded-md border
    //     border-amber-300/20 hover:bg-black hover:text-white transition duration-300 ease-in-out
    //     cursor-pointer"
    //     >
    //       Ver detalles
    //     </button>
    //   </div>
    // </div>
    <div class="w-full bg-[#171717] rounded-xl p-4 text-white shadow-lg">
      <div class="flex items-center gap-2 text-xs text-gray-400 mb-3">
        <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
       Fase Regular
      </div>

      <div class="flex items-center justify-between mb-4">
        <div class="flex flex-col items-center text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
            class="w-10 h-10 mb-1"
          />
          <span class="text-lg font-medium">CAEE</span>
        </div>

        <div class="text-center">
          <p class="text-xs text-gray-400">Finalizado</p>
          <p class="text-md font-bold">21/06/2026</p>
        </div>

        <div class="flex flex-col items-center text-center">
           <img
            src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
            class="w-10 h-10 mb-1"
          />
          <span class="text-lg font-medium">CAT</span>
        </div>
      </div>

      <div class="flex gap-2">
        <div class="flex-1 bg-[#323232] rounded-lg p-3 flex flex-col justify-between">
          <div class="text-xs text-white font-bold">Local</div>
          <div class="flex justify-between items-end mt-2 ">
            <span class="text-sm font-bold ">PTS</span>
            <span class="font-bold text-3xl text-amber-300">84</span>
          </div>
        </div>
        <div class="flex-1 bg-[#323232] rounded-lg p-3 flex flex-col justify-between">
          <div class="text-xs  font-bold">Visitante</div>

          <div class="flex justify-between items-end mt-2 ">
            <span class="text-sm font-bold">PTS</span>
            <span class="font-bold text-3xl text-amber-300">74</span>
          </div>
        </div>|
      </div>
    </div>
  );
};

export default CardReultados;
