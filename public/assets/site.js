(function(){
  // reading progress hairline under the header
  var root=document.documentElement, ticking=false;
  function upd(){var h=root.scrollHeight-root.clientHeight;root.style.setProperty('--read',h>0?Math.min(1,root.scrollTop/h).toFixed(4):0);ticking=false}
  window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(upd)}},{passive:true});
  upd();
  // iguana: draw itself once when it comes into view, then blink now and then
  var ig=document.getElementById('iguana');
  var calm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function animate(el,delay){
    if(!el)return;
    function blink(){el.classList.remove('blink');void el.offsetWidth;el.classList.add('blink')}
    function loop(){setTimeout(function(){blink();if(Math.random()<.3)setTimeout(blink,320);loop()},4000+Math.random()*4000)}
    el.classList.add('draw');setTimeout(loop,delay);
  }
  if(!calm){animate(ig,2200);var bh=document.getElementById('brand-head');if(bh){setInterval(function(){bh.classList.remove('blink');void bh.offsetWidth;bh.classList.add('blink')},5000)}
    var owl=document.querySelector('.mark.owl');
    var cd=document.querySelector('.mark.condor');
    if(cd){setInterval(function(){cd.classList.remove('blink');void cd.getBoundingClientRect();cd.classList.add('blink')},5000)}
    if(owl){(function l(){setTimeout(function(){owl.classList.remove('blink');void owl.getBoundingClientRect();owl.classList.add('blink');l()},4000)})()}}
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var el=document.getElementById(btn.getAttribute('data-copy'));
      var txt=el.textContent.trim(), orig=btn.textContent;
      function done(ok){btn.textContent=ok?'Copied':'Select and copy';setTimeout(function(){btn.textContent=orig},1600)}
      function fallback(){try{var r=document.createRange();r.selectNodeContents(el);var s=window.getSelection();s.removeAllRanges();s.addRange(r)}catch(e){}done(false)}
      try{navigator.clipboard.writeText(txt).then(function(){done(true)},fallback)}catch(e){fallback()}
    });
  });
})();
