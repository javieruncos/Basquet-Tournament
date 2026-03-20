import React from 'react';

const LineupCard = ({ team, players, logo, clubes }) => {
    return (
        <div className="bg-[#121212] rounded-2xl border border-white/5 p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt={team} className="w-10 h-10 object-contain" />
            <h3 className="text-lg font-black uppercase italic tracking-tighter text-white">
              {team}
            </h3>
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Estadísticas
          </span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-2">
          {players?.length > 0 ? (
            players.map((player, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 font-black text-xs">
                      {player.dorsal || idx + 1}
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-200 uppercase group-hover:text-amber-300 transition-colors">
                        {player.jugadorId.nombre}
                      </p>

                      <p className="text-[9px] text-gray-500 uppercase font-bold">
                        {player.jugadorId.posicion || "Jugador"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="block text-sm font-black text-white numberFonts">
                        {player.puntos || 0}
                      </span>
                      <span className="text-[8px] text-gray-600 uppercase font-black">
                        PTS
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="block text-sm font-black text-white numberFonts">
                        {player.rebotes || 0}
                      </span>
                      <span className="text-[8px] text-gray-600 uppercase font-black">
                        REB
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600 text-xs italic text-center mt-10">
              No hay datos de jugadores disponibles
            </p>
          )}
        </div>
      </div>
    );
};

export default LineupCard;