import React,{useState,useEffect} from 'react';
import "./styles/index.scss";
import Router from "./Router";

function App() {
  

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
    <Router data={data}/> 
  );
}

export default App;
