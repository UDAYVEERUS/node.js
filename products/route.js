const express = require('express')
const { addProducts, getProducts, getProductsById, getProductsByIdForDashboard } = require('./controller')
const productsGetByUser = require('./controller/getproduct')
const updateProducts = require('./patch/patch')

const router = express.Router()


// ADD PRODUCTS ROUTES
router.post("/add", addProducts)


// GET REQUEST ROUTES
router.get("/get", getProducts)
router.get("/:id", getProductsById)

//PRODUCT GET BY USER

router.get("/:id", productsGetByUser)


// PATCH REQUEST ROUTES
router.patch("/update",
    getProductsByIdForDashboard,
    updateProducts)
module.exports = router