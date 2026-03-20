import React, { useContext, useEffect } from 'react';
import { FaTrophy, FaEdit, FaTrash, FaPlus, FaChartBar } from 'react-icons/fa';
import TournamentContext from '../../../context/TournamentContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ItemsResultados from './forms/ItemsResultados';
import Swal from 'sweetalert2';
import { eliminarFixture, getFixtures } from '../../../services/FixtureService';

const ResultadosAdmin = () => {
    const { fixture ,setFixture} = useContext(TournamentContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(location.state?.update){
          getFixtures().then((res) => {
            setFixture(res);
          });
        }
    },[location.state,navigate,setFixture])



    const swalCustomConfig = {
    background: "#111",
    color: "#fff",
    confirmButtonColor: "#fbbf24", // amber-400
    cancelButtonColor: "#333",
    customClass: {
      popup: "border border-white/10 rounded-2xl",
      title: "font-black uppercase tracking-tighter",
    },
  };


    const onDelete = async (id) => {
        try{
            if(!id) return;
            const result = await Swal.fire({
                title: "¿Eliminar partido?",
                text: "No se puede revertir esta acción",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
                ...swalCustomConfig
            })

            if(!result.isConfirmed) return;

            Swal.fire({
                title: "Eliminando...",
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading()
                },
                ...swalCustomConfig
            })

            await eliminarFixture(id);

            Swal.close();

            Swal.fire({
                icon: "success",
                title: "Eliminado",
                text: "El partido fue eliminado correctamente",
                ...swalCustomConfig
            })

            const data = await getFixtures();
            setFixture(data);   
        }catch(error){
            console.error(error);
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Gestión de <span className="text-amber-300">Resultados</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm">Carga marcadores y gestiona las estadísticas de los partidos</p>
                </div>
                <Link to="/admin/resultadosAdmin/fixture" className="flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors">
                    <FaPlus /> Cargar Resultado
                </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-150">
                    <thead>
                        <tr className="bg-white/5 text-amber-300 uppercase text-xs tracking-widest font-bold">
                            <th className="p-4">Fecha</th>
                            <th className="p-4">Hora</th>
                            <th className="p-4">Partido</th>
                            <th className="p-4 text-center">Marcador</th>
                            <th className="p-4">Estado</th>
                            <th className="p-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {fixture.map((res) => (
                            <ItemsResultados res={res} key={res._id} onDelete={onDelete}></ItemsResultados>
                        ))}
                    </tbody>
                </table>
                {fixture.length === 0 && (
                    <div className="p-10 text-center text-gray-500">
                        No hay resultados registrados.
                    </div>
                )}
            </div>

            <div className="p-4 bg-amber-300/10 border border-amber-300/20 rounded-xl flex items-center gap-4">
                <FaTrophy className="text-amber-300 text-2xl" />
                <p className="text-xs text-amber-100/70 uppercase tracking-wider font-bold">Al finalizar un partido, recuerda cargar las estadísticas individuales para actualizar los líderes de la temporada.</p>
            </div>
        </div>
    );
};

export default ResultadosAdmin;