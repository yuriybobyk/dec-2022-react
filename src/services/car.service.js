import {carApi} from "./axios.service";
import {carUrl} from "../constants";

const carService = {
    getAll: () => carApi.get(carUrl.cars)
}

export {carService}