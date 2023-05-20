import {axiosService} from "./axios.service";
import {urls} from "../urls";

class CommentService{
    getALL(){
        return axiosService.get(urls.comments)
    }
}

export const commentService = new CommentService()