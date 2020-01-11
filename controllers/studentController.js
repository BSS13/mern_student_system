//Function to get all students
const getAllStudents = (req,res)=>{
    Student.find().then(students=>{return res.json(students)});
  };


//Function to Create New Student
const createStudent = async (req,res)=>{
    const {rollno,name,Fathername,Mothername,DOB,Class,address,contact}=req.body;

    if(!rollno || !name || !Fathername || !Mothername || !DOB || !Class  || !address || !contact){
        const error = new Error('Please Enter Complete Details');
        error.code = 400;
        return next(error);
    }

    let student;

    try{
    student = await Student.findOne({rollno:rollno})
    }catch(err){
        const error = new Error('Operation to find student failed');
        error.code = 400;
        return next(error);
    }

    if(student){
        const error = new Error('Student Already Exists!!');
        error.code = 401;
        return next(error);
    }

    //Add Student Details if student not already Registered
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

         try{
           await newStudent.save()
         }catch(err){
             const error = new Error('Error in executing the operation');
             error.code = 400;
             return next(error);
         }

         res.status(201).json({student:newStudent});
   
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