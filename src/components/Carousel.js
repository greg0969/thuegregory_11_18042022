import { Slide } from 'reac-slideshow-image'
function Carousel ({ pics }) {

    return (
        <div className='carousel'>
            <Slide >
                <img src={pics.pictures} alt="oui" />
            </Slide>
         </div>
        
    ) 

}

export default Carousel


