import React from "react";
import "./cart-icon.styles.scss";
import { useContext } from "react";
//import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon=()=>{
    const { isCartOpen, setIsCartOpen,cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
return (
    <div className="container" onClick={toggleIsCartOpen}>
    <span>
    <img src={require("../../assets/cart.svg").default} alt ="shop-icon" className="shop-icon"/>
    <br/>
        <div className="count">{cartItemCount}</div>
    </span>
        
    </div>
)
}

export default CartIcon;