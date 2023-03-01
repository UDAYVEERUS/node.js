const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const contactSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    mobile :{
        type : Number,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    subject :{
        type:String,
        required:true
    },
    message :{
        type: String,
        required:true
    }
})

const contact = mongoose.model("contact",contactSchema)

module.exports = contact