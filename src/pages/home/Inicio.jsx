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
    <>
    <PortadaInicio />
    <div className=" text-white mt-0 max-w-7xl mx-auto px-4 md:px-10">
      <ResultadosSection />
      <NoticiasSection />
      <ProximosResultSection />
      <ClubesSection />
      <LideresSection />
      <TablaPosicionesSection />
    </div>
      <Banner></Banner>
    </>
  );
};

export default Inicio;
