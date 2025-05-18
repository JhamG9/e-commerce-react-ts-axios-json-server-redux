import axios from "axios";

// Crea la instancia
const axiosInstance = axios.create({
  baseURL: "http://localhost:3100", // Cambia por tu API base
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status >= 500) {
        console.error("Error =>", error.message);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
