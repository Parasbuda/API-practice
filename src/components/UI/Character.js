import React from "react"
import "./Character.css"

const Character=({item})=>{
    
    return(
            <div className="col-lg-4 col-md-6 col-sm">
               <div className="card">
                   <div className="imgBx">
                  <img src={item.img} alt="character"/>
                  </div>
                  <div className="content">
                     <h2>{item.name}</h2>
                     <ul >
                         <li>
                             <strong>Actor Name:</strong> {item.portrayed}
                         </li>
                         <li>
                             <strong>Nickname:</strong> {item.nickname}
                         </li>
                         <li>
                             <strong>BirthDay:</strong> {item.birthday}
                         </li>
                         <li>
                             <strong>Status:</strong> {item.status}
                         </li>
                     </ul>

                  </div>
                </div>
               
                </div>
              
              
      
             
    )
}
export default Character