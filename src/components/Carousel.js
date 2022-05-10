import { useState } from "react";
import "../styles/index.scss";


function Carousel( {carouselPics} ) {

    const [sliderPosition, setSliderPosition] = useState(0) ;
    
    const prev = () => {
        let newPosition = sliderPosition ;
        if (newPosition > 0) {
            newPosition = newPosition - 1 ;
        }

        if (sliderPosition === 0) {
            newPosition = carouselPics.length -1   
        }
        setSliderPosition(newPosition);
    }
    
    const next = () => {
        let newPosition = sliderPosition ;
        
        if (newPosition < carouselPics.length -1) {
            newPosition = newPosition + 1 ;
        }
        
        if (sliderPosition === carouselPics.length - 1) {
            newPosition = 0   
        }
        setSliderPosition(newPosition)
    }
    
    const prevClickHandler = () => {
        prev();
    }

    const nextClickHandler = () => {
        next();
        
    }

    return (
        <div>
            <div className="container">
                {carouselPics.length >= 2 && <div className="leftArrow" onClick={prevClickHandler}>❰</div>}
                <div className="displayFrame">
                    <div className="CarouselItem" ><img src={carouselPics[sliderPosition]} alt=""/></div>

                </div>
                {carouselPics.length >= 2 && <div className="rightArrow" onClick={nextClickHandler}>❱</div>}
            </div>
        </div>
    )
}

export default Carousel;