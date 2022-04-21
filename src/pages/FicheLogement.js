import Logo from "../components/Logo"
import Nav from "../components/Nav"
import "../styles/index.scss"

function FicheLogement() {
	return (
		<div className='home-kasa'>
			<header>
                <div className="logo">
                    <Logo />
                </div>
                <Nav />
            </header>
			
		</div>
	)
}


export default FicheLogement