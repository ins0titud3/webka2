var modal = document.getElementById("myModal");

var btn = document.getElementById("createBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



async function createUser(e){
    e.preventDefault();
    const isLogin = document.querySelector('#login')
    const isPassword = document.querySelector('#password')
    const isUserName = document.querySelector('#username')
    const isUserSurname = document.querySelector('#surname')
    const email = document.querySelector('#email')
    const isAdmin = document.querySelector('#radioButton');
    await axios.post(
        "https://webprojass4-default-rtdb.firebaseio.com/users.json",
        {
            "userName":isUserName.value,
            "surName": isUserSurname.value,
            "login": isLogin.value,
            "password":isPassword.value,
            "email":email.value,
            "isAdmin":Boolean(isAdmin.value),
            "isLike": false,
            "isLogin":false
        }
    )
    location.reload()
  }

const addUser = document.querySelector('#addUser');
addUser.addEventListener('click', createUser);
// data.forEach(element => {
//     console.log(element);
// });

const response = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/users.json")
const data = response.data;
console.log(data);

const usersContainer = document.querySelector('#users');
console.log(usersContainer);
document.addEventListener('DOMContentLoaded', 
usersContainer.innerHTML += Object.entries(data).map(([key, value]) => {
    console.log(value); // Убедитесь, что данные выводятся корректно в консоль
    return `
    <tr>
        <td>${value.userName}</td>
        <td>${value.surName}</td>
        <td>${value.login}</td>
        <td>${value.email}</td>
        <th><button>Edit</button></th>
        <th><button id="delete">Delete</button></th>
    </tr>`;
}).join(''));


const deleteBtn = document.querySelector('#delete');

deleteBtn.onclick(()=>{
    console.log('hello');
})