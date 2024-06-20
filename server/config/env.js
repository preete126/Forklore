require("dotenv").config()

const {
    MONGO_URL,
    CLOUD_NAME,
    API_KEY,
    API_SECRETKEY
} = process.env

module.exports ={
    MONGO_URL,
    CLOUD_NAME,
    API_KEY,
    API_SECRETKEY
}