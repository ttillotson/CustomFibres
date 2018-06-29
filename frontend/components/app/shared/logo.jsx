import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <section className='logo_container'>
        <Link to={'/'}>
            <h1 className='logo'>
                Custom Fibres
            </h1>
        </Link>
    </section>
);