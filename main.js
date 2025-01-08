const loginForm = document.getElementById('login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  const value = {
    username: username,
    password: password
  }
  console.log(value);
});




