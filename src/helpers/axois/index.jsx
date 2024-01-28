import axios from "axios";
import { getBaseUrl } from "../config/envConfig";

const axiosApi = axios.create({
    baseURL: getBaseUrl(),
})

export default axiosApi;