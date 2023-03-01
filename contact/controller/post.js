const contact = require('../contactSchema')

const contactPost = async(req, res, next) => {
    try{
    const contact_response = await contact.create(req.body)
    if(contact_response){
        return res.status(201).json({
            data : contact_response,
            message : "message sent successfully",
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

module.exports = contactPost