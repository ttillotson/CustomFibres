import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
    <nav className='app_nav'>
        <Link to={'/'}> 
            Home
        </Link>
        <Link to={'/technique'}> 
            The Process
        </Link>
        <Link to={'/showcase'}> 
            Showcase
        </Link>
        <Link to={'/'} className='email'>
            Request a Quote
        </Link>
    </nav>
);