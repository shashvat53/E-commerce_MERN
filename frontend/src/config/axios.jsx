import axios from "axios";
const backendDomain = "http://localhost:8000/api";

const apiInstance = axios.create({
  baseURL: backendDomain,
  headers: {
    "Content-Type": "application/json",
  },
  withCredential: true,
});

export default apiInstance;
// 2:21 timing
