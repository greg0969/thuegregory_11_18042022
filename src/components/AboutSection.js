import { useState } from 'react'
import "../styles/index.scss";

function AboutSection(props, index) {
    
    const [isOpen, setIsOpen] = useState(false)
    
    return isOpen ? (
        <div className="about-section">
            
            <p className="title" onClick={() => setIsOpen(false)}>Fiabilité </p>
            <div className="fiabilite"> 
                <p key={index}>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
            <p className="title" onClick={() => setIsOpen(false)}>Respect</p>
            <div className="respect">
                <p key={index}>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <p className="title" onClick={() => setIsOpen(false)}>Service</p>
            <div className="service">
                <p key={index}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <p className="title" onClick={() => setIsOpen(false)}>Responsabilité</p>
            <div className="responsabilite">
                {/* <p key={index}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p> */}
            </div>
        </div>   
    ) : (
        <div className="about-section">
            
            <p className="title" onClick={() => setIsOpen(true)}>Fiabilité </p>
            <div className="fiabilite"> 
                {/* <p key={index}>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p> */}
            </div>
            <p className="title" onClick={() => setIsOpen(true)}>Respect</p>
            <div className="respect">
                {/* <p key={index}>La bienveillance fait partie des valeurs fondatrices de Kasa.  */}
                    {/* Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p> */}
            </div>
            <p className="title" onClick={() => setIsOpen(true)}>Service</p>
            <div className="service">
                {/* <p key={index}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p> */}
            </div>
            <p className="title" onClick={() => setIsOpen(true)}>Responsabilité</p>
            <div className="responsabilite">
                {/* <p key={index}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p> */}
            </div>
        </div> 
    )  
}

export default AboutSection

