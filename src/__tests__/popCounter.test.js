describe('Test of deployData counter function', () => {

  document.body.innerHTML=` <div class="pop-up-container">
  <div class="pop-up-header">
    <h1 class="pop-up-title">Person of Interest</h1>
    <span class="material-icons pop-up-close">close</span>
  </div>
  
  <ul class="genres">
  <li>Action</li><li>Crime</li><li>Science-Fiction</li></ul>
  <div>
    <img class="image" src="https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg" alt="">
  </div>
  
  <div class="information">
    <div class="pop-up-status">
      <h4 class="onprogress"> <span class="info">status:</span> Ended</h4>
      <div class="pop-up-score">
        <h4 class="info">score</h4>
        <span class="material-icons star">grade</span>
        <h4 class="score">: 8.8/10</h4>
      </div>
    </div>
    <p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered "irrelevant". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>
  </div>
  
  <section class="comments">
    <h1 class="comments-header">comments (6)</h1>
    <ul class="comments-container">
  <li class="comment"> 
    <h2><span>2022-06-22</span> Julia </h2> 
    <h5>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. </h5>
  </li>
  
  <li class="comment"> 
    <h2><span>2022-06-22</span> paco</h2> 
    <h5>Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</h5>
  </li>
  
  <li class="comment"> 
    <h2><span>2022-06-22</span> sdf</h2> 
    <h5>sdfsdf</h5>
  </li>
  
  <li class="comment"> 
    <h2><span>2022-06-23</span> Andres</h2> 
    <h5>People like you. Crimes the government considered "irrelevant". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</h5>
  </li>
  
  <li class="comment"> 
    <h2><span>2022-06-23</span> Andres</h2> 
    <h5>enter your comment</h5>
  </li>
  
  <li class="comment"> 
    <h2><span>2022-06-23</span> Elson</h2> 
    <h5>Another comment</h5>
  </li>
  </ul>
    <form class="comment-form">
      <p class="comment-p-tohide">2</p>
      <h1 class="form-comments-header">Add a new comment</h1>
      <input class="comment-input" type="text" placeholder="Enter your name..." required="">
      <textarea class="comment-text-area" name="comment" id="" cols="30" rows="7" placeholder="Enter your comment..." required=""></textarea>
      <button type="submit" class="comment-submit">Click to submit</button>
    </form>
  </section>
  </div>` 
  
  let getData; 
  
   const addhtml = (object) => `
   <li class="comment"> 
     <h2><span>${object.creation_date}</span> ${object.username}</h2> 
     <h5>${object.comment}</h5>
   </li>
  `;
  
  const deployData = (id) => {
    const comments = getData;
    const commentContainer = document.querySelector('.comments-container');
    commentContainer.innerHTML = '';
    let countComments = 0;
    comments.forEach((element) => {
      commentContainer.insertAdjacentHTML('beforeend', addhtml(element));
      countComments += 1;
    });
    const commentsHeader = document.querySelector('.comments-header');
    commentsHeader.innerHTML = `comments (${countComments})`;
  };
  
  const commentsHeader = document.querySelector('.comments-header');



  test('The value of the first call must be comments (1)', () => {
    getData = [ {username: 'Julia ', 
    comment: 'You are being watched. The government has a secret…ry hour of every day. I know because I built it. ', 
    creation_date: '2022-06-22'}
    ];
    deployData(2);
    expect(commentsHeader.innerHTML).toBe('comments (1)')});
  test('The value of the first call must be comments (2)', () => {
    getData = [ {username: 'Julia ', 
    comment: 'You are being watched. The government has a secret…ry hour of every day. I know because I built it. ', 
    creation_date: '2022-06-22'},
    {username: 'paco', creation_date: '2022-06-22', 
    comment: "Hunted by the authorities, we work in secret. You'…erpetrator, if your number is up, we'll find you."},
    ];
    deployData(2);
    expect(commentsHeader.innerHTML).toBe('comments (2)')});
  test('The value of the first call must be comments (6)', () => {
    getData = [ {username: 'Julia ', comment: 'You are being watched. The government has a secret…ry hour of every day. I know because I built it. ', creation_date: '2022-06-22'},
    {username: 'paco', creation_date: '2022-06-22', comment: "Hunted by the authorities, we work in secret. You'…erpetrator, if your number is up, we'll find you."},
    {creation_date: '2022-06-22', comment: 'sdfsdf\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n', username: 'sdf'},
    {creation_date: '2022-06-23', username: 'Andres', comment: "People like you. Crimes the government considered …erpetrator, if your number is up, we'll find you."},
    {creation_date: '2022-06-23', username: 'Andres', comment: 'enter your comment'},
    {username: 'Elson', comment: 'Another comment', creation_date: '2022-06-23'} ];
    deployData(2);
    expect(commentsHeader.innerHTML).toBe('comments (6)')});
  });
