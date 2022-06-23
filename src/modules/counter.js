export const countComments = (e) => {
  if (e.target.classList.contains('comment-form')) {
    const commentsContainer = document.querySelector('.comments-container');
    const { length } = commentsContainer.children;
    const commentsHeader = document.querySelector('.comments-header');
    commentsHeader.innerText = `comments (${length})`;
  } return null;
};

export const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
})();
