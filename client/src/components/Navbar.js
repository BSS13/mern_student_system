//This is the navbar for the UI
import React,{Component} from 'react';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import WebsiteLogo from '../images/websitelogo.png';

class Navbar extends Component
{
    render()
    {
        return(
            <div>
            <img src={WebsiteLogo} width="100px" height="100px" alt="websiteLogo"/>
            <RegisterModal/>
            <LoginModal/>
            </div>
        )
    }
}


export default Navbar;