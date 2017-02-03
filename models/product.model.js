const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    pd_Name:String,
    pd_categoryID:Number,
    pd_description:String,
    pd_detail:String,
    pd_amount:Number,
    pd_price:Number,
    pd_picture:Object,
    pd_data:Object
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;