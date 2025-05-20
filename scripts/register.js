import {gridHTML} from './front page/grid-front-page.js';


function togglePassword () {
  const passwordInput = document.querySelector('.js-input-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

document.querySelector('.js-input-password').addEventListener('click', () => {
  togglePassword ();
});
