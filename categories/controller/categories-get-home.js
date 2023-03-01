const categories = require('../categoriesSchema')

const getCategoryHome = async(req, res, next) => {
    try{
    const category_response = await categories.find({}).where('onHome').equals(true).where('mastHead').equals(false)
    if(category_response){
       req.categories_home = category_response
       return next()
    }
    return res.status(402).json({
        message : "unable to update this category",
        status :402
    })
}
catch(err){
    return res.status(500).json({
        message : "something went wrong",
        data : err,
        status :500
    })
}
}

module.exports = getCategoryHome