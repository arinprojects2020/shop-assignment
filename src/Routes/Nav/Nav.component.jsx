import React from "react";
import { Outlet, Link} from "react-router-dom";
import "./Nav.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import {logOutUser} from "../../Utils/Firebase/firebase.utils.js";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";



const Navigation = ()=>{
    const {currentUser} = useContext(UserContext);
    const{isCartOpen} = useContext(CartContext)
    
    
    return(
     <>
    <div className="header">
        <div className="nav-container">
        <Link to="/" className="navbar-brand">
       <img src={require("../../assets/logo_2x.png")} alt ="Sabka Bazar" 
        className="logo" width="190" height="86"></img>
      
        </Link>
          <div className="nav-wrapper">
              <div className="nav-top">
                  <div className="top-link">
                  {currentUser ? (
            <span className='nav-link' onClick={logOutUser} >
              {' '}
              Log Out{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/signIn'>
              SIGN IN
            </Link>
          )}
          <CartIcon/>
                    <Link className="nav-link" to="/register">Register</Link>
                    </div>
              </div>
              <div className="nav-bottom">
                  <div className="bottom-link">
                  <Link className="nav-link" to="/">Home</Link>
                  
                  <Link className="nav-link" to="/products">Products</Link>
                  </div>
                  {/*<Cart/>*/}
              </div>
          </div>
      </div>
      {isCartOpen && <CartDropDown/>}
    </div>
        
         <Outlet/>
     </>
        
    )
}

export default Navigation;