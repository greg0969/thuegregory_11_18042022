import "../styles/index.scss";
import { NavLink } from "react-router-dom"

function ErreurMessage() {
    return (
        <div className="sectionErreur">
            <h1 className='sectionErreur__title'>404</h1>
            <p className='sectionErreur__message'>Oups! La page que vous demandez n'existe pas.</p>	
            <NavLink to="/"><p className='sectionErreur__index'>Retourner sur la page d’accueil</p></NavLink>
        </div>
        
        
    )
}

export default ErreurMessage