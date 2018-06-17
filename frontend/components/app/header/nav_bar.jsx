import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
    <nav>
        <Link to={'/'}> 
            Home
        </Link>
        <Link to={'/technique'}> 
            The Process
        </Link>
        <Link to={'/showcase'}> 
            Showcase
        </Link>
        <span className='email'/>
    </nav>
);