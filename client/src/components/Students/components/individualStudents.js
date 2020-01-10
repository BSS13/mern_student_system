import React from 'react';

const individualStudents = (props) =>{
   
   props.students.map(s=>{<div>
    <h1>{s.name}</h1>
    </div>})
}

export default individualStudents;