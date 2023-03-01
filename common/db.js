const mongoose  = require('mongoose')

const uri = 'mongodb+srv://uday:9670957901@cluster0.4j1e9wt.mongodb.net/test'

const connectMongo = () => {
    mongoose.connect(uri).then(() => console.log('DB Connection Successfull'))
}

mongoose.set('strictQuery',true)

module.exports = connectMongo