import React,{useState,useEffect} from 'react';
import {Table,Button} from 'reactstrap';
import individualStudents from './individualStudents';

const StudentList = () =>{
     
    const [studentList,setStudentList] = useState();
    const [isLoading,setIsLoading] = useState();



    return(
            <div>
                <h2 style={{color:'#3d70b2',textAlign:'center'}}>List of Registered Students</h2>
                <individualStudents students={studentList}/>
               <Table style={{width:'90%',margin:'auto',marginTop:'20px'}}>
                   <thead style={{backgroundColor:'#3d70b2',color:'#dfe3e6'}}>
                       <tr>
                           <th>Roll Number</th>
                           <th>Name</th>
                           <th>Father Name</th>
                           <th>Mother Name</th>
                           <th>DOB</th>
                           <th>Class</th>
                           <th>Address</th>
                           <th>Contact Details</th>
                           <th>Edit</th>
                           <th>Delete</th>
                       </tr>
                   </thead>
                      
                   <tbody id="studentList">
                      {student_list.map(student=>(
                          <tr>
                              <td>{student.rollno}</td>
                              <td>{student.name}</td>
                              <td>{student.Fathername}</td>
                              <td>{student.Mothername}</td>
                              <td>{student.DOB}</td>
                              <td>{student.Class}</td>
                              <td>{student.address}</td>
                              <td>{student.contact}</td>
                              <td><Button>Edit </Button></td>
                              <td><Button color="danger" onClick={this.deleteRecord.bind(this,student.rollno)}>Delete</Button></td>
                          </tr>
                      ))}
                   </tbody>
               </Table>
            </div>
        )
    }
export default StudentList;