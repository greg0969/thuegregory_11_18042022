import Logo from "../components/Logo"
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import CardSection from "../components/CardSection"
import Footer from "../components/Footer"
import "../styles/Home.css"

function Home() {
	return (
		<div className='home-kasa'>
            <header>
                <div className="logo">
                    <Logo />
                </div>
                <Nav />
            </header>
            <Banner />
            
            <section className="cardSection">
                <CardSection />
                <CardSection />
                <CardSection />
                <CardSection />
                <CardSection />
                <CardSection />
            </section>
            <footer>
                <Footer />
            </footer>
		</div>
	)
}


export default Home