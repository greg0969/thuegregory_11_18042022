import AboutBanner from "../components/AboutBanner"
import AboutSection from "../components/AboutSection"
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
			<AboutBanner />
			<AboutSection />
		</div>
	)
}


export default About