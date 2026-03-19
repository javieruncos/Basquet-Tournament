import { useContext, useState } from "react";
import TournamentContext from "../context/TournamentContext";
import ClubesContext from "../context/ClubesContext";


const useTournamentFilter = () => {
  const { fixture, loading: contextLoading } = useContext(TournamentContext);
  const { clubes } = useContext(ClubesContext);
  const [filter, setFilter] = useState({
    jornada: "",
    fase: "",
    categoria: "",
  });

  const [isFiltering, setIsFiltering] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setIsFiltering(true);
    setTimeout(() => {
      setIsFiltering(false);
    }, 600);

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log([name, value]);
  };

  const filterResult = (fixture) => {
    return fixture.filter((item) => {
      return (
        (!filter.estado || item.estado === "Programado") &&
        (!filter.jornada || item.jornada === filter.jornada) &&
        (!filter.fase || item.fase === filter.fase) &&
        (!filter.categoria || item.categoria === filter.categoria)
      );
    });
  };

  const partidosFilter = filterResult(fixture);

  const partidosPorJornada1 = fixture.filter((item) => item.jornada === 1);

  const filtroVacio = !filter.jornada && !filter.fase && !filter.categoria;

  const resultadoReciente = fixture
    .filter((item) => item.estado === "Finalizado")
    .slice(0, 2);

  const jornadas = [...new Set(fixture.map((f) => f.jornada))].sort((a, b) => a - b)
    
   return {
    fixture,
    clubes,
    partidosFilter,
    filter,
    onChange,
    isFiltering,
    filtroVacio,
    contextLoading,
    jornadas,
    resultadoReciente,
    partidosPorJornada1
  };
};

export default useTournamentFilter;