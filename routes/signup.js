


const express=require('express')

const app=express.Router();
const UserModel=require("../model/UserModel")
const jwt=require("jsonwebtoken")
app.post("/",async(req,res)=>{


let data=req.body

try{

let user=await UserModel.findOne(data)
if(user){
return   res.send("user already exist")

}else{


let user=UserModel.create({...data})

res.send("account create siccessfully")
}


}catch(e){

res.sendStatus({
    status:"something went wrong",
    error:e
})

}

// console.log(data);



})

module.exports=app;