import axios from "axios";
import {carBaseURL, placeBaseURL} from "../constants";

const placeHolderApi = axios.create({baseURL: placeBaseURL});
const carApi = axios.create({baseURL: carBaseURL});

export {placeHolderApi, carApi}
