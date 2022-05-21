import React from 'react';
import "./register.styles.scss";
import { useState,useContext } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utils/Firebase/firebase.utils';
import { UserContext } from '../../context/user.context';


const defaultFormField={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""

}

const Register =()=>{
    const[formFields,setFormFields] = useState(defaultFormField);
    //destructing intial values
    const{firstName, lastName ,email ,password, confirmPassword} = formFields;
   
const {setCurrentUser}=useContext(UserContext);

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormField);
      };

    const handleSubmit= async(e)=>{
        e.preventDefault();

        if(
        password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }

    try{ const {user} = await createAuthUserWithEmailAndPassword(email , password)
          setCurrentUser(user);
        resetFormFields();
        await createUserDocumentFromAuth (user,{firstName, lastName});
        
        }catch(error){
            console.log("Something goes wrong",error)
        }
        
    };
   
    const handleChange=(e)=>{
        const {name, value} = e.target;

        setFormFields({...formFields,[name]: value});
    }
    return(
        <div className='register'>
        <div class="register-left">
            <h2>SignUp</h2>
            <p>We do not share your personal details with anyone</p>
        </div>
        <form onSubmit={handleSubmit} autocomplete="off">
       <div className='details'>
       <input 
           name="firstName"
            type="text"
            autoFocus
            placeholder='First Name'
           value={firstName}
           
           onChange={handleChange}
           required
           />
            <label className='lbl'  htmlFor='firstName'>First Name</label>
            </div>
            <div className='details'>
            <input
           
            name="lastName"
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={handleChange}
            required
            />
            <label className='lbl'  htmlFor='lastName '>Last Name</label>
            </div>
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
            <div className='details'>
            <input
            name="confirmPassword"
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={handleChange}
            required
            />
            <label className='lbl' htmlFor='confirmPassword'>Confirm Password</label>
            </div>
        <button className="btn" type="submit" onSubmit={handleSubmit} >Sign Up</button>

        </form>
            
        </div>
    )
}


export default Register;