const burger = document.getElementById('boiteBurger');
const burgerBar = document.getElementById('burgerBar');
console.log(burger);
console.log(burgerBar);

burger.addEventListener('click', ()=> {
    burgerBar.classList.remove('voletBurgerClose');
    burgerBar.classList.add('voletBurgerOpen');
})