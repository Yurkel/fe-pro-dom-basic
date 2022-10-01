export const paintCards = () => {
  const arrLi = document.querySelectorAll('li');
  for (let i = 0; i <= arrLi.length; i++) {
    if (i % 2 === 0) {
      arrLi[i].style.backgroundColor = 'red';
    }
  }
};

export const findElement = () => {
  let el = document.querySelector('li');
  while (el) {
    if (el.classList.contains('likedItem')) {
      break;
    }
    el = el.nextElementSibling;
  }
  el.style.backgroundColor = 'blue';
};
