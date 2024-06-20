const {Router} = require("express")
const { CreateProductCategory, AddProducts, EditProductDetails, GetAllProducts, GetAllCategories, GetProductsByCategory } = require("../controllers/productsController")
const { UploadImage } = require("../controllers/uploadController")
const routes = Router()

routes.post("/category", CreateProductCategory)
routes.post("/uploadProductImage", UploadImage)
routes.post("/all",AddProducts)
routes.put("/edit-product", EditProductDetails)
routes.get("/all", GetAllProducts)
routes.get("/category", GetAllCategories)
// routes.get("/:filter", GetProductsByCategory)

module.exports = routes