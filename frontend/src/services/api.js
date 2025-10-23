import axios from "axios";

const API = axios.create({
  baseURL: "https://app-1-i1pz.onrender.com/api",
});

export const setToken = (token) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};

export default API;
