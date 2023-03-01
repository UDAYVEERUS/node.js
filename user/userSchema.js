const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = ({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('userschema', userSchema)

module.exports = User