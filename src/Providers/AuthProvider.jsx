import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config'


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //create user & password for signUp page
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    //signIn
    const signIn = (email, password) => {
         setLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
    }

    //Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
   

    //check that Current user is present or not
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false) 
        });
        return() => {
            return unsubscribe()
        }
    }, [])
   

    const authInfo = {
       user,
       loading,
       createUser,
       signIn,
       logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;