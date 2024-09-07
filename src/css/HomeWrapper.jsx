import styled from 'styled-components';

export const HomeWrapper = styled.div`
    padding: 20px;
    text-align: center;
`;

export const Banner = styled.div`
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
    margin-bottom: 20px;

    h1 {
        font-size: 36px;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 0;
    }
`;

export const Testimonials = styled.section`
    border-radius: 4px;
    margin: 40px 0;
    background-color: #e0e0e0;
    padding: 20px;

    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: #333;
    }
`;

export const NewsletterSection = styled.section`
    margin: 40px 0;
    padding: 20px;
    background-color: #e0e0e0;
    border-radius: 8px;
    text-align: center;

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #333;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
        color: #333;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    input[type="email"] {
        padding: 10px;
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 250px;
        font-size: 16px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;

        &:hover {
            background-color: #0056b3;
        }
    }
`;
