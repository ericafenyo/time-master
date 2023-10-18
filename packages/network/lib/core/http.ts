import "dotenv/config";
import axios from "axios";

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: process.env["API_SERVER_URL"],
  });
  return instance;
}

export const http = createAxiosInstance();
