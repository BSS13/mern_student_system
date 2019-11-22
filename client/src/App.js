import React,{Component} from 'react';
import Navbar from './components/Navbar';
import StudentRegisteration from './components/StudentRegisteration';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar/>
        <StudentRegisteration/>
      </div>
    )
  }
}

export default App;
