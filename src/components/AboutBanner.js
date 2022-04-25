import aboutBackground from "../assets/background-about.svg";
import "../styles/index.scss";

function AboutBanner() {
    return (
        <div className="banner">
            <img src={aboutBackground} alt='about' className="banner-kasa" />
        </div>   
    )
}

export default AboutBanner