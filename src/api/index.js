import axios from "axios";
import { domain } from "../config/setting";

const api = axios.create({
    baseURL: domain
})

export default api;