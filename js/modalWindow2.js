const parent = document.querySelector(".projects");

setTimeout(async() => {
    const response = await axios.get("https://webprojass4-default-rtdb.firebaseio.com/posts.json")
    const data = response.data
    console.log(data);
    Object.keys(data).map((key) => {
        const child =  document.createElement("a");
        child.className = "cards flex-shrink-1 text-decoration-none"

        child.id = "finishedProj"

        child.setAttribute('dataImage', data[key].img)
        child.setAttribute('discription', data[key].discription)
        child.setAttribute('dataText',data[key].title)
        const childImg = document.createElement("img");
        childImg.src = data[key].img
        childImg.className = "img-fluid"

        const childH = document.createElement("h5");
        childH.innerHTML = data[key].title
        childH.className = "mt-3 text-primary-emphasis"

        child.appendChild(childImg)
        child.appendChild(childH)
        parent.appendChild(child)
    })

const openModalWindow = document.querySelectorAll('.cards');

    openModalWindow.forEach((card) => {
    card.addEventListener('click', () => {
        const imageSrc = card.getAttribute('dataImage');
        const textContent = card.getAttribute('dataText');
        const textSpace = card.getAttribute('discription')
        console.log(textSpace);
        createModal(imageSrc, textContent, textSpace);
    });
});

function createModal(imageSrc, textContent, textSpace){
    const wrapper = document.createElement('div');
    wrapper.className = 'modalWrapper'

    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    wrapper.appendChild(backdrop);
    backdrop.addEventListener('click', () => {
        wrapper.remove();
    })

    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';
    wrapper.appendChild(modalContainer);

    const modalMain =document.createElement('div');
    modalMain.className = 'modalMain'
    modalContainer.appendChild(modalMain);

    const modalMainDiv =document.createElement('div');
    modalMainDiv.className='first_content';
    modalMain.appendChild(modalMainDiv);

    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    modalMainDiv.appendChild(imageElement);

    const textElement = document.createElement('p');
    textElement.innerText = textContent;
    modalMainDiv.appendChild(textElement);
    //--------------------------------------------------------------

    const modalMainDiv2 = document.createElement('div');
    modalMainDiv2.className = 'second_content';
    modalMain.appendChild(modalMainDiv2);

    const textForm = document.createElement('p');
    textForm.innerText = textSpace;
    modalMainDiv2.appendChild(textForm);

    const buttonOk = document.createElement('button');
    buttonOk.className = 'modalOkButton';
    buttonOk.innerText = 'OK';
    buttonOk.addEventListener('click', () => {
        wrapper.remove()
    })

    modalMainDiv2.appendChild(buttonOk);

    document.body.appendChild(wrapper);
}
}
)