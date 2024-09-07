import styled from 'styled-components';

const FooterWrapper = styled.footer`
    text-align: center;
    padding: 20px;
    background-color: #f1f1f1;
    color: #333;
    font-size: 14px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <h5>&#64;2024 - todos os direitos reservados</h5>
        </FooterWrapper>
    );
}

export default Footer;

