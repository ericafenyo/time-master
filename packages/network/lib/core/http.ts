import "dotenv/config";
import axios from "axios";

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
  });
  return instance;
}

export const http = createAxiosInstance();
