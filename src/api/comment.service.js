import {axiosService} from "./axios.service";
import {urls} from "../urls";

const commentService = {
    getAll: ()=> axiosService.get(urls.comments),
    create: (data) => axiosService.post(urls.comments, data)
}

export {
    commentService
}