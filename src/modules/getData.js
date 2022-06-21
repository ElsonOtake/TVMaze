let shows = 'https://api.tvmaze.com/shows';

export const getData = async () => { 
  const response = await fetch(shows); 
  const data = await response.json(); 
  return data 
}

 export const getDataById = async (id) => {
  shows = `https://api.tvmaze.com/shows/${id}`
  const response = await fetch(shows); 
  const data = await response.json(); 
  return data
}




