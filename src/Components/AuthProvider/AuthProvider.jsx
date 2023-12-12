import React, { createContext, useEffect, useState } from 'react';
import  {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth =getAuth(app);


export const Authcontext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user,setUser] = useState('');
    const [loading,setLoading]= useState(true);
   
   
    

    const createUer =(email,password)=>{
        setLoading(true);
      
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userSignIn =(email,password)=>{
        setLoading(true);

        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            return ()=>{
                return unsubscribe();
            }

        })
    },[])


    const authInfo = {
        user,
        createUer,
        userSignIn,
        logOut,
        loading
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;