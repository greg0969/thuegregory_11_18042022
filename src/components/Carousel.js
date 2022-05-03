import "../styles/index.scss";

function Carousel( {details} ) {
    
    return (
        <div>
            <div className="container">
                <div className="leftArrow">❰</div>
                <div className="displayFrame">
                </div>
                <div className="rightArrow">❱</div>
            </div>
        </div>
    )
}

export default Carousel;