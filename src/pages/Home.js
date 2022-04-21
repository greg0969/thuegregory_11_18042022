import React,{useState,useEffect} from 'react';
// import { NavLink } from "react-router-dom"
import Logo from "../components/Logo"
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import CardSection from "../components/CardSection"
import Footer from "../components/Footer"
import "../styles/index.scss";

function Home() {

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
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])

	return (
		<div className='home-kasa'>
            <header>
                <div className="logo">
                    <Logo />
                </div>
                <Nav />
            </header>
            <Banner />
            
            <section className="cardSection">
                {data.map((logement)=>(
                   <CardSection key={logement.id}  logement={logement}/>
                ))}
            </section>
            <footer>
                <Footer />
            </footer>
		</div>
	)
}


export default Home