import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../congiq/firebase.config";
import useAxios from "../Hooks/useAxios";

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState({});
      const [isLoading, setIsLoading] = useState(true);
      const axios = useAxios();

      // Google login
      const googleLogin = () => {
            setIsLoading(true);
            return signInWithPopup(auth, googleProvider)
      }

      // crete user
      const createUser = (email, password) => {
            setIsLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update profile
      const profileUpdate = (name, photo) => {
            setIsLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      // login user
      const login = (email, password) => {
            setIsLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      // log out
      const logOut = () => {
            setIsLoading(true);
            return signOut(auth);
      }

      // informer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  const loggedUser = { email: currentUser?.email || user?.email }
                  setUser(currentUser);
                  setIsLoading(false);

                  // jwt
                  if (currentUser) {
                        axios.post('/auth/jwt', loggedUser, { withCredentials: true })
                              .then(res => {
                                    console.log('user logged in', res.data);
                              })
                  }
                  else {
                        axios.post('/auth/logout', loggedUser, { withCredentials: true })
                              .then(res => {
                                    console.log('user logged out', res.data);
                              })
                  }

            })
            return () => {
                  return unSubscribe()
            }
      }, [axios, user?.email]);

      const authentications = {
            googleLogin,
            isLoading,
            user,
            createUser,
            profileUpdate,
            login,
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