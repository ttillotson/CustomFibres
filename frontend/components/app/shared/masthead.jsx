import React from 'react';
import styled from 'styled-components';


export default (props) => {
    // debugger;
    const StyledMastHead = styled.img`
        width: 100%;
    `;
    
    return <StyledMastHead src={props.imageUrl}/>;
};