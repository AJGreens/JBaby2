import React,{useState,useEffect, createContext} from 'react'
import {auth,provider} from '../components/Firebase' 

export const AuthContext= createContext()

export function AuthProvider({children}){
    const [currUser,setCurrUser]=useState()
    const[dummyAccount, setDummyAccount] = useState("no")
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
                setCurrUser(user)
                setLoading(false)
            }
        )

    },[])

    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function signIn(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function signInGoogle(){
        return auth.signInWithPopup(provider)
    }
    function signOut(){
        return auth.signOut()
    }


    
    const value={
        signUp,
        signIn,
        signInGoogle,
        signOut,
        currUser,
        dummyAccount,
        setDummyAccount
    }


    return(
        <AuthContext.Provider value={value}>
            {!loading&&children}
        </AuthContext.Provider>

    )


}



