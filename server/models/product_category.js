const {Schema, model} = require("mongoose")


const productCategorySchema = Schema(
    {
        category:{
            type: Schema.Types.String,
            required:true
        },
        sub_category:{
            type: Schema.Types.Array,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const ProductCategory = model("product-categories", productCategorySchema)
module.exports = ProductCategory