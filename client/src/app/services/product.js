import axios from "../util/axios"

export const GetAllProducts = ()=>{
    return axios.get("product/all")
}