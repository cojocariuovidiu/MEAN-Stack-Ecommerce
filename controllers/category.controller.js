const Category = require('../models/category.model');

exports.create = (req, res)=>{
    const category = new Category(req.body);
    category.save((err, categories)=>{
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json(categories);
        }
    });
}