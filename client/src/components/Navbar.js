//This is the navbar for the UI
import React,{Component} from 'react';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import WebsiteLogo from '../images/websitelogo.png';
import {Nav,NavItem} from 'reactstrap';

class Navbar extends Component
{
    render()
    {
        return(
            <div className="jumbotron" style={mainHeaderStyle}>
            <Nav>
            <img src={WebsiteLogo} width="100px" height="100px" alt="websiteLogo"/>
            <NavItem>
              <RegisterModal/>
            </NavItem>
            
            <NavItem>
              <LoginModal/>
            </NavItem>
            </Nav>
            </div>
        )
    }
}

const mainHeaderStyle={
   backgroundColor:'#3d70b2',
   padding:'6px'
};

export default Navbar;