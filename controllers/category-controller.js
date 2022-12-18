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

const getCategoryById = (req,res,next) => {
    Category.findById(req.params.category_id)
        .populate('category')
        .then(category => res.json(category))
        .catch(next)
}

const updateCategoryById = (req,res,next) =>{
    Category.findByIdAndUpdate(req.params.category_id,{$set: req.body},{new :true})
        .then(reply => res.json(reply))
        .catch(next)
}


const deleteCategoryById = (req,res,next) => {
    Category.findByIdAndDelete(req.params.id)
        .then(reply => res.json(reply))
        .catch(next)
}
module.exports = {
    createACategory,
    deleteAllCategory,
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
}