const express = require('express')
const app = express()
app.use(express.json())

const connectMongo = require('./common/db')
connectMongo()

const port = 3022

//USER ROUTE
app.use("/user",require('./user/route'))

//PRODUCT ROUTE
app.use("/products",require("./products/route"))

//CATEGORIES ROUTE
app.use("/category",require('./categories/route'))

// CONTACT ROUTE
app.use("/contact",require("./contact/route"))

app.get("/",(req, res)=>{
    res.json("josn")
})
app.listen(port,()=>{
    console.log(`server started at http:localhost:${port}`)

})
