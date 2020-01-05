import React,{Component} from 'react';
import Navbar from './components/Navbar';
import StudentRegisteration from './components/StudentRegisteration';
import StudentList from './components/StudentList';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
          <Router>     
           <div>
           <Navbar/>
            <StudentRegisteration/>
            <StudentList/>
          </div>
        </Router>
     </Provider>
    )
  }
}

export default App;
