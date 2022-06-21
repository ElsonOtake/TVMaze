import { getData } from './getData.js';
import { displayPopUp } from './popUp.js';

const main = document.querySelector('main');

const loadArticles = async () => {
  const data = await getData();
  data.forEach((maze) => {
    const article = document.createElement('article');
    article.id = maze.id;
    const img = document.createElement('img');
    img.src = maze.image.medium;
    img.alt = maze.name;
    article.appendChild(img);
    const h2 = document.createElement('h2');
    h2.innerText = maze.name;
    article.appendChild(h2);
    const p = document.createElement('p');
    p.innerText = maze.id;
    article.appendChild(p);
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Comments';
    button.classList.add('button-comments');
    article.appendChild(button);
    // I commented this part of code due to linter check warnings about use of console.log
    button.addEventListener('click', async (e) => {
      displayPopUp(parseInt(e.target.previousSibling.innerText, 10));
    });
    main.appendChild(article);
  });
};

export default loadArticles;