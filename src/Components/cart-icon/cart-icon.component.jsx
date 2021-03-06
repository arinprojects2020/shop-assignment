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
  <img src={require("../../assets/cart.svg").default} alt ="shop-icon" className="shop-icon"/>
    <span className="count">{cartItemCount}Items</span>
   
     </div>
)
}

export default CartIcon;