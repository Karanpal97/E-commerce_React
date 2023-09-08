import React from "react";
import "./main-menu.scss"


const MenuItem=({tittle,imageUrl})=>(
   <div 

       className="main-menu">
           <div className="background-image"  style={{backgroundImage:`url(${imageUrl})`}} >

            </div>
           <div className="content">
               <h1 className="tittle">{tittle}</h1>
              <span className="subtittle">SHOP NOW</span>
            </div>
   </div>
)


export default MenuItem