import {axiosService} from "../axiosService/axiosService";

const launchService ={
    getAll: ()=> axiosService.get("/v3/launches/")
}

export {launchService}