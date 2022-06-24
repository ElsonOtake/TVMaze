import { counter } from './counter.js';
import getData from './getData.js';

const loadEpisodes = async (id) => {
  let countShows;
  let startCounter = 0;
  const mainSection = document.querySelector('main');
  mainSection.classList.add('hide');
  const seriesCounter = document.querySelector('.seriesCounter');
  seriesCounter.classList.add('hide');
  const episodesCounter = document.querySelector('.episodesCounter');
  episodesCounter.classList.remove('hide');
  const episodes = document.querySelector('.episodes');
  const urlEpisodes = `https://api.tvmaze.com/shows/${id}/episodes`;
  episodes.innerHTML = '';
  const headerLogo = document.getElementById('header-logo');
  const headerLogoPrevious = headerLogo.innerHTML;
  headerLogo.innerHTML = 'Awesome Series Episodes';
  const headerReturnSeries = document.getElementById('header-series');
  const headerReturnEpisodes = document.getElementById('header-episodes');
  headerReturnEpisodes.classList.remove('hide');
  headerReturnSeries.classList.add('hide');
  headerReturnEpisodes.addEventListener('click', () => {
    mainSection.classList.remove('hide');
    seriesCounter.classList.remove('hide');
    episodesCounter.classList.add('hide');
    headerLogo.innerHTML = headerLogoPrevious;
    if (headerLogoPrevious === 'Awesome Series') {
      headerReturnEpisodes.classList.add('hide');
      headerReturnSeries.classList.add('hide');
    } else {
      headerReturnEpisodes.classList.add('hide');
      headerReturnSeries.classList.remove('hide');
    }
    episodes.innerHTML = '';
  });
  const data = await getData(urlEpisodes);
  data.forEach((episode) => {
    if (episode.airdate && episode.name && episode.image && episode.summary && 
      episode.rating && episode.season && episode.number) {
      countShows = counter();
      if (startCounter === 0) {
        startCounter = countShows;
      }
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
    }
  });
  episodesCounter.innerText = `Total : ${countShows - startCounter + 1}`;
};

export default loadEpisodes;