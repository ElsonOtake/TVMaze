export const CountComments = (e) => {
  if (e.target.classList.contains('comment-form')) {
    const commentsContainer = document.querySelector('.comments-container');
    let length = commentsContainer.children.length
    const commentsHeader = document.querySelector('.comments-header')
    commentsHeader.innerText = `comments (${length})`
  } return null;
}