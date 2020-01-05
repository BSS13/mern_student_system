//This stores the routes corresponding to the actions associated with the users
const express=require('express');
const router=express.Router();
const User=require('../../modals/Users');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const auth=require('../middleware/auth');
const usersController = require('../../controllers/usersController');

//Route to fetch the details of the user involving use of Middleware
router.get("/user",auth,usersController.getUser);

//Route for the Registeration
router.post("/",usersController.signup);


//Route for the Login
router.post("/login",usersController.login);



module.exports=router;