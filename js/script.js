const eyeColor = 'Green / Зелений';
console.log(eyeColor);


const $fsBurgerMenuWraper = document.querySelector('.fs-burgermenu-wraper')
const $fsBurgerMenu = document.querySelector('.fs-burgermenu');
const $fsElementTwoAndThree = document.querySelector('.fs-elementTwoAndThree');

$fsBurgerMenuWraper.addEventListener('click', () => {
   $fsBurgerMenu.classList.toggle('fs-burgermenu-activi');
   $fsElementTwoAndThree.classList.toggle('fs-elementTwoAndThree-activi');
});

//hello
const buttons = document.querySelectorAll('button')
for (let i = 0; i < buttons.length; i++) {
   buttons[i].classList.add('baton-activ');
}






