import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import MenuNav from "./components/common/MenuNav";
import Noticias from "./pages/noticias/Noticias";
import Resultados from "./pages/resultados/Resultados";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div className="App">
         <MenuNav></MenuNav>
         <Routes>
          <Route path="/noticias" element={<Noticias></Noticias>}></Route>
          <Route path="/" element={<Resultados></Resultados>}></Route>
         </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
