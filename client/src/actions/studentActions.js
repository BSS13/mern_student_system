import {GET_STUDENTS} from './types';
import Axios from 'axios';

export const getStudents = () => dispatch =>{
    let tbodyRow='';

    Axios.get("http://localhost:5000/api/students")
    .then(res=>dispatch({
        type:GET_STUDENTS,
        payload:res.data
    })
    )
    .catch(err=>{console.log(err)});
}