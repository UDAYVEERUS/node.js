const express = require('express')
const app = express()
app.use(express.json())

const connectMongo = require('./common/db')
connectMongo()

const port = 3022


app.use("/user",require('./user/route'))



app.get("/",(req, res)=>{
    res.json("josn")
})
app.listen(port,()=>{
    console.log(`server started at http:localhost:${port}`)

})
