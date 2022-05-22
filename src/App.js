import Home from "./Routes/Home/home.component.jsx";
import React from "react";
import {Routes , Route} from "react-router-dom";
import Navigation from "./Routes/Nav/Nav.component.jsx";
//import Authentication from "./Routes/authentication/authentication.component.jsx";
import Register from "./Components/Register/register.component.jsx";
import SignIn from "./Components/Sign-in/sign-in.component.jsx";
import Products from "./Routes/Products/product.component.jsx";
import ProductSidebar from "./Components/Product/ProductSidebar.component.jsx";



const App =()=>{
  return(
    <Routes>
    <Route path="/"element={<Navigation/>}>
      <Route index element={<Home/>}/>
     <Route path="signIn" element={<SignIn/>}/>
     <Route path = "register" element={<Register/>}/>
     <Route path ="products/*"  element={<Products/>}>
       <Route path="products" element ={<ProductSidebar/>}/>
     </Route>
     </Route>
    </Routes>
    
  )
}

export default App;
