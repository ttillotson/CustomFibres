import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <section className='emblem_container'>
        <Link to={"/"}>
            <img src="https://res.cloudinary.com/tiptoptomes/image/upload/v1530830542/logo_3.png" alt="Emblem" className='emblem'/>
        </Link>
    </section>
);