// home shop and other menus

import {
  showElement, changeZindex, hideElement, scrolling,
  fruiticecreamIngredients, fruiticecreamPackageWeight, fruiticecreamCalories,
} from './displayAndZIndex.js';

import {
  openLoginPage, closeLoginPage, searchBarOpen, readSearchInput, hideLoginPage, BottomsearchBarOpen,
} from './searchAndLogin.js';

import {
  validateLoginEmail, validateLoginPassword, validateLoginPage,
} from '../service/validateuser.js';

import {
  getLocation,
} from '../service/location.js';

const loginForm = document.getElementById('login-form');
const displayUserName = document.getElementById('display-username');
const signOut = document.getElementById('sign-out');

$(document).ready(() => {
  setLocation();
  $('#shop').mouseover(displaynav);
  $('#shop').mouseleave(hidenav);
  $('#shopjs').mouseover(displaynav);
  $('#shopjs').mouseleave(hidenav);
  $('#blog').mouseover(displaynav);
  $('#blog').mouseleave(hidenav);
  $('#blogjs').mouseover(displaynav);
  $('#blogjs').mouseleave(hidenav);

  $('#buy').focus(closeLoginPage);
  $('#register').focus(closeLoginPage);
  $('#login').click(openLoginPage);
  $('#register').click(openLoginPage);
  $('#down_menu_login').click(openLoginPage);
  $('#close_login').click(closeLoginPage);

  // search bar
  $('#searchlogo').click(searchBarOpen);
  $('#search-bar-close').click(readSearchInput);

  // bottom search bar
  $('#searchbutton-bottom').click(BottomsearchBarOpen);
  $('#search-bar-close-bottom').click(readSearchInput);

  $('#login-page-username').blur(validateLoginEmail);
  $('#login-page-password').blur(validateLoginPassword);
  $('#transbg').click(hideLoginPage);

  let user = '';
  const pushData = 1;
  $('#log').on('click', () => {
    user = validateLoginPage();
    localStorage.setItem('username', user);
    localStorage.setItem('dataPushedIn', pushData);
    userLoggedIn();
  });

  $('#sign-out').click(userLogout);

  // keyboard accessibility
  // ascii z=122 a=97
  $('#shop').bind('keypress', (e) => {
    if (e.keyCode === 122) {
      showElement(shopjs);
      changeZindex('7', '8', '6', '6');
    }
    if (e.keyCode === 97) {
      hideElement(shopjs);
      changeZindex('8', '7', '9', '9');
    }
  });
  $('#blog').focus(hidenav);
  $('#blog').bind('keypress', (e) => {
    if (e.keyCode === 122) {
      showElement(blogjs);
      changeZindex('7', '8', '6', '6');
    }
    if (e.keyCode === 97) {
      hideElement(blogjs);
      changeZindex('8', '7', '9', '9');
    }
  });

  $('#pages').focus(hidenav);
  $('#login').bind('keypress', (e) => {
    if (e.keyCode === 122) {
      openLoginPage();
    }
    if (e.keyCode === 97) {
      closeLoginPage();
    }
  });

  $('.nav-menu-text').bind('keypress', (e) => {
    if (e.keyCode == 97) {
      hidenav();
    }
  });
});

const userLoggedIn = () => {
  if (localStorage.getItem('dataPushedIn') == 1) {
    loginForm.classList.add('disp-none');
    displayUserName.innerHTML = `Welcome ${localStorage.getItem('username')}!`;
    displayUserName.classList.remove('disp-none');
    displayUserName.classList.add('disp-flex');
    signOut.classList.remove('disp-none');
    signOut.classList.add('disp-flex');
  }
};

const userLogout = () => {
  localStorage.clear();
  loginForm.classList.remove('disp-none');
  displayUserName.classList.remove('disp-flex');
  displayUserName.classList.add('disp-none');
  signOut.classList.remove('disp-flex');
  signOut.classList.add('disp-none');
};

function displaynav() {
  if (this.id === 'shop' || this.id === 'shopjs') { showElement(shopjs); }
  if (this.id === 'blog' || this.id === 'blogjs') { showElement(blogjs); }
  changeZindex('7', '8', '6', '6');

}

const hidenav = () => {
  hideElement(shopjs);
  hideElement(blogjs);
  changeZindex('8', '7', '9', '9');
}

const setLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

const showPosition = (position) => {
  const response = getLocation(position.coords.latitude ,position.coords.longitude);
  response.then(data => {
    let add = '';
    if (data.address.city) {
      add = data.address.city;
    } else {
      add = data.address.state_district;
    }
    document.getElementById('setLocation').innerHTML = `Location : ${add}`;
  });
}

// scrolling
window.onscroll = () => { scrolling() };

// grid 4 ice cream
fruiticecreamIngredients();
fruiticecreamPackageWeight();
fruiticecreamCalories();

window.onload = () => { userLoggedIn(); };