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
    if (status === 401 && code === "EXPIRED_TOKEN") {
      refreshExpiredToken();
    } else if (status === 401 && code === "INVALID_TOKEN") {
      window.location.href = "/login";
    } else if (status === 401 && code === "EMPTY_TOKEN") {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
export { server };
