import React from "react";

const CardReultados = () => {
  return (
    <div class="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 shadow-xl p-5">
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
