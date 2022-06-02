const inputPassword = document.querySelector('#inputPassword');
const hideImage = document.querySelector('#hideImage');
var $isImageActivi = false
hideImage.addEventListener('click', () => {
   if ($isImageActivi === false) {
      $isImageActivi = true
      changeInputType()
   } else {
      returnInputType()
   }

})

const changeInputType = () => {
   inputPassword.setAttribute('type', 'text');
   hideImage.setAttribute('src', 'img/Eye.png');
}
const returnInputType = () => {
   inputPassword.setAttribute('type', 'password')
   hideImage.setAttribute('src', 'img/closedEye.png')
   $isImageActivi = false;
}

$('form').validate({
   rules: {
      username: {
         required: true
      },
      password: {
         required: true,
      },
      email: {
         required: true,
      }
   }



});