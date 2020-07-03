import React from "react"
import Character from "./Character"


const CharacterList=({items,query,isLoading})=>{
  
   
  
        
    return(
       
    <div className="row">            
        {
                isLoading?<h2>Loading...</h2>:
             items.filter(item=>{
                 return(
                 item.name.toLowerCase().indexOf(query.toLowerCase())>=0)})
                 .map(item=> {
                 return(
                 <Character key={item.char_id} item={item}/>
                 )}
             )
            }
      
      </div>


    )
}

export default CharacterList