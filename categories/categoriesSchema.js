const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const categoriesSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    onHome : {
        type : Boolean,
        default : false,
        required : false
    },
    image : {
        type : String,
        default :"https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80",
        required : false
    },
    description : {
        type : String,
        required : false,
        default : "",
    },
    is_active :  {
        type : Boolean,
        default : true,
        required : false    
    },
    mastHead : {
        type : Boolean,
        required : false,
        default : false
    }
})

const categories = mongoose.model("Categories",categoriesSchema)
module.exports=categories