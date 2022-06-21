import loadArticles from './modules/loadArticles.js';
import {hidePopUp} from './modules/popUp.js';
import { getDataById } from './modules/getData.js';
import './style.css';

const shows = 'https://api.tvmaze.com/shows';

loadArticles();

document.addEventListener('click',(e)=> {
  hidePopUp(e)
})