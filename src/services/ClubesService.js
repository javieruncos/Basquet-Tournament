import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_CLUB,
});

export const getClubes = async () => {
    try {
        const reponse = await api.get("/");
        console.log(reponse.data);
        return reponse.data;
    } catch (error) {
        throw new Error("No se pudieron cargar los clubes");
    }

}

export const crearClub = async (formData) => {
    try {
        const response = await api.post("/", formData);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo crear el club");
    }
}