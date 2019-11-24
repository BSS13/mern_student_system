const express=require('express');
const mongoose=require('mongoose');
const config=require('config');
const path=require('path');
const cors=require('cors');
//Using config to fetch the mongo URI and use of '' to fetch the value rather than normal variable value fetch
const db=config.get('mongoURI');


const app=express();
app.use(cors());
//Required Middleware to handle for the form submission and url data handling 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Use the routes
app.use("/api/users",require('./routes/api/users'));
app.use("/api/students",require('./routes/api/students'));


app.get("/",(req,res)=>{
    res.send("<h1>Hello Server is Running </h1>");
});
//Assigning of the PORT value at which the server will be listening 
const PORT=process.env.PORT||5000;

//Connect to the Mongo DB server

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Mongo DB connected Successfully!!!!!!")})
.catch(err=>{console.log(err)});

//Application is made to listen at the PORT, thus made ready to respond to the incoming requests
app.listen(PORT,(err)=>{
    if(err)
    {
      console.log(`Error Encountered is ${err}`);    
    }
    console.log(`Server running on Port ${PORT}`)
});