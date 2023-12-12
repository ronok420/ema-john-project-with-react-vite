import React, { createContext, useEffect, useState } from 'react';
import  {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth =getAuth(app);


export const Authcontext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user,setUser] = useState('');
   
   
    

    const createUer =(email,password)=>{
      
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userSignIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            return ()=>{
                return unsubscribe();
            }

        })
    },[])


    const authInfo = {
        user,
        createUer,
        userSignIn,
        logOut
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;