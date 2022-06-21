import loadArticles from './modules/loadArticles.js';
import './style.css';

// For the creation of the key of new app using the Involvement API we use the following call: 
//
// fetch(urlNewApp, {
//   method: 'POST'
// })
// .then(result => result.text())
// .then(text => localStorage.setItem('tvMazeId', JSON.stringify({ id: text })))
//
// As an important part of the coding, we decide to record for future references (Use of .text())

loadArticles();
