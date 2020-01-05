import React from 'react';


//Function to get all students
const getAllStudents = (req,res)=>{
    Student.find().then(students=>{return res.json(students)});
  };


//Function to Create New Student
const createStudent = (req,res)=>{
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
};


//Function to delete Student
const deleteStudent =(req,res)=>{
    
    res.status(200).json({msg:`Roll Number ${req.params.rollno} is received`});
   
    Student.findOne({rollno:req.params.rollno})
    .then(student=>student
       .remove()
       .then(()=>res.json({msg:`Successfully Deleted ${req.params.rollno}`}))
       .catch(err=>res.status(404).json({msg:'Erro in Query Execution'})))
   .catch(err=>res.status(404).json({success:false}))

};

exports.getAllStudents = getAllStudents;
exports.createStudent = createStudent;
exports.deleteStudent = deleteStudent;