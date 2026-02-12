import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import MenuNav from "./components/common/MenuNav";
import Noticias from "./pages/noticias/Noticias";
import Resultados from "./pages/resultados/Resultados";
import DetalleResultado from "./pages/detalleResultado/DetalleResultado";
import ClubesPage from "./pages/clubes/ClubesPage";
import ClubDetalle from "./pages/detalleClub/ClubDetalle";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div className="App">
         <MenuNav></MenuNav>
         <Routes>
          <Route path="/noticias" element={<Noticias></Noticias>}></Route>
          <Route path="/resultados" element={<Resultados></Resultados>}></Route>
          <Route path="/detalle" element={<DetalleResultado></DetalleResultado>}></Route>
          <Route path="/clubes" element={<ClubesPage></ClubesPage>}></Route>
          <Route path="/" element={<ClubDetalle></ClubDetalle>}></Route>
         </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
