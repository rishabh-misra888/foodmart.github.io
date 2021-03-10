var navbar_loginpage_element = document.getElementById("login-page"); 
var loginpage_transparent_background = document.getElementById("transbg");
var loginpage_body = document.body;
var navbar_searchelement = document.getElementById("searchbar");
var searchCount = 0;
const search_pizza = "https://www.zomato.com/lucknow/restaurants/dominos-pizza";

export function openLoginPage() {
    navbar_loginpage_element.classList.remove("disp-none");
    navbar_loginpage_element.classList.add("disp-block");
    loginpage_transparent_background.classList.remove("disp-none");
    loginpage_transparent_background.classList.add("disp-block");
    // loginpage_body.classList.remove("overflow_scroll");
    loginpage_body.classList.add("overflow_hidden");
}

export function closeLoginPage() {
    navbar_loginpage_element.classList.remove("disp-block");
    navbar_loginpage_element.classList.add("disp-none");
    loginpage_transparent_background.classList.remove("disp-block");
    loginpage_transparent_background.classList.add("disp-none");
    loginpage_body.classList.remove("overflow_hidden");
    // loginpage_body.classList.add("overflow_scroll");
}

export function hideLoginPage() {
    navbar_loginpage_element.classList.remove("disp-block");
    navbar_loginpage_element.classList.add("disp-none");
    loginpage_transparent_background.classList.remove("disp-block");
    loginpage_transparent_background.classList.add("disp-none");
    loginpage_body.classList.remove("overflow_hidden");
    loginpage_body.classList.add("overflow_scroll");
}

export function searchBarOpen() { //use jquery toggle
    if (searchCount === 0) { // use === or boolean 
        navbar_searchelement.classList.remove("disp-none");
        navbar_searchelement.classList.add("display-flex");
        searchCount = 1;
        closeSearchBar();
    } else if (searchCount === 1) {
        navbar_searchelement.classList.remove("display-flex");
        navbar_searchelement.classList.add("disp-none");
        searchCount = 0;
    }
}

export function readSearchInput() {
    var get_search_input = document.getElementById("searchbox").value;
    //const search_pizza = "https://www.zomato.com/lucknow/restaurants/dominos-pizza";

    navbar_searchelement.classList.remove("display-flex");
    navbar_searchelement.classList.add("disp-none");
    searchCount = 0;
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

function closeSearchBar(){
        window.onclick = function(event) {
        var x = event.target;

        if(x.id != "searchbox" && x.id != "search-bar-close" && x.id != "searchlogo"){
            
            navbar_searchelement.classList.remove("display-flex");
            navbar_searchelement.classList.add("disp-none");
            searchCount = 0;
        }
    };
}