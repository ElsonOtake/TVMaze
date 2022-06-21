import callApiShows from './callApiShows';
import loadArticles from './loadArticles';
import './style.css';

const shows = 'https://api.tvmaze.com/shows';

fetch(shows)
.then(response => response.json())
.then(data => loadArticles(data));
