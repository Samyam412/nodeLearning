const Book = require('../models/Book')
const getAllBooks = (req,res) => {

    Book.find()
        .then(books =>{res.json(books)})
        .catch(next)

}

const createABook = (req,res,next) =>{
    Book.create(req.body)
        .then(book => res.status(201).json(book))
        .catch(next)

}

const deleteAllBooks = (req,res,next) =>{
    Book.deleteMany()
        .then(reply => res.json(reply))
        .catch(next)
}

const getBookById =(req,res,next) =>{
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(next)
}
const updateBookById =(req,res,next) =>{
    Book.findByIdAndUpdate(req.params.id, {$set: req.body},{$new: true})
        .then(book => res.json(book))
        .catch(next)
}
const deleteBookById =(req,res,next) =>{
    Book.findByIdAndDelete(req.params.id)
        .then(book => res.json(book))
        .catch(next)

}

module.exports = {
    createABook,
    getAllBooks,
    deleteAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}