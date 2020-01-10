import React,{Component} from 'react';
import StudentList from './components/Students/pages/StudentList';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

const App = () => {
    return(
          <Router>     
           
            <Switch>
              <Route path="/" exact><StudentList/></Route>
              
              <Redirect to="/"/>
            </Switch>
        </Router>
    )
  
}

export default App;
