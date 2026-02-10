let visits=localStorage.getItem('visits')||0;
visits++;
localStorage.setItem('visits',visits);
document.getElementById('visits')?.innerText="Odwiedziny: "+visits;

function showToast(msg){
  let t=document.createElement('div');
  t.className='toast';
  t.innerText=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

function reportIncident(e){
  e.preventDefault();
  showToast('Zgłoszenie wysłane ✔');
}
