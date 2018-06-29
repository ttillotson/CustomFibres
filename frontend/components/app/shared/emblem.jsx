import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <section className='emblem_container'>
        <Link to={"/"}>
            <h1 className='emblem'>
                CF
            </h1>
        </Link>
    </section>
);