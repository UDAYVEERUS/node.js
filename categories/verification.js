const categories = require('./categoriesSchema')

const getCategoryIdByTitle = async(req, res, next) => {
    try{
    const {category} = req.body

    const category_response = await categories.findOne({title:category.toLowerCase()})
    if(category_response){

        //USING THIS ANOTHR FILE
        req.category = category_response
        return next()

        //SENDING RESPONSE

        // return res.status(201).json({
        //     success : "fetch successfully",
        //     data : category_response,
        //     status : 201
        // })
    }
    return res.status(402).json({
        message : "category dos'nt exist",
        status : 402
    })
    }
    catch(err){
        return res.status(500).json({
            message : "something went wrong",
            status : 500
        })
    }
}

const getCategoryIdByUrl=async(request,response,next)=>{
    try{
        
        const category= request.params.category
        const category_response = await categories.findOne({title:category.toLowerCase()})
        if(category_response){
            request.category = category_response
            return next()
        }
        return response.status(400).json({
            error:"category not exist",
            
        })  
    }    
    catch(err){
        return response.status(500).json({
            error:err,
            message: "error occoured"
        })  
    }
}

const getCategoryById = async(req, res, next) => {
    try{
    const category= req.params.id

    const category_response = await categories.findById(category)
    if(category_response){

        //USING THIS ANOTHR FILE
        req.category = category_response
        return next()

        //SENDING RESPONSE
        
        // return res.status(201).json({
        //     success : "fetch successfully",
        //     data : category_response,
        //     status : 201
        // })
    }
    return res.status(402).json({
        message : "category dos'nt exist",
        status : 402
    })
    }
    catch(err){
        return res.status(500).json({
            message : "something went wrong",
            status : 500
        })
    }
}

module.exports = {getCategoryIdByTitle, getCategoryById, getCategoryIdByUrl}