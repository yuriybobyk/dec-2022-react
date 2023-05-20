import {axiosService} from "./axios.service";
import {urls} from "../urls";

class PostService{
    getALL(){
        return axiosService.get(urls.posts)
    }
}

export const postService = new PostService()