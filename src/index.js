import loadArticles from './modules/loadArticles.js';
import { hidePopUp } from './modules/popUp.js';
import './style.css';

const logo = document.querySelector('header a');
const mainSection = document.querySelector('main');
const episodes = document.querySelector('.episodes');
const footerCounter = document.querySelector('footer span:last-child');

loadArticles();

document.addEventListener('click', (e) => {
  hidePopUp(e);
});

logo.addEventListener('click', () => {
  mainSection.classList.remove('hide');
  footerCounter.classList.remove('hide');
  episodes.innerHTML = '';
});
