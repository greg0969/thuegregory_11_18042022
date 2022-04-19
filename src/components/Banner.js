import banner from "../assets/background.svg"
import "../styles/Banner.css"

function Banner() {
    return (
        <div className="banner">
            <img src={banner} alt='Banner' className='banner-kasa' />
        </div>   
    )
}

export default Banner