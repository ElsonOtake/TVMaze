import loadArticles from './modules/loadArticles.js';
import { hidePopUp } from './modules/popUp.js';
import './style.css';

loadArticles();

document.addEventListener('click', (e) => {
  hidePopUp(e);
});