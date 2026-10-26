import { countComments } from './modules/counter.js';
import loadArticles from './modules/loadArticles.js';
import { hidePopUp } from './modules/popUp.js';
import { getInputsComments, updateCommentList } from './modules/postComments.js';
import { addComment } from './modules/involvement.js';
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
  if (!e.target.classList.contains('comment-form')) return;
  const errorMessage = e.target.querySelector('.comment-error');
  errorMessage.textContent = '';
  try {
    const comment = addComment(getInputsComments(e));
    updateCommentList(e, comment);
    countComments(e);
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});

loadArticles();
