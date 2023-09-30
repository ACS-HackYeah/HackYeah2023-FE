import axios from "axios";

export const ApiClient = axios.create({
  responseType: "json",
  headers: {
    Authorization: "",
  },
  baseURL: "localhost:3000/api/",
});
