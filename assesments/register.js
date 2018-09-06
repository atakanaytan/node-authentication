var username,
  password,
  password_confirmation,
  email,
  create_btn;

initEvents();

function initEvents() {
  username = document.querySelector("#username");
  password = document.querySelector("#password");
  password_confirmation = document.querySelector("#password_confirmation");
  email = document.querySelector("#email");
  password_confirmation_error_text = document.querySelector("#pass-verify")
  create_btn = document.querySelector("#create-button");

  //password.addEventListener("blur", passwordRepeatVerify, false);
  username.addEventListener("blur", nameVerify, false);
  password.addEventListener("blur", passwordVerify, false);
  password_confirmation.addEventListener("blur",passwordConfirmationVerify, false);
  email.addEventListener("blur", emailVerify, false);
  create_btn.addEventListener("click", createButtonClick, false);

}

function passwordVerify(){
    var password_error = document.querySelector(".password_error");
if(password.value){
    password.classList.remove('error');
    password.classList.add('success');
    password_error.innerHTML ="";
    return true;

}else{
    password.classList.add('error');
    password_error.innerHTML ="please enter password";
    return false;
    }
}


function passwordConfirmationVerify(){
  var password_confirmation_error = document.querySelector(".password_confirmation_error");
if(password_confirmation.value){
      password_confirmation.classList.remove('error');
      password_confirmation.classList.add('success');
      password_confirmation_error.innerHTML="";
      return true;
}else{
        password_confirmation.classList.add('error');
        password_confirmation_error.innerHTML="please enter confirmation password"
        return false;
  }
}

function passwordRepeatVerify() {
  var password_error = document.querySelector(".password_error");
  var password_confirmation_error = document.querySelector(".password_confirmation_error");
    if (password.value === password_confirmation.value) {
      password_confirmation.classList.remove('error');
      password.classList.remove('error');

      password_confirmation.classList.add('success');
      password.classList.add('success');
      password_confirmation_error.innerHTML = "the two passwords are matched";
      return true;

    } else {
      password_confirmation.classList.add('error');
      password.classList.add('error');
      password_confirmation_error.innerHTML = "the two passwords do not match";
      return false;
    }
  }



function nameVerify() {

  var username_error = document.querySelector(".username_error");
  // username validation
  if (username.value) {
    username.classList.remove('error');
    username.classList.add('success');
    username_error.innerHTML = "";
    return true;
  } else {
    username.classList.add('error');
    username_error.innerHTML = "please enter username";
    return false;
  }

}

function emailVerify() {
  var email_error = document.querySelector(".email_error");
  // email validation
  if (email.value) {
    email.classList.remove('error');
    email.classList.add('success');
    email_error.innerHTML = "";
    return true;
  } else {
    email.classList.add('error');
    email_error.innerHTML = "please enter email";
    return false;
  }
}

function createButtonClick() {
  var registerForm = document.querySelector('.register-form');

  var isValidForm = nameVerify() &&
  passwordVerify() &&
  passwordConfirmationVerify() &&
  passwordRepeatVerify() &&
  emailVerify();

  if (isValidForm) {

    registerForm.submit();

  }

}
