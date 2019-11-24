import React,{Component} from 'react';
import {Table} from 'reactstrap';
import Axios from 'axios';

class StudentList extends Component{

    componentDidMount()
    {
        let tbodyRow='';
        Axios.get("http://localhost:5000/api/students")
        .then(res=>{
            res.data.forEach(student => {
                tbodyRow+='<tr>';
                tbodyRow+='<td>'+student.rollno+'</td>';
                tbodyRow+='<td>'+student.name+'</td>';
                tbodyRow+='<td>'+student.Fathername+'</td>';
                tbodyRow+='<td>'+student.Mothername+'</td>';
                tbodyRow+='<td>'+student.DOB+'</td>';
                tbodyRow+='<td>'+student.Class+'</td>';
                tbodyRow+='<td>'+student.address+'</td>';
                tbodyRow+='<td>'+student.contact+'</td>';
                tbodyRow+='</tr>'
            });
            document.getElementById("studentList").innerHTML=tbodyRow;
        });
    }
    render()
    {
        return(
            <div>
                <h2 style={{color:'#3d70b2',textAlign:'center'}}>List of Registered Students</h2>
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
                       </tr>
                   </thead>

                   <tbody id="studentList">

                   </tbody>
               </Table>
            </div>
        )
    }
}

export default StudentList;