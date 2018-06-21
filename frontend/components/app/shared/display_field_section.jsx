import React from 'react';

export default (props) => {
    const { title, body } = props;
    return (
        <section className="field_item">
            <h2>{title}</h2>
            <p>{body}</p>
        </section>
    );
};