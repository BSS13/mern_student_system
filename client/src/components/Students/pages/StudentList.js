import React,{useState,useEffect} from 'react';
import {Table,Button} from 'reactstrap';
import IndividualStudents from '../components/IndividualStudents';

const StudentList = () =>{
     
    const [studentList,setStudentList] = useState([{
       id:1234,
       rollno:1,
       name:'Balpreet',
       Fathername:'Jaspreet',
       Mothername:'Parminder',
       DOB:'14June,1996',
       Class:'Masters',
       address:'1115 Akash Avenue'
    },
    {
        id:5678,
        rollno:2,
        name:'Navpreet',
        Fathername:'Jaspreet',
        Mothername:'Parminder',
        DOB:'18Dec,1998',
        Class:'Bachelors',
        address:'1115 Akash Avenue'
     }
]);
    const [isLoading,setIsLoading] = useState();

    return <div>
                <h2 style={{color:'#3d70b2',textAlign:'center'}}>List of Registered Students</h2>
                <div>
                <IndividualStudents students={studentList}/>
                </div>
            </div>
        
    }
export default StudentList;