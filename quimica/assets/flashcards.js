(function(){var D=document,$=function(s){return D.querySelector(s)},Bx={};
try{Bx=JSON.parse(localStorage.getItem('wqc')||'{}')}catch(e){}
function sv(){try{localStorage.setItem('wqc',JSON.stringify(Bx))}catch(e){}}
var C=CARDS.map(function(c,i){return{i:i,d:c[0],q:c[1],a:c[2],t:c[3]}}),tp=new URLSearchParams(location.search).get('t'),act={},cur=null,show=false;
if(tp){C=C.filter(function(c){return c.t===tp});$('#flt').innerHTML='Mostrando só as cartas de <b>'+tp.split('/')[1]+'</b>. <a href="flashcards.html">Ver todas</a>'}
var ks=Object.keys(DECKS).filter(function(k){return C.some(function(c){return c.d===k})});ks.forEach(function(k){act[k]=1});
$('#chips').innerHTML=ks.map(function(k){return'<button class="chip on" data-k="'+k+'">'+DECKS[k]+'</button>'}).join('');
[].forEach.call(D.querySelectorAll('.chip'),function(b){b.onclick=function(){var k=b.dataset.k;act[k]?delete act[k]:act[k]=1;b.classList.toggle('on');pick()}});
function lst(){return C.filter(function(c){return act[c.d]&&!($('#onlyw').checked&&(Bx[c.i]||0)>=3)})}
function draw(){var l=C.filter(function(c){return act[c.d]}),m=l.filter(function(c){return(Bx[c.i]||0)>=3}).length;
$('#st').textContent=l.length?'Dominadas: '+m+' de '+l.length:'';$('#card').classList.toggle('a',show);
if(!cur){$('#lb').textContent='';$('#tx').textContent='Nenhuma carta disponível com esses filtros.';$('#src').hidden=true;return}
$('#lb').textContent=show?'Resposta':DECKS[cur.d]+' · pergunta';$('#tx').textContent=show?cur.a:cur.q;
var s=$('#src');s.hidden=!(show&&cur.t);if(cur.t)s.href=cur.t+'.html'}
function pick(){var l=lst();if(!l.length){cur=null;return draw()}
var w=l.map(function(c){return c===cur?0:Math.pow(3,3-(Bx[c.i]||0))}),t=w.reduce(function(a,b){return a+b},0)||1,r=Math.random()*t,i=0;
while(i<l.length-1&&(r-=w[i])>0)i++;cur=l[i];show=false;draw()}
function flip(){if(cur){show=!show;draw()}}
function rate(ok){if(!cur)return;Bx[cur.i]=ok?Math.min(3,(Bx[cur.i]||0)+1):0;sv();pick()}
$('#card').onclick=flip;$('#fl').onclick=flip;$('#no').onclick=function(){rate(0)};$('#yes').onclick=function(){rate(1)};
$('#onlyw').onchange=pick;$('#rs').onclick=function(){if(confirm('Zerar o progresso dos flashcards?')){Bx={};sv();pick()}};
D.addEventListener('keydown',function(e){if(e.target.tagName==='BUTTON'||e.target.tagName==='INPUT')return;
if(e.key===' '){e.preventDefault();flip()}else if(e.key==='ArrowLeft')rate(0);else if(e.key==='ArrowRight')rate(1)});
pick()})();
