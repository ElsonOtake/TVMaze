// The original Involvement API is unavailable. Interactions are browser-local.
const keyFor = (id) => `tvmaze:involvement:${id}`;

const read = (id) => {
  try {
    const data = JSON.parse(localStorage.getItem(keyFor(id))) || {};
    return {
      liked: data.liked === true,
      comments: Array.isArray(data.comments) ? data.comments.filter((comment) => comment
        && typeof comment.username === 'string' && typeof comment.comment === 'string'
        && typeof comment.creation_date === 'string') : [],
    };
  } catch (error) {
    return { liked: false, comments: [] };
  }
};

const write = (id, data) => {
  try {
    localStorage.setItem(keyFor(id), JSON.stringify(data));
  } catch (error) {
    throw new Error('Unable to save. Allow browser storage and try again.');
  }
};

export const getLikes = (id) => (read(id).liked ? 1 : 0);

export const addLike = (id) => {
  const data = read(id);
  data.liked = true;
  write(id, data);
  return 1;
};

export const getComments = (id) => read(id).comments;

export const addComment = ({ item_id: id, username, comment }) => {
  const data = read(id);
  const today = new Date();
  const entry = {
    username,
    comment,
    creation_date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
  };
  data.comments.push(entry);
  write(id, data);
  return entry;
};
