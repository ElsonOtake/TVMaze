import {getData, getDataById} from "./getData.js";

const popUpContainer = document.querySelector('.pop-up-container')
const popUp = document.querySelector('.pop-up')

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
  
`

export const  displayPopUp = async (id) => {
  popUpContainer.innerHTML=""
  const data =  await getDataById(id);
  popUp.style.display = 'flex';
  popUpContainer.insertAdjacentHTML("afterbegin",addHtml(data));
  const genres = document.querySelector('.genres')
  data.genres.forEach(element => { genres.innerHTML+=`<li>${element}</li>`})
}

export const hidePopUp = (e) => {
  if(e.target.classList.contains('pop-up-close')){
    popUp.style.display = 'none';
  }
}
export default displayPopUp

