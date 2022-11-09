const $email = document.getElementById('email');
const $myForm = document.getElementById('myForm');
const $errorMessage = document.getElementsByClassName('error-message');

let validateForm = (id, index, message) => {
  if (id.value.trim() === '') {
    id.classList.add('error');
    $errorMessage[index].innerHTML = message;
    $errorMessage[index].style.display = 'block';
  } else {
    id.classList.remove('error');
    $errorMessage[index].innerHTML = "";
    $errorMessage[index].style.display = 'none';
  }
}

$myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm($email, 0, "Please provide a valid email address");
});