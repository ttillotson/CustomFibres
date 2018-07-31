import React from 'react';
import styled from 'styled-components';


export default (props) => {
    const {images, StyledComponent, rowSize} = props;

    const styledImages = [];
    let mappedImages = images.map((img, idx) => {
        if (img.signed_id) {
            return (
                <li key={idx}>
                    {/* <img className={ klass } src={img.service_url} /> */}
                    <StyledComponent src={img.service_url} alt={`Page Image`} /> 
                    <span className='image_removal' onClick={() => this.removeImage(img.signed_id)}>Remove</span>
                </li>
            );
        } else {
            return (
                <li key={idx}>
                    <NewStyled src={img.imageUrl} alt={`Page Image`} /> 
                    {/* <span className='image_removal' onClick={() => this.removeImage(img.signed_id)}>Remove</span> */}
                </li>
            );

        }
    });
    // debugger;

    while (mappedImages.length > 0) {
        let row = [];
        for (let i = 0; i < rowSize; i++) {
            row.push(mappedImages.shift());
        }
        styledImages.push(row);
        // console.log(combinedImages.length);
    }
    return styledImages.map((row, i) => (
        <ul key={i}>
            { row }
        </ul>
    ));
};

const NewStyled = styled.img`
    max-width: 150px;
    border: 2px solid green;
`;