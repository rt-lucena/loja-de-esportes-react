import { NavWrapper, StyledLink } from '../css/NavWrapper';

const Nav = () => {
    return (
        <NavWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contato">Contato</StyledLink>
            <StyledLink to="/produtos">Produtos</StyledLink>
            <StyledLink to="/sobre">Sobre</StyledLink>
        </NavWrapper>
    );
}

export default Nav;
