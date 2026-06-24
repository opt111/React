import axios from "axios";

const BASE_URL = "https://6a3b0d49e4a07f202e14883f.mockapi.io";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
