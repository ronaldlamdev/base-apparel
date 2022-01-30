const email = document.getElementById("email");
const button = document.getElementById("submit");
const errorIcon = document.getElementsByClassName("error-icon-img")[0];
const errorMessage = document.getElementById("error-popup-message");

const isValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

button.addEventListener('click', function(e) {
  let value = email.value;
  if (value === "" || !isValid(value)) {
    email.classList.add('error-input');
      errorIcon.classList.add('show');
      errorMessage.classList.add('show');
  }
  else {
    email.value = '' ;
    email.classList.remove('error-input');
    errorIcon.classList.remove('show');
    errorMessage.classList.remove('show');
  }
  })
