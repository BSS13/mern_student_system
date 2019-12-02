import React,{Component} from 'react';
import {Table} from 'reactstrap';
import Axios from 'axios';
import {connect} from 'react-redux';
import {getStudents} from '../actions/studentActions';

class StudentList extends Component{

    componentDidMount()
    {
        this.props.getStudents();
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

const mapStateToProps=state=>({
    student:state.student
})

export default connect(mapStateToProps,{getStudents})(StudentList);