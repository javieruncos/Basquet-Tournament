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
import NoticiaDetalle from "./pages/DetalleNoticias/NoticiaDetalle";
import ScrollToTop from "./utils/ScrollToTop";
import DetalleFixture from "./pages/detalleFixture/DetalleFixture";
import DetalleClub from "./pages/clubes/DetalleClub";
import Tabla from "./pages/tabla/Tabla";
import Footer from "./components/layout/Footer";
import JugadoresAdmind from "./pages/admin/components/JugadoresAdmin";
import JugadoresForm from "./pages/admin/components/forms/JugadoresForm";
import Login from "./pages/login/Login";
import UserContext, { UserProvider } from "./context/UserContext";
import ProtectedAdmin from "./components/auth/ProtectedAdmin";
import MatchBoxScore from "./pages/detalleResultado/components/MatchBoxScore";

function App() {
  return (
    <>
      <UserProvider>
        <NewsContextProvider>
          <TournamentContextProvider>
            <ClubesContextProvider>
              <BrowserRouter>
                <ScrollToTop />
                <div className="App">
                  <MenuNav></MenuNav>
                  <Routes>
                    <Route
                      path="/noticias"
                      element={<Noticias></Noticias>}
                    ></Route>
                    <Route
                      path="/noticiasDetalle/:id"
                      element={<NoticiaDetalle></NoticiaDetalle>}
                    ></Route>
                    <Route
                      path="/resultados"
                      element={<Resultados></Resultados>}
                    ></Route>
                    <Route
                      path="/detalleFixture/:id"
                      element={<DetalleFixture></DetalleFixture>}
                    ></Route>
                    <Route
                      path="/detelleClub/:id"
                      element={<DetalleClub></DetalleClub>}
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
                    <Route
                      path="/fixture"
                      element={<Fixture></Fixture>}
                    ></Route>
                    <Route
                      path="/boxscore/:id"
                      element={<MatchBoxScore></MatchBoxScore>}
                    ></Route>
                    <Route path="/tabla" element={<Tabla></Tabla>}></Route>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route
                      path="/admin"
                      element={
                        <ProtectedAdmin>
                          <AdminLayout />
                        </ProtectedAdmin>
                      }
                    >
                      <Route index element={<NoticiasAdmin />} />
                      <Route path="noticias" element={<NoticiasAdmin />} />
                      <Route path="fixtureAdmin" element={<FixtureAdmin />} />
                      <Route path="resultadosAdmin"  element={<ResultadosAdmin />}/>
                      <Route path="jugadoresAdmin"  element={<JugadoresAdmind />}/>
                      <Route path="resultadosAdmin/fixture"  element={<FormResultados />}/>
                      <Route path="clubesAdmin" element={<ClubesAdmin />} />
                      <Route path="clubesAdmin/crear"  element={<FormClubes />}/>
                      <Route path="noticias/crear" element={<FormNoticias />} />
                      <Route path="fixtureAdmin/crear"  element={<FormProgamado />}/>
                      <Route path="fixtureAdmin/editar/:id"  element={<FormProgamado />}/>
                      <Route path="resultadosAdmin/editar/:id"  element={<FormResultados />}/>
                      <Route path="noticias/editar/:id"  element={<FormNoticias />}/>
                      <Route path="clubesAdmin/editar/:id"  element={<FormClubes />}/>
                      <Route path="jugadoresAdmin/crear"  element={<JugadoresForm />}/>
                    </Route>
                  </Routes>
                  <Footer></Footer>
                </div>
              </BrowserRouter>
            </ClubesContextProvider>
          </TournamentContextProvider>
        </NewsContextProvider>
      </UserProvider>
    </>
  );
}

export default App;
