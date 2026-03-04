import React, { useEffect ,useState} from "react";
import { getJugadoresTop } from "../services/JugadoresService";

const useJugadores = () => {
  const [jugadores, setjugadores] = useState(null);

  useEffect(() => {
    getJugadoresTop().then((res) => {
        console.log(res);
      setjugadores(res);
    });
  }, []);

  return {jugadores, setjugadores};
};

export default useJugadores;
