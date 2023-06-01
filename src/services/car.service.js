import {carApi} from "./axios.service";
import {carUrl} from "../constants";

const carService = {
    getAll: () => carApi.get(carUrl.cars.cars),
    create: (car) => carApi.post(carUrl.cars.cars, car),
    updateById: (id, car) => carApi.put(carUrl.cars.byId(id), car),
    deleteById: (id) => carApi.delete(carUrl.cars.byId(id))
}

export {carService}