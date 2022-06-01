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
   let buttonsColors = buttons[i].style.background;
   let buttonTextColors = buttons[i].style.color;
   let buttonLetterSpacing = buttons[i].style.letterSpacing;
   let buttonWidth = buttons[i].style.width;
   let buttonTextShadown = buttons[i].style.textShadow
   const calculateWidth = (e) => {

      let buttonNewWidth = buttonWidth * '10%'
      return buttonNewWidth;
   };
   buttons[i].addEventListener('mouseenter', (e) => {
      buttons[i].style.background = 'crimson';
      buttons[i].style.color = 'white';
      buttons[i].style.transitionDuration = '0.5s'
      buttons[i].style.letterSpacing = '2.8px'
      buttons[i].style.width = calculateWidth();
      buttons[i].style.textShadow = '#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px'

   })
   buttons[i].addEventListener('mouseleave', function (e) {
      buttons[i].style.background = buttonsColors;
      buttons[i].style.color = buttonTextColors;
      buttons[i].style.letterSpacing = buttonLetterSpacing
      buttons[i].style.width = buttonWidth;
      buttons[i].style.textShadow = buttonTextShadown
   });
};

const delegatingList = document.querySelector('.lal-element-2-list');
delegatingList.addEventListener('mouseenter', function (e) {
   if (e.target.hasAttribute('data-set')) {

   }
});








