import React,{Component} from 'react';
import Navbar from './components/Navbar';
import StudentRegisteration from './components/StudentRegisteration';
import StudentList from './components/StudentList';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar/>
        <StudentRegisteration/>
        <StudentList/>
      </div>
    )
  }
}

export default App;
