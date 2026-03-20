import { createContext, useEffect, useState } from "react";
import { getJugadoresTop } from "../services/JugadoresService";

const JugadoresContext = createContext();

export const JugadoresProvider = ({ children }) => {
  const [jugadores, setJugadores] = useState(null);

  useEffect(() => {
    getJugadoresTop().then(setJugadores);
  }, []);

  return (
    <JugadoresContext.Provider value={{ jugadores }}>
      {children}
    </JugadoresContext.Provider>
  );
};

export default JugadoresContext;