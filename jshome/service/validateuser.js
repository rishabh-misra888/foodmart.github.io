//"use strict";
var temp;
var login_status_email = 0;
var login_status_password = 0;

var apiData;
async function getusers(){


//adding header for not storing cache
    var myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

var myInit = {
  method: 'GET',
  headers: myHeaders,
};


 let url = './jshome/utility/foodmartjson2.json';
 //hiting the url with get request
    try {
        let res = await fetch(url, myInit).then(response => response.json());
        return await res;
        
      
    } catch (error) {
        console.log("error to connect api");
    }

}
 export function validateLoginEmail() {

    var email = document.getElementById("login-page-username").value;     
    var response=getusers();
//checking the email is valid or not
     response.then(data => {
             var c = 0;
            var result;
            apiData = data;
            for (var i = 0; i < data.length; i++) {
                if (email == data[i].email) {
                    temp = i;
                    c += 1;
                }
            }
            if (c != 1) {
                result = '<font color="red" size="2">The email entered is incorrect</font>';
                login_status_email = 0;
            } else if (c == 1) {
                result = "";
                login_status_email = 1;
            }
            document.getElementById("email-status").innerHTML = result;
              });
               }



export function validateLoginPassword() {
    var pass = document.getElementById("login-page-password").value;
    
    var response=getusers();
           var response=getusers();
  //checking if password matches with the entered email

            response.then(data => {

            var c = 0;
            var result;
            if (pass == data[temp].password) {
                c += 1;
            }
            if (c != 1) {
                result = '<font color="red" size="2">The password entered is incorrect</font>';
                login_status_password = 0;
            } else if (c == 1) {
                result = "";
                login_status_password = 1;
            }

            document.getElementById("password-status").innerHTML = result;

            if (login_status_email == 1 && login_status_password == 1) {
                document.getElementById("log").disabled = false;
            } else if (login_status_email == 1 && login_status_password == 0) {
                document.getElementById("log").disabled = true;
            } else if (login_status_email == 0 && login_status_password == 1) {
                document.getElementById("log").disabled = true;
            } else if (login_status_email == 0 && login_status_password == 0) {
                document.getElementById("log").disabled = true;
            }
        });
}



export function validateLoginPage() {
    // alert("Successfully Logged In" + apiData[temp].name);
    return apiData[temp].name;
}
