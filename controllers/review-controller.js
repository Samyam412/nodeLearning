const Book = require('../models/Book')

const getAllReview = ((req,res,next) =>{

    Book.findById(req.params.id)
        .then(book => res.json(book.reviews))
        .catch(err => next(err))

})

const createReview = ((req,res,next) => {

    Book.findById(req.params.id)
        .then((book) => {
            book.reviews.push(req.body)
            book.save().then(b => res.json(b.reviews))
        }).catch(next)
})


const deleteAllReviews = ((req,res,next) => {
    Book.findById(req.params.id)
        .then(book => {
            book.reviews = []
            book.save().then(b => res.json(b.reviews))
        })
        .catch(next)
})

const getReviewsById = (req,res,next) => {
    Book.findById(req.params.id)
    .then(book => {
        res.json(book.reviews.id(req.params.review_id))
    })
    .catch(next)

}
const updateReviewById =(req,res,next) =>{
    Book.findById(req.params.id)
        .then(book => {

            let updated_reviews = book.reviews.map((item) => {

                if(item.id == req.params.review_id){
                    item.body = req.body.body
                } 
                return item

            })
            book.reviews = updated_reviews
            book.save().then(book => res.json(book.reviews))
        }).catch(next)
}
const deleteReviewById =(req,res,next) =>{

    Book.findById(req.params.id)
        .then(book => {
            let updated_reviews = book.reviews.filter((item) => {
                return item.id != req.params.review_id
            })
            book.reviews = updated_reviews
            book.save().then(book => res.json(book.reviews))
        }).catch(next)
    
}


module.exports = {
    getAllReview,
    deleteAllReviews,
    createReview,
    updateReviewById,
    deleteReviewById,
    getReviewsById

}