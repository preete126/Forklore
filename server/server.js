const express = require("express")
const PORT = 8000
const app = express()
const mongoose = require("mongoose")
const { MONGO_URL} = require("./config/env")
const { GetProductsByCategory } = require("./controllers/productsController")
const routes = require("./routes/product.route")

mongoose.connect(MONGO_URL)
const db = mongoose.connection
db.on("error",(error)=> console.log(error))
db.once("open",()=> console.log("connected to database"))

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("welcome back after a very long timeeeee")
})

app.use("/product", routes)
app.use("/category/:filter", GetProductsByCategory)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

