const inputPassword = document.querySelector('#password');
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
const baton = document.querySelector('#baton')

// baton.addEventListener('click', (e) => {
//    e.preventDefault()
// });


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
         required: true,
      },
      password: {
         required: true,
      }
   },
   submitHandler: function (form) {
      $(form).ajaxSubmit();
      $(baton).on('click', function (e) {
         form.submit
      });
   }
});
// const passwordInput = document.querySelector('#password');
// baton.addEventListener('click', function (e) {
//    if (passwordInput.value.length <= 8) {
//       e.preventDefault()

//    } else {
//       return
//    }
// });