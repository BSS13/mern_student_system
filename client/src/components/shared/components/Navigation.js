import React from 'react';
import NavItems from './NavItems';
import './Navigation.css';

const Navigation = () =>{
   return <div className="jumbotron">
       
       <div className="header_text">
       <h1>Hello</h1>
       </div>

       <div className="header_links">
       <NavItems/>
       </div>
   </div>
}

export default Navigation;