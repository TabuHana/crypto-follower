import { createContext, useContext, useEffect } from "react";
import { auth, db } from "../firebase";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from "firebase/auth";
import { doc, setDoc } from "firstbase/firestore";

const UserContext = createContext()

export const AuthConextProvider = ({children}) => {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    return setDoc(doc(db, 'users', email), {
      watchList: [],
    })
  }
}