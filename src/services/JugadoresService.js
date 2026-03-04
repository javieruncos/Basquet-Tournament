import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_JUGADORES,
});


export const getJugadoresTop = async () => {
    try {
        const response = await api.get("/top5");
        return response.data;
    } catch (error) {
        throw new Error("No se pudo obtener los jugadores");
    }
}