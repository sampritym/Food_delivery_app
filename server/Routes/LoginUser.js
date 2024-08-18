const express=require('express')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt');


const router=express.Router()
const User=require('../models/user')
const jwtSecret="ThisIsTheJWTSecretKey"
router.post("/loginuser",async(req,res)=>{

    let email=req.body.email; 
    try{
     let userData= await User.findOne({email});
     if(!userData){
        return res.status(400).json({error:"Incorrect Credentials"})
     }
     const pwd= await bcrypt.compare(req.body.password,userData.password)
     if(!pwd){
        return res.status(400).json({error:"Incorrect Credentials"})

     }
     const data={
        user:{
            id:userData.id
        }
     }
     const authToken=jwt.sign(data,jwtSecret)
      return res.json({success:true,authToken:authToken});
    }catch(error){
        console.log(error)
        res.json({success:false});
    }

});

module.exports= router;