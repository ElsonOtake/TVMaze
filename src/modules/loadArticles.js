import getData from './getData.js';
import { displayPopUp } from './popUp.js';
import { shows, urlLikes } from './global.js';
import postData from './postData.js';
import { deployData } from './postComments.js';

const mainSection = document.querySelector('main');

const loadArticles = async () => {
  const data = await getData(shows);
  const listLikes = await getData(urlLikes);

  data.forEach((maze) => {
    const articleTvMaze = document.createElement('article');
    const imgShow = document.createElement('img');
    imgShow.src = maze.image.medium;
    imgShow.alt = maze.name;
    articleTvMaze.appendChild(imgShow);
    articleTvMaze.id=maze.id
    const divLikes = document.createElement('div');
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
    const buttonComments = document.createElement('button');
    buttonComments.type = 'button';
    buttonComments.innerText = 'Comments';
    buttonComments.classList.add('button-comments');
    articleTvMaze.appendChild(buttonComments);
    buttonComments.addEventListener('click', (e) => {
      displayPopUp(parseInt(e.target.previousSibling.innerText, 10));
      deployData(parseInt(e.target.previousSibling.innerText, 10));
    });
    imgShow.addEventListener('click',(e)=> {
      displayPopUp(parseInt(e.target.parentNode.id))
      deployData(parseInt(e.target.parentNode.id))
    })
    mainSection.appendChild(articleTvMaze);
  });
};

export default loadArticles;