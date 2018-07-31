import React from 'react';
import styled from 'styled-components';


export default (props) => {
    const {images, StyledComponent, rowSize, removeImage} = props;

    const styledImages = [];
    let mappedImages = images.map((img, idx) => {
        if (img.signed_id) {
            let removeImageTag = <span className='image_removal' onClick={() => removeImage(img.signed_id)}>&times;</span>;
            return (
                <li key={idx}>
                    <StyledComponent src={img.service_url} alt={`Page Image`} /> 
                    { removeImage ? removeImageTag : null }
                </li>
            );
        } else {
            let removeImageTag = <span className='image_removal' onClick={() => removeImage(img.signed_id)}>&times;</span>;
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

const NewStyled = styled.img`
    max-width: ${window.innerWidth / 6}px;
    border: 2px solid green;
`;

const StyledRow = styled.ul`
    display: flex;
    justify-content: space-between;

`;