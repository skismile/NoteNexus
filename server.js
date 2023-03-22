const express=require('express')
const mongoose=require("mongoose")
require("dotenv").config()
const PORT=process.env.PORT||8080
const app=express()
const SignupRoute=require("./routes/signup")
const SigninRoute=require("./routes/signin")
app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.get('/',(req,res)=>{res.send('hello')})
app.use("/signup",SignupRoute)


app.use("/signin",SigninRoute)






    app.listen(PORT,async()=>{
    
   await mongoose.connect("mongodb://127.0.0.1:27017/test")
    console.log(`server is runing on port ${PORT}`)

})
