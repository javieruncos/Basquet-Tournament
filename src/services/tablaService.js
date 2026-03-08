import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
});


export const getTabla = async () => {
    try {
        const response = await api.get("/tabla");
        return response.data;
    } catch (error) {
        throw new Error("No se pudo obtener la tabla");
    }
}