import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./styles/index.scss";
import About from "./pages/About";
import Erreur404 from "./pages/Erreur404";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";

function App() {


  // const [data,setData]=useState([]);

  // const getData=()=>{
  //     fetch('./data.json'
  //     ,{
  //       headers : { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }
  //     }
  //     )
  //       .then(function(response){
  //         console.log(response)
  //         return response.json();
  //       })
  //       .then(function(myJson) {
  //         console.log(myJson);
  //         setData(myJson)
  //       });
  //   }
  //   useEffect(()=>{
  //     getData()
  //   },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Erreur404 />} />
        <Route path="id" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
