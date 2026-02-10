import React from 'react';
import { FaMapMarkerAlt, FaHome } from 'react-icons/fa';

const DetallesPartido = () => {
  // Datos simulados. En el futuro, estos datos vendrían de props o una API.
  const venue = "Estadio 'La Caldera', Tucumán";
  const referees = ["Javier Pérez", "Carlos Gómez", "Luis Rodríguez"];
  const homeTeam = "atle. tucuman";

  return (
    <div className="bg-[#171717] rounded-md p-5 mb-10">
      <h3 className="text-3xl mb-6 border-l-4 border-yellow-400 pl-3">Detalles del Partido</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6 text-gray-300">
        
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-yellow-400 text-3xl shrink-0" />
          <div>
            <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider">Estadio</p>
            <p className="font-bold text-base">{venue}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* <FaWhistle className="text-yellow-400 text-3xl shrink-0" /> */}
          <div>
            <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider">Árbitros</p>
            <p className="font-bold text-base">{referees.join(', ')}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaHome className="text-yellow-400 text-3xl shrink-0" />
          <div>
            <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider">Local</p>
            <p className="font-bold text-base uppercase">{homeTeam}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetallesPartido;