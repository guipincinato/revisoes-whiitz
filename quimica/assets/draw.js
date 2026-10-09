(function(){var G=function(i){return document.getElementById(i)||{}};
function bohr(s,n){var o='<circle r="6" fill="currentColor"/>';s.forEach(function(e,i){var R=14+i*13;o+='<circle r="'+R+'" fill="none" opacity=".5"/>';for(var k=0;k<e;k++){var a=2*Math.PI*k/e;o+='<circle cx="'+R*Math.cos(a)+'" cy="'+R*Math.sin(a)+'" r="2.6" fill="var(--het)" stroke="none"/>'}});var W=14+s.length*13+6;return'<svg class="mol" viewBox="'+-W+' '+-W+' '+2*W+' '+2*W+'" stroke="currentColor" stroke-width="1.2" role="img" aria-label="'+n+'">'+o+'</svg>'}
G('hero').innerHTML=bohr([2,8,18,7],'átomo').replace('class="mol"','class="mol" style="height:130px"');
function geo(a,lp,c){var o='<circle cx="50" cy="50" r="7" fill="currentColor"/>';a.forEach(function(g){var r=g*Math.PI/180,x=50+34*Math.cos(r),y=50-34*Math.sin(r);o+='<line x1="50" y1="50" x2="'+x+'" y2="'+y+'" stroke="currentColor" stroke-width="2"/><circle cx="'+x+'" cy="'+y+'" r="7" fill="var(--het)"/>'});(lp||[]).forEach(function(g){var r=g*Math.PI/180,x=50+22*Math.cos(r),y=50-22*Math.sin(r);o+='<circle cx="'+(x-3)+'" cy="'+y+'" r="2" fill="currentColor"/><circle cx="'+(x+3)+'" cy="'+y+'" r="2" fill="currentColor"/>'});return'<figure><svg class="mol" viewBox="0 0 100 100">'+o+'</svg><figcaption>'+c+'</figcaption></figure>'}
G('geo').innerHTML=[
geo([0,180],[],'Linear 180°<br>CO₂'),
geo([90,210,330],[],'Trigonal plana 120°<br>BF₃'),
geo([38,142],[270],'Angular ≈ 104,5°<br>H₂O'),
geo([200,270,340],[90],'Piramidal ≈ 107°<br>NH₃'),
geo([45,135,225,315],[],'Tetraédrica 109,5°<br>CH₄ (esquema plano)')].join('');
})();
(function(){var G=function(i){return document.getElementById(i)||{}};
function ln(a,b,o){var dx=b[0]-a[0],dy=b[1]-a[1],d=Math.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d,r='';
(o==3?[-3,0,3]:o==2?[-2.5,2.5]:[0]).forEach(function(k){r+='<line x1="'+(a[0]+nx*k)+'" y1="'+(a[1]+ny*k)+'" x2="'+(b[0]+nx*k)+'" y2="'+(b[1]+ny*k)+'"/>'});return r}
function mol(m){var P=[],o='',t='',i,k;
function tx(p,s){if(s){t+='<text x="'+p[0]+'" y="'+p[1]+'">'+s+'</text>'}}
if(m.ring){for(k=0;k<6;k++){var a=(90-60*k)*Math.PI/180;P.push([22*Math.cos(a),-22*Math.sin(a)])}
for(k=0;k<6;k++)o+=ln(P[k],P[(k+1)%6],1);
if(m.ring==1)o+='<circle r="13" fill="none"/>'}
else{for(i=0;i<m.n;i++)P.push([i*22.5,i%2?0:13]);
for(i=0;i<m.n-1;i++)o+=ln(P[i],P[i+1],(m.b||{})[i]||1)}
var pts=P.slice();
(m.s||[]).forEach(function(s){var g=s[1]==null?90-60*s[0]:s[1],r=g*Math.PI/180,L=s[3]==3?28:25,e=[P[s[0]][0]+L*Math.cos(r),P[s[0]][1]-L*Math.sin(r)];
o+=ln(P[s[0]],e,s[3]||1);tx(e,s[2]);pts.push(e)});
for(i in(m.a||{}))tx(P[i],m.a[i]);
var x=pts.map(function(p){return p[0]}),y=pts.map(function(p){return p[1]}),
x0=Math.min.apply(0,x)-20,y0=Math.min.apply(0,y)-18,w=Math.max.apply(0,x)+20-x0,h=Math.max.apply(0,y)+18-y0;
return'<svg class="mol" viewBox="'+x0+' '+y0+' '+w+' '+h+'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" role="img" aria-hidden="true">'+o+t+'</svg>'}
function fig(a){return a.map(function(f){return'<figure>'+mol(f[0])+'<figcaption>'+f[1]+'</figcaption></figure>'}).join('')}
G('mon').innerHTML=fig([
[{n:2,b:{0:2}},'eteno (→ polietileno)'],
[{n:3,b:{0:2}},'propeno (→ polipropileno)'],
[{n:2,b:{0:2},s:[[1,90,'Cl']]},'cloroeteno (→ PVC)'],
[{n:2,b:{0:2},s:[[0,210,'F'],[0,270,'F'],[1,90,'F'],[1,330,'F']]},'tetrafluoroeteno (→ Teflon)'],
[{ring:1,s:[[0,null,'CH=CH₂']]},'estireno (→ poliestireno)'],
[{n:4,b:{0:2,2:2},s:[[1,90,'']]},'isopreno (→ borracha natural)']]);
G('aa').innerHTML=fig([
[{n:3,a:{0:'H₃N⁺'},s:[[2,270,'O',2],[2,30,'O⁻']]},'glicina (zwitterion; R = H)'],
[{n:3,a:{0:'H₃N⁺'},s:[[1,90,''],[2,270,'O',2],[2,30,'O⁻']]},'alanina (R = CH₃)'],
[{n:6,a:{0:'H₂N',3:'NH'},s:[[2,270,'O',2],[5,90,'O',2],[5,330,'OH']]},'glicilglicina: a ligação –CO–NH– é a ligação peptídica']]);
G('car').innerHTML=fig([
[{n:6,s:[[0,270,'O',2],[1,90,'OH'],[2,270,'OH'],[3,90,'OH'],[4,270,'OH'],[5,90,'OH']]},'glicose, cadeia aberta (aldose: –CHO), sem estereoquímica'],
[{n:6,s:[[0,270,'OH'],[1,90,'O',2],[2,270,'OH'],[3,90,'OH'],[4,270,'OH'],[5,90,'OH']]},'frutose, cadeia aberta (cetose: C=O no C2), sem estereoquímica']]);
})();
(function(){var G=function(i){return document.getElementById(i)||{}};
function ln(a,b,o){var dx=b[0]-a[0],dy=b[1]-a[1],d=Math.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d,r='';
(o==3?[-3,0,3]:o==2?[-2.5,2.5]:[0]).forEach(function(k){r+='<line x1="'+(a[0]+nx*k)+'" y1="'+(a[1]+ny*k)+'" x2="'+(b[0]+nx*k)+'" y2="'+(b[1]+ny*k)+'"/>'});return r}
function mol(m){var P=[],o='',t='',i,k;
function tx(p,s){if(s){t+='<text x="'+p[0]+'" y="'+p[1]+'">'+s+'</text>'}}
if(m.ring){for(k=0;k<6;k++){var a=(90-60*k)*Math.PI/180;P.push([22*Math.cos(a),-22*Math.sin(a)])}
for(k=0;k<6;k++)o+=ln(P[k],P[(k+1)%6],1);
if(m.ring==1)o+='<circle r="13" fill="none"/>'}
else{for(i=0;i<m.n;i++)P.push([i*22.5,i%2?0:13]);
for(i=0;i<m.n-1;i++)o+=ln(P[i],P[i+1],(m.b||{})[i]||1)}
var pts=P.slice();
(m.s||[]).forEach(function(s){var g=s[1]==null?90-60*s[0]:s[1],r=g*Math.PI/180,L=s[3]==3?28:25,e=[P[s[0]][0]+L*Math.cos(r),P[s[0]][1]-L*Math.sin(r)];
o+=ln(P[s[0]],e,s[3]||1);tx(e,s[2]);pts.push(e)});
for(i in(m.a||{}))tx(P[i],m.a[i]);
var x=pts.map(function(p){return p[0]}),y=pts.map(function(p){return p[1]}),
x0=Math.min.apply(0,x)-18,y0=Math.min.apply(0,y)-18,w=Math.max.apply(0,x)+18-x0,h=Math.max.apply(0,y)+18-y0;
return'<svg class="mol" viewBox="'+x0+' '+y0+' '+w+' '+h+'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" role="img" aria-hidden="true">'+o+t+'</svg>'}
var HC=[
['Alcano','Só ligações simples · CₙH₂ₙ₊₂','-ano','Propano (GLP)',{n:3}],
['Alceno','1 dupla C=C · CₙH₂ₙ','-eno','Propeno (gera polipropileno)',{n:3,b:{0:2}}],
['Alcino','1 tripla C≡C · CₙH₂ₙ₋₂','-ino','Propino. O etino (acetileno) é usado em maçaricos',{n:2,s:[[1,30,'CH',3]]}],
['Ciclano','Anel saturado · CₙH₂ₙ','ciclo…ano','Cicloexano (solvente)',{ring:2}],
['Aromático','Anel benzênico, C₆H₆','-benzeno','Benzeno (cancerígeno; matéria-prima industrial)',{ring:1}]];
var FN=[
['Álcool','–OH em carbono saturado','-ol','Etanol: combustível, bebidas, álcool 70%',{n:2,s:[[1,90,'OH']]}],
['Fenol','–OH em carbono de anel aromático','hidróxi-benzeno','Fenol: antissépticos e resinas',{ring:1,s:[[0,null,'OH']]}],
['Éter','R–O–R′ (O entre carbonos)','-oxi- (prefixo)','Etoxietano (éter dietílico): solvente',{n:5,a:{2:'O'}}],
['Aldeído','–CHO (carbonila na ponta da cadeia)','-al','Metanal (formol) e etanal',{n:2,s:[[1,90,'O',2],[1,330,'H']]}],
['Cetona','C=O entre dois carbonos','-ona','Propanona (acetona): removedor de esmalte',{n:3,s:[[1,90,'O',2]]}],
['Ácido carboxílico','–COOH (carboxila)','ácido …-óico','Ácido etanoico (acético): vinagre',{n:2,s:[[1,90,'O',2],[1,330,'OH']]}],
['Éster','R–COO–R′','-oato de …-ila','Etanoato de etila: aromas e solventes',{n:5,a:{2:'O'},s:[[1,90,'O',2]]}],
['Sal orgânico','R–COO⁻ M⁺','-oato de …','Etanoato de sódio. Sabão: sais de ácidos graxos',{n:2,s:[[1,90,'O',2],[1,330,'O⁻Na⁺']]}],
['Amina','–NH₂ (derivada da amônia)','-amina','Etanamina (etilamina); odor de peixe',{n:2,s:[[1,90,'NH₂']]}],
['Amida','–CONH₂','-amida','Etanamida. A ureia é uma amida',{n:2,s:[[1,90,'O',2],[1,330,'NH₂']]}],
['Nitrila','–C≡N','-nitrila','Etanonitrila (acetonitrila): solvente',{n:2,s:[[1,30,'N',3]]}],
['Haleto orgânico','R–X (X = F, Cl, Br, I)','fluoro-, cloro-, bromo-, iodo-','Cloroetano; CFCs; base do PVC',{n:2,s:[[1,90,'Cl']]}],
['Nitrocomposto','–NO₂','nitro-','Nitroetano. TNT é trinitrotolueno',{n:2,s:[[1,90,'NO₂']]}],
['Tiol','–SH (análogo do álcool com S)','-tiol','Etanotiol: cheiro adicionado ao gás de cozinha',{n:2,s:[[1,90,'SH']]}]];
function cards(id,A){G(id).innerHTML=A.map(function(c){return'<div class="c">'+mol(c[4])+'<h3>'+c[0]+'</h3><p class="gp">'+c[1]+'</p><p>Sufixo/prefixo: <b>'+c[2]+'</b></p><p>'+c[3]+'</p></div>'}).join('')}
cards('g-hc',HC);cards('g-fn',FN);
G('hero').innerHTML=mol({ring:1,s:[[0,null,'OH'],[3,null,'NO₂']]}).replace('class="mol"','class="mol" style="height:130px"');
G('iso').innerHTML=[
[{n:4},'butano'],[{n:3,s:[[1,90,'']]},'metilpropano','cadeia'],
[{n:3,s:[[0,270,'OH']]},'propan-1-ol'],[{n:3,s:[[1,90,'OH']]},'propan-2-ol','posição'],
[{n:2,s:[[1,90,'OH']]},'etanol'],[{n:3,a:{1:'O'}},'metoximetano','função']
].map(function(f){return'<figure>'+mol(f[0])+'<figcaption>'+f[1]+(f[2]?'<br><b>('+f[2]+')</b>':'')+'</figcaption></figure>'}).join('');
})();