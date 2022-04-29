import { Link } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import "../styles/index.scss";

function CardSection() {

  const [data,setData]=useState([]);

  const getData=()=>{
      fetch('./data.json'
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


  return (
    <section className="cardSection">
      {data.map((ficheLogement) => (
        <div key={ficheLogement.id} className="card-container">
          <Link key={ficheLogement.id} to={`/logement/${ficheLogement.id}`} >
            <figure className="card">
                <img className="card__img" src={ficheLogement.cover} alt={ficheLogement.title} />
              <figcaption>
                <h2 className="card__title">{ficheLogement.title}</h2>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </section>
    
  );
}

export default CardSection;
