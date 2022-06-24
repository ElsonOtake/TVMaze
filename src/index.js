import { countComments } from './modules/counter.js';
import { posturlComments } from './modules/global.js';
import loadArticles from './modules/loadArticles.js';
import { hidePopUp } from './modules/popUp.js';
import { getInputsComments, updateCommentList } from './modules/postComments.js';
import postData from './modules/postData.js';
import './style.css';

const episodes = document.querySelector('.episodes');
const searchForm = document.querySelector('#header-search-bar');
const inputSearch = document.querySelector('#header-search');
const popUpContainer = document.querySelector('.pop-up-container');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  episodes.innerHTML = '';
  loadArticles(inputSearch.value);
  inputSearch.value = '';
});

document.addEventListener('click', (e) => {
  hidePopUp(e);
});

popUpContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  postData(posturlComments, getInputsComments(e));
  updateCommentList(e);
  countComments(e);
});

loadArticles();
