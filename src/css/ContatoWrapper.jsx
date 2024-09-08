import styled from 'styled-components';

export const ContatoWrapper = styled.div`
    max-width: 600px;
    margin: 20px auto 20px;
    padding: 20px;
    background-color: #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h1 {
        font-size: 36px;
        margin-bottom: 10px;
        text-align: center;
    }
`;

export const FormGroup = styled.div`
    margin: 15px 15px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    min-height: 100px;
`;

export const Button = styled.button`
    background-color: #007BFF;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #0056b3;
    }
`;
