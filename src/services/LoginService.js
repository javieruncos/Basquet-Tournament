import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  withCredentials: true,
});

export const login = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo iniciar sesión");
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/auth/me", {
      withCredentials: true,
    });
    return response.data.user;
  } catch (error) {
    throw new Error("No se pudo obtener el usuario");
  }
};

export const logout = async () => {
  await api.post("/auth/logout", {}, {
    withCredentials: true
  });
};
