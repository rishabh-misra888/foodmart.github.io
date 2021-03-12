const navbarLoginPageElement = document.getElementById('login-page'); 
const loginpageTransparentBackground = document.getElementById('transbg');
const bodyElement = document.body;
const navbarSearchElement = document.getElementById('searchbar');
const searchInputPizza = 'https://www.zomato.com/lucknow/restaurants/dominos-pizza';
const navbarSearchElementBottom = document.getElementById('searchbar-bottom');
const goToLocation = window.location;
const clearSerachBar = document.getElementById('searchbox');
const clearBottomSerachBar = document.getElementById('searchbox-bottom');
let searchCount = 0;
let searchCountBottom = 0;

export const openLoginPage = () => {
  navbarLoginPageElement.classList.remove('disp-none');
  navbarLoginPageElement.classList.add('disp-block');
  loginpageTransparentBackground.classList.remove('disp-none');
  loginpageTransparentBackground.classList.add('disp-block');
  bodyElement.classList.add('overflow_hidden');
};

export const closeLoginPage = () => {
  navbarLoginPageElement.classList.remove('disp-block');
  navbarLoginPageElement.classList.add('disp-none');
  loginpageTransparentBackground.classList.remove('disp-block');
  loginpageTransparentBackground.classList.add('disp-none');
  bodyElement.classList.remove('overflow_hidden');
};

export const hideLoginPage = () => {
  navbarLoginPageElement.classList.remove('disp-block');
  navbarLoginPageElement.classList.add('disp-none');
  loginpageTransparentBackground.classList.remove('disp-block');
  loginpageTransparentBackground.classList.add('disp-none');
  bodyElement.classList.remove('overflow_hidden');
  bodyElement.classList.add('overflow_scroll');
};

export const searchBarOpen = () => {
  clearSerachBar.value = '';
  if (searchCount === 0) {
    navbarSearchElement.classList.remove('disp-none');
    navbarSearchElement.classList.add('display-flex');
    searchCount = 1;
    closeSearchBar();
  } else if (searchCount === 1) {
    navbarSearchElement.classList.remove('display-flex');
    navbarSearchElement.classList.add('disp-none');
    searchCount = 0;
  }
};

export const BottomsearchBarOpen = () => {
  clearBottomSerachBar.value = '';
  if(searchCountBottom === 0) { 
    navbarSearchElementBottom.classList.remove('disp-none');
    navbarSearchElementBottom.classList.add('display-flex');
    searchCountBottom = 1;
    closeBottomSearchBar();
  }
  else if(searchCountBottom === 1) {
    navbarSearchElementBottom.classList.remove('display-flex');
    navbarSearchElementBottom.classList.add('disp-none');
    searchCountBottom = 0;
  }
};

export const readSearchInput = () => {
  let getSearchInput = document.getElementById('searchbox').value;
  const getBottomSearchInput = document.getElementById('searchbox-bottom').value;

  navbarSearchElement.classList.remove('display-flex');
  navbarSearchElement.classList.add('disp-none');

  navbarSearchElementBottom.classList.remove('display-flex');
  navbarSearchElementBottom.classList.add('disp-none');
  searchCount = 0;
  searchCountBottom = 0;
  getSearchInput = getSearchInput.toLowerCase();

  if (getSearchInput === 'pizza' || getBottomSearchInput === 'pizza') {
    goToLocation.href = searchInputPizza;
  } else if (getSearchInput === 'burger' || getBottomSearchInput === 'burger') {
    goToLocation.href = '#burger';
  } else if (getSearchInput === 'milkshake' || getBottomSearchInput === 'milkshake') {
    goToLocation.href = '#milkshake';
  } else if (getSearchInput === 'icecream' || getBottomSearchInput === 'icecream') {
    goToLocation.href = '#icecream1';
  }
};

export const closeSearchBar = () => {
  window.onclick = (event) => {
    const targetEvent = event.target;
    if (targetEvent.id !== 'searchbox' && targetEvent.id !== 'search-bar-close' && targetEvent.id !== 'searchlogo') {
      navbarSearchElement.classList.remove('display-flex');
      navbarSearchElement.classList.add('disp-none');
      searchCount = 0;
    }
  };
};

export const closeBottomSearchBar = () => {
  window.onclick = (event) => {
    const targetEvent = event.target;
    if (targetEvent.id !== 'searchbox-bottom' && targetEvent.id !== 'search-bar-close-bottom' && targetEvent.id !== 'searchbutton-bottom') {
      navbarSearchElementBottom.classList.remove('display-flex');
      navbarSearchElementBottom.classList.add('disp-none');
      searchCountBottom = 0;
    }
  };
};
