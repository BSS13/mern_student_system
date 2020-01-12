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
const deleteStudent = async (req,res)=>{
    
    const rollno= req.params.rollno;
    let student;
    try{
     student= await Student.findById(rollno);
    }catch(err){
        const error = new Error('Error in code execution');
        error.code = 500;
        return next(error);
    }

    try{
        await student.remove();
    }catch(err){
        const error = new Error('Error in executing Delete Logic');
        error.code = 500;
        return next(error);
    }

    res.status(200).json({message:'Successfully Deleted'});

};

exports.getAllStudents = getAllStudents;
exports.createStudent = createStudent;
exports.deleteStudent = deleteStudent;