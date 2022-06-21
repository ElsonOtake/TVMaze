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
    main.appendChild(article);
  });
}

export default loadArticles;