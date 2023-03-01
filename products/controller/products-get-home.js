const products  = require('../productsSchema')

const productsGetHome = async(req, res, next) => {
    try{
    const productId = req.params.id
    const product_response = await products.find({}).where('onHome').equals('true')
    if(product_response){
        req.products_home = product_response
        return next()
    }
    return res.status(402).json({
        message : "unable to fetch",
        status : 402
    })
}
catch(err){
    return res.status(201).json({
        message : "something went wrong",
        data : err,
        status : 500
    })
}
}

module.exports = productsGetHome