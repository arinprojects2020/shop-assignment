import React from "react";
import "./Category.styles.scss";


const CategoryItem = ({imageUrl,name,description,categoryKey})=>{
    
    return(
        <div className="category-container">
        <img src={imageUrl} alt="broken"></img> 
        <div className="items-list"><ul>
        <h2>{name}</h2>
        <p>{description}</p>
        <button>
         {`Explore ${categoryKey}`}
        </button>
        </ul>
        
        </div>
        </div>
    )
}

export default CategoryItem;