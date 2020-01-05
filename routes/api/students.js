//Routes for the student entry into the list and its related handling
const express=require("express");
const router=express.Router();
const Student=require('../../modals/Students');
const studentController = require('../../controllers/studentController');

//Route to fetch the students which will be rendered to show the list as table in the Student List Component
router.get("/",studentController.getAllStudents);

//Route to handle the post requests that complete the Registeration
router.post("/",studentController.createStudent);

//TO handle the delete request
router.delete("/:rollno",studentController.deleteStudent);

module.exports=router;