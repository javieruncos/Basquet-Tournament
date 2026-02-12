import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import MenuNav from "./components/common/MenuNav";
import Noticias from "./pages/noticias/Noticias";
import Resultados from "./pages/resultados/Resultados";
import DetalleResultado from "./pages/detalleResultado/DetalleResultado";
import ClubesPage from "./pages/clubes/ClubesPage";

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
          <Route path="/" element={<ClubesPage></ClubesPage>}></Route>
         </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
