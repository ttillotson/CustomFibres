import React from 'react';
import styled from 'styled-components';


export default (props) => {
    const {images, StyledComponent, rowSize, removeImage, display} = props;

    const styledImages = [];
    let mappedImages = images.map((img, idx) => {
        let removeImageTag = <StyledRemove onClick={() => removeImage(img.signed_id)}>&times;</StyledRemove>;
        if (removeImage && img.signed_id) {
            return (
                <RelativeItem key={idx}>
                    <StyledComponent src={img.service_url} alt={`Page Image`} /> 
                    { removeImageTag }
                </RelativeItem>
            );
        } else if(img.signed_id) {
            return (
                <DisplayItem key={idx}>
                    <StyledComponent src={img.service_url} alt={`Page Image`} /> 
                </DisplayItem>
            );
        } else {
            // let removeImageTag = <span className='image_removal' onClick={() => removeImage(img.signed_id)}>&times;</span>;
            return (
                <li key={idx}>
                    <NewStyled src={img.imageUrl} alt={`Page Image`} /> 
                    { removeImage ? removeImageTag : null }
                </li>
            );

        }
    });

    while (mappedImages.length > 0) {
        let row = [];
        for (let i = 0; i < rowSize; i++) {
            row.push(mappedImages.pop());
        }
        styledImages.push(row);
    }
    return styledImages.map((row, i) => (
        <StyledRow key={i}>
            { row }
        </StyledRow>
    ));
};

const RelativeItem = styled.li`
    position: relative;
    margin: auto;
`;

const DisplayItem = styled.li`
    // margin: 0 1.5vw;
`;

const StyledRemove = styled.span`
    position: absolute;
    top: 0;
    right: 8px;
    font-size: 20px;
    font-weight: 700;
    color: #000;
    cursor: pointer;
`;

const NewStyled = styled.img`
    max-width: ${window.innerWidth / 6}px;
    border: 2px solid green;
`;

const StyledRow = styled.ul`
    display: flex;
    // justify-content: space-between;
    justify-content: center;

`;