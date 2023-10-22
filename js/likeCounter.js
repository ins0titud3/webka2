const firstPostlikeBtn = document.querySelector('#likeBtnFirstPost')
const dislikeBtnFirstPost = document.querySelector('#dislikeBtnFirstPost')

const likesFirstPost = document.querySelector('#likesFirstPost');
const dislikesFirstPost = document.querySelector('#dislikesFirstPost');

let firstLikes = 0;
let firstDislikes = 0;

firstPostlikeBtn.addEventListener('click', handleFirstPostLike);
function handleFirstPostLike(){
    firstLikes++;
    likesFirstPost.textContent = `${firstLikes}`
}

dislikeBtnFirstPost.addEventListener('click', handleFirstPostDislike);
function handleFirstPostDislike(){
    firstDislikes++;
    dislikesFirstPost.textContent = `${firstDislikes}`
}



const likeBtnSecondPost = document.querySelector('#likeBtnSecondPost');
const dislikeBtnSecondPost = document.querySelector('#dislikeBtnSecondPost')

const likesSecondPost = document.querySelector('#likesSecondPost');
const dislikesSecondPost = document.querySelector('#dislikesSecondPost');

let secondLikes = 0;
let secondDislikes = 0;

likeBtnSecondPost.addEventListener('click', handleSecondPostLike);
function handleSecondPostLike(){
    secondLikes++;
    likesSecondPost.textContent = `${secondLikes}`
}

dislikeBtnSecondPost.addEventListener('click', handleSecondPostDisLike);
function handleSecondPostDisLike(){
    secondDislikes++;
    dislikesSecondPost.textContent = `${secondDislikes}`
}