import { existsSync, readFileSync } from "fs";

const BD_PATH = "../users.json";

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const secretContent = document.querySelector("#secretContent");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;

  const response = await fetch("../users.json");
  const users = await response.json();
  console.log(users)

  if (
    !users.find(
      (user) => user.user.username === signInEmail && user.user.password === signInPassword
    )
  ) {
    Swal.fire("User does not exist or credentials are incorrect", "error");
    return;
  }

  onLoginSuccess();
};

const userSignUp = () => {
  const users = [];

  console.log("existe el archivo? "+existsSync(BD_PATH))

  try {
    const data = readFileSync(BD_PATH, "utf-8");
    users = JSON.parse(data);
  } catch (e) {
    console.log("File does not exists");
    return;
  }

  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;

  if (
    users.find(
      (user) => user.user.username === signInEmail && user.user.password === signInPassword
    )
  ) {
    Swal.fire("User already exists","error");
    return;
  }

  users.push({ user: { username: signInEmail, password: signInPassword } });
  onLoginSuccess();
};


const onLoginSuccess = (msg) => {
  Swal.fire("You have signed in successfully!", "success");
  window.location.href = "./home.html";
};


signUpButton.addEventListener("click", userSignUp);
signInButton.addEventListener("click", userSignIn);

// const users = [];

// async function getUsers() {
//   const response = await fetch("../users.json");
//   const users = await response.json();
// }

// getUsers();
