import React from 'react';
import NavItems from './NavItems';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () =>{
   return <div className="jumbotron">
       
       <div className="header_text">
       <h1><Link to="/">Hello</Link></h1>
       </div>

       <div className="header_links">
       <NavItems/>
       </div>
   </div>
}

export default Navigation;