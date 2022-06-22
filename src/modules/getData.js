export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getDataById = async (id) => {
  const shows = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(shows);
  const data = await response.json();
  return data;
};
