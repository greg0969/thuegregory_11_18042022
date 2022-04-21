import AboutSection from "../components/AboutSection"
import Banner from "../components/Banner"
import Logo from "../components/Logo"
import Nav from "../components/Nav"

function About() {
	return (
		<div className='about'>
			<header>
                <div className="logo">
                    <Logo />
                </div>
                <Nav />
            </header>
			<Banner />
			<AboutSection />
		</div>
	)
}


export default About