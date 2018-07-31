import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const { title, body, images } = props.field;
    const { pageName, StyledImage } = props;

    const displayImages = images.map(image => 
        <StyledImage key={`key=${image.signed_id}`} src={image.service_url}/>
    );

    // debugger;

    return (
        <section className="field_item">
            <h2 className={`field_title `  + pageName}>{title}</h2>
            <p className={`field_body ` + pageName}>{body}</p>
            <StyledImageContainer>
                { displayImages }
            </StyledImageContainer>
        </section>
    );
};

const StyledImageContainer = styled.article`
    display: flex;
    // justify-content: 
    // flex-direction: start;
`;