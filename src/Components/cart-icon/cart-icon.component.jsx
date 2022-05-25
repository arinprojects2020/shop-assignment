import React from "react";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon=()=>{
    const { isCartOpen, setIsCartOpen,cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
return (
    <div className="container" onClick={toggleIsCartOpen}>
        <img src={require("../../assets/cart.svg").default} clasName="shop-icon"/>
        <span className="count">{cartItemCount}</span>
    </div>
)
}

export default CartIcon;