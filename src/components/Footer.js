import logo from "../assets/logo-footer.svg"
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer-kasa'>
				<img src={logo} alt='Kasa' className='logo-footer' />
				<p>
					© 2020 Kasa. All rights reserved
				</p>
		</div>
        
    )
}

export default Footer