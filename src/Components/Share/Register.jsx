import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth(app);

const Register = () => {
  const { createUser, user, updateUserData, googleSignIn, githulogin } =
    useContext(AuthContext);
  const [error, setErr] = useState("");

  // console.log(createUser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateUserData(name, photo);
        navigate(from, { replace: true });

        form.reset();
        if (user) {
          toast("Acount Create Success");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage);
        // ..
      });
  };

  const handleGooglesignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });

        if (user) {
          toast("Acount Create Success");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const handlegithulogin = () => {
    githulogin()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });

        if (user) {
          toast("Acount Create Success");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div>
      
      <ToastContainer />
    </div>
  );
};

export default Register;
