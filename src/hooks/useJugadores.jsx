import { useContext } from "react";
import JugadoresContext from "../context/JugadoresContext";

const useJugadores = () => {
    return useContext(JugadoresContext);
};

export default useJugadores;
