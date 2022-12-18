const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required : true,
        unique : [true, 'This username is already exists'],
        minLength : [5,'Username must be longer than 5 characters']
    },
    password: {
        type: String,
        required: true,
    }
},{ timestamps : true})


module.exports =mongoose.model('User', userSchema)