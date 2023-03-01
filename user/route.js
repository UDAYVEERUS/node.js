const express = require('express')
const Verifyjwt = require('../common/jwt')
const { userPost, loginPost, usersGet } = require('./controller')

const router = express.Router()

router.post("/registration", userPost)

router.post("/login", loginPost)

router.get("/getusers",
    Verifyjwt,
    usersGet
)

module.exports = router