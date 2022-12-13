const Category = require('../models/Category')
const getAllCategory = (req,res,next) => {

    Category.find()
        .then(categorys =>{res.json(categorys)})
        .catch(next)

}

const createACategory = (req,res,next) =>{
    Category.create(req.body)
        .then(categorys => res.status(201).json(categorys))
        .catch(next)

}

const deleteAllCategory = (req,res,next) =>{
    Category.deleteMany()
        .then(reply => res.json(reply))
        .catch(next)
}

module.exports = {
    createACategory,
    deleteAllCategory,
    getAllCategory
}