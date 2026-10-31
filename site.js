const b=document.querySelector('.burger'),n=document.querySelector('nav');
b&&b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded',false);b.focus()}});
const f=document.querySelector('form[data-enquiry]');
f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);if(d.get('company'))return;
const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nNeed: ${d.get('need')}\n\n${d.get('message')}`;
window.open(`https://wa.me/37062876090?text=${encodeURIComponent('Hello Adrija! I would like to discuss a RIDE Studio project.\n\n'+body)}`,'_blank','noopener,noreferrer');});
