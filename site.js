const b=document.querySelector('.burger'),n=document.querySelector('nav');
b&&b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded',false);b.focus()}});
const f=document.querySelector('form[data-enquiry]');
f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);if(d.get('company'))return;
const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nNeed: ${d.get('need')}\n\n${d.get('message')}`;
window.open(`https://wa.me/37062876090?text=${encodeURIComponent('Hello Adrija! I would like to discuss a RIDE Studio project.\n\n'+body)}`,'_blank','noopener,noreferrer');});

// Motion is progressively enhanced: content stays visible without JavaScript.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches){
  document.documentElement.classList.add('has-motion');
  const progress=document.createElement('div');progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.appendChild(progress);
  const header=document.querySelector('header');
  let scrollFrame=0;
  const onScroll=()=>{if(scrollFrame)return;scrollFrame=requestAnimationFrame(()=>{
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.transform=`scaleX(${max>0?Math.min(1,scrollY/max):0})`;
    header?.classList.toggle('has-scrolled',scrollY>20);scrollFrame=0;
  })};
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  const motionElements=[...document.querySelectorAll('main section > .wrap,main .grid > .card,main .steps li,main .prose > *,main .hero > div')];
  if('IntersectionObserver'in window){
    const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');reveal.unobserve(entry.target)}
    }),{rootMargin:'0px 0px -40px 0px',threshold:.08});
    motionElements.forEach((el,i)=>{el.classList.add('motion-reveal');el.style.setProperty('--motion-delay',`${(i%4)*65}ms`);reveal.observe(el)});
  }
  const hero=document.querySelector('.hero');
  if(hero){
    let pointerFrame=0;
    hero.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||pointerFrame)return;
      pointerFrame=requestAnimationFrame(()=>{const r=hero.getBoundingClientRect();
        hero.style.setProperty('--shift-x',`${((event.clientX-r.left)/r.width-.5)*14}px`);
        hero.style.setProperty('--shift-y',`${((event.clientY-r.top)/r.height-.5)*12}px`);pointerFrame=0})
    });
    hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--shift-x','0px');hero.style.setProperty('--shift-y','0px')});
  }
}
