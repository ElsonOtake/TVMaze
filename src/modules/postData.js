const postData = async (url, info = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(info)
    })
  const data = await response.text();
  return data;
};

export default postData;
