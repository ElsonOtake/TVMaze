import { countComments } from '../modules/counter.js';

describe('Test of counter function', () => {
  document.body.innerHTML = `
  <h1 class="comments-header">comments (0)</h1>
  <ul class="comments-container">
    <li class="comment"></li>
  </ul>
  <form class="comment-form">
    <input class="comment-input" type="text" placeholder="Enter your name...">
    <textarea class="comment-text-area" name="comment" id="" cols="30" rows="7" placeholder="Enter your comment..."></textarea>
    <button type="submit" class="comment-submit">Click to submit</button>
  </form>
  `;

  test('check the counter', () => {
    const counter = document.querySelector('.comments-header');
    let text = counter.innerHTML;
    expect(text).toEqual('comments (0)');
    const e = {
      target: document.querySelector('.comment-form'),
    };
    countComments(e);
    text = counter.innerHTML;
    expect(text).toEqual('comments (1)');
  });
});