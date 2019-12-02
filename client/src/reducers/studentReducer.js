import {GET_STUDENTS, STUDENTS_LOADING} from '../actions/types';

const initialState={
    student_list:[],
    loading:false
}

export default function(state=initialState,action)
{
  switch(action.type){
          case GET_STUDENTS:
              return{
                ...state,
                student_list:action.payload,
                loading:false
            };

          case STUDENTS_LOADING:
              return{
                  ...state,
                  loading:true
              }
        
         default:
            return state;
  };
}