const loginBtn = document.querySelector('#getLogin');

let user={};

window.addEventListener('DOMContentLoaded', async () => {
    user = await axios.get(`https://webprojass4-default-rtdb.firebaseio.com/users.json`)
    console.log(user);
})

loginBtn.addEventListener('click', async (e)=>{
    e.preventDefault();

    const username = document.querySelector('#usernameLogin').value;
    const password = document.querySelector('#passwordLogin').value;


    const userData = user.data;
    console.log(userData);
    for (let userKey in userData) {
        if (userData[userKey].userName == username && userData[userKey].password == password) {
            console.log('nice');
            localStorage.setItem('key', userKey);
            location.reload();
        }
    }
})


