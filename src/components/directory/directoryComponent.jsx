import React from 'react';
import MenuItem from "../main-menu/main-menu"
import  "./directory.scss"



class directory extends React.Component{
   

   constructor(){

      super();

      this.state={
         sections:[{
            tittle:"Hat",
            id:1
         },{
            tittle:"Sneeker",
            id:2
         },
         {
            tittle:"Jackets",
            id:3
         },
         {
            tittle:"Mens",
            id:4
         },
         {
            tittle:"Womens",
            id:5
         }
      ]
      }
   }

   render(){
      return (
         <div className="directory-menu">
            {
               this.state.sections.map(({tittle,id})=>(
                  <MenuItem key={id} tittle={tittle}/>
               ))
            }
         </div>
      )
   }


}

export default  directory