const products = require('./productsSchema')

const addProducts = async (req, res, next) => {
    try {
        const {
            title,
            price,
            image,
            description,
            description_short,
            type,
            stock,
            onHome,
            metal,
            sku
        } = req.body
        const product_response = await products.create({
            title: title,
            price: price,
            image: image,
            description: description,
            description_short: description_short,
            stock: stock,
            price: price,
            type: type,
            metal: metal,
            onHome: onHome,
            sku: sku

        })
        if (product_response) {
            return res.status(201).json({
                message: "products add successfully",
                data: product_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to add products",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "something went wrong",
            status: 500
        })
    }

}

const getProducts = async (req, res, next) => {
    try {
        const product_response = await products.find({})
        if (product_response) {
            return res.status(201).json({
                message: "products fetched successfully",
                data: product_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to add products",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "something went wrong",
            status: 500
        })
    }

}

const getProductsById = async (req, res, next) => {
    try {
        // var { order } = request.body
        // var product_uuid_array = []
        // order.map((data) => {
        //     product_uuid_array.push(data._id)
        //     return true
        // })
        // const product_response = await products.find({ '_id': product_uuid_array })

        // if (product_response) {
        //     request.product_array = product_response
        //     return next()
        // }
       const productId = req.params.id
        const product_response = await products.findById(productId)
        if (product_response) {
            return res.status(201).json({
                message: "unable to process",
                data :  product_response,
                status: 201
            })
            
        }
        return res.status(402).json({
            message: "unable to process",
            status: 402
        })


    }
    catch (err) {
        return res.status(500).json({
            message: "something went wrong",
            data: err,
            status: 500
        })
    }

}

const getProductsByIdForDashboard = async(req, res, next) => {
    try{
    const {productId} = req.body
    const product_response = await products.findById(productId)
    if(product_response){
       req.product = product_response
       return next()
    }
    return res.status(402).json({
        message : "unable to fetch",
        status : 201
    })
}
catch(Err){
    return res.status(500).json({
        message : "something went wrong",
        data : Err,
        status : 500
    })
}
}

module.exports = { addProducts, getProducts, getProductsById  , getProductsByIdForDashboard}