import getData from './getData.js';
import { displayPopUp } from './popUp.js';
import { shows, showsQuery, urlLikes } from './global.js';
import postData from './postData.js';
import { counter } from './counter.js';
import { deployData } from './postComments.js';
import loadEpisodes from './loadEpisodes.js';

const mainSection = document.querySelector('main');
const headerLogo = document.getElementById('header-logo');
const headerReturn = document.getElementById('header-return');
headerReturn.addEventListener('click', () => {
  loadArticles();
})

const loadArticles = async (query = '') => {
  let countShows;
  let data;
  let startCounter = 0;
  if (query !== '') {
    data = await getData(showsQuery, query);
    headerLogo.innerHTML = 'Awesome Series by keyword';
    headerReturn.innerHTML = 'All series';
  } else {
    data = await getData(shows);
    headerLogo.innerHTML = 'Awesome Series';
    headerReturn.innerHTML = '';
  }
  const listLikes = await getData(urlLikes);
  mainSection.innerHTML = '';
  mainSection.classList.remove('hide');
  data.forEach((maze) => {
    
    if (maze.show) {
      maze = maze.show;
    }
    if (maze.id && maze.name && maze.image && maze.status && maze.rating && maze.genres) {
      countShows = counter();
      if (startCounter === 0) {
        startCounter = countShows;
      }
      const articleTvMaze = document.createElement('article');
      const imgShow = document.createElement('img');
      imgShow.src = maze.image.medium;
      imgShow.alt = maze.name;
      articleTvMaze.appendChild(imgShow);
      articleTvMaze.id = maze.id;
      const divLikes = document.createElement('div');
      divLikes.className = 'likes';
      const spanThumbUp = document.createElement('span');
      spanThumbUp.className = 'material-icons-outlined';
      spanThumbUp.innerText = 'thumb_up';
      divLikes.appendChild(spanThumbUp);
      spanThumbUp.addEventListener('click', async (e) => {
        if (!e.target.classList.contains('active')) {
          e.target.classList.add('active');
          e.target.nextSibling.innerText = parseInt(e.target.nextSibling.innerText, 10) + 1;
          await postData(urlLikes, { item_id: maze.id });
        }
      });
      const spanLikes = document.createElement('span');
      const numLikes = listLikes.filter((item) => item.item_id === maze.id);
      spanLikes.innerText = numLikes.length > 0 ? numLikes[0].likes : 0;
      divLikes.appendChild(spanLikes);
      articleTvMaze.appendChild(divLikes);
      const h2Name = document.createElement('h2');
      h2Name.innerText = maze.name;
      articleTvMaze.appendChild(h2Name);
      const pId = document.createElement('p');
      pId.innerText = maze.id;
      articleTvMaze.appendChild(pId);
      const divButton = document.createElement('div');
      divButton.className = 'buttons';
      const buttonEpisodes = document.createElement('button');
      buttonEpisodes.type = 'button';
      buttonEpisodes.innerText = 'Episodes';
      articleTvMaze.appendChild(buttonEpisodes);
      buttonEpisodes.addEventListener('click', () => {
        loadEpisodes(maze.id);
      });
      divButton.appendChild(buttonEpisodes);
      const buttonComments = document.createElement('button');
      buttonComments.type = 'button';
      buttonComments.innerText = 'Comments';
      buttonComments.classList.add('button-comments');
      divButton.appendChild(buttonComments);
      articleTvMaze.appendChild(divButton);
      buttonComments.addEventListener('click', (e) => {
        displayPopUp(parseInt(e.target.previousSibling.innerText, 10));
        deployData(parseInt(e.target.previousSibling.innerText, 10));
      });
      mainSection.appendChild(articleTvMaze);
    }

  });
  const spanTotal = document.querySelector('.seriesCounter');
  spanTotal.innerText = `Total : ${countShows - startCounter + 1}`;
};

export default loadArticles;