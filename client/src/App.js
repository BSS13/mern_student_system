import React,{Component} from 'react';
import StudentList from './components/Students/pages/StudentList';
import Navigation from './components/shared/components/Navigation';
import LoginModal from './components/Users/pages/LoginModal';
import RegisterModal from './components/Users/pages/RegisterModal';
import StudentRegisteration from './components/Students/pages/StudentRegisteration';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

const App = () => {
    return(
          <Router>     
            <Navigation/>
            <Switch>
              <Route path="/" exact><StudentList/></Route>
              <Route path="/registerStudent"><StudentRegisteration/></Route>
              <Route path="/signup"></Route>
              <Route path="/login"></Route>
              <Redirect to="/"/>
            </Switch>
        </Router>
    )
  
}

export default App;
