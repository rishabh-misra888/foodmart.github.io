let newScrollValue;
let previousScrollValue;

export const showElement = (item) => {
  item.classList.remove('disp-none');
  item.classList.add('disp-block');
};

export const hideElement = (item) => {
  item.classList.remove('disp-block');
  item.classList.add('disp-none');
};

function getElement(item) {
  return document.getElementById(item);
}

const displayType = (element, displayTypes) => {
  element.style.display = displayTypes;
};

export const changeZindex = (a, b, c, d) => {
  if (a !== 'none') {
    getElement('titlecolor').style.zIndex = a;
  }
  if (b !== 'none') {
    getElement('titlecolor1').style.zIndex = b;
  }
  if (c !== 'none') {
    getElement('redchilli').style.zIndex = c;
  }
  if (d !== 'none') {
    getElement('broccoli').style.zIndex = d;
  }
};

export const scrolling = () => {
  const scrollValue = document.documentElement.scrollTop;
  newScrollValue = scrollValue;
  const titlecolor1 = getElement('titlecolor1');
  const title = getElement('title');
  const navLeft = getElement('navleftid');
  const navRight = getElement('navrightid');

  if (scrollValue >= 100) {
    if (newScrollValue >= previousScrollValue) {
      if (scrollValue < 550) {
        changeZindex('7', '8', '6', '6');
        displayType(titlecolor1, 'block');
        displayType(title, 'flex');
        displayType(navLeft, 'flex');
        displayType(navRight, 'flex');
      } else if (scrollValue >= 550) {
        changeZindex('-2', 'none', 'none', 'none');
        displayType(titlecolor1, 'none');
        displayType(title, 'none');
        displayType(navLeft, 'none');
        displayType(navRight, 'none');
      }
    } else if (newScrollValue < previousScrollValue) {
      changeZindex('8', '9', 'none', 'none');
      displayType(titlecolor1, 'block');
      displayType(title, 'flex');
      displayType(navLeft, 'flex');
      displayType(navRight, 'flex');
    }
  } else if (scrollValue < 100) {
    changeZindex('8', '7', '9', '9');
  }
  previousScrollValue = newScrollValue;
};

export const fruiticecreamIngredients = () => {
  const ar1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  let time1 = 100;
  for (let i = 0; i < 20; i += 1) {
    setTimeout(() => { document.getElementById('num20').innerHTML = ar1[i]; }, time1);
    time1 += 100;
  }
  setTimeout(() => { fruiticecreamIngredients(); }, 5000);
};

export const fruiticecreamPackageWeight = () => {
  const ar2 = ['270', '280', '290', '300', '310', '320', '330', '340', '350', '360', '370', '380', '390', '400', '410', '420', '430', '440', '450', '460'];
  let time2 = 100;
  for (let i = 0; i < 20; i += 1) {
    setTimeout(() => { document.getElementById('num460').innerHTML = ar2[i]; }, time2);
    time2 += 100;
  }
  setTimeout(() => { fruiticecreamPackageWeight(); }, 5000);
};

export const fruiticecreamCalories = () => {
  const ar3 = ['01', '03', '05', '10', '15', '20', '25', '30', '35', '40', '45', '55', '65', '75', '85', '95', '105', '115', '125', '135'];
  let time3 = 100;
  for (let i = 0; i < 20; i += 1) {
    setTimeout(() => { document.getElementById('num135').innerHTML = ar3[i]; }, time3);
    time3 += 100;
  }
  setTimeout(() => { fruiticecreamCalories(); }, 5000);
};