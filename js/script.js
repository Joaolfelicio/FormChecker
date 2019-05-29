// Apply a display block to #pswd_info on focus on password

//display none to #pswd_info when blur

// on every key pressed

// on submit

//if confirmation password is same as password
//and password check all the cases
//Replace the form with "Success"

// function checkAllCase()
// Gathering : checked the password value
// this refere to the element that trigger the event
// Logic
// length >= 8
// at least one letter str.match(/[A-z]/)
// at least one Capital letter str.match(/[A-Z]/)
// at least one number str.match(/\d/)

//display *4

$(function() {
  let pwValue;
  let pwConfirmValue;

  $("#pswd").on("focus", function() {
    $("#pswd_info").css("display", "initial");
  });

  $("#pswd").on("blur", function() {
    $("#pswd_info").css("display", "");
  });

  $("#pswd").on("keyup", function() {
    pwValue = $("#pswd").val();

    if (pwValue.match(/[A-z]/)) {
      $("#letter")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      $("#letter")
        .removeClass("valid")
        .addClass("invalid");
    }

    if (pwValue.match(/[A-Z]/)) {
      $("#capital")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      $("#capital")
        .removeClass("valid")
        .addClass("invalid");
    }

    if (pwValue.match(/\d/)) {
      $("#number")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      $("#number")
        .removeClass("valid")
        .addClass("invalid");
    }

    if (pwValue.length >= 8) {
      $("#length")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      $("#length")
        .removeClass("valid")
        .addClass("invalid");
    }
  });

  $("#signIn").on("submit", function(e) {
    pwConfirmValue = $("#pswdConfirm").val();
    usernameValue = $("#username").val();

    if (pwConfirmValue !== pwValue) {
      $("#pswdConfirm").css("border", "2px solid red");
      e.preventDefault();
    } else {
      $("#pswdConfirm").css("border", "");
    }

    if (usernameValue.length <= 4) {
      $("#username").css("border", "2px solid red");
      e.preventDefault();
    } else {
      $("#username").css("border", "");
    }

    if (
      $("#letter").hasClass("invalid") ||
      $("#capital").hasClass("invalid") ||
      $("#number").hasClass("invalid") ||
      $("#length").hasClass("invalid")
    ) {
      $("#pswd").css("border", "2px solid red");
      e.preventDefault();
    } else {
      $("#pswd").css("border", "");
      $("#container")
        .text("Sucessfull Sign In")
        .css("text-align", "center")
        .css("padding", "30px")
        .css("font-weight", "bold")
        .css("font-size", "48px");
    }
  }); //end of submit
});
