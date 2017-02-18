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

exports.list = (req, res)=>{
    Category.find({},(err, categories)=>{
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json(categories);
        }
    });
}

exports.delete = (req, res)=>{
    Category.remove({'_id': req.params._id },(err, categories)=>{
        if(err){
            console.log(err);
            res.json({'status': false});
        }else{
            res.json({'status': true});
        }
    });
}