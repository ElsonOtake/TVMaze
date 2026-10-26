/* eslint-disable global-require -- Reload storage helpers to verify persistence. */
import {
  addLike, getLikes, addComment, getComments,
} from '../modules/involvement.js';

beforeEach(() => { localStorage.clear(); });
afterEach(() => { jest.restoreAllMocks(); });

test('likes are idempotent and isolated per show', () => {
  addLike(1);
  addLike(1);
  expect(getLikes('1')).toBe(1);
  expect(getLikes(2)).toBe(0);
});

test('comments persist across module reloads and preserve the like', () => {
  addLike(1);
  const comment = addComment({ item_id: '1', username: 'Viewer', comment: 'Great show' });
  jest.resetModules();
  const reloaded = require('../modules/involvement.js');
  expect(reloaded.getComments(1)).toEqual([comment]);
  expect(reloaded.getLikes(1)).toBe(1);
  expect(getComments(2)).toEqual([]);
});

test('malformed storage does not break loading', () => {
  localStorage.setItem('tvmaze:involvement:1', 'invalid JSON');
  expect(getLikes(1)).toBe(0);
  expect(getComments(1)).toEqual([]);
});

test('failed saves report an error and do not claim to persist a comment', () => {
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Full'); });
  expect(() => addComment({ item_id: 1, username: 'Viewer', comment: 'Hello' })).toThrow(/Unable to save/);
  expect(getComments(1)).toEqual([]);
});
