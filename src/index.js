import { CountComments } from './modules/counter.js';
import { posturlComments } from './modules/global.js';
import loadArticles from './modules/loadArticles.js';
import { hidePopUp } from './modules/popUp.js';
import { getInputsComments, updateCommentList } from './modules/postComments.js';
import postData from './modules/postData.js';
import './style.css';

loadArticles();

document.addEventListener('click', (e) => {
  hidePopUp(e);
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  postData(posturlComments, getInputsComments(e));
  updateCommentList(e);
  CountComments(e)
});
