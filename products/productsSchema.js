const mongoose =  require("mongoose")
const {Schema} = mongoose
const mongoosePaginate =require("mongoose-paginate")
const productSchema = new Schema({
    title:{
        type:String,
        requried:true,
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:false,
        default:"https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80"
    },
    type:{
        type:Number,
        required:true,
        default:0
    },
    metal:{
        type:String,
        required:false,
    },
    sku:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    description_short:{
        type:String,
        required:true 
    },
    onHome:{
        type:Boolean,
        required:true,
        default:false
    },
    // category:{
    //     type:Schema.Types.ObjectId,
    //     ref:"Categories",
    //     required:true
    // },
    is_active:{
        type:Boolean,
        required:true,
        default:true
    }
},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}}
)

productSchema.plugin(mongoosePaginate)

const products = mongoose.model("Products",productSchema)
module.exports=products