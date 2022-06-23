import getData from "./modules/getData";

const loadEpisodes = async (id) => {
  console.log('click episodes')
  const mainSection = document.querySelector('main');
  mainSection.classList.add('hide');
  const footerCounter = document.querySelector('footer span:last-child');
  footerCounter.classList.add('hide');
  const episodes = document.querySelector('.episodes');
  const urlEpisodes = `https://api.tvmaze.com/shows/${id}/episodes`;
  episodes.innerHTML = '';
  const data = await getData(urlEpisodes);
  console.log(data);
  data.forEach((episode) => {
    console.log(episode.name);
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
    const divInfo = document.createElement('div');
    const spanSeasonTxt = document.createElement('span');
    spanSeasonTxt.innerText = 'Season: ';
    divInfo.appendChild(spanSeasonTxt);
    const spanSeason = document.createElement('span');
    spanSeason.innerText = episode.season;
    divInfo.appendChild(spanSeason);
    const spanNumberTxt = document.createElement('span');
    spanNumberTxt.innerText = 'Number: ';
    divInfo.appendChild(spanNumberTxt);
    const spanNumber = document.createElement('span');
    spanNumber.innerText = episode.number;
    divInfo.appendChild(spanNumber);
    articleEpisode.appendChild(divInfo);
    const divAirDate = document.createElement('div');
    const spanAirDateTxt = document.createElement('span');
    spanAirDateTxt.innerText = 'Air date: ';
    divAirDate.appendChild(spanAirDateTxt);
    const spanAirDate = document.createElement('span');
    spanAirDate.innerText = episode.airdate;
    divAirDate.appendChild(spanAirDate);
    articleEpisode.appendChild(divAirDate);
    const pSummary = document.createElement('p');
    pSummary.innerHTML = episode.summary.substr(3, episode.summary.length - 7);
    articleEpisode.appendChild(pSummary);
    episodes.appendChild(articleEpisode);
  });
}

export default loadEpisodes;