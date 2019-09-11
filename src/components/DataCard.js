import React from "react";

 const DataCard = props =>{
     console.log(props);
     return (
        <div>
            <img alt ="planets" src={props.img}>
            </img>
            <h2>{props.name}</h2>

        </div>
     )
 }


export default DataCard;