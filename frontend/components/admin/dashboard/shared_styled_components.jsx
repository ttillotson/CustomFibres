import styled from 'styled-components';

// Large Components
export const DashSection = styled.section`
    background-color: rgb(82, 82, 82);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 2vh 2vw;

    h3 {
        font-size: 20px;
        margin-bottom: 2vh;
    }
`;
export const DashForm = styled.form`
    border-bottom: 2px solid #96A392;
    padding: 15px 0;
`;

export const FieldForm = styled.form`
    border-bottom: 2px solid #96A392;
    padding: 15px 0;
`;

// Mid Components
export const DashInputSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 2vh;
    padding: 1vh 0;
    
    label {
        font-size: 2.3vh;
    }
    
    input[type="text"] {
        width: 80%;
    }
    
    textarea {
        width: 80%;
        min-height: 120px;
        vertical-align: top;
    }
    .new {
        background-color: rgb(98, 98, 98);
        padding: 3px 5px;
        border-radius: 5px;
    }
`;

export const ImageGallerySection = styled.section`
    width: 80%;
    position: relative;
`;

export const ImageList = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const ImageInputSection = styled.section`
    text-align: center;
    cursor: pointer;
    p {
        font-size: 20px;
        color: grey;
    }
`;

export const FormLogicSection = styled.section`
    display: flex; 
    justify-content: space-between;
    flex-direction: row-reverse;

    span {
        padding-top: 5px;
    }

    section {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        
        button {
            margin-right: 5px;
        }
        
    }
`;

// Small Components
export const SaveButton = styled.button`
    background-color: rgba(115, 255, 22, 0.815);
    margin: 5px;
`;

export const DeleteButton = styled.button`
    background-color: red;
    margin: 5px;
`;

export const ImageInput = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const StyledImage = styled.img`
    max-width: 150px;
`;

