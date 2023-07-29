const userName = document.getElementById("name");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("Continue");
const popUP = document.getElementById("popUp");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("first");

  if (
    userName.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPassword.value.trim() === ""
  ) {
    popUP.style.display = "block";
  } else {
    if (password.value.trim() !== confirmPassword.value.trim()) {
      popUP.innerText = "Incorrect Password";
      popUP.style.display = "block";
      password.value = "";
      confirmPassword.value = "";
    } else {
      const userDetails = {
        fullName: userName.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        Token: generateAccessToken(),
      };

      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      window.location.href = "./profile";
    }
  }
});
function generateAccessToken() {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    token += charset[randomIndex];
  }
  return token;
}