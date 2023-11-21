async function createUser(e){
    e.preventDefault();
    const name = document.querySelector('#name')
    const surname = document.querySelector('#surname')
    const username = document.querySelector('#signupUsername')
    const email = document.querySelector('#email');
    const password = document.querySelector('#password')
    if(!name.value && !surname.value && !username.value && !password.value && !email.value){
        alert('Fill the form')
    }else{
        if(password.value.length <= 5){
            alert('Password length should be more than 5')
        }
        else if(name.value.length <= 3){
            alert('Name length should be more than 5')
        }
        else if(surname.value.length <= 3){
            alert('Surname length should be more than 5')
        }
        else if(username.value.length <= 3){
            alert('Username length should be more than 5')
        }
        else{
            await axios.post(
                "https://webprojass4-default-rtdb.firebaseio.com/users.json",
                {
                    "userName":name.value,
                    "surName": surname.value,
                    "login": username.value,
                    "password":password.value,
                    "email":email.value,
                }
            )
            location.reload();
        }
    }
}


const addUser = document.querySelector('#createBtn');
addUser.addEventListener('click', createUser);