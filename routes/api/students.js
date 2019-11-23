//Routes for the student entry into the list and its related handling
const express=require("express");
const router=express.Router();
const Student=require('../../modals/Students');

router.post("/",(req,res)=>{
    const {rollno,name,Fathername,Mothername,DOB,Class,address,contact}=req.body;

    if(!rollno || !name || !Fathername || !Mothername || !DOB || !Class  || !address || !contact){
        return res.status(400).json({msg:'Please Enter Complete Details'});
    }

    Student.findOne({rollno:rollno})
    .then(student=>{
        if(student) return res.status(400).json({msg:'Student with the Roll Number Already Exists'});


        const newStudent=new Student({
            rollno,
            name,
            Fathername,
            Mothername,
            DOB,
            Class,
            address,
            contact
        });

        newStudent.save()
        .then(student=>{
            return res.status(400).json({msg:'Student Regsitered Successfully with Details:'+student});
        })
    })
})

module.exports=router;