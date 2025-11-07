let target = Math.floor(Math.random()*100)+1;
let tries = 0;
const triesEl = document.getElementById('tries');
const hint = document.getElementById('hint');
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const n = Number(document.getElementById('guess').value);
  tries++; triesEl.textContent = tries;
  if (n===target){ hint.textContent = '🎉 Correct!'; }
  else if (n<target){ hint.textContent = 'Too low!'; }
  else { hint.textContent = 'Too high!'; }
});
document.getElementById('reset').onclick = ()=>{
  target = Math.floor(Math.random()*100)+1; tries=0; triesEl.textContent=0; hint.textContent='New round!';
  document.getElementById('guess').value='';
};
