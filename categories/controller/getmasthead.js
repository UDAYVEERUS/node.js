const categories = require('../categoriesSchema')

const categoryGetMasthead = async(req, res, next) => {
try{
    const category_response = await categories.find({}).where("mastHead").equals(true).where('onHome').equals(false)
    if(category_response){
        req.category_masthead = category_response
        return next()
    }
    return res.status(402).json({
        message  :"unable to add this category on masthead",
        status :402
    })
}
catch(err){
    return res.status(500).json({
        message  :"something went wrong",
        data : err,
        status :500
    })
}
}

module.exports  = categoryGetMasthead