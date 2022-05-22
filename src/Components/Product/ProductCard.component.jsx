import React from "react";
import "./ProductCard.styles.scss";


 const ProductCard=({name,price,imageURL,description,id})=>{
    return(
        <div className="product">
        <div className="product-title">{name}</div>
        <img className="product-image" src={imageURL} alt={name}></img>
        <div className="product-description">{description}</div>
        <div className="button-row">
            <span>MRP &#8377</span>
            <button className="btn" onClick={()=>{}}>Buy Now</button>
        </div>
        </div>
    )
}

export default ProductCard;