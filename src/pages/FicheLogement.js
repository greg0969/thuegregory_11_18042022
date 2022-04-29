import Logo from "../components/Logo"
import Nav from "../components/Nav"
import DetailsLogement from "../components/DetailsLogement"
import React,{useState,useEffect} from 'react';
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
            
            <DetailsLogement />
            
            
        
		</div>
	)
}

export default FicheLogement


