import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext("");
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const githutbProvider = new GithubAuthProvider();
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserData = (name, photoUrl) => {
    if (user) {
      return updateProfile(user, { displayName: name, photoURL: photoUrl })
        .then(() => {
          // Update user state after profile is successfully updated
          setUser({ ...user, displayName: name, photoURL: photoUrl });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githulogin = () => {
    return signInWithPopup(auth, githutbProvider);
  };

  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };
  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsCribe();
    };
  }, []);

  const authInfo = {
    loading,
    createUser,
    signin,
    logOut,
    user,
    updateUserData,
    googleSignIn,
    githulogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
