import React from 'react';

export default (props) => {
    const { title, body, images } = props.field;
    const { pageName } = props;

    const displayImages = images.map(image => 
        <img key={`key=${image.signed_id}`} className={'field_image'} src={image.service_url}/>
    );

    // debugger;

    return (
        <section className="field_item">
            <h2 className={`field_title `  + pageName}>{title}</h2>
            <p className={`field_body ` + pageName}>{body}</p>
            { displayImages }
        </section>
    );
};