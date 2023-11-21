import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'

//#region DATAS

const freelanceProfiles = [
    {
        name: 'Julien Villevieille',
        jobTitle: 'Développeur Front-End',
        picture: DefaultPicture,
    },
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'UX Designer',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

//#endregion


//#region STYLE

const PageFreelanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    width: 90%
    border: 1px solid black;
`

const PageFreelanceTitle = styled.h1`
    color: #2F2E41;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 132.5%;
`

const PageFreelanceSubtitle = styled.p`
    color: #8186A0;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 132.5%;
    margin-bottom: 5rem;
`

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 3rem;
`
//#endregion


function Freelances () {
    return (
        <PageFreelanceContainer>
            <PageFreelanceTitle>Trouvez votre prestataire</PageFreelanceTitle>
            <PageFreelanceSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageFreelanceSubtitle>
            <CardsContainer>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardsContainer>
        </PageFreelanceContainer>
    )
}

export default Freelances