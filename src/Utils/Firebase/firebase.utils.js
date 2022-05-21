
import {initializeApp} from "firebase/app";
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword} 
    from "firebase/auth";
   
import {getFirestore,doc,setDoc, getDoc}from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_fMUtUNBndti8zAXOgAf9qBzbpalCZVI",
    authDomain: "sabka-bazar-db.firebaseapp.com",
    projectId: "sabka-bazar-db",
    storageBucket: "sabka-bazar-db.appspot.com",
    messagingSenderId: "608070255200",
    appId: "1:608070255200:web:59862b09acf9d306597905",
    measurementId: "G-T80JT0DEZY"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
//this configuration is for google
googleProvider.setCustomParameters({
      prompt:"select_account"
  });

  export const auth = getAuth();//using auth get to know user is properly authenticated or not
  export const signInWithGooglePopup=() => signInWithPopup(auth ,googleProvider);
  export const signInWithGoogleRedirect =()=>signInWithRedirect(auth , googleProvider);


//Instantiate firestore to get access of the database
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {})=> {
    if (!userAuth) return;
      const userDocRef = doc(db , "user", userAuth.uid);

      console.log(userDocRef)

      const userSnapShot = await getDoc(userDocRef);//snapshaot will allow to acces the data
      console.log(userSnapShot);
      console.log(userSnapShot.exists());//exists method check that the data is inside the db or not


      if (!userSnapShot.exists()) {
        const { displayName,
            email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
          displayName,
            email,
            createdAt,
            ...additionalInformation
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    
      return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
   return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };


 

