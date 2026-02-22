import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_FIXTURE,
});

export const getFixtures = async () => {
    try {
        const respose = await api.get("/");
        console.log(respose.data);
        return respose.data;
    } catch (error) {
        console.error("Error al obtener noticias:", error.message);
        throw new Error("No se pudieron cargar las noticias");
    }
}


export const crearFixture = async (data) => {
    try {
        const response = await api.post("/", data);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo crear el fixture");
    }
}


export const obtenerFixtureID = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo obtener el fixture");
    }

}


export const editarFixture = async (id, data) => {
    try {
        const response = await api.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo editar el fixture");
    }
}