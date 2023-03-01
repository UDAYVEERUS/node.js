const products = require('../productsSchema')

const updateProducts = async(req, res, next) => {
    try{
        const product_response = await products.findByIdAndUpdate(req.product._id,req.body)
        if(product_response){
            return res.status(201).json({
                message:"updated successfully",
                data:product_response,
                status:201
            })
        }
        return res.status(402).json({
            message:"unable to update products",
            status:402
        })
    }catch(Err){
        return res.stauts.json({
            message : "something went wrong",
            status : 500
        })
    }
}
module.exports = updateProducts