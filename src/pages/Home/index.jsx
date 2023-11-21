import { Link } from "react-router-dom"
import styled from "styled-components"

import colors from "../../utils/style/color"
import HomeImg from '../../assets/home-illustration.svg'

//#region STYLE 

const HomeContainer = styled.div`
    width: 90%;
    margin: auto;
    background-color: #F9F9FC;

    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-direction: center;
    align-items: flex-start;
    height: 100%;
    width: 45%;
    padding: 7rem 6rem;
    gap: 2rem;
`

const HomeContentParagraph = styled.p`
    color: #2F2E41;
    font-family: Trebuchet MS;
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160.5%;
`

const StyledLink = styled(Link)`
    padding: 1rem 4rem;
    color: #8186a0;
    text-decoration: none;
    font-size: 1.25rem;
    color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};
`

//#endregion


function Home() {
    return (
        <HomeContainer>
            <HomeContentContainer>
                <HomeContentParagraph>Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</HomeContentParagraph>
                <StyledLink to="/survey/1">Faire le test</StyledLink>
            </HomeContentContainer>
            <HomeContentContainer>
                <img src={HomeImg} alt="Illustration" />                
            </HomeContentContainer>
        </HomeContainer>
    )
}

export default Home