const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required : [true, 'name is required']
    }
})

module.exports = mongoose.model('Category', categorySchema)