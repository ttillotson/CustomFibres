import React from 'react';

export default ({ signOut }) => (
    <header className='admin_header'>
        <h1>Admin Dash</h1>
        <button onClick={signOut}>Sign Out</button>
    </header>
);