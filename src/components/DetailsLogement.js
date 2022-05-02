import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AvatarLogement from "./AvatarLogement";
import Carousel from "./Carousel";
import DescriptionLogement from "./DescriptionLogement";
import EquipementsLogement from "./EquipementsLogement";
import NoteLogement from "./NoteLogement";
import Tag from "./Tag";
import TitleLogement from "./TitleLogement";



function DetailsLogement() {


  const [data, setData] = useState([]);
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
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()

  }, [])

  const selectedLogement = data.find((logement) => {
    const logementIdString = logement.id.toString();
    return logementIdString === id;
  });


  return (
    <div className="details-logement">
      <div><Carousel details={selectedLogement} /></div>
      <section className="haut">
        <div className="details-logement__left">
          <TitleLogement details={selectedLogement} />
          <Tag details={selectedLogement} />
        </div>
        <div className="details-logement__right">
          <AvatarLogement details={selectedLogement} />
          <NoteLogement details={selectedLogement} />
        </div>
      </section>

      <section className="bas">
        <DescriptionLogement details={selectedLogement} />
        <EquipementsLogement details={selectedLogement} />
      </section> 
    </div>
  );
}

export default DetailsLogement;
