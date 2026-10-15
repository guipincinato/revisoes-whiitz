(function(){var D=document,B=D.body,P=B.dataset.pfx||'',S={};
try{S=JSON.parse(localStorage.getItem('wb')||'{}')}catch(e){}S.d=S.d||{};
function sv(){try{localStorage.setItem('wb',JSON.stringify(S))}catch(e){}}
var $=function(s){return D.querySelector(s)},$$=function(s){return [].slice.call(D.querySelectorAll(s))};
$('#th').onclick=function(){var r=D.documentElement,dk=(r.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'))==='dark',n=dk?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}};
$('#menu').onclick=function(){B.classList.toggle('open')};
function mark(){$$('#side a[data-p]').forEach(function(a){a.classList.toggle('ok',!!S.d[a.dataset.p])});
$$('.prog').forEach(function(p){var n=0;for(var k in S.d)if(k.indexOf(p.dataset.f+'/')==0)n++;p.firstChild.style.width=100*n/p.dataset.n+'%';p.nextElementSibling.textContent=n+' de '+p.dataset.n+' estudados'})}
mark();
var b=$('#done');if(b){var p=b.dataset.p,u=function(){b.textContent=S.d[p]?'✓ Estudado (desmarcar)':'Marcar como estudado';b.classList.toggle('on',!!S.d[p])};u();
b.onclick=function(){S.d[p]?delete S.d[p]:S.d[p]=1;sv();u();mark()};S.last={p:p,t:B.dataset.title};sv()}
var c=$('#cont');if(c&&S.last){c.href=P+S.last.p+'.html';c.textContent='Continuar: '+S.last.t;c.hidden=false}
D.addEventListener('click',function(e){var x=e.target.closest&&e.target.closest('.blind .ex b');if(x&&x.parentNode.firstElementChild!==x)x.classList.toggle('show')});
var a=$('#all');if(a)a.onclick=function(){B.classList.toggle('all')};
var q=$('#q'),R=$('#res'),N=null;
function nz(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function esc(s){return s.replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
q.oninput=function(){var v=nz(q.value.trim());R.innerHTML='';if(v.length<2||typeof SEARCH==='undefined')return;
var T=v.split(/\s+/);N=N||SEARCH.map(function(s){s.n=nz(s.x);s.m=nz(s.t);return s});var H=[];
N.forEach(function(s){var sc=0,ok=1,pos=-1;T.forEach(function(t){var i=s.n.indexOf(t),m=s.m.indexOf(t)>=0;if(i<0&&!m)ok=0;else{if(pos<0)pos=i;sc+=(m?10:0)+Math.min(5,s.n.split(t).length-1)}});if(ok)H.push([sc,s,pos])});
H.sort(function(a,b){return b[0]-a[0]});
R.innerHTML=H.slice(0,8).map(function(h){var s=h[1],i=Math.max(0,h[2]-40);return'<a href="'+P+s.p+'.html'+(s.a?'#'+s.a:'')+'"><b>'+esc(s.t)+'</b> <small>'+esc(s.f)+'</small><br><span>'+(h[2]>=0?esc(s.x.slice(i,i+110))+'…':'')+'</span></a>'}).join('')||'<p class="mut">Nada encontrado.</p>'}
$$('#side a[data-p]').forEach(function(l){if(l.href===location.href.split('#')[0]){l.classList.add('cur');l.scrollIntoView({block:'center'})}});
var br=D.createElement('div');br.id='bar';B.appendChild(br);addEventListener('scroll',function(){var h=D.documentElement;br.style.width=100*h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)+'%'});
})();
