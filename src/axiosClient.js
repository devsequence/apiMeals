import axios from "axios";
const axiosClient = axios.create({
  baseUrl: import.meta.env.VITE_BASE_API,
});
export default  axiosClient;
