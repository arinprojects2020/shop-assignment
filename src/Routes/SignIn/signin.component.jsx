import React from "react";
//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import {auth,
     signInWithGooglePopup , 
     createUserDocumentFromAuth, 
     signInWithGoogleRedirect } 
     from "../../Utils/Firebase/firebase.utils";
//import { async } from "@firebase/util";

     


const SignIn=()=>{
    {/*} useEffect(()=>{
        async function fetchData() {
            // You can await here
            const response = await getRedirectResult(auth);
             if (response){
                 const userDocRef = await createUserDocumentFromAuth(response.user)
             }
          }
         
         fetchData();
     },[])*/}
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h2>sigin</h2>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            {/*<button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button>*/}
        </div>
    )
}


export default SignIn;