const returnCardR = document.querySelector ('.returnCardR');
console.log(returnCardR);
const returnCardV = document.querySelector ('.returnCardV');
console.log(returnCardV);
const gameCard = document.getElementById('gameCard');
console.log(gameCard);
const cardFlip = document.getElementById('card-flip')

returnCardR.addEventListener('click', ()=> {
    gameCard.classList.remove ('cardRecto');
    gameCard.classList.add ('cardVerso');
    cardFlip.classList.remove ('card-frontR');
    cardFlip.classList.add ('card-frontV');
})

returnCardV.addEventListener('click', ()=> {
    gameCard.classList.remove ('cardVerso');
    gameCard.classList.add ('cardRecto');
    cardFlip.classList.add ('card-frontR');
    cardFlip.classList.remove ('card-frontV');
})