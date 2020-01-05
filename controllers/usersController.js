const getUser = (req,res)=>{
    User.findById(req.user.id)
    .select("-password")
    .select("-cpassword")
    .then(user=>res.json(user))
};

const signup =(req,res)=>{
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
 
        //Generate a encrypted password
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;
                newUser.password=hash;

                newUser.save()
                .then(user=>{

                    //Create a token when User successfully registers
                    jwt.sign(
                        {id:user.id},
                        config.get('jwtSecret'),
                        {expiresIn:7200},
                        (err,token)=>{
                            if(err) throw err;

                            res.json({
                                token:token,
                                user:{
                                    id:user.id,
                                    name:user.username,
                                    email:user.email
                                }
                            });
                        }
                    )
                })
            })
        })
        
    })

};

const login = (req,res)=>{
    const {email,password}=req.body;

    //Check for empty
    if(!email || !password){
        return res.status(400).json({msg:'Please Enter Complete Details'});
    }

    User.findOne({email:email})
    .then(user=>{
        if(user==null) return res.status(400).json({msg:'No Such Record Exists'});


        //Code modified for encrypted password check when logging in 

        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            if(!isMatch) return res.status(400).json({msg:'Sorry! Your password does not match'});
            
            jwt.sign(
                {id:user.id},
                config.get('jwtSecret'),
                {expiresIn:7200},
                (err,token)=>{
                    if(err) throw err;

                    res.json(({
                       token,
                       user:{
                           id:user.id,
                           name:user.username,
                           email:user.email
                       } 
                    }))
                }
            )
        })

    })
};

exports.getUser = getUser;
exports.signup = signup;
exports.login = login;