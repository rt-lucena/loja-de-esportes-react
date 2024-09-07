import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f8f8;
    color: #333;
    text-align: center;
`;

export const ErrorMessage = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin: 0;
`;

export const ErrorDescription = styled.p`
    font-size: 18px;
    margin-top: 10px;
`;
