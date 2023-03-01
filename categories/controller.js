const categories = require("./categoriesSchema")

const categoryPost = async (req, res, next) => {
    try {
        const category_response = await categories.create(req.body)
        if (category_response) {
            return res.status(201).json({
                data: category_response,
                message: "category add successfully",
                status: 201
            })
        }
        return res.status(402).json({
            data: category_response,
            message: "unable to add category",
            status: 402
        })
    }
    catch (Err) {
        return res.status(500).json({
            data: err,
            message: "something went wrong",
            status: 500
        })
    }
}


const categoryGet = async (req, res, next) => {
    try {
        const category_response = await categories.find({})
        if (category_response) {
            return res.status(201).json({
                data: category_response,
                message: "fetched successfully",
                status: 201
            })
        }
        return res.status(402).json({
            data: category_response,
            message: "unable to get categories",
            status: 402
        })
    }
    catch (Err) {
        return res.status(500).json({
            data: err,
            message: "something went wrong",
            status: 500
        })
    }
}

const categoryPatch = async (req, res, next) => {
    try {
        const {categoryId} = req.body
        const category_response = await categories.findByIdAndUpdate(categoryId,req.body)
        console.log(category_response,"here")
        if (category_response) {
            return res.status(201).json({
                data: category_response,
                message: "updated successfully",
                status: 201
            })
        }
        return res.status(402).json({
            data: category_response,
            message: "unable to add category",
            status: 402
        })
    }
    catch (Err) {
        return res.status(500).json({
            data: Err,
            message: "something went wrong",
            status: 500
        })
    }
}

const categoryDelete = async (req, res, next) => {
    try {
        const categoryId = req.params.id
        const category_response = await categories.findByIdAndDelete(categoryId)
        if (category_response) {
            return res.status(201).json({
                data: category_response,
                message: "deleted successfully",
                status: 201
            })
        }
        return res.status(402).json({
            data: category_response,
            message: "unable to add category",
            status: 402
        })
    }
    catch (Err) {
        return res.status(500).json({
            data: Err,
            message: "something went wrong",
            status: 500
        })
    }
}

module.exports = { categoryDelete, categoryGet, categoryPatch, categoryPost }