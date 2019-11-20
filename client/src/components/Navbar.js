//This is the navbar for the UI
import React,{Component} from 'react';
import RegisterModal from './RegisterModal';


class Navbar extends Component
{
    render()
    {
        return(
            <div>
            <h1>Hello</h1>
            <RegisterModal/>
            </div>
        )
    }
}


export default Navbar;