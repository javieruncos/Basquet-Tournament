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
import ClubesAdmin from "./pages/admin/components/ClubesAdmin";
import { NewsContextProvider } from "./context/NewsContext";
import FormNoticias from "./pages/admin/components/forms/FormNoticias";
import { TournamentContextProvider } from "./context/TournamentContext";
import { ClubesContextProvider } from "./context/ClubesContext";
import FormResultados from "./pages/admin/components/forms/FormResultados";
import FormProgamado from "./pages/admin/components/forms/FormProgamado";
import FormClubes from "./pages/admin/components/forms/FormClubes";

function App() {
  return (
    <>
      <NewsContextProvider>
        <TournamentContextProvider>
          <ClubesContextProvider>
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
                <Route
                  path="/clubes"
                  element={<ClubesPage></ClubesPage>}
                ></Route>
                <Route
                  path="/club"
                  element={<ClubDetalle></ClubDetalle>}
                ></Route>
                <Route path="/fixture" element={<Fixture></Fixture>}></Route>
                <Route path="/boxscore" element={<BoxScore></BoxScore>}></Route>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/admin" element={<AdminLayout></AdminLayout>}>
                  <Route index element={<NoticiasAdmin />} />
                  <Route path="noticias" element={<NoticiasAdmin />} />
                  <Route path="fixtureAdmin" element={<FixtureAdmin />} />
                  <Route path="resultadosAdmin" element={<ResultadosAdmin />} />
                  
                  <Route path="resultadosAdmin/fixture" element={<FormResultados />} />
                  <Route path="clubesAdmin" element={<ClubesAdmin />} />
                  <Route path="clubesAdmin/crear" element={<FormClubes />} />
                  <Route path="noticias/crear" element={<FormNoticias />} />
                  <Route path="fixtureAdmin/crear" element={<FormProgamado />} />
                  <Route
                    path="fixtureAdmin/editar/:id"
                    element={<FormProgamado />}
                  />
                  <Route
                    path="resultadosAdmin/editar/:id"
                    element={<FormResultados />}
                  />
                  <Route
                    path="noticias/editar/:id"
                    element={<FormNoticias />}
                  />
                  <Route path="clubesAdmin/editar/:id" element={<FormClubes />} />

                </Route>
              </Routes>
            </div>
          </BrowserRouter>
          </ClubesContextProvider>
        </TournamentContextProvider>
      </NewsContextProvider>
    </>
  );
}

export default App;
