export const countComments = (e) => {
  if (e.target.classList.contains('comment-form')) {
    const comments = document.querySelectorAll('.comment');
    let counter = 0;
    comments.forEach(() => {
      counter += 1;
    });
    const commentsHeader = document.querySelector('.comments-header');
    commentsHeader.innerHTML = `comments (${counter})`;
  }
};

export const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
})();
