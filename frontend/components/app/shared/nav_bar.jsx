import React from 'react';
import { NavLink } from 'react-router-dom';


export default () => (
    <nav className='app_nav'>
        <NavLink exact to={'/'} activeClassName="active"> 
            Home
        </NavLink>
        <NavLink to={'/technique'} activeClassName="active"> 
            Process
        </NavLink>
        <NavLink to={'/showcase'} activeClassName="active"> 
            Showcase
        </NavLink>
        <NavLink to={'/store'} activeClassName="active"> 
            Store
        </NavLink>
        <NavLink to={'/quote'} className='email' activeClassName="active">
            Quote
        </NavLink>
    </nav>
);