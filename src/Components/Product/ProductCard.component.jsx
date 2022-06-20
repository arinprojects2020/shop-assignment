import React from "react";
import { useContext } from "react";
import "./ProductCard.styles.scss";
import { CartContext } from "../../context/cart.context";
import axios from "axios";
const rupeeSign ="&#8377";




 const ProductCard=({name,price,imageURL,description})=>{
    //const {name,price,imageURL,description} = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(name,price);
    //const onAdd = async()=>{
        //const config={
            // url: "http://localhost:5000/addToCart",
        // method: "post",
        //headers: { "Content-Type": "application/json" },
        // data:{
             //productId: id
       //  }
       // }
         //const response = await axios(config);
        // console.log("response on add", response.data)
         
    // };
    
    return(
        <div className="product-container">
        <header>
        <div className="product-title">{name}</div>
        </header>
        <div className="image-container">
        <img className="product-image" src={imageURL} alt={name}></img>
        <div className="product-description">{description}</div>
        </div>
        <br></br>
        <footer className="button-row">
        <span>MRP {price} </span>
           <button className="btn" onClick={addProductToCart}>Buy Now</button>
        </footer> 
        </div>
    )
}

export default ProductCard;