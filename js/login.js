const DB_PATH = "users.json";

const userSignIn = async () => {
  const username = userEmail.value;
  const password = userPassword.value;


  const response = await fetch(DB_PATH);
  const data  = await response.json();
  const users = data.users;

  const currentUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!currentUser) {
    Swal.fire("User does not exist or credentials are incorrect", "error");
    return;
  } else {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    console.log(currentUser);
  }
  onLoginSuccess();
};

const onLoginSuccess = () => {
  Swal.fire("You have signed in successfully!", "success");
  window.location.href = "./home.html";
};

signInButton.addEventListener("click", userSignIn);
