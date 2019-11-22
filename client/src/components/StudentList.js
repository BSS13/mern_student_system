import React,{Component} from 'react';
import {Table} from 'reactstrap';

class StudentList extends Component{
    render()
    {
        return(
            <div>
               <Table style={{width:'90%',margin:'auto',marginTop:'20px'}}>
                   <thead style={{backgroundColor:'#3d70b2',color:'#dfe3e6'}}>
                       <tr>
                           <th>Photograph</th>
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

                   <tbody>

                   </tbody>
               </Table>
            </div>
        )
    }
}

export default StudentList;