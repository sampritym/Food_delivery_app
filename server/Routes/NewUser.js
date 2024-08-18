const express=require('express')
const bcrypt = require('bcrypt');

const router=express.Router()
const User=require('../models/user')
const {body,validationResult}=require('express-validator');

router.post("/newuser",
    [
        body('email','Incorrect Email').isEmail(),
        body('name').isLength({min:5}),
        body('password','Incorrect Password').isLength({min:5})
    ],async(req,res)=>{
      const errors=validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
      }

    try{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
     await User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        location:req.body.location
       })
       res.json({success:true});

    }catch(error){
        console.log(error)
        res.json({success:false});
    }

});

module.exports= router;