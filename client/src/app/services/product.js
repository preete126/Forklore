import axios from "../util/axios"

export const GetAllCategory = ()=>{
    return axios.get("product/category")
}