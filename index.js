"use strict";
var optCheck = { 
  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },
  
  applyConditionalRequired: function() {
    
    $(".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
    
  }  
};
optCheck.init();

window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;

};
function validate(event) {

  var errEma = document.getElementById("errorEma");
  var re = /^[^\s@]+@[^\s@]+$/;

  var ema = document.getElementById("email").value;
  var valid = true;

  

  if (valid === true) {
    if (re.test(errma)) {
      errEma.innerText = "";
    } else {
      valid = false;
      errEma.innerText = " Must be a valid email";
    }
  }

  if (valid === false) {
    event.preventDefault();
  }
};
