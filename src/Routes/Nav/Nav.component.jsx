import React from "react";
import { Outlet, Link} from "react-router-dom";
import "./Nav.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import {logOutUser} from "../../Utils/Firebase/firebase.utils.js";



const Navigation = ()=>{
    const {currentUser} = useContext(UserContext);
    
    
    return(
     <>
    <div className="header">
        <div className="nav-container">
        <Link to="/" className="navbar-brand">
       <img src="/src/Api/shopping-cart-assignment-master/static/images/logo.png" alt ="Sabka Bazar" 
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
    </div>
        
         <Outlet/>
     </>
        
    )
}

export default Navigation;