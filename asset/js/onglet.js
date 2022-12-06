const onglet1 = document.getElementById('onglet1');
const onglet2 = document.getElementById('onglet2');
const onglet3 = document.getElementById('onglet3');
const onglet4 = document.getElementById('onglet4');


const ongletOne = document.getElementById('ongletOne');
const ongletTwo = document.getElementById('ongletTwo');
const ongletThree = document.getElementById('ongletThree');
const ongletFour = document.getElementById('ongletFour');

const boxGame = document.getElementById('boxGame');

onglet1.addEventListener('click', () => {
    ongletOne.classList.remove('noVisible');
    ongletOne.classList.add('visible');
    onglet1.classList.remove('onglet');
    onglet1.classList.add('ongletOpen');

    ongletTwo.classList.add('noVisible');
    ongletTwo.classList.remove('Visible');
    onglet2.classList.remove('ongletOpen');
    onglet2.classList.add('onglet');

    ongletThree.classList.add('noVisible');
    ongletThree.classList.remove('Visible');
    onglet3.classList.remove('ongletOpen');
    onglet3.classList.add('onglet');

    ongletFour.classList.add('noVisible');
    ongletFour.classList.remove('Visible');
    onglet4.classList.remove('ongletOpen');
    onglet4.classList.add('onglet');
})

onglet2.addEventListener('click', () => {
    ongletTwo.classList.remove('noVisible');
    ongletTwo.classList.add('visible');
    onglet2.classList.remove('onglet');
    onglet2.classList.add('ongletOpen');
   

    ongletOne.classList.add('noVisible');
    ongletOne.classList.remove('Visible');
    onglet1.classList.remove('ongletOpen');
    onglet1.classList.add('onglet');

    ongletThree.classList.add('noVisible');
    ongletThree.classList.remove('Visible');
    onglet3.classList.remove('ongletOpen');
    onglet3.classList.add('onglet');

    ongletFour.classList.add('noVisible');
    ongletFour.classList.remove('Visible');
    onglet4.classList.remove('ongletOpen');
    onglet4.classList.add('onglet');
})

onglet3.addEventListener('click', () => {
    ongletThree.classList.add('visible');
    ongletThree.classList.remove('noVisible');
    onglet3.classList.add('ongletOpen');
    onglet3.classList.remove('onglet');

    ongletOne.classList.add('noVisible');
    ongletOne.classList.remove('Visible');
    onglet1.classList.remove('ongletOpen');
    onglet1.classList.add('onglet');

    ongletTwo.classList.add('noVisible');
    ongletTwo.classList.remove('Visible');
    onglet2.classList.remove('ongletOpen');
    onglet2.classList.add('onglet');
    
    ongletFour.classList.add('noVisible');
    ongletFour.classList.remove('Visible');
    onglet4.classList.remove('ongletOpen');
    onglet4.classList.add('onglet');
})

onglet4.addEventListener('click', () => {
    ongletFour.classList.add('visible');
    ongletFour.classList.remove('noVisible');
    onglet4.classList.add('ongletOpen');
    onglet4.classList.remove('onglet');

    ongletOne.classList.add('noVisible');
    ongletOne.classList.remove('Visible');
    onglet1.classList.remove('ongletOpen');
    onglet1.classList.add('onglet');

    ongletThree.classList.add('noVisible');
    ongletThree.classList.remove('Visible');
    onglet3.classList.remove('ongletOpen');
    onglet3.classList.add('onglet');
    
    ongletTwo.classList.add('noVisible');
    ongletTwo.classList.remove('Visible');
    onglet2.classList.remove('ongletOpen');
    onglet2.classList.add('onglet');
})