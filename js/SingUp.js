const { default: axios } = require("axios");

async function createUser(){
    e.preventDefault();
    const isLogin = document.querySelector().title
    const isPassword = document.querySelector().title
    const isUserName = document.querySelector().value
    const isUserSurname = document.querySelector().value
    const email = document.querySelector().value
    if(validation()){
        await axios.post(
            "https://webprojass4-default-rtdb.firebaseio.com/users.json",
            {
                "userName":isUserName,
                "surName": isUserSurname,
                "login": isLogin,
                "password":isPassword,
                "email":email,
                "isAdmin":false,
                "isLike": false,
                "isLogin":false
            }
        )
    }
  }
function validation(){
    e.preventDefault();
    const isLogin = document.querySelector().title
    const isPassword = document.querySelector().title
    const isUserName = document.querySelector().value
    const isUserSurname = document.querySelector().value
    const email = document.querySelector().value
    if(isLogin && isPassword && isUserName !== "" && isUserSurname !== "" && email !== ""){
      return true
    }
    else{
      return false
    }
  }
  function validationOfUsername(){
    e.preventDefault();
    const loginInput = document.querySelector();
    const res = document.querySelector();
    loginInput.addEventListener("change", (event) => {
      if(event.target.value >= 5){
        res.textContent = "Логин прошла проверку"
        res.title = true
        return true;
      }
      else{
        res.textContent ="Логин должно быть 5 символов"
        res.title = false
      }
    });
  }
  function validationofPassword(){
    e.preventDefault();
    const passwordInput = document.querySelector();
    const res = document.querySelector();
    passwordInput.addEventListener("change", (event) => {
      if(event.target.value >= 6){
        res.textContent = "пароль прошла проверку"
        res.title = true
        return true;
      }
      else{
        res.textContent ="Пароль должно быть 6 символов"
        res.title = false
      }
    });
  }