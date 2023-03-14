// const $ = document.querySelector.bind(document);

// var login = $(".option-login");
// var validation1 = $("#form-1");
// var validation2 = $("#form-2");
// var logout = $(".option-logout");


// document.querySelector(".btn.btn-login").addEventListener("click", (e) => {
// 	e.preventDefault();
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   // var email = document.getElementById("email").value;
//   let arruser = JSON.parse(localStorage.getItem("userArr"));
//   let user = arruser.find(item => item.username ==username );
//   if(user) {
//     if(user.password ==password && user.usertype == 'kh') {
//       alert('khach hang');
//       let isUser = true;
//       window.location.href = "index.html";
//       document.getElementById(change).classList.add('account1')
//       //document.getElementById('btn-admin').style.display="none"
//     } else if(user.password == password && user.usertype =='admin'){
//       alert("admin");
//       let isAdmin = true;
//       window.location.href = "index.html";
//     } else{
//       alert('sai mat khau!')
//     }
//   } else {
//     alert("Tai khoan khong ton tai !")
//   }
// })


import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "./need.js";
import { validation } from "./validation.js";

const form = queryElement(".form-2");
const inputList = form.querySelectorAll(".input__field input");
const LoginBtn = form.querySelector(".btn-login");
const inputWithIcon = queryElement(".input-with-icon");
const eyeIcon = inputWithIcon.querySelector(".fa-eye");
const eyeSlashIcon = inputWithIcon.querySelector(".fa-eye-slash");
const inputPassword = inputWithIcon.querySelector("input");

inputWithIcon.addEventListener("click", (e) => {
  if (e.target.className.includes("hide-password")) {
      eyeIcon.classList.remove("hidden");
      eyeSlashIcon.classList.add("hidden");
      inputPassword.type = "text";
  }

  if (e.target.className.includes("show-password")) {
      inputWithIcon.querySelector(".hidden").classList.remove("hidden");
      e.target.classList.add("hidden");
      inputPassword.type = "password";
  }
});

inputList.forEach((input) => {
  input.addEventListener("change", () => validation(input));
  input.addEventListener("blur", () => validation(input));
});


function handleLogin() {
  let isError = false;
  inputList.forEach((input) => {
      if (validation(input)) isError = true;
  });

  if (isError) {
      window.alert("error!");
      return;
  }

  const userList = getLocalStorage("userArr");

  const userIdx = userList.findIndex(
      (user) =>
          user.username === form.querySelector("#username").value &&
          user.password === form.querySelector("#password").value
  );

  if (userIdx !== -1) {
      setLocalStorage("isLogin", true);
      setLocalStorage("isAdmin", userList[userIdx].isAdmin);
      if (userList[userIdx].isAdmin) {
          window.location.assign("../html/index.html");
      }
      else {
          window.location.assign("../html/index.html");
      }
  } else window.alert("username or password is invalid!!!");

}

LoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleLogin();
})
