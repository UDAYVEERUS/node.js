const contact = require('../contactSchema')

const contactGet = async(req, res, next) => {
    try{
    const contact_response = await contact.find({})
    if(contact_response){
        return res.status(201).json({
            data : contact_response,
            message : "fetched successfully",
            status : 201
        })
    }
    return res.status(402).json({
        message : "unable to send message",
        status : 402
    }) 
}
catch(err){
    return res.status(00).json({
        message : "unable to send message",
        status : 500
    }) 
}
}

module.exports = contactGet