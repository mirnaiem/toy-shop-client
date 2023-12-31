import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app)
const AuthProvider = ({children}) => {

 const [user,setUser]=useState(null);
 const [loading,setLoading]= useState(true);

 // google login--------

const googleProvider=new GoogleAuthProvider();
const logWithGoogle=()=>{
 setLoading(true)
 return signInWithPopup(auth,googleProvider)
}

//REgister with email password---------

 const createUser=(email,password)=>{
  setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password)
 };

 // Login part----------

 const loginUser=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
 };

 // Logout.............

 const logOutUser=()=>{
  return signOut(auth)
 };

 // Retain user by onAuthStateChange.........
 
 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
   setUser(currentUser)
   setLoading(false)
  })
 return ()=>{
  return unSubscribe()
 }
 },[])

const authInfo={
 user,
 loading,
 createUser,
 loginUser,
 logOutUser,
 logWithGoogle
}
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider >
 );
};

export default AuthProvider;