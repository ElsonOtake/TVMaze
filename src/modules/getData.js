const getData = async (url, id = '') => {
  const response = await fetch(url + id);
  const data = await response.json();
  return data;
};

export default getData;
