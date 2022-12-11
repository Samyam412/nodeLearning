const express = require('express')
const booksController = require('../controllers/books-controller')
const router = express.Router()

router.route('/')
    .get(booksController.getAllBooks)
    .post(booksController.createABook)
    .put((req,res) =>{res.status(501).json({'msg' : 'Not implimented'})})
    .delete(booksController.deleteAllBooks)

router.route('/:id')
    .get(booksController.getBookById)
    .post((req,res) =>{res.status(501).json({'msg' : 'Not implimented'})})
    .put(booksController.updateBookById)     
    .delete(booksController.deleteBookById)



module.exports = router