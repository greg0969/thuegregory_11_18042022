import aboutBackground from "../assets/background-about.png";
import Dropdown from "../components/Dropdown";
import Logo from "../components/Logo"
import Nav from "../components/Nav"
import aboutData from "../components/dataAbout";


function About() {
	return (
		<div className='about'>
			<header>
                <div className="logo">
                    <Logo />
                </div>
                <Nav />
            </header>
			<div className="banner">
            	<img src={aboutBackground} alt='about' className="banner-kasa" />
        	</div> 
			<div className="about-section">
				{aboutData.map((data) => (
					<Dropdown key={data.title} title={data.title} desc={data.description} />
				))}
           	 	 
        	</div>
		</div>
	)
}


export default About