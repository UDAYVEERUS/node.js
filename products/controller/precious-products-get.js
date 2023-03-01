const products  = require('../productsSchema')

const getPreciousProducts = async(req, res, next) => {
    try{
    const product_response = await products.find({}).where('type').equals(1)
    if(product_response){
        return res.status(201).json({
            data : product_response,
            message : "fetched successfully",
            status : 201
        })
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

module.exports = getPreciousProducts