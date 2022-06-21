import getData from "./getData";
import { shows, urlLikes } from "./global";

// const postData = async (url = '', data = {}) => {
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//     })
//   return response.text();
// };

// const populateTestData = async () => {
//   for (let i = 2; i < 20; i += 3) {
//       await postData(urlLikes, { "item_id": i })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });
//   }

// }

const mainSection = document.querySelector('main');

const loadArticles = async () => {
  const data = await getData(shows);
  const listLikes = await getData(urlLikes);

  data.forEach(maze => {
    const articleTvMaze = document.createElement('article');
    const imgShow = document.createElement('img');
    imgShow.src = maze.image.medium;
    imgShow.alt = maze.name;
    articleTvMaze.appendChild(imgShow);
    const pLikes = document.createElement('p');
    const numLikes = listLikes.filter(item => item.item_id === maze.id);
    pLikes.innerText = numLikes.length > 0 ? numLikes[0].likes : 0;
    articleTvMaze.appendChild(pLikes);
    const spanThumbUp = document.createElement('span');
    spanThumbUp.className = 'material-icons-outlined';
    spanThumbUp.innerText = 'thumb_up';
    articleTvMaze.appendChild(spanThumbUp);
    const h2Name = document.createElement('h2');
    h2Name.innerText = maze.name;
    articleTvMaze.appendChild(h2Name);
    const divId = document.createElement('div');
    divId.innerText = maze.id;
    articleTvMaze.appendChild(divId);
    const buttonComments = document.createElement('button');
    buttonComments.type = 'button';
    buttonComments.innerText = 'Comments';
    articleTvMaze.appendChild(buttonComments);
    buttonComments.addEventListener('click', (e) => {
      console.log(e.target.previousSibling.innerText);
    })
    mainSection.appendChild(articleTvMaze);
  });
}

export default loadArticles;