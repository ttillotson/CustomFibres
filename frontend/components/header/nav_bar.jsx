import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
    <nav>
        <Link to={'/'}> 
            Home
        </Link>
        <Link to={'/development'}> 
            The Process
        </Link>
        <Link to={'/samples'}> 
            Showcase
        </Link>
        <span className='email'/>
    </nav>
);