//no &
"use strict";

var navbar_loginpage_visibility = document.getElementById("login-page");   //is x
var loginpage_transparent_background = document.getElementById("transbg");
var loginpage_body_overflow = document.body;

export function openLoginPage() {
    navbar_loginpage_visibility.classList.remove("disp-none");
    navbar_loginpage_visibility.classList.add("disp-block");
    loginpage_transparent_background.classList.remove("disp-none");
    loginpage_transparent_background.classList.add("disp-block");
    loginpage_body_overflow.classList.remove("overflow_scroll");
    loginpage_body_overflow.classList.add("overflow_hidden");
}

export function closeLoginPage() {
    navbar_loginpage_visibility.classList.remove("disp-block");
    navbar_loginpage_visibility.classList.add("disp-none");
    loginpage_transparent_background.classList.remove("disp-block");
    loginpage_transparent_background.classList.add("disp-none");
    loginpage_body_overflow.classList.remove("overflow_hidden");
    loginpage_body_overflow.classList.add("overflow_scroll");
}

export function hideLoginPage(){
    navbar_loginpage_visibility.classList.remove("disp-block");
    navbar_loginpage_visibility.classList.add("disp-none");
    loginpage_transparent_background.classList.remove("disp-block");
    loginpage_transparent_background.classList.add("disp-none");
    loginpage_body_overflow.classList.remove("overflow_hidden");
    loginpage_body_overflow.classList.add("overflow_scroll");
}

var navbar_searchelement = document.getElementById("searchbar");
var searchcount = 0;

export function searchBarOpen() {
    if(searchcount == 0){ 
        navbar_searchelement.classList.remove("disp-none");
        navbar_searchelement.classList.add("displayflex");
        searchcount = 1;
    }
    else if(searchcount == 1){
        navbar_searchelement.classList.remove("displayflex");
        navbar_searchelement.classList.add("disp-none");
        searchcount = 0;
    }
}

export function readSearchInput() {
    var get_search_input = document.getElementById("searchbox").value;
    var search_pizza="https://www.zomato.com/lucknow/restaurants/dominos-pizza";
    navbar_searchelement.classList.remove("displayflex");
    navbar_searchelement.classList.add("disp-none");
    searchcount = 0;
    get_search_input = get_search_input.toLowerCase();
    if (get_search_input == "pizza") {
        location.href = search_pizza;  
    } else if (get_search_input == "burger") {
        location.href = "#burger";
    } else if (get_search_input == "milkshake") {
        location.href = "#milkshake";
    } else if (get_search_input == "icecream") {
        location.href = "#icecream1";
    }
}