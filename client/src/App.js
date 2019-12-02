import React,{Component} from 'react';
import Navbar from './components/Navbar';
import StudentRegisteration from './components/StudentRegisteration';
import StudentList from './components/StudentList';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render(){
    return(
      <Provider store={store}>     
         <div>
        <Navbar/>
        <StudentRegisteration/>
        <StudentList/>
      </div>
     </Provider>
    )
  }
}

export default App;
