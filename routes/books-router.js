const express = require('express')
const booksController = require('../controllers/books-controller')
const reviewController = require('../controllers/review-controller')
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


router.route('/:id/reviews')
    .get(reviewController.getAllReview)
    .post(reviewController.createReview)
    .put((req,res) =>{res.status(501).json({'msg' : 'Not implimented'})})
    .delete(reviewController.deleteAllReviews)
    
router.route('/:id/reviews/:review_id')
    .get(reviewController.getReviewsById)
    .post((req,res) =>{res.status(501).json({'msg' : 'Not implimented'})})
    .put(reviewController.updateReviewById)
    .delete(reviewController.deleteReviewById)

module.exports = router