import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    background-color: #333;
    padding: 10px;
`;

export const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 16px;

    &:hover {
        color: #ddd;
    }

    &:active {
        color: #aaa;
    }
`;
