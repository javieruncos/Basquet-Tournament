import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
});

export const getClubes = async () => {
  try {
    const response = await api.get("/clubes");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "No se pudieron cargar los clubes",
    );
  }
};

export const crearClub = async (formData) => {
  try {
    const response = await api.post("/clubes", formData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "No se pudo crear el club",
    );
  }
};

export const jugadoresClub = async (id) => {
  try {
    const response = await api.get(`/clubes/${id}/jugadores`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "No se pudo obtener los jugadores del club",
    );
  }
};

export const obtenerClubID = async (id) => {
  try {
    const response = await api.get(`/clubes/${id}`);
    return response.data;
  } catch (error) {
     throw new Error(
      error.response?.data?.message || "No se pudo obtener el club"
    );
  }
};

export const editarClub = async (id, formData) => {
  try {
    const response = await api.put(`/clubes/${id}`, formData);
    return response.data;
  } catch (error) {
   throw new Error(
      error.response?.data?.message || "No se pudo editar el club"
    );
  }
};

export const eliminarClub = async (id) => {
  try {
    const response = await api.delete(`/clubes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "No se pudo eliminar el club"
    );
  }
};
