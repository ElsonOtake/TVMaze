import { urlNewApp } from "./global";

const createNewApp = () => {
  fetch(urlNewApp, {
    method: 'POST'
  })
  .then(result => result.text())
  .then(text => localStorage.setItem('tvMazeId', JSON.stringify({ id: text })))
}

export default createNewApp;
