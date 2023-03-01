const { passwordGeneraate, passwordValidate } = require('../common/password')
const User = require('./userSchema')
const jwt = require('jsonwebtoken')
const { response } = require('express')
const JWR_SECRET = 'itsasecret@1234'

const userPost = async(req, res, next) => {
    try{
    const {name, email, mobile, password} = req.body
    const passwordHash = await passwordGeneraate(password)
    const user_response = await User.create({
        name:name,
        email : email,
        mobile :mobile,
        password : passwordHash
    })
    if(user_response){
        return res.status(201).json({
            message : "account created successfully",
            data : user_response,
            status :201
        })
    }
    return res.status(402).json({
        message : "please fill required details",
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

const loginPost = async(req, res, next) => {
    try{
    const {email, password} = req.body
    const user_response = await User.find({email :email})
    const passwordComapre = await passwordValidate(password, user_response[0].password)
    if(!passwordComapre){
        return res.status(402).json({
            message : "Invalid credentials",
            status : 402
        })
    }
    const data = {
        user : {
            id : user_response._id
        }
    }
    const authToken = await jwt.sign(data,JWR_SECRET)
    return res.status(201).json({success  :"login successfully",token:`${authToken}`})
    
    }
    catch(err){
        res.status(500).json({
            message : "something went wrong",
            data : err,
            status : 500
        })
    }
}

const usersGet = async(req, res, next) => {
    try{
    const user_response = await User.find({})

    if(user_response){
        return res.status(201).json({
            message : "fetched successfully",
            data : user_response,
            status : 201
        })
    }
    return res.status(402).json({
        message  :"unable to fetch users",
        status : 402
    })
}
catch(err){
    return res.status(500).json({
        message  : "something went wrong",

    })
}
}

module.exports = {userPost,loginPost, usersGet}