const email = document.getElementsByClassName('email-form');
const btn = document.getElementsByClassName('email-button');
const errorMessage = document.getElementsByClassName('.error-message');
const errorIcon = document.getElementsByClassName('.error-icon');

function validEmail() {
  
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

btn.addEventListener('click',  => {
  let value = email.value;
  if (value === "" || !isValid(value)) {
    errorMessage.classList.toggle('show');
    errorIcon.classList.toggle('show');
  }
  else {
    email.value = '' ;
    errorMessage.classList.remove('show');
    errorIcon.classList.remove('show');
  }
}
)