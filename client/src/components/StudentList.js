import React,{Component} from 'react';
import {Table,Button} from 'reactstrap';
import {connect} from 'react-redux';
import {getStudents} from '../actions/studentActions';
import EditStudentModal from './EditStudentModal';
import Axios from 'axios';

class StudentList extends Component{

    componentDidMount()
    {
        this.props.getStudents();
    }

    deleteRecord= (rollno) =>{
        console.log(rollno+"is getting deleted");
      
        Axios.delete(`http://localhost:5000/api/students/${rollno}`)
       .then(res=>{
           console.log(res.data.msg);
       })
       .catch(err=>{console.log(err)});
    }
    
    render()
    {
        const {student_list}=this.props.student;

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
                              <td><EditStudentModal/></td>
                              <td><Button color="danger" onClick={this.deleteRecord.bind(this,student.rollno)}>Delete</Button></td>
                          </tr>
                      ))}
                   </tbody>
               </Table>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    student:state.student
})

export default connect(mapStateToProps,{getStudents})(StudentList);