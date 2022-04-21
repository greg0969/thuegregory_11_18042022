import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Erreur404 from "./pages/Erreur404";
import Home from "./pages/Home";

function Router() {
    return (
      
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Erreur404 />} />
            </Routes>
      </BrowserRouter>
    );
  }
  
export default Router;
  