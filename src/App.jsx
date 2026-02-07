import "./App.css";
import MenuNav from "./components/common/MenuNav";
import Noticias from "./pages/noticias/Noticias";

function App() {
  
  return (
    <>
      <div className="App">
         <MenuNav></MenuNav>
         <Noticias></Noticias>
      </div>
    </>
  );
}

export default App;
