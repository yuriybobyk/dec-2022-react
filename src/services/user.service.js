import {placeHolderApi} from "./axios.service";
import {placeUrls} from "../constants";

const userService = {
    getAll: () => placeHolderApi.get(placeUrls.users),
    create: (user) => placeHolderApi.post(placeUrls.users, user)

}

export {
    userService
}