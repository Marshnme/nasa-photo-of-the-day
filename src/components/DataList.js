import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard";
import styled from "styled-components";

const ToggleNight = styled.button`
background: black;


`;




function DataList (){
    const [planet, setPlanet] = useState("");
    const [color, setColor]  = useState("white");
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=GDF98vMAtY1KV4shqkMeErNttoYSkrGkGxw2f5uE")
            .then(response => {
                
            setPlanet(response.data);
            console.log("response data:", response.data);
        })
        .catch(error => {
            console.log("data was not returned", error);
        });
        }, []);

    
    
    return (
        <div className="container">
           
            <ToggleNight onClick={() => setColor("black")}>black</ToggleNight>
            <ToggleNight onClick={() => setColor("white")}>white</ToggleNight>

            <div>
                <DataCard 
                title = {planet.title}
                url = {planet.url}
                date = {planet.date}
                explanation={planet.explanation}
                copyright = {planet.copyright}>           </DataCard>
                </div>
            </div>
        
    )
}

export default DataList;