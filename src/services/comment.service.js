import {placeHolderApi} from "./axios.service";
import {placeUrls} from "../constants";

const commentService = {
    getAll: () => placeHolderApi.get(placeUrls.comments),
    create: (comment) => placeHolderApi.post(placeUrls.comments, comment)
}

export {commentService}