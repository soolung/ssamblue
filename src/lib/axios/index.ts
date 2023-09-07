import axios from "axios";
import { refreshExpiredToken } from "@/utils/token/refresh";

const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

server.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { status, code, message } = error.response.data;
    if (message && status === 401 && code === "EXPIRED_TOKEN") {
      console.info(status, code, message)
      await refreshExpiredToken();
    }
    return Promise.reject(error);
  }
);
export { server };
