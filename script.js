
document.addEventListener('DOMContentLoaded', function(){
  // reveal observer
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'all 600ms cubic-bezier(.2,.9,.3,1)';
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});

  document.querySelectorAll('.work-card, .guest-card, .post-card, .featured-card, .card').forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(12px)';
    io.observe(el);
  });

  // hover tilt effect
  document.querySelectorAll('.work-card, .post-card, .guest-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = (y - rect.height/2) / 20;
      const ry = (x - rect.width/2) / 20;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
  });
});
