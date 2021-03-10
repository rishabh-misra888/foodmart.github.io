"use strict";
import { validateUsername, validateEmail, validatePassword } from "./validate-register.js";

// var inputuname = document.getElementById("register-username");
// inputuname.addEventListener("blur", checkusername);
$(document).ready(function(){
	$("#register-username").blur(checkusername);
	$("#register-email").blur(checkemail);
	$("#register-password").blur(checkpassword);
});

function checkusername() {
    var uname = document.getElementById("register-username").value;
    const un = validateUsername(uname);

}

// var inputmail = document.getElementById("register-email");
// inputmail.addEventListener("blur", checkemail);

function checkemail() {
    var email = document.getElementById("register-email").value;
    const em = validateEmail(email);
}

// var inputpwd = document.getElementById("register-password");
// inputpwd.addEventListener("blur", checkpassword);

function checkpassword() {
    var vpwd = document.getElementById("register-password").value;
    const pwd = validatePassword(vpwd);
}

