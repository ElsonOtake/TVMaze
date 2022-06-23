import getData from './getData.js';
import { shows } from './global.js';

const popUpContainer = document.querySelector('.pop-up-container');
const popUp = document.querySelector('.pop-up');
const main = document.querySelector('.main');

const addHtml = (object) => `
  <div class="pop-up-header">
    <h1 class="pop-up-title">${object.name}</h1>
    <span class="material-icons pop-up-close">close</span>
  </div>
  
  <ul class="genres">
  </ul>
  <div>
    <img class="image" src="${object.image.original}" alt="">
  </div>

  <div class="information">
    <div class="pop-up-status">
      <h4 class="onprogress"> <span class="info">status:</span> ${object.status}</h4>
      <div class="pop-up-score">
        <h4 class="info">score</h4>
        <span class="material-icons star">grade</span>
        <h4 class="score">: ${object.rating.average}/10</h4>
      </div>
    </div>
    ${object.summary}
  </div>

  <section class="comments">
    <h1 class="comments-header">comments (0)</h1>
    <ul class="comments-container">
    </ul>
    <form class="comment-form">
      <p class="comment-p-tohide">${object.id}</p>
      <h1 class="form-comments-header">Add a new comment</h1>
      <input class="comment-input" type="text" placeholder="Enter your name..." required>
      <textarea class="comment-text-area" name="comment" id="" cols="30" rows="7" placeholder="Enter your comment..." required></textarea>
      <button type="submit" class="comment-submit">Click to submit</button>
    </form>
  </section>
  
`;

export const displayPopUp = async (id) => {
  popUpContainer.innerHTML = '';
  const data = await getData(`${shows}/`, id);
  popUp.style.display = 'flex';
  popUpContainer.insertAdjacentHTML('afterbegin', addHtml(data));
  const genres = document.querySelector('.genres');
  data.genres.forEach((element) => { genres.innerHTML += `<li>${element}</li>`; });
  main.style.position = 'fixed';
};

export const hidePopUp = (e) => {
  if (e.target.classList.contains('pop-up-close') || e.target.classList.contains('pop-up')) {
    popUp.style.display = 'none';
    main.style.position = 'static';
  }
};
export default displayPopUp;
