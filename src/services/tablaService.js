import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_TABLA,
});


export const getTabla = async () => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        throw new Error("No se pudo obtener la tabla");
    }
}