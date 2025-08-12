
// simple scroll reveal
document.addEventListener('DOMContentLoaded', function(){
  const sr = (sel, delay=0) => {
    const el = document.querySelectorAll(sel);
    el.forEach((e,i)=>{
      e.style.opacity=0;
      e.style.transform='translateY(10px)';
      setTimeout(()=>{ e.style.transition='all 500ms ease'; e.style.opacity=1; e.style.transform='translateY(0)'; }, delay + i*80);
    })
  };
  sr('.hero-left', 80);
  sr('.featured-card', 200);
  sr('.work-card', 300);
  sr('.post-card', 400);
});
