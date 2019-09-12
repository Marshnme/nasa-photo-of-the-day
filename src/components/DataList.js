import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard";


function DataList (){
    const [planet, setPlanet] = useState("");
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
            <DataCard 
                title = {planet.title}
                url = {planet.url}
                date = {planet.date}
                explanation = {planet.explanation}
                copyright = {planet.copyright}

            />
        </div>
    )
}

export default DataList;