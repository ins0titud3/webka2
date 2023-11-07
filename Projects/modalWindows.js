const openModalWindow = document.querySelectorAll('.cards');

openModalWindow.forEach((card) => {
    card.addEventListener('click', () => {
        const imageSrc = card.getAttribute('data-image');
        const textContent = card.getAttribute('data-text');
        const textSpace = card.getAttribute('text')

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