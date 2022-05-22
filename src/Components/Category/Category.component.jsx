import React from "react";
import "./Category.styles.scss";
import { Link } from "react-router-dom";


const CategoryItem = ({imageUrl,name,description,categoryKey,id})=>{
    
    return(
        <div className="category-container">
        <img src={imageUrl} alt="broken"></img> 
        <div className="items-list"><ul>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/products/${id}`}>
        <button>
         {`Explore ${categoryKey}`}
        </button>
        </Link>
       
        </ul>
        
        </div>
        </div>
    )
}

export default CategoryItem;