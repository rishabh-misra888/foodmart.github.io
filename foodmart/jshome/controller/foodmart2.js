/* home shop and other menus**************************************/

import { showElement, changeZindex, hideElement, scrolling, fruiticecreamIngredients, fruiticecreamPackageWeight, fruiticecreamCalories } from "./displayAndZIndex.js"; //diplay--> show_element
import { openLoginPage, closeLoginPage, searchBarOpen, readSearchInput, hideLoginPage } from "./searchAndLogin.js";
import { validateLoginEmail, validateLoginPassword, validateLoginPage } from "../service/validateuser.js";
import {getLocation} from "../service/location.js";

//shop----------------------------------------------------------------------------------------------------------
$(document).ready(function() {
    setLocation();
    $("#shop").mouseover(displaynav);
    $("#shop").mouseleave(hidenav);
    $("#shopjs").mouseover(displaynav);
    $("#shopjs").mouseleave(hidenav);

    $("#blog").mouseover(displaynav);
    $("#blog").mouseleave(hidenav);
    $("#blogjs").mouseover(displaynav);
    $("#blogjs").mouseleave(hidenav);

    /*keyboard accessibility*/
    /* ascii z=122 a=97 */
    $("#shop").bind('keypress', function(e) {
        console.log(e.keyCode);
        if (e.keyCode == 122) {
            showElement(shopjs);
            changeZindex("7", "8", "6", "6");

        };
        if (e.keyCode == 97) {
            hideElement(shopjs);
            changeZindex("8", "7", "9", "9");
        };
    });
    $("#blog").focus(hidenav);

    $("#blog").bind('keypress', function(e) {
        console.log(e.keyCode);
        if (e.keyCode == 122) {
            showElement(blogjs);
            changeZindex("7", "8", "6", "6");

        };
        if (e.keyCode == 97) {
            hideElement(blogjs);
            changeZindex("8", "7", "9", "9");
        };
    });

    $("#pages").focus(hidenav);

    $("#login").bind('keypress', function(e) {
        console.log(e.keyCode);
        if (e.keyCode == 122) {
            openLoginPage();
        };
        if (e.keyCode == 97) {
            closeLoginPage();
        };
    });

    $(".nav-menu-text").bind('keypress', function(e) {
        if (e.keyCode == 97) {
            hidenav();
        };
    });

    $("#buy").focus(closeLoginPage);
    $("#register").focus(closeLoginPage);


    $("#login").click(openLoginPage);
    $("#register").click(openLoginPage);
    $("#down_menu_login").click(openLoginPage);
    $("#close_login").click(closeLoginPage);

    //search bar
    $("#searchlogo").click(searchBarOpen);
    $("#search-bar-close").click(readSearchInput);

    $("#login-page-username").blur(validateLoginEmail);
    $("#login-page-password").blur(validateLoginPassword);
    $("#log").click(validateLoginPage);
    $("#transbg").click(hideLoginPage);

});


function displaynav() {

    if (this.id == "shop" || this.id == "shopjs") { showElement(shopjs); }
    if (this.id == "blog" || this.id == "blogjs") { showElement(blogjs); }
    changeZindex("7", "8", "6", "6");

}

function hidenav() {
    hideElement(shopjs);
    hideElement(blogjs);
    changeZindex("8", "7", "9", "9");
}

/*Location********************************************************/
function setLocation(){
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var response=getLocation(position.coords.latitude ,position.coords.longitude);
    response.then(data => {
       var add="";
    if(data.address.city)
        add=data.address.city;
    else
        add=data.address.state_district;
   document.getElementById("setLocation").innerHTML = "Location" + " " + ":"  + " " + " "  + add;
  
})}


/*scrolling********************************************************/
window.onscroll = function() { scrolling() };
/*Check debounce*/

/*grid 4 ice cream*******************************************************************/
fruiticecreamIngredients();
fruiticecreamPackageWeight();
fruiticecreamCalories();


// $(document).ready(function() {
//     $("#login").click(openLoginPage);
//     $("#register").click(openLoginPage);
//     $("#down_menu_login").click(openLoginPage);
//     $("#close_login").click(closeLoginPage);

//     //search bar
//     $("#searchlogo").click(searchBarOpen);
//     $("#search-bar-close").click(readSearchInput);

//     $("#login-page-username").blur(validateLoginEmail);
//     $("#login-page-password").blur(validateLoginPassword);
//     $("#log").click(validateLoginPage);
//     $("#transbg").click(hideLoginPage);
// });



//search bar
// $(document).ready(function() {
//     $("#searchlogo").click(searchBarOpen);
//     $("#search-bar-close").click(readSearchInput);
// });

// $(document).ready(function() {
//     $("#login-page-username").blur(validateLoginEmail);
//     $("#login-page-password").blur(validateLoginPassword);
//     $("#log").click(validateLoginPage);
//     $("#transbg").click(hideLoginPage);
// });

/******************************************************************************************/


















//var shop=document.getElementById("shop");
//var shopjs=document.getElementById("shopjs");
// var blog=document.getElementById("blog");
// var blogjs=document.getElementById("blogjs")


// shop.addEventListener("mouseover", displaynav);
// shop.addEventListener("mouseleave", hidenav);
// shopjs.addEventListener("mouseover", displaynav);
// shopjs.addEventListener("mouseleave", hidenav);

// blog.addEventListener("mouseover", displaynav);
// blog.addEventListener("mouseleave", hidenav);
// blogjs.addEventListener("mouseover", displaynav);
// blogjs.addEventListener("mouseleave", hidenav);
/******************************************************************/


/******************************************************************/

//Login Page
/*
$(document).ready(function(){
	$("#login").click(open_login);
	$("#register").click(open_login);
	$("#down_menu_login").click(open_login);
	$("#close_login").click(login_close);
});
*/
// document.getElementById("login").addEventListener("click", open_login);
// document.getElementById("register").addEventListener("click", open_login);
// document.getElementById("down_menu_login").addEventListener("click", open_login);
// document.getElementById("close_login").addEventListener("click", login_close);


// document.getElementById("searchlogo").addEventListener("click", searchBarOpen);
// document.getElementById("search-bar-close").addEventListener("click", readSearchInput);




// document.getElementById("login-page-username").addEventListener("blur", validateLoginEmail);
// document.getElementById("login-page-password").addEventListener("blur", validateLoginPassword);
// document.getElementById("log").addEventListener("click", validateLoginPage);
// document.getElementById("transbg").addEventListener("click", hideLoginPage);


/******************************************************************************************/