const disp = document.getElementById('display');
const keys = document.querySelectorAll('[data-k]');
keys.forEach(b=>b.onclick=()=>disp.value += b.dataset.k);
document.getElementById('del').onclick=()=>disp.value=disp.value.slice(0,-1);
document.getElementById('clr').onclick=()=>disp.value='';
document.getElementById('eq').onclick=()=>{
  try{ disp.value = String(Function('return '+disp.value)()); }
  catch{ alert('Invalid expression'); }
};
addEventListener('keydown', e=>{
  const allowed = '0123456789.+-*/()';
  if (allowed.includes(e.key)) disp.value += e.key;
  if (e.key==='Enter'){ e.preventDefault(); document.getElementById('eq').click(); }
  if (e.key==='Backspace') document.getElementById('del').click();
  if (e.key==='Escape') document.getElementById('clr').click();
});
