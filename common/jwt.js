const jwt = require('jsonwebtoken')
const JWT_SECRET = 'itsasecret@1234'

const Verifyjwt = (req, res, next) => {
    const token = req.header('Authorization')
    if(!token) {
        return res.status(402).json({
            message  :"No jwt provided",
            status:402
        })
    }
    try{
    const validate = jwt.verify(token,JWT_SECRET)
    if(validate){
        req.Jwt_data = validate
        return next()
    }
    return res.status(402).json({
        message  :"Invalid jwt",
        status:402
    })
}catch(Err){
    return res.status(500).json({
        message:"something went wrong",
        data : Err,
        status : 500
    })
}
}

module.exports = Verifyjwt