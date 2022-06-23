import getData from './getData.js';

const loadEpisodes = async (id) => {
  const mainSection = document.querySelector('main');
  mainSection.classList.add('hide');
  const footerCounter = document.querySelector('footer span:last-child');
  footerCounter.classList.add('hide');
  const episodes = document.querySelector('.episodes');
  const urlEpisodes = `https://api.tvmaze.com/shows/${id}/episodes`;
  episodes.innerHTML = '';
  const data = await getData(urlEpisodes);
  data.forEach((episode) => {
    const articleEpisode = document.createElement('article');
    const imgShow = document.createElement('img');
    imgShow.src = episode.image.medium;
    imgShow.alt = episode.name;
    articleEpisode.appendChild(imgShow);
    const divRating = document.createElement('div');
    const spanStar = document.createElement('span');
    spanStar.className = 'material-icons-outlined';
    spanStar.innerText = 'star';
    divRating.appendChild(spanStar);
    const spanRating = document.createElement('span');
    spanRating.innerText = episode.rating.average;
    divRating.appendChild(spanRating);
    articleEpisode.appendChild(divRating);
    const h2Name = document.createElement('h2');
    h2Name.innerText = episode.name;
    articleEpisode.appendChild(h2Name);
    const pSeason = document.createElement('p');
    pSeason.innerText = `Season: ${episode.season} Number: ${episode.number}`;
    articleEpisode.appendChild(pSeason);
    const pAirDate = document.createElement('p');
    pAirDate.innerText = `Air date: ${episode.airdate}`;
    articleEpisode.appendChild(pAirDate);
    const pSummary = document.createElement('p');
    pSummary.innerHTML = episode.summary.substr(3, episode.summary.length - 7);
    articleEpisode.appendChild(pSummary);
    episodes.appendChild(articleEpisode);
  });
};

export default loadEpisodes;