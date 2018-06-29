import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <section className='logo_container'>
        <Link to={"/"}>
            <h1 className='mobile_logo'>
                CF
            </h1>
        </Link>
    </section>
);