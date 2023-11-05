import { createContext } from "react";
import PropTypes from 'prop-types';

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../congiq/firebase.congig";

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

      // Google login
      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider)
      }

      const authentications = {
            googleLogin,
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