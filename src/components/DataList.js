import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard";


function DataList (){


    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod")
        .then(repsonse =>{
            console.log(repsonse;)
        })
    })

}