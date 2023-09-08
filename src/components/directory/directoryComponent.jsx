import React from 'react';
import MenuItem from "../main-menu/main-menu"
import  "./directory.scss"



class Directory extends React.Component{
   

   constructor(){

      super();

      this.state={
         sections:[{
            tittle:"Hat",
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1
         },{
            tittle:"Sneeker",
            imageUrl:'https://i.ibb.co/0jqHpnp/sneekers.png',
            id:2
         },
         {
            tittle:"Jackets",
            imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
            id:3
         },
         {
            tittle:"Mens",
            imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
            id:4
         },
         {
            tittle:"Womens",
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            id:5
         }
      ]
      }
   }

   render(){
      return (
         <div className="directory-menu">
            {
               this.state.sections.map(({tittle,imageUrl,id})=>(
                  <MenuItem key={id} tittle={tittle} imageUrl={imageUrl}/>
               ))
            }
         </div>
      )
   }


}

export default  Directory