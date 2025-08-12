
// Simple fade-in on scroll
document.addEventListener('DOMContentLoaded', function(){
  const els = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); }
    });
  }, {threshold: 0.15});
  els.forEach(el=>obs.observe(el));
});
