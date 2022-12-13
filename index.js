const express= require('express')
const mongoose = require('mongoose')
const booksRouter = require('./routes/books-router') 
const categoryRouter = require('./routes/category-routes') 
const Router = require('./routes/books-router')
const app = express()


//connect to mongoose
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/nodeLearning')
    .then(() =>{
        console.log('connected to MongoDB Database Server')
    })
    .catch((err) => console.log(err))

//application level middleware
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path}`)
    next()

})


//in-built middleware
app.use(express.json())


//router level middlware
app.use('/books', booksRouter) 
 
app.use('/category', categoryRouter) 



app.listen(3000, () =>{
    console.log('App is running in port 3000!')
})

app.use((err, req,res, next) =>{
    console.log(err.stack)
    res.status(501).json({'err': err.message})

})
