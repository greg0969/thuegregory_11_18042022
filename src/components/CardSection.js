import "../styles/index.scss";

function CardSection ({ logement }) {

    return (
        <div className='card-container'>
            <figure className='card'>
                <img className="card__img" src={logement.cover} alt={logement.title} />
                <figcaption>
                    <h2 className='card__title'>{logement.title}</h2>   
                </figcaption> 
            </figure>
            
        </div>
        
    )
}

export default CardSection