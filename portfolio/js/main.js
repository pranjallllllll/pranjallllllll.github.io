(function(){
  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  function close(){burger.setAttribute('aria-expanded','false');menu.classList.remove('open');document.body.style.overflow=''}
  burger.addEventListener('click',function(){
    var open=burger.getAttribute('aria-expanded')==='true';
    if(open){close()}else{burger.setAttribute('aria-expanded','true');menu.classList.add('open');document.body.style.overflow='hidden'}
  });
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')close()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  window.addEventListener('resize',function(){if(innerWidth>720)close()});

  var items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
    items.forEach(function(el){io.observe(el)});
  }else{items.forEach(function(el){el.classList.add('in')})}

  var links=document.querySelectorAll('.menu>a'),secs=[].map.call(links,function(a){return document.querySelector(a.getAttribute('href'))});
  if('IntersectionObserver' in window){
    var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
    secs.forEach(function(s){if(s)so.observe(s)});
  }
})();
