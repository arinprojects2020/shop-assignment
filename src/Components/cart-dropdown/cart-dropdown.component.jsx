import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from "../../context/cart.context";


const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
      navigate('/checkout');
    };
    return(
        <div className="cart-dropdown-container">
           <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
     
           <div>
           <span>
           <img src={require("../../assets/lowest-price.png")} alt="Lowest Price"></img>
           You wouldn't find it cheaper anywhere
           </span>
               
           </div>
    <button onClick={goToCheckoutHandler}>Proceed to Checkout</button>
          </div>
        </div>
    )
}

export default CartDropDown;