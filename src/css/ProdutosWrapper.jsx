import styled from 'styled-components';

export const ProdutosWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    h1 {
    text-align: center;
    width: 100%;
    margin: 0 auto;
}
`;

export const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
`;

export const CardDescription = styled.p`
    font-size: 14px;
    color: #666;
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 15px;
`;
