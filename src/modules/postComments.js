import { getComments } from './involvement.js';

export const getInputsComments = (e) => {
  if (e.target.classList.contains('comment-form')) {
    const commentText = e.target.querySelector('.comment-text-area');
    const name = e.target.querySelector('.comment-input');
    const id = e.target.querySelector('.comment-p-tohide');
    const dataToStore = {
      item_id: id.textContent,
      username: name.value,
      comment: commentText.value,
    };
    return dataToStore;
  } return null;
};

const renderComment = (object) => {
  const item = document.createElement('li');
  item.className = 'comment';
  const heading = document.createElement('h2');
  const date = document.createElement('span');
  date.textContent = object.creation_date;
  heading.append(date, document.createTextNode(` ${object.username}`));
  const text = document.createElement('h5');
  text.textContent = object.comment;
  item.append(heading, text);
  return item;
};

export const updateCommentList = (e, newComment) => {
  const commentText = document.querySelector('.comment-text-area');
  const name = document.querySelector('.comment-input');
  const commentContainer = document.querySelector('.comments-container');
  commentContainer.prepend(renderComment(newComment));
  commentText.value = '';
  name.value = '';
};

export const deployData = (id) => {
  const comments = getComments(id);
  const commentContainer = document.querySelector('.comments-container');
  commentContainer.innerHTML = '';
  let countComments = 0;
  comments.forEach((element) => {
    commentContainer.prepend(renderComment(element));
    countComments += 1;
  });
  const commentsHeader = document.querySelector('.comments-header');
  commentsHeader.innerText = `comments (${countComments})`;
};
