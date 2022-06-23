import { countComments } from './modules/counter.js';
import { posturlComments } from './modules/global.js';
import loadArticles from './modules/loadArticles.js';
import { hidePopUp } from './modules/popUp.js';
import { getInputsComments, updateCommentList } from './modules/postComments.js';
import postData from './modules/postData.js';
import './style.css';

const logo = document.querySelector('header a');
const mainSection = document.querySelector('main');
const episodes = document.querySelector('.episodes');
const footerCounter = document.querySelector('footer span:last-child');

loadArticles();

document.addEventListener('click', (e) => {
  hidePopUp(e);
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  postData(posturlComments, getInputsComments(e));
  updateCommentList(e);
  countComments(e);
});

logo.addEventListener('click', () => {
  mainSection.classList.remove('hide');
  footerCounter.classList.remove('hide');
  episodes.innerHTML = '';
});
