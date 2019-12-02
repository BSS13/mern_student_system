import {GET_STUDENTS, STUDENTS_LOADING} from './types';
import Axios from 'axios';

export const getStudents = () => dispatch =>{
   
    dispatch(setStudentsLoading());
    
    Axios.get("http://localhost:5000/api/students")
    .then(res=>dispatch({
        type:GET_STUDENTS,
        payload:res.data
    })
    )
    .catch(err=>{console.log(err)});
}

export const setStudentsLoading=()=>{
    return{
        type:STUDENTS_LOADING
    }
}