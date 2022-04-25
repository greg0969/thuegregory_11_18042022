import Carousel from "./Carousel"

function DetailsLogement ({ detailsLogement }) {

    return (
        <div className='details-logement'>
            <h1>{detailsLogement.title}</h1>
            <Carousel  pics={detailsLogement} />
        </div>
        
    ) 

}

export default DetailsLogement


