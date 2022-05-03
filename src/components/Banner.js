import banner from "../assets/background.png"
import "../styles/index.scss";

function Banner() {
    return (
        <div className="banner">
            <img src={banner} alt='Banner' className='banner-kasa' />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>   
    )
}

export default Banner