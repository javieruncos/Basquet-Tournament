import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  withCredentials: true,
});

export const getFixtures = async () => {
    try {
        const response = await api.get("/partidos");
        return response.data;
    } catch (error) {
        console.error("Error al obtener noticias:", error.message);
        throw new Error("No se pudieron cargar las noticias");
    }
}


export const crearFixture = async (data) => {
    try {
        const response = await api.post("/partidos", data);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo crear el fixture");
    }
}


export const obtenerFixtureID = async (id) => {
    try {
        const response = await api.get(`/partidos/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo obtener el fixture");
    }

}


export const editarFixture = async (id, data) => {
    try {
        const response = await api.put(`/partidos/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo editar el fixture");
    }
}

export const editarResultadoFixture = async (id, data) => {
    try {
        const response = await api.put(`/partidos/${id}/resultado`, data);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo editar el fixture");
    }
}

export const eliminarFixture = async (id) =>{
    try {
        const response = await api.delete(`/partidos/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo eliminar el fixture");
    }
}