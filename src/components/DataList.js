import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard";


function DataList (){
    const [planet, setPlanet] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
            
            console.log("response data:", response);
            setPlanet(planet);
            
          })
          .catch(error => {
            console.log("data was not returned", error);
          });
      }, [planet]);
      return (
          <div className="container">
              <DataCard title={title} />

          </div>
      )
}
 
export default DataList;