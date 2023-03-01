const express = require('express')
const { categoryPost, categoryGet, categoryPatch, categoryDelete } = require('./controller')
const {getCategoryIdByTitle} = require('./verification')

const router = express.Router()

router.post("/add", categoryPost)
router.get("/get", categoryGet)
router.patch("/update",categoryPatch)
router.delete("/:id", categoryDelete)



module.exports = router