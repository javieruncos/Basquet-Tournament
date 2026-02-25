import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_CLUB,
});

export const getClubes = async () => {
    try {
        const reponse = await api.get("/");
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

export const jugadoresClub = async (id) => {
    try {
        const response = await api.get(`/${id}/jugadores`);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo obtener los jugadores del club");
    }
}

 export const obtenerClubID = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo obtener el club");
    }
}



export const editarClub = async (id, formData) => {
    try {
        const response = await api.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo editar el club");
    }

}