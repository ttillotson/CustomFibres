import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const { title, body, images } = props.field;
    const { pageName, StyledImage, idx } = props;

    const displayImages = images.map(image => 
        <StyledImage key={`key=${image.signed_id}`} src={image.service_url}/>
    );

    // debugger;
    let klass = 'field_item';
    if (idx > 0 && idx % 2 === 0) klass += ' reverse';

    return (
        <section className={klass}>
            <article className={`field_text`}>
                <h2 className={`field_title `  + pageName}>{title}</h2>
                <p className={`field_body ` + pageName}>{body}</p>
            </article>
            <StyledImageContainer>
                { displayImages }
            </StyledImageContainer>
        </section>
    );
};

const StyledImageContainer = styled.article`
    display: flex;
    flex-direction: column;
`;