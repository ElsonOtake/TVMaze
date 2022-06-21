const shows = 'https://api.tvmaze.com/shows';

const getData = async () => { 
  const response = await fetch(shows); 
  const data = await response.json(); 
  return data 
}

export default getData