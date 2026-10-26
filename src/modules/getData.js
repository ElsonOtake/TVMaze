const getData = async (url, id = '') => {
  const response = await fetch(url + encodeURIComponent(id));
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
  return response.json();
};

export default getData;
