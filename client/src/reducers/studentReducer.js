import {GET_STUDENTS} from '../actions/types';

const initialState={
    student_list=''
}

export default function(state=initialState,action)
{
  switch(action.type){
      case GET_STUDENTS:
          return{
              ...state,
              student_list:action.payload
          };
        
       default:
           return state;
  };
}