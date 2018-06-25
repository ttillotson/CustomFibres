import React from 'react';

export default (props) => {
    const { title, body, pageName } = props;
    return (
        <section className="field_item">
            <h2 className={`field_title `  + pageName}>{title}</h2>
            <p className={`field_body ` + pageName}>{body}</p>
        </section>
    );
};