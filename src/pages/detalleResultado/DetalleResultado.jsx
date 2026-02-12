import React from 'react';
import PortadaDetalle from './components/PortadaDetalle';
import FixtureResultado from './components/fixtureResultado';
import EstadisticasEquipos from './components/EstadisticasEquipos';
import DetallesPartido from './components/DetallesPartido';


const DetalleResultado = () => {
    return (
        <div className='pt-5 px-3 md:p-10 px'>
          <PortadaDetalle></PortadaDetalle>
          <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-5 md:gap-3 lg:gap-10 mb-10'>
            <div className='h-35 lg:h-40 w-full bg-dark-gradient rounded-md'>
                <div className='p-4 text-center lg:text-left'>
                    <span className='text-gray-400 numberFonts font-bold'>1 cuarto</span>
                </div>
                <div className='flex justify-center items-center gap-3 text-3xl lg:text-6xl font-bold numberFonts'>
                   <span className='text-amber-300'>22</span>
                   <span>-</span>
                   <span>18</span>
                </div>
            </div>
            <div className='h-35 lg:h-40 w-full bg-dark-gradient rounded-md'>
                <div className='p-4 text-center lg:text-left'>
                    <span className='text-gray-400 numberFonts font-bold'>2 cuarto</span>
                </div>
                <div className='flex justify-center items-center gap-3 text-3xl lg:text-6xl font-bold numberFonts'>
                   <span className='text-amber-300'>22</span>
                   <span>-</span>
                   <span>18</span>
                </div>
            </div>
            <div className='h-35 lg:h-40 w-full bg-dark-gradient rounded-md'>
                <div className='p-4 text-center lg:text-left'>
                    <span className='text-gray-400 numberFonts font-bold'>3 cuarto</span>
                </div>
                <div className='flex justify-center items-center gap-3 text-3xl lg:text-6xl font-bold numberFonts'>
                   <span className='text-amber-300'>22</span>
                   <span>-</span>
                   <span>18</span>
                </div>
            </div>
            <div className='h-35 lg:h-40 w-full bg-dark-gradient rounded-md'>
                <div className='p-4 text-center lg:text-left'>
                    <span className='text-gray-400 numberFonts font-bold'>4 cuarto</span>
                </div>
                <div className='flex justify-center items-center gap-3 text-3xl lg:text-6xl font-bold numberFonts'>
                   <span className='text-amber-300'>22</span>
                   <span>-</span>
                   <span>18</span>
                </div>
            </div>     
          </div>
          <DetallesPartido />
          <EstadisticasEquipos />
          <FixtureResultado></FixtureResultado>
        </div>
    );
};

export default DetalleResultado;