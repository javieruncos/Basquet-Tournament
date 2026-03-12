import PortadaInicio from "./components/PortadaInicio";
import ResultadosSection from "./components/ResultadosSection";
import NoticiasSection from "./components/NoticiasSection";
import ProximosResultSection from "./components/ProximosResultSection";
import ClubesSection from "./components/ClubesSection";
import LideresSection from "./components/LideresSection";
import TablaPosicionesSection from "./components/TablaPosicionesSection";
import Banner from "../../components/layout/Banner";
import SliderResult from "./components/SliderResult";
import Proximos from "./components/Proximos";

export const Inicio = () => {
  return (
    <>
    <PortadaInicio />
    <SliderResult />
    <div className="text-white mt-0 px-0 sm:px-4 md:px-6 lg:px-5 overflow-hidden">
      <ResultadosSection />
      <ProximosResultSection />
      <TablaPosicionesSection />
      <Proximos></Proximos>
      <NoticiasSection />
      <ClubesSection />
      <LideresSection />
    </div>
      <Banner></Banner>
    </>
  );
};

export default Inicio;
