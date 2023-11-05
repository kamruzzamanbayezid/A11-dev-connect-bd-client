import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../congiq/firebase.config";

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState({});
      const [isLoading, setIsLoading] = useState(true);

      // Google login
      const googleLogin = () => {
            setIsLoading(true);
            return signInWithPopup(auth, googleProvider)
      }

      // crete user
      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update profile
      const profileUpdate = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      // log out
      const logOut = () => {
            setIsLoading(true);
            return signOut(auth);
      }

      // informer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);
                  setIsLoading(false)
            })
            return () => {
                  return unSubscribe()
            }
      }, []);

      console.log('current user', user);

      const authentications = {
            googleLogin,
            isLoading,
            user,
            createUser,
            profileUpdate,
            logOut
      }

      return (
            <AuthContent.Provider value={authentications}>
                  {children}
            </AuthContent.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
}

export default AuthProvider;