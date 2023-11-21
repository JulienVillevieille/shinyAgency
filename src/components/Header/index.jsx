import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/color"
import LogoPicture from '../../assets/dark-logo.png'

const HeaderContainer = styled.div`
    background-color: white;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    padding-bottom: 5rem;
`

const StyledLink = styled(Link)`
    padding: 0.65rem 2rem;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink && `
        color: white; 
        border-radius: 30px; 
        background-color: ${colors.primary};
        `
    }
`

const Logo = styled.img`
    width: 12rem;
    height: 4.5rem;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo src={LogoPicture} alt="Logo Shiny" />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </nav>
        </HeaderContainer>
    )
}

export default Header