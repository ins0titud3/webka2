const loginBtn = document.querySelector('#getLogin');
let isNameValid = false
let isPassValid = false
let user={};
const formGroup = document.querySelectorAll(".form-group")

const uname = document.querySelector('#usernameLogin')
const nameValid = document.createElement("p")
uname.addEventListener("input", ()=>{
    if(uname.value.length < 6){
        nameValid.innerHTML = "Username length should be more than 5"
    }
    else{
        isNameValid = true
        nameValid.innerHTML = ""
    }
})

const pass = document.querySelector('#passwordLogin')
const passValid =document.createElement("p")
pass.addEventListener("input", ()=>{
    if(!(/[A-Z]/.test(pass.value) &&
    /[a-z]/ .test(pass.value) &&
    /[0-9]/.test(pass.value) &&
    pass.value.length > 6)){
        passValid.innerHTML = "'Password length should be more than 5 and contain uppercase and lowercase letters'"
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
})

loginBtn.addEventListener('click', async (e)=>{
    e.preventDefault();

    
    const incorrectLOgin = document.createElement("p")

    const username = document.querySelector('#usernameLogin').value;
    const password = document.querySelector('#passwordLogin').value;
    let isCorrect = false
    if(isNameValid && isPassValid){
        const userData = user.data;
        Object.keys(userData).map((key)=>{
        if (userData[key].login ==  username && userData[key].password == password) {
            isCorrect = true
            console.log('nice');
            localStorage.setItem('key', key);
            location.reload();
            incorrectLOgin.innerHTML = ""
        }})
        if(!isCorrect){
            incorrectLOgin.innerHTML = "Вы не правильно ввели пароль или имя пользователя"
        }
        formGroup[1].appendChild(incorrectLOgin)
    }
    else{
        alert("Форма не валидна");
    }
})


