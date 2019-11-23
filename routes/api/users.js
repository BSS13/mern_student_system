//This stores the routes corresponding to the actions associated with the users
const express=require('express');
const router=express.Router();
const User=require('../../modals/Users');

router.post("/",(req,res)=>{
    const {username,email,password,cpassword}=req.body;

    //Handle Empty Data
    if(!username || !email || !password || !cpassword){
        return res.status(400).json({msg:'Please Enter All Details'});
    }

    //Check if the password and confirm password match or not
    if(password!==cpassword)
    {
        return res.status(400).json({msg:'Password and Confirm Password Do Not Match'});
    }

    //Check if username already taken or not
    User.findOne({email:email})
    .then(user=>{
        if(user) return res.status(400).json({msg:'Email Address Already Regsitered'});

        const newUser=new User({
            username,
            email,
            password,
            cpassword
        });

        newUser.save()
        .then(user=>{
            return res.status(200).json({msg:`User registered with the details: ${user}`});
        })
    })



});

module.exports=router;