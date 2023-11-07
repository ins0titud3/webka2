const { default: axios } = require("axios")

async function createPost(){
    const data = document.querySelector().textContent
    const discription = document.querySelector().textContent
    const img = document.querySelector().textContent
    const title = document.querySelector().textContent
    await axios.post("https://webprojass4-default-rtdb.firebaseio.com/posts.json", {
        data: data,
        discription: discription,
        img: img,
        title: title
    })
}