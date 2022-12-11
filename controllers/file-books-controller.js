const books = require('../data/books')
const getAllBooks = (req,res)=>{
    res.json(books)
}

const createABook = (req,res)=>{
    let newBook = {
        'id' : books[books.length - 1].id+1,
        'title': req.body.title,
        'author': req.body.author
    }
    books.push(newBook)
    res.status(201).send(books)
}

const updateBooks = (req,res)=>{
    (req,res) =>{
        let updatedBooks = books.map((item)=>{
            if(item.id == req.params.id){
                item.title = req.body.title,
                item.author = req.body.author
            }
            return item
        })
        res.json(updatedBooks) 
    }
}

const deleteBooks = (req,res)=>{
    books = {};
    res.json(books);
}
const findBooks = (req,res) => {
    let theBook =books.find((item) => {
        return item.id == req.params.id
    })
    res.json(theBook)
}

const deleteABook = (req,res) =>{
    let updatedBooks = books.filter(item => item.id != req.params.id)
    res.json(updatedBooks)
}


module.exports= {
    getAllBooks,
    createABook,
    updateBooks,
    deleteBooks,
    findBooks,
    deleteABook
}