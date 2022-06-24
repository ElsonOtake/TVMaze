const getData = async (url, id = '') => {
  try {
    const response = await fetch(url + id);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export default getData;
