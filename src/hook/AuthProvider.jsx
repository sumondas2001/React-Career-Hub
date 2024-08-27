import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import app from "../firebase/firebase.confige";

import toast from "react-hot-toast";

// auth context create
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const auth = getAuth(app);

     // google auth provider
     const googleLogin = () => {
          setLoading(true)
          return signInWithPopup(auth, provider)

     };
     // create User Email And Password

     const userRegister = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     };
     //user sign In Email And Password
     const userSignIn = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     }
     // on Auth State Changed
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

               setUser(currentUser)
               setLoading(false)


          })
          return () => {
               unSubscribe()
          }

     }, [auth])

     // log Out
     const logOut = () => {
          return signOut(auth)
               .then(() => {
                    setLoading(true)
                    toast.success('LogOut Successfully !')
               })

     }




     const authInfo = {
          googleLogin,
          userSignIn,
          userRegister,
          user,
          logOut,
          loading
     }
     return (
          <AuthContext.Provider value={authInfo} >
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;



AuthProvider.propTypes = {

     children: PropTypes.node,

}