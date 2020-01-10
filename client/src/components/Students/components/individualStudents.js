import React from 'react';
import Card from '../../shared/components/Card';
import './IndividualStudents.css';

const IndividualStudents = (props) =>{
   return <div>
       {props.students.map(s => (
           <Card>
              <div className="container">
                  <div className="image_container">
                        
                  </div>

                  <div className="details_container">
                      <h4>{s.name}</h4>
                      <h5>Class: {s.Class}</h5>
                      <h5>Father Name: {s.Fathername}</h5>
                      <h5>Mother Name: {s.Mothername}</h5>
                      <h5>Address: {s.address}</h5>
                  </div>
              </div>
           </Card>
       ))}
   </div>
}

export default IndividualStudents;