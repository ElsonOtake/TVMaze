import { Button } from "bootstrap";

const main = document.querySelector('main');

const loadArticles = (data) => {
  data.forEach(maze => {
    const article = document.createElement('article');
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
    article.appendChild(button);
    main.appendChild(article);
  });
}

export default loadArticles;