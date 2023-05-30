import {placeHolderApi} from "./axios.service";
import {placeUrls} from "../constants";

const userService = {
    getAll: () => placeHolderApi.get(placeUrls.users)
}

export {
    userService
}