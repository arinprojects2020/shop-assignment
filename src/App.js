import Home from "./Routes/Home/home.component.jsx";
import React from "react";
import {Routes , Route} from "react-router-dom";
import Navigation from "./Routes/Nav/Nav.component.jsx";
import SignIn from "./Routes/SignIn/signin.component.jsx";
import Register from "./Components/Register/register.component.jsx";




const App =()=>{
  return(
    <Routes>
    <Route path="/"element={<Navigation/>}>
      <Route index element={<Home/>}/>
     <Route path="signIn" element={<SignIn/>}/>
     <Route path = "register" element={<Register/>}/>
     </Route>
    </Routes>
    
  )
}

export default App;
