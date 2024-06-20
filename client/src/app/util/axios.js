import Axios from "axios";

const axios = Axios.create({
    baseURL:"http://localhost:3000/",
    headers:{
        "Content-Type":"application/json"
    }
})

export default axios