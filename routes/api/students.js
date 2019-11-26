//Routes for the student entry into the list and its related handling
const express=require("express");
const router=express.Router();
const Student=require('../../modals/Students');

//Route to fetch the students which will be rendered to show the list as table in the Student List Component
router.get("/",(req,res)=>{
  Student.find().then(students=>{return res.json(students)});
});

//Route to handle the post requests that complete the Registeration
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
            return res.json({msg:'Student Registered Successfully with Details:'+student});
        })
    })
})

module.exports=router;