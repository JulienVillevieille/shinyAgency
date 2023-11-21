import styled from "styled-components"
import imageError404 from '../../assets/404.svg'

//#region

const ErrorPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
`

const ErrorPageTitle = styled.h1`
    color: #2F2E41;
    font-size: 2rem;
    font-weight: 700;
`

const ErrorPageImg = styled.img`
    width: 40%;
`

const ErrorPageSubtitle = styled.p`
    color: #2F2E41;
    font-size: 1.5rem;
    font-weight: 700;
`

//#endregion


function Error() {
    return (
        <ErrorPageContainer>
            <ErrorPageTitle>Oups...</ErrorPageTitle>
            <ErrorPageImg src={imageError404} alt="Error 404" />
            <ErrorPageSubtitle>Il semblerait qu’il y ait un problème</ErrorPageSubtitle>
        </ErrorPageContainer>
    )
}

export default Error