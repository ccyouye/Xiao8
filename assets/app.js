
// tabs
function openSec(id,scroll){
  var t=document.querySelector('.tab[data-sec="'+id+'"]');
  if(!t) return;
  document.querySelectorAll('.tab').forEach(function(x){x.classList.toggle('on',x===t)});
  document.querySelectorAll('.sec').forEach(function(s){s.classList.toggle('on',s.id===id)});
  if(scroll) window.scrollTo({top:document.querySelector('.tabs').offsetTop-56,behavior:'instant'});
}
document.addEventListener('click',function(e){
  var t=e.target.closest('.tab'); if(!t) return;
  var id=t.dataset.sec; openSec(id,true);
  try{history.replaceState(null,'','#'+id)}catch(_){}
});
document.addEventListener('DOMContentLoaded',function(){
  var h=(location.hash||'').replace('#','');
  if(h==='single'||h==='multi'||h==='analysis') openSec(h,false);
});
// lightbox
(function(){
  var lb=document.getElementById('lb'); if(!lb) return;
  var img=lb.querySelector('img'), cap=lb.querySelector('.cap');
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t.tagName==='IMG' && t.closest('.gallery')){lb.classList.add('on');img.src=t.src;cap.textContent=t.dataset.cap||t.alt||'';}
    if(t===lb||t.classList.contains('close')) lb.classList.remove('on');
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
})();
// to top
(function(){
  var b=document.getElementById('toTop'); if(!b) return;
  window.addEventListener('scroll',function(){b.classList.toggle('on',window.scrollY>600)},{passive:true});
  b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
})();
