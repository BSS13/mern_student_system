import React,{Component} from 'react';
import Navbar from './components/Navbar';
import StudentRegisteration from './components/StudentRegisteration';
import StudentList from './components/StudentList';
import {BrowserRouter as Router,Route} from 'react-router-dom';

const App = () => {
    return(
          <Router>     
           <div>
           <Navbar/>
            <StudentRegisteration/>
            <StudentList/>
          </div>
        </Router>
    )
  
}

export default App;
