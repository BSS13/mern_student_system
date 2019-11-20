//This is the navbar for the UI
import React,{Component} from 'react';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

class Navbar extends Component
{
    render()
    {
        return(
            <div>
            <h1>Hello</h1>
            <RegisterModal/>
            <LoginModal/>
            </div>
        )
    }
}


export default Navbar;