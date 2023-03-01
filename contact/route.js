const express = require('express')
const contactGet = require('./controller/get')
const contactPost = require('./controller/post')

const router = express.Router()



// POST ROUTES 
router.post("/post",contactPost)


// GET ROUTES
router.get("/get", contactGet)

module.exports = router