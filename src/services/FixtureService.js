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


export const crearFixture = async (formData) => {
    try {
        const response = await api.post("/", formData);
        return response.data;
    } catch (error) {
        throw new Error("No se pudo crear el fixture");
    }
}