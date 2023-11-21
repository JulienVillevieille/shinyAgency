import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/color'

//#region STYLE

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 1.5rem;
    font-weight: bold;
`

const CardImage = styled.img`
    height: 9rem;
    width: 9rem;
    border-radius: 50%;
    margin: auto;    
`

const CardName = styled.span`
    text-align: center;
    font-size: 1.5rem;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 21rem;
    transition: 250ms;
    &:hover{
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

//#endregion


function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardName>{title}</CardName>
        </CardWrapper>
    )
}

//#region PROP-TYPES

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    label: 'Mon label par défaut',
    title: 'Mon titre par défaut',
    picture: DefaultPicture,
}

//#endregion
 

export default Card