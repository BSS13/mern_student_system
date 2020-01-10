import React from 'react';
import './NavItems.css';
import { NavLink } from 'react-router-dom';

const NavItems = () =>{
    return <ul>
        <li>
            <NavLink to="/student">Add Students</NavLink>
        </li>

        <li>
            <NavLink to="/">Authenticate</NavLink>
        </li>
    </ul>
}

export default NavItems;