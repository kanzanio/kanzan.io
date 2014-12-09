// deal with pesky bots
var form = document.querySelector("#register");
form.onsubmit = function(){
  var trap = document.querySelectorAll(".url")[0];
  if (trap.value.length) {
    document.location.href = document.querySelectorAll(".redirect")[0].value;
    return false;
  } else {
    return true;
  }
};

// focus the reg form
var btn = document.querySelectorAll(".btn-register")[0];
btn.onclick = function(){
  document.querySelectorAll(".email")[0].focus();
};

