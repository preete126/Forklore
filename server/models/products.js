const { Schema, model } = require("mongoose")


const productsSchema = Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true
        },
        description: {
            type: Schema.Types.String,
            required: true
        },
        category: {
            type: Schema.Types.String,
            required: true
        },
        sub_category: {
            type: Schema.Types.String,
            required: true
        },
        price: {
            type: Schema.Types.Number,
            required: true
        },
        old_price:{
            type: Schema.Types.Number
        },
        quantity:{
            type: Schema.Types.String,
            require:true
        },
        ratings:{
            type: Schema.Types.Number,
            default:null
        },
        stock: {
            type: Schema.Types.Number,
            required: true
        },
        image_url: {
            type: Schema.Types.Array,
            required: true
        }
    },
    {
        timestamps:true
    }
)

const Products = model("products", productsSchema)
module.exports = Products