import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuNav from "./components/common/MenuNav";
import Noticias from "./pages/noticias/Noticias";
import Resultados from "./pages/resultados/Resultados";
import DetalleResultado from "./pages/detalleResultado/DetalleResultado";
import ClubesPage from "./pages/clubes/ClubesPage";
import ClubDetalle from "./pages/detalleClub/ClubDetalle";
import Fixture from "./pages/fixture/Fixture";
import BoxScore from "./pages/Box/BoxScore";
import Inicio from "./pages/home/Inicio";
import AdminLayout from "./pages/admin/AdminLayout";
import NoticiasAdmin from "./pages/admin/components/NoticiasAdmin";
import FixtureAdmin from "./pages/admin/components/FixtureAdmin";
import ResultadosAdmin from "./pages/admin/components/ResultadosAdmin";
import ClubesAdmin from "./pages/admin/ClubesAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <MenuNav></MenuNav>
          <Routes>
            <Route path="/noticias" element={<Noticias></Noticias>}></Route>
            <Route
              path="/resultados"
              element={<Resultados></Resultados>}
            ></Route>
            <Route
              path="/detalle"
              element={<DetalleResultado></DetalleResultado>}
            ></Route>
            <Route path="/clubes" element={<ClubesPage></ClubesPage>}></Route>
            <Route path="/club" element={<ClubDetalle></ClubDetalle>}></Route>
            <Route path="/fixture" element={<Fixture></Fixture>}></Route>
            <Route path="/boxscore" element={<BoxScore></BoxScore>}></Route>
            <Route path="/inicio" element={<Inicio></Inicio>}></Route>
            <Route path="/admin" element={<AdminLayout></AdminLayout>}>
              <Route path="noticias" element={<NoticiasAdmin />} />
              <Route path="fixtureAdmin" element={<FixtureAdmin />} />
              <Route path="resultadosAdmin" element={<ResultadosAdmin />} />
              <Route path="clubesAdmin" element={<ClubesAdmin />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
