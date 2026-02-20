import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_NEWS,
});

export const getNoticias = async () => {
  try {
    const response = await api.get(`/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener noticias:", error.message);
    throw new Error("No se pudieron cargar las noticias");
  }
};


export const crearNoticia = async (formData) => {
  try {
    const response = await api.post("/", formData);
    return response.data;
  } catch (error) {
    console.error("Error al crear noticia:", error.message);
    throw new Error("No se pudo crear la noticia");
  }
}