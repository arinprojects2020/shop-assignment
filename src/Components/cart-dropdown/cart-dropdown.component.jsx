import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';

import { CartContext } from "../../context/cart.context";


const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
   // const navigate = useNavigate();
   // const goToCheckoutHandler = () => {
      //navigate('/checkout');
    //};
    return(
        <div className="cart-dropdown-container">
        
        {/*<div className="header">
          <h3>My Cart(0 item)</h3>
        </div>*/}
        <div className="cart-items"> 
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}   </div>
        {/* <div className="lowest">
      {/*<span>
           <img src={require("../../assets/lowest-price.png")} alt="Lowest Price"></img>
           You wouldn't find it cheaper anywhere
           </span>
        </div> <p>Promo code can be applied on payment page</p>*/}
       <button onClick={()=>{}}>Go to CheckOut Page</button>
    
    </div>
    )
}

export default CartDropDown;


//) : (
         // <span className='empty-message'>Your cart is empty</span>
        //)}

