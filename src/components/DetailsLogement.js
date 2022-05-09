import { Navigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AvatarLogement from "./AvatarLogement";
import Carousel from "./Carousel";
import NoteLogement from "./NoteLogement";
import Tag from "./Tag";
import TitleLogement from "./TitleLogement";
import Dropdown from "../components/Dropdown";

function DetailsLogement() {

  const [selectedLogement, setSelectedLogement] = useState("");

  const { id } = useParams();

  const getData = () => {
    fetch('../data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        //console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        //console.log(myJson);
        setSelectedLogement(myJson.find(logement =>
          logement.id.toString() === id
        ))
      });
  }
  useEffect(() => {
    getData()

  }, [selectedLogement])

  if (selectedLogement === undefined) {
    return (
      <Navigate to="*" />
    )
  }

  return (
    
    <div className="details-logement">
      {selectedLogement && <Carousel carouselPics={selectedLogement.pictures} />}
      <section className="presentation">
        <div className="details-logement__left">
          {selectedLogement && <TitleLogement details={selectedLogement} />}
          {selectedLogement && <Tag details={selectedLogement} />}
        </div>
        <div className="details-logement__right">
          {selectedLogement && <AvatarLogement details={selectedLogement} />}
          {selectedLogement && <NoteLogement rate={selectedLogement.rating} />}
        </div>
      </section>

      <section className="collapse">
        {selectedLogement && <Dropdown title="Description" desc={selectedLogement.description} />}
        {selectedLogement && <Dropdown title="Equipement" desc={selectedLogement.equipments} />}
      </section>
    </div>
  );
}

export default DetailsLogement;
