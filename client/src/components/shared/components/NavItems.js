import React from 'react';
import './NavItems.css';
import { NavLink } from 'react-router-dom';

const NavItems = () =>{
    return <ul>
        <li>
            <NavLink to="/registerStudent">Add Students</NavLink>
        </li>

        <li>
            <NavLink to="/signup">Signup</NavLink>
        </li>

        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
    </ul>
}

export default NavItems;