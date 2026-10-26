import getData from './getData.js';
import { displayPopUp } from './popUp.js';
import { shows, showsQuery } from './global.js';
import { getLikes, addLike } from './involvement.js';
import { deployData } from './postComments.js';
import loadEpisodes from './loadEpisodes.js';
import showMessage from './showMessage.js';

const mainSection = document.querySelector('main');
const headerLogo = document.getElementById('header-logo');
const headerReturnSeries = document.getElementById('header-series');
const headerReturnEpisodes = document.getElementById('header-episodes');
let latestRequest = 0;

const loadArticles = async (query = '') => {
  latestRequest += 1;
  const request = latestRequest;
  query = query.trim();
  let countShows = 0;
  let data;
  const spanTotal = document.querySelector('.seriesCounter');
  spanTotal.classList.remove('hide');
  spanTotal.innerText = 'Total : 0';
  document.querySelector('.episodesCounter').classList.add('hide');
  document.querySelector('.episodes').innerHTML = '';
  mainSection.classList.remove('hide');
  showMessage(mainSection, 'Loading series…');
  if (query !== '') {
    headerLogo.innerHTML = 'Awesome Series by keyword';
    headerReturnSeries.classList.remove('hide');
    headerReturnEpisodes.classList.add('hide');
  } else {
    headerLogo.innerHTML = 'Awesome Series';
    headerReturnSeries.classList.add('hide');
    headerReturnEpisodes.classList.add('hide');
  }
  try {
    data = await getData(query ? showsQuery : shows, query);
    if (!Array.isArray(data)) throw new Error('Unexpected series response');
  } catch (error) {
    if (request === latestRequest) {
      showMessage(mainSection, 'Unable to load series. Check your connection and try searching again.');
    }
    return;
  }
  if (request !== latestRequest) return;
  mainSection.innerHTML = '';
  mainSection.classList.remove('hide');
  data.forEach((maze) => {
    if (maze.show) {
      maze = maze.show;
    }
    if (maze.id && maze.name && maze.image && maze.status && maze.rating && maze.genres) {
      countShows += 1;
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
      const likes = getLikes(maze.id);
      spanThumbUp.classList.toggle('active', likes > 0);
      spanThumbUp.title = 'Like this series (saved in this browser)';
      divLikes.appendChild(spanThumbUp);
      spanThumbUp.addEventListener('click', (e) => {
        if (!e.target.classList.contains('active')) {
          try {
            e.target.nextSibling.innerText = addLike(maze.id);
            e.target.classList.add('active');
          } catch (error) {
            let message = articleTvMaze.querySelector('.like-error');
            if (!message) {
              message = document.createElement('div');
              message.className = 'like-error';
              message.setAttribute('role', 'alert');
              articleTvMaze.appendChild(message);
            }
            message.textContent = error.message;
          }
        }
      });
      const spanLikes = document.createElement('span');
      spanLikes.innerText = likes;
      divLikes.appendChild(spanLikes);
      articleTvMaze.appendChild(divLikes);
      const h2Name = document.createElement('h2');
      h2Name.innerText = maze.name;
      articleTvMaze.appendChild(h2Name);
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
      const pId = document.createElement('p');
      pId.innerText = maze.id;
      divButton.appendChild(pId);
      const buttonComments = document.createElement('button');
      buttonComments.type = 'button';
      buttonComments.innerText = 'Comments';
      buttonComments.classList.add('button-comments');
      divButton.appendChild(buttonComments);
      articleTvMaze.appendChild(divButton);
      buttonComments.addEventListener('click', async () => {
        if (await displayPopUp(maze.id)) deployData(maze.id);
      });
      mainSection.appendChild(articleTvMaze);
    }
  });
  spanTotal.innerText = `Total : ${countShows}`;
  if (countShows === 0) showMessage(mainSection, 'No series found. Try another name.');
};

headerReturnSeries.addEventListener('click', () => {
  headerReturnSeries.classList.add('hide');
  headerReturnEpisodes.classList.add('hide');
  loadArticles();
});

export default loadArticles;
