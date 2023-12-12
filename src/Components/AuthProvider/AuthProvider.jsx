import React, { createContext, useState } from 'react';
import  {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth =getAuth(app);


export const Authcontext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user,setuser] = useState([])
    

    const createUer =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userSignIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    const authInfo = {
        user,
        createUer,
        userSignIn,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;