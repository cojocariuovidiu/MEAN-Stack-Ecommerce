const Product = require('../models/product.model');

exports.list = (req, res)=>{
    Product.find((err, products)=>{
        if(err){
            console.log(err);
        }else{
            res.json(products);
        }
    });
}

exports.create = (req, res)=>{
    const product = new Product(req.body);
    product.save((err, products)=>{
        if(err){
            console.log(err);
        }else{
            res.json(products);
        }
    });
}