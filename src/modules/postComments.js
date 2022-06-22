import { urlComments } from './global.js';
import getData from './getData.js';

export const getInputsComments = (e) => {
  if (e.target.classList.contains('comment-form')) {
    const commentText = document.querySelector('.comment-text-area');
    const name = document.querySelector('.comment-input');
    const id = document.querySelector('form p');
    const dataToStore = {
      item_id: id.innerText,
      username: name.value,
      comment: commentText.value,
    };
    return dataToStore;
  } return null;
};

const addhtml = (object) => `
  <li class="comment"> 
    <h2><span>${object.creation_date}</span> ${object.username}</h2> 
    <h5>${object.comment}</h5>
  </li>
`;

export const updateCommentList = (e) => {
  const newComment = getInputsComments(e);
  const commentText = document.querySelector('.comment-text-area');
  const name = document.querySelector('.comment-input');
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  newComment.creation_date = date;
  const commentContainer = document.querySelector('.comments-container');
  commentContainer.insertAdjacentHTML('beforeend', addhtml(newComment));
  commentText.value = '';
  name.value = '';
};

export const deployData = async (id) => {
  const comments = await getData(urlComments, id);
  const commentContainer = document.querySelector('.comments-container');
  commentContainer.innerHTML = '';
  comments.forEach((element) => {
    commentContainer.insertAdjacentHTML('beforeend', addhtml(element));
  });
  const lengthOfComments = comments.length;
  const commentsHeader = document.querySelector('.comments-header');
  commentsHeader.innerText = `comments (${lengthOfComments})`;
};
