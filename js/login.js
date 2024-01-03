import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBojzze7jEKUU9eItTb415B5_VY0B0Qxv4",
  authDomain: "login-proyecto-coderhouse.firebaseapp.com",
  projectId: "login-proyecto-coderhouse",
  storageBucket: "login-proyecto-coderhouse.appspot.com",
  messagingSenderId: "400474600977",
  appId: "1:400474600977:web:94e7c0ae14fe8e47b7e3b0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      Swal.fire("Creada", "Tu cuenta ha sido creada", "success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      Swal.fire("Error", errorMessage, "Error");
    });

};

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire("Exito", "Has iniciado sesion", "success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      Swal.fire("Error", errorMessage);
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "./home.html";
    } else {
      Swal.fire("Error", "No has podido iniciar sesion", "Error");
    }
  });
};

checkAuthState();


signUpButton.addEventListener("click", userSignUp);
signInButton.addEventListener("click", userSignIn);
