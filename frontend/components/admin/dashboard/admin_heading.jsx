import React from 'react';

export default ({ signout }) => (
    <header className='admin_header'>
        <h1>Admin Dash</h1>
        <button onClick={signout}>Sign Out</button>
    </header>
);