const express = require('express')
const categoryController = require('../controllers/category-controller')

const router = express.Router()

router.route('/')
    .get(categoryController.getAllCategory)
    .post(categoryController.createACategory)
    .put((req,res) =>{res.status(501).json({'msg' : 'Not implimented'})})
    .delete(categoryController.deleteAllCategory)

router.route('/:category_id')
    .get()
    .post((req,res) =>{res.status(501).json({'msg' : 'Not implimented'})})
    .put()
    .delete()


module.exports = router