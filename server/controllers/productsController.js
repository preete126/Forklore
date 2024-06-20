const mongoose = require("mongoose");
const Products = require("../models/products");
const ProductCategory = require("../models/product_category");
const { HttpStatusCodes } = require("../utils/constants");


module.exports.CreateProductCategory = async (req, res) => {
    const {
        category,
        sub_category
    } = req.body;

    try {
        const productCategory = await new ProductCategory({
            category: category,
            sub_category: sub_category
        }).save()
        res.status(HttpStatusCodes.SUCCESS).json({ message: "Product category added successfully", productCategory })

    } catch (error) {
        console.error(error)
        return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}

module.exports.AddProducts = async (req, res) => {
    const {
        name,
        description,
        category,
        sub_category,
        price,
        stock,
        image_url,
        old_price,
        quantity
    } = req.body

    try {

        const products = await new Products({
            name: name,
            description: description,
            category: category,
            sub_category: sub_category,
            price: price,
            stock: stock,
            image_url: image_url,
            old_price,
            quantity
        }).save()
        res.status(HttpStatusCodes.SUCCESS).json({ message: "Products added successfully", products })
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }
}

module.exports.EditProductDetails = async (req, res) => {
    const {
        _id,
        name,
        description,
        category,
        sub_category,
        price,
        stock,
        image_url,
        old_price,
        quantity,
        ratings
    } = req.body
    try {

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "Invalid product ID" });
        }
        const editProduct = await Products.findById(_id)
        if (!editProduct) {
            res.status(HttpStatusCodes.NOT_FOUND).json({message:"Product not found"})
        } else {
            const newP = await Products.updateOne({ "_id": _id }, {
                name,
                description,
                category,
                sub_category,
                price,
                stock,
                image_url: image_url,
                old_price,
                quantity,
                ratings
            })
            res.status(HttpStatusCodes.OK).json({ message: "Product updated successfully" })
        }
    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }
}

module.exports.GetAllProducts = async (req, res) => {
    try {
        const all_product = await Products.find()
        res.status(HttpStatusCodes.SUCCESS).json({ data: all_product })
    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }

}
module.exports.GetAllCategories = async (req, res) => {
    try {
        const productCategory = await ProductCategory.find()
        res.status(HttpStatusCodes.SUCCESS).json({ data: productCategory })
    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }

}
module.exports.GetProductsByCategory = async (req, res) => {
    try {
        const filter = req.params.filter
        const ProductsByCategory = await Products.find(
            {
                $or: [
                    { "category": filter },
                    { "sub_category": filter }
                ]
            }
        )
        if (ProductsByCategory.length === 0) {
            res.status(HttpStatusCodes.NOT_FOUND).json({message: `No category for ${filter} found`})
        }else{
            res.status(HttpStatusCodes.SUCCESS).json({data: ProductsByCategory})
        }
    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }
}