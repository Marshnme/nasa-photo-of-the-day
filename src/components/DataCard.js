import React from "react";

 const DataCard = props =>{
    console.log("props",props);
    return (
        <div className = "dataList">
            <h2>Title: {props.title}</h2>

            <img alt ="planets" src={props.url}>
            </img>
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
            <h2>{props.copyright}</h2>

        </div>
)
 }


export default DataCard;