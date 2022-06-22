import { urlComments } from "./global.js";
import getData from "./getData.js";

export const getInputsComments = (e) => {
  if(e.target.classList.contains('comment-form')){
    const commentText = document.querySelector('.comment-text-area');
    const name = document.querySelector('.comment-input')
    const id = document.querySelector('form p')
    const dataToStore = 
     {
        "item_id": id.innerText,
        "username": name.value,
        "comment": commentText.value
     }
     return dataToStore
  }
}

const addhtml = ({ username, creation_date, comment}) => `
  <li class="comment"> 
    <h2><span>${creation_date}</span> ${username}</h2> 
    <h5>${comment}</h5>
  </li>
`;

export const updateCommentList = (e)=>{
  const newComment = getInputsComments(e)
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  newComment.creation_date = date
  const commentContainer = document.querySelector('.comments-container')
  commentContainer.innerHTML='';
  commentContainer.insertAdjacentHTML('beforeend', addhtml(newComment));
}
 

export const deployData = async (id) => {
  const comments  = await getData(urlComments, id);
  const commentContainer = document.querySelector('.comments-container')
  commentContainer.innerHTML = '';
  comments.forEach((element) => {
    commentContainer.insertAdjacentHTML('beforeend', addhtml(element));
  });
};
