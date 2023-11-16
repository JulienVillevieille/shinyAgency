import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey() {
    const { questionNumber } = useParams()
    
    let linkPrevious = "/survey/" + (Number.parseInt(questionNumber)-1);
    let linkNext = "/survey/" + (Number.parseInt(questionNumber)+1);
    if(questionNumber <= 1) {
        linkPrevious = "/survey/" + questionNumber;
    } 
    
    return (
        <div>
            <Link to={linkPrevious}>Précédent</Link>
            {parseInt(questionNumber) === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : ( 
                <Link to={linkNext}>Suivant</Link>
            )}
            <h1>Questionnaire 🧮</h1>
            <h2>Question N° {questionNumber}</h2>
        </div>
    )
}

        
export default Survey