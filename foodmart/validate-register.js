"use strict";
import { getUsers } from "./fetchservice.js";
var unamecheck, check = 0;
export function validateUsername(uname) {
    var unameelement = document.getElementById("username-error");
    if (uname.length < 3 || uname.length > 15) {
        unameelement.innerHTML = "Username must be of 3-15 character";
        unamecheck = 0;
    } else {
        unameelement.innerHTML = "";
        unamecheck = 1;
    }

}
var emailcheck;
export async function validateEmail(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var emailelement = document.getElementById("email-syntax-error");
    if (email.match(mailformat)) {
        emailelement.innerHTML = "";
        emailcheck = 1;
    } else {
        emailelement.innerHTML = "Enter valid email";
        emailcheck = 0;
    }
    /*fetch from api */
    var emailexist = 0;
    let users = await getUsers();
    users.forEach(user => {

        if (user.email == email) {
            emailexist = 1;
        }
    });
    if (emailexist == 1) {
        alert("This email already exist, try some other email !");
        emailelement.innerHTML = "Email already exists";
        emailcheck=0;
    }
}
var pwdcheck;
export function validatePassword(vpwd) {
    var pwdlengthelement = document.getElementById("password-length-error");
    var pwdupperelement = document.getElementById("password-uppercase-error");
    var pwdnumelement = document.getElementById("passwordnumerror");
    if (vpwd.length < 6) {
        pwdlengthelement.innerHTML = "Length of minimum 6 character";
        pwdcheck=0;
    } else {
        pwdlengthelement.innerHTML = "";
        pwdcheck=1;
    }
    var uppercase = /[A-Z]/g;
    if (vpwd.match(uppercase)) {
        pwdupperelement.innerHTML = "";
    } else {
        pwdupperelement.innerHTML = "Should contain Uppercase";
    }
    var pnumber = /[0-9]/g;
    if (vpwd.match(pnumber)) {
        pwdnumelement.innerHTML = "";
    } else {
        pwdnumelement.innerHTML = "Should contain Number";
    }
}

$(document).ready(function() {
    $("#register-button").click(checkform);
});

function checkform() {
    check = unamecheck * emailcheck*pwdcheck;
        if(check==1){
        alert("Successfully registered");
    }
}