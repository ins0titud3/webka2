const loginBtn = document.querySelector('#getLogin');
let isNameValid = false
let isPassValid = false
let user={};
const formGroup = document.querySelectorAll(".form-group")

const uname = document.querySelector('#usernameLogin')
const nameValid = document.createElement("p")
uname.addEventListener("input", ()=>{
    console.log(uname.value.length);
    if(uname.value.length < 6){
        nameValid.innerHTML = "Невалидное имя"
    }
    else{
        isNameValid = true
        nameValid.innerHTML = ""
    }
})

const pass = document.querySelector('#passwordLogin')
const passValid =document.createElement("p")
pass.addEventListener("input", ()=>{
    console.log(pass.value.length);
    if(!(/[A-Z]/.test(pass.value) &&
    /[a-z]/ .test(pass.value) &&
    /[0-9]/.test(pass.value) &&
    pass.value.length > 4)){
        passValid.innerHTML = "Невалидный пароль"
    }
    else{
        isPassValid = true
        passValid.innerHTML = ""
    }
})



formGroup[1].appendChild(passValid)
formGroup[0].appendChild(nameValid)


window.addEventListener('DOMContentLoaded', async () => {
    user = await axios.get(`https://webprojass4-default-rtdb.firebaseio.com/users.json`)
    console.log(user);
})

loginBtn.addEventListener('click', async (e)=>{
    e.preventDefault();

    const username = document.querySelector('#usernameLogin').value;
    const password = document.querySelector('#passwordLogin').value;
    let isCorrect = false
    if(isNameValid && isPassValid){
        const userData = user.data;
    console.log(userData);
    Object.keys(userData).map((key)=>{
        if (userData[key].login ==  username && userData[key].password == password) {
            isCorrect = true
            console.log('nice');
            localStorage.setItem('key', key);
            location.reload();
        }
    }
    )
    }
    else{
        if(!isCorrect){
            alert("Вы не правильно ввели пароль или имя пользователя");
        }
        else{
            alert("Форма не валидна");
        }
    }
})


