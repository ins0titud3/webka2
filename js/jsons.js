async function createUser(){
  e.preventDefault();
  if(validation()){
    
  }
}
async function login(){
  const Login = document.querySelector().textContent
  const Password = document.querySelector().textContent
  const suc = false;
  const response = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/users.json")
  response.data.map((obj, index) => {
    if(obj.login == Login){
      if(obj.password == Password){
        suc = true;
        return
      }
      else{
        return
      }
    }
  })
  if(suc){
    alert("Вы успешно прошли проверку!")
  }
  else{
    alert("Вы неправильно ввели пароль или логин!")
  }
}

function validation(){
  e.preventDefault();
  const isLogin = document.querySelector().title
  const isPassword = document.querySelector().title
  if(isLogin && isPassword){
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
async function getUser() {
  const res = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/users.json")
  res.data.map((obj, index) => {console.log(index, obj)});
}