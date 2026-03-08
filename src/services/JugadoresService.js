import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
});

export const createJugador = async (formData) => {
  try {
    const response = await api.post("/jugadores", formData);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo crear el jugador");
  }
};

export const getJugadores = async () => {
  try {
    const response = await api.get("/jugadores");
    return response.data;
  } catch {
    throw new Error("No se pudo obtener los jugadores");
  }
};

export const getJugadoresTop = async () => {
  try {
    const response = await api.get("/jugadores/top5");
    return response.data;
  } catch (error) {
    throw new Error("No se pudo obtener los jugadores");
  }
};


export const eliminarJugador = async (id) => {
  try {
    const response = await api.delete(`/jugadores/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo eliminar el jugador");
  }
};