import styled from 'styled-components';

export const SaveButton = styled.button`
    background-color: rgba(115, 255, 22, 0.815);
    margin: 5px;
`;

export const DashInput = styled.input`

`;

export const DashForm = styled.form`
    .edit_field {
        border-bottom: 2px solid #96A392;
        padding: 15px 0;
        
        .form_item {
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            font-size: 2vh;
            padding: 1vh 0;
            
            label {
                font-size: 2.3vh;
            }
            
            input, textarea {
                width: 80%;
            }
            
            .field_body {
                min-height: 120px;
                vertical-align: top;
            }
        }
        
        .new {
            input, textarea {
                background-color: rgb(98, 98, 98);
                padding: 3px 5px;
                border-radius: 5px;
            }

        }
    }
`;

export const DashSection = styled.section`
    background-color: rgb(82, 82, 82);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 2vh 2vw;
`;