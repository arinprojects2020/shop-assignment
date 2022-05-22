import React from 'react';
import "./sign-in.styles.scss"
import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth ,
    signInAuthUserWithEmailAndPassword} from '../../Utils/Firebase/firebase.utils';
  



const defaultFormField={
    email: "",
    password: "",
   }

const SignIn =()=>{
    const[formFields,setFormFields] = useState(defaultFormField);
    //destructing intial values
    const{ email ,password } = formFields;

  

    const resetFormFields = () => {
        setFormFields(defaultFormField);
      };
      const signInWithGoogle = async()=>{
        const {user} = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user)
      }
    const handleSubmit= async(e)=>{
        e.preventDefault();

        

    try{ 
        const {user} = await signInAuthUserWithEmailAndPassword(email,password);
       
        resetFormFields();

        }catch(error){
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('incorrect password for email');
                  break;
                case 'auth/user-not-found':
                  alert('no user associated with this email');
                  break;
                default:
                  console.log(error);
              }
        }
        
    };
   
    const handleChange=(e)=>{
        const {name, value} = e.target;

        setFormFields({...formFields,[name]: value});
    }
    return(
        <div className='login'>
        <div class="login-left">
            <h2>LogIn</h2>
            <p>Get access to your Orders,Wishlist and Recomendations</p>
        </div>
        <form onSubmit={handleSubmit} autocomplete="off">
      
            <div className='details'>
            <input
            name="email"
            type="email"
            placeholder='Email'
            value={email}
            onChange={handleChange}
            required
             />
            <label className='lbl'  htmlFor='email'>Email Address</label>
            </div>
            <div className='details'>
            <input
            name="password"
            type="password"
            placeholder='Password'
            value={password}
            onChange={handleChange}
            required
             />
            <label className='lbl'  htmlFor='password'>Password</label>
            </div>
          <div className='"buttons'>
           <button className="btn" type="submit" onSubmit={handleSubmit} >Log In</button>
       {/*<button className="btn" type="google" onClick={signInWithGoogle} >Sign In with Google</button>*/}
           </div>
        
        </form>
            
        </div>
    )
}


export default SignIn;