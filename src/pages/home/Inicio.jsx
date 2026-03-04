import PortadaInicio from "./components/PortadaInicio";
import Footer from "../../components/layout/Footer";
import { FaPlus } from "react-icons/fa";
import ResultadosSection from "./components/ResultadosSection";
import NoticiasSection from "./components/NoticiasSection";
import ProximosResultSection from "./components/ProximosResultSection";
import ClubesSection from "./components/ClubesSection";
import LideresSection from "./components/LideresSection";
import TablaPosicionesSection from "./components/TablaPosicionesSection";
import TournamentContext from "../../context/TournamentContext";
import { useContext } from "react";
import ClubesContext from "../../context/ClubesContext";
import { Link } from "react-router-dom";
import Banner from "../../components/layout/Banner";

export const Inicio = () => {
  return (
    <div className=" text-white mt-0">
      <PortadaInicio />
      <ResultadosSection />
      <NoticiasSection />
      <ProximosResultSection />
      <ClubesSection />
      <LideresSection />
      <TablaPosicionesSection />
      <Banner></Banner>
    </div>
  );
};

export default Inicio;
