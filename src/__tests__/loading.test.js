/* eslint-disable global-require -- Bind DOM modules to a fresh document in each test. */
import fs from 'fs';
import path from 'path';

jest.mock('../style.css', () => ({}));

const show = {
  id: 1,
  name: 'Example series',
  image: { medium: 'poster.jpg', original: 'poster.jpg' },
  status: 'Running',
  rating: { average: 8 },
  genres: ['Drama'],
  summary: '<p>A series.</p>',
};

const response = (data) => ({ ok: true, json: async () => data });
const settle = () => new Promise((resolve) => { setTimeout(resolve, 0); });
let loadArticles;

beforeEach(() => {
  jest.resetModules();
  localStorage.clear();
  document.documentElement.innerHTML = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  global.fetch = jest.fn().mockResolvedValue(response([show]));
  // These modules bind to the current document when they are loaded.
  loadArticles = require('../modules/loadArticles.js').default;
});

afterEach(() => {
  jest.restoreAllMocks();
  delete global.fetch;
});

test('renders series without contacting the unavailable Involvement API', async () => {
  await loadArticles();
  expect(document.querySelector('main h2').innerText).toBe(show.name);
  expect(document.querySelector('.seriesCounter').innerText).toBe('Total : 1');
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://api.tvmaze.com/shows');
});

test('trims and encodes searches and renders the nested search results', async () => {
  fetch.mockResolvedValue(response([{ show }]));
  await loadArticles('  Law & Order  ');
  expect(fetch).toHaveBeenCalledWith('https://api.tvmaze.com/search/shows?q=Law%20%26%20Order');
  expect(document.querySelectorAll('main article')).toHaveLength(1);
});

test('empty searches load the catalog', async () => {
  await loadArticles('   ');
  expect(fetch).toHaveBeenCalledWith('https://api.tvmaze.com/shows');
});

test('no matches display a useful message and a zero count', async () => {
  fetch.mockResolvedValue(response([]));
  await loadArticles('unknown series');
  expect(document.querySelector('[role="status"]').textContent).toMatch(/No series found/);
  expect(document.querySelector('.seriesCounter').innerText).toBe('Total : 0');
});

test.each([
  ['HTTP errors', () => Promise.resolve({ ok: false, status: 503 })],
  ['network errors', () => Promise.reject(new Error('Offline'))],
  ['invalid JSON', () => Promise.resolve({ ok: true, json: async () => { throw new Error('Invalid JSON'); } })],
])('%s show a recoverable error instead of a blank page', async (name, result) => {
  fetch.mockImplementationOnce(result);
  await loadArticles();
  expect(document.querySelector('[role="status"]').textContent).toMatch(/Unable to load series/);
  fetch.mockResolvedValue(response([show]));
  await loadArticles();
  expect(document.querySelectorAll('main article')).toHaveLength(1);
});

test('blocked browser storage does not prevent series from loading or fake a saved like', async () => {
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('Blocked'); });
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Blocked'); });
  await loadArticles();
  document.querySelector('.likes span').click();
  expect(document.querySelector('.like-error').textContent).toMatch(/Unable to save/);
  expect(document.querySelector('.likes .active')).toBeNull();
  expect(document.querySelectorAll('main article')).toHaveLength(1);
});

test('a like persists when the series list is reloaded and cannot be counted twice', async () => {
  await loadArticles();
  document.querySelector('.likes span').click();
  await loadArticles();
  document.querySelector('.likes span').click();
  expect(document.querySelector('.likes .active')).not.toBeNull();
  expect(document.querySelector('.likes span:last-child').innerText).toBe(1);
});

test('comments load after the popup exists, save locally, and render user input as text', async () => {
  fetch.mockImplementation(async (url) => response(url.endsWith('/shows/1') ? show : [show]));
  require('../index.js');
  await settle();
  document.querySelector('.button-comments').click();
  await settle();
  expect(document.querySelector('.comments-header').innerText).toBe('comments (0)');
  document.querySelector('.comment-input').value = 'Viewer';
  document.querySelector('.comment-text-area').value = '<img src=x onerror=alert(1)>';
  document.querySelector('.comment-form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  expect(document.querySelector('.comment h5').textContent).toBe('<img src=x onerror=alert(1)>');
  expect(document.querySelector('.comment img')).toBeNull();
  expect(document.querySelector('.comments-header').innerHTML).toBe('comments (1)');
  document.querySelector('.pop-up-close').click();
  document.querySelector('.button-comments').click();
  await settle();
  expect(document.querySelectorAll('.comment')).toHaveLength(1);
  expect(document.querySelector('.comments-header').innerText).toBe('comments (1)');
  expect(fetch.mock.calls.every(([url]) => url.startsWith('https://api.tvmaze.com/'))).toBe(true);
});

test('searching from the episode view restores the series counter', async () => {
  fetch.mockResolvedValue(response([]));
  const loadEpisodes = require('../modules/loadEpisodes.js').default;
  await loadEpisodes(1);
  expect(document.querySelector('.episodesCounter').innerText).toBe('Total : 0');
  expect(document.querySelector('.episodes [role="status"]').textContent).toMatch(/No episodes/);
  fetch.mockResolvedValue(response([show]));
  await loadArticles('Example');
  expect(document.querySelector('main').classList.contains('hide')).toBe(false);
  expect(document.querySelector('.seriesCounter').classList.contains('hide')).toBe(false);
  expect(document.querySelector('.episodesCounter').classList.contains('hide')).toBe(true);
  expect(document.querySelector('.episodes').children).toHaveLength(0);
});
