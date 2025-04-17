import { useState } from "react";
import { NavLink } from 'react-router-dom';
const AnimalDescription = ({displayContent,expanded})=> {

    return (
        <div> {/* //className={styles.animal_description_wrapper}*/}        
        <div>
          <p>Name:{displayContent.name}</p>
          <p>LifeSpan:{displayContent.lifeSpan}</p>
          <div>Food:{displayContent.food.map(food => <p>{food}</p>)}</div>
          <p>Description:{ expanded ? displayContent.description : displayContent.description.slice(0,200) + ".." }</p>
          {displayContent.description.length > 200 && (
            // <button onClick={ () => setIsExpanded(prev => !prev)}>{isexpanded ? "Read less" : "Read More" }</button>
            <NavLink to={`/${displayContent.groupName.toLowerCase()}/${displayContent.name.toLowerCase()}`}> Curious to Know More??</NavLink>
          )}
        </div>
      </div>
    )
}

export default AnimalDescription;