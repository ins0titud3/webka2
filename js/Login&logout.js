// const logout = document.querySelector("#logout")
// setTimeout(async() => {
//   const response = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/users.json")
//   Object.keys(response.data).map((key) => {
//     if(response.data[key].isLogin == true){
//       logout.style.display = "none"
//     }
//   })
// }, 0)

async function createUser(){
  e.preventDefault();
  if(validation()){
    
  }
}
async function logout(){
    const signupModal = document.querySelector("#signupModal")
  const loginModal = document.querySelector("#loginModal")
  const signupButton = document.querySelector("#signupButton")
  const loginButton = document.querySelector("#loginButton")
  const back = document.querySelector(".modal-backdrop")
  const logout = document.querySelector("#logout")
  const response = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/users.json")
  Object.keys(response.data).map((key) => {
    if(response.data[key].isLogin == true){
      loginButton.style.display = "flex"
      signupButton.style.display = "flex"
      logout.style.display = "none"
      setState(key, "isLogin", false)
      return
    }
  })
}
async function login(event){
  event.preventDefault()
  const Login = document.querySelector("#username").value
  const Password = document.querySelector("#password").value
  const signupModal = document.querySelector("#signupModal")
  const loginModal = document.querySelector("#loginModal")
  const signupButton = document.querySelector("#signupButton")
  const loginButton = document.querySelector("#loginButton")
  const back = document.querySelector(".modal-backdrop")
  const logout = document.querySelector("#logout")
  // const Login = event.target
  // const Password = event.target
  console.log(Login, Password);
  let suc = false;
  let isAdmin = false
  const response = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/users.json")
  Object.keys(response.data).map((key) => {
    console.log(response.data[key].login);
    if(response.data[key].login == Login){
      if(response.data[key].password == Password){
        suc = true;
        setState(key, "isLogin", true)
        isAdmin = response.data[key].isAdmin
        signupModal.style.display = "none"
        loginModal.style.display = "none"
        loginButton.style.display = "none"
        signupButton.style.display = "none"
        back.style.display = "none"
        logout.style.display = "flex"
        return
      }
      else{
        return
      }
    }
  })
  if(isAdmin){
    alert("Поздравляем!!! Вы админ!!!")
  }
  else if(suc){
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
async function setState(key,type, value){
  const res = await axios.get(`https://webprojass4-default-rtdb.firebaseio.com/users/${key}.json`)
  console.log(res.data);
  await axios({
    method : "put",
    url :`https://webprojass4-default-rtdb.firebaseio.com/users/${key}.json`,
    data : {
      "userName": type == "username" ? value :  res.data.userName,
      "surName": type == "surName" ? value :  res.data.surName,
      "login": type == "login" ? value :  res.data.login,
      "password": type == "password" ? value :  res.data.password,
      "email": type == "email" ? value :  res.data.email,
      "isAdmin": type == "isAdmin" ? value :  res.data.isAdmin,
      "isLike":  type == "isLike" ? value :  res.data.isLike,
      "isLogin": type == "isLogin" ? value :  res.data.isLogin
    }
    });
}
async function getUser() {
  console.log(document.querySelector(".hmGroup").textContent);
  // await setState(0, "isLogin", true)

  // const res = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/users.json");
  // console.log(res.data);
  // Object.keys(res.data).map(key => {
  //   console.log(key);
  // })
  // res.data.map((obj, index) => {console.log(index, obj)}); 
  // await setState("Esimgali", "isLike", true)
    // const res = await axios({
    //   method : "get",
    //   url :"https://webprojass4-default-rtdb.firebaseio.com/users.json",
    //    params:{
    //     "isLike":true
    //    }})
    // console.log(res.data.isLike);
  // const current = res.data[0]
  // current["isLike"] = false
  // await axios.post("https://webprojass4-default-rtdb.firebaseio.com/users.json",current)
}