// require('dotenv').config()
import axios from "axios";

export function createAxiosInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });
  return instance;
}
