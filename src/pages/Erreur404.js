import ErreurMessage from "../components/ErreurMessage"
import Logo from "../components/Logo"
import Nav from "../components/Nav"


function Erreur404() {
	return (
		<div className='home-kasa'>
			<header>
                <div className="logo">
                    <Logo />
                </div>
                <Nav />
            </header>
			<ErreurMessage />
		</div>
	)
}


export default Erreur404