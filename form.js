const form = document.getElementById('form1');
const email = document.getElementById('email');
const message = document.createElement('small');

message.classList.add('error-message');
form.appendChild(message);

const emailValidation = (email) => {
  const regularEx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return regularEx.test(email.value.trim());
};

function emailChecker() {
  const emailValues = email.value.trim();

  if (emailValues === '') {
    message.textContent = 'please add your email';
    return false;
  } else if (!emailValidation(email)) {
    message.textContent = 'Please Enter your email adress with lowerCase!!';
    return false;
  }
  else return true; 
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  emailChecker();
  if(emailChecker()){
    form.submit();
  }
});