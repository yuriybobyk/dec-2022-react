import axios from "axios";
import {carBaseURL} from "../constants";

const carApi = axios.create({baseURL: carBaseURL});

export {carApi}
