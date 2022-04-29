import { useParams } from "react-router-dom";
import AvatarLogement from "./AvatarLogement";
import Carousel from "./Carousel";
import DescriptionLogement from "./DescriptionLogement";
import EquipementsLogement from "./EquipementsLogement";
import NoteLogement from "./NoteLogement";
import Tag from "./Tag";
import TitleLogement from "./TitleLogement";

function DetailsLogement() {


  const [data,setData]=useState([]);

  const getData=()=>{
      fetch('../data.json'
      ,{
          headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      }
      )
          .then(function(response){
          //console.log(response)
          return response.json();
          })
          .then(function(myJson) {
          //console.log(myJson);
          setData(myJson)
          });
      }
      useEffect(()=>{
      getData()
      
      },[])
  const { id } = useParams();

    selectedLogement = .find((photographer) => {
    const photographerIdString = photographer.id.toString();
    return photographerIdString === photographerId;
  });
  console.log(id)
  return (
    <div className="details-logement">
      <Carousel />
      <section className="haut">
        <div className="details-logement__left">
          <TitleLogement />
          <Tag  />
        </div>
        <div className="details-logement__right">
          <AvatarLogement />
          <NoteLogement  />
        </div>
      </section>

      <section className="bas">
        <DescriptionLogement  />
        <EquipementsLogement  />
      </section>
    </div>
  );
}

export default DetailsLogement;
