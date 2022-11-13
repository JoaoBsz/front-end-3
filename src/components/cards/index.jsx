import style from './styles.modoles.css'
import { planetas } from '../../mock/planetas'
const Card = ({ material, img }) => {
    return (
        <div className="cards">
            {material.map((card, index) =>
                <div key={`card-${index}`} className='containerCard'>
                    <h1 className='title'>{ card.planeta }</h1>
                    <div className='img'>
                        <img src={planetas.map(planeta=> planeta.img)}/>
                    </div>

                    <div className="containerText">
                        <p>{ card.descricao }</p>
                    </div>
                </div>)}
        </div>
    )
}

export default Card