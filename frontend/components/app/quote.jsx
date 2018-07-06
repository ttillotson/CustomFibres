import React from 'react';

export default () => {
    const eriksEmail = "";
    return (
        <section className="quote_container">
            <h1>Request a Quote</h1>
            <a href={`mailto: ${eriksEmail}`}>Request a Quote</a>
        </section>
    );
};