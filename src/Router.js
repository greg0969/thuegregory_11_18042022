import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Erreur404 from "./pages/Erreur404";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";

function Router ({data}) {

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home logement={data} />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Erreur404 />} />
                {data.map((logement) => <Route path={logement.id} key={logement.id} logement={logement} element={<FicheLogement  ficheLogement={logement} />} />)} 
            </Routes>
        </BrowserRouter>
    );   
}

export default Router
