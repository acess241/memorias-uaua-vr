const sessions = [
  {
    title:'MONUMENTOS',
    items:[
      {title:'RÉPLICA DO BELO MONTE',photos:['/monumentos/belo-monte-01.jpg','/monumentos/belo-monte-02.jpg','/monumentos/belo-monte-03.jpg'],caption:'Cenário de Gildemar de Sena que evoca Belo Monte, comunidade de Antônio Conselheiro destruída em 1897.'},
      {title:'AGÊNCIA DOS CORREIOS',photos:['/monumentos/correios.jpg'],caption:'Registro da antiga agência dos Correios, importante elo de comunicação entre Uauá e outras cidades.'},
      {title:'CASA DE ROQUE FERREIRA',photos:['/monumentos/casa-roque-01.jpg','/monumentos/casa-roque-02.jpg'],caption:'Casa relacionada ao combate de 21 de novembro de 1896. O imóvel abrigou tropas republicanas e foi posteriormente demolido.'},
      {title:'ESCOLA JOÃO BORGES DE SÁ',photos:['/monumentos/escola-joao-borges.jpg'],caption:'Registro da escola municipal ligada à expansão do ensino público na sede de Uauá.'},
      {title:'ESCOLA SENHOR DO BONFIM',photos:['/monumentos/escola-senhor-bonfim.jpg'],caption:'Estudantes diante do antigo Ginásio Escolar Normal Senhor do Bonfim, parte da memória educacional uauaense.'},
      {title:'IGREJA SÃO JOÃO BATISTA',photos:['/monumentos/igreja-sao-joao-01.jpg','/monumentos/igreja-sao-joao-02.jpg'],caption:'A construção da Igreja Matriz começou em 1921. A paróquia foi fundada em 1923.'},
      {title:'PRAÇA DA IGREJA',photos:['/monumentos/praca-igreja.jpg'],caption:'Registro das transformações da Praça São João Batista, no centro de Uauá.'},
      {title:'PRIMEIRA ESCOLA DE DATILOGRAFIA',photos:['/monumentos/escola-datilografia.jpg'],caption:'Iniciativa do Padre Osvaldo, a escola foi inaugurada em 1976 e ofereceu formação profissional.'},
      {title:'PREFEITURA MUNICIPAL DE UAUÁ',photos:['/monumentos/prefeitura.jpg'],caption:'Sede administrativa de Uauá. O município foi emancipado em 1926 e restaurado definitivamente em 1933.'}
    ],
    poem:{author:'GILDEMAR DE SENA',work:'Cordelizando o cordel',lines:'Literatura que vem da rima\nDe fácil compreensão\nQue falam de fatos já ocorridos\nE das façanhas de Lampião'}
  },
  {
    title:'MESTRES E ENCONTROS',
    items:[
      {title:'ANTÔNIO LOIOLA',photos:['/artistas/antonio-loiola.jpg'],caption:'Retrato de Antônio Loiola, personagem da memória cultural e dos encontros comunitários de Uauá.'},
      {title:'ARTISTAS REUNIDOS',photos:['/artistas/artistas-patativa.jpg','/artistas/artistas-bar-ademar.jpg'],caption:'Encontros de artistas na Patativa e no Bar de Ademar. Esses espaços informais funcionaram como lugares de conversa, criação, música e circulação da cultura local.'},
      {title:'AUTO BARBOSA',photos:['/artistas/auto-barbosa.jpg'],caption:'Auto Barbosa integra a memória das bandas de pífano e do Calumbi de Uauá.'},
      {title:'MESTRE CAVACHÃO',photos:['/artistas/mestre-cavachao-01.jpg','/artistas/mestre-cavachao-02.jpg'],caption:'Antônio Sabino Marques, o Mestre Cavachão, nasceu em 1931 na Fazenda Pedra do Sal, em Uauá. Cantor, compositor e memorialista, fez do sertão e da cidade temas centrais de sua obra.'},
      {title:'MIKAL LÔBO',photos:['/celebracoes/mikal-lobo.jpg'],caption:'Poetisa uauaense homenageada como Eterna Poetisa. Sua obra póstuma foi apresentada durante a Semana Cultural de Uauá, em 2008.'},
      {title:'DEDÉ DO FOTO',photos:['/artistas/dede-do-foto.jpg'],caption:'Retrato de Dedé do Foto durante uma manifestação da cultura sertaneja e da tradição do vaqueiro.'},
      {title:'SENHOR ADEMAR',photos:['/artistas/senhor-ademar.jpg'],caption:'Senhor Ademar no estabelecimento que se tornou ponto de encontro de artistas e moradores. O Bar de Ademar integra a memória afetiva dos circuitos culturais informais de Uauá.'},
      {title:'VEINHO E CAVACHÃO',photos:['/artistas/veinho-e-cavachao.jpg'],caption:'Registro de Veinho e Mestre Cavachão, dois personagens associados à convivência, ao humor, à música e à transmissão oral das memórias de Uauá.'}
    ],
    poem:{author:'MIKAL LÔBO',work:'Uauá',lines:'Minha terra\nMeu sertão\nTerra do meu coração'}
  },
  {
    title:'MÚSICA, CINEMA E TEATRO',
    items:[
      {title:'BANDAS DE PÍFANO',photos:['/artistas/banda-pifano-01.jpg','/artistas/banda-pifano-02.jpg','/artistas/banda-pifano-03.jpg'],caption:'Também chamadas Calumbi ou Zabumba, as bandas reúnem tradicionalmente dois pífanos, caixa e zabumba. Em Uauá, acompanham festas religiosas, cortejos, feiras e celebrações comunitárias.'},
      {title:'O ENIGMA DE CANUDOS',photos:['/artistas/enigma-canudos-01.jpg','/artistas/enigma-canudos-02.jpg'],caption:'Registros da gravação do documentário O Enigma de Canudos. As imagens mostram a comunidade mobilizada na encenação e na reconstrução audiovisual de memórias ligadas a Belo Monte.'},
      {title:'FORRÓ DE UAUÁ — VEM VER SÃO JOÃO',photos:['/artistas/cd-forro-uaua.jpg'],caption:'Registro de gravação do CD dedicado ao forró e ao ciclo junino de Uauá. O encontro documenta artistas reunidos em torno da produção musical local.'},
      {title:'CALUMBI, PÍFANOS E ZABUMBA',photos:['/artistas/documentario-calumbi.jpg'],caption:'Registro da gravação do documentário Calumbi, Pífanos e Zabumba, em 2000. A produção reuniu músicos e colaboradores para preservar a história dessa tradição instrumental.'},
      {title:'CANUDOS NÃO MORREU',photos:['/artistas/teatro-canudos-nao-morreu.jpg'],caption:'Registro da peça teatral Canudos não morreu. A encenação transforma a história de Canudos em memória corporal e coletiva, aproximando passado, juventude e cultura popular.'}
    ],
    poem:{author:'MESTRE CAVACHÃO',work:'O luar do sertão',lines:'Quem quiser venha\nVer como é tão bonito o luar do sertão\nA cidade aonde eu nasci\nEla me deu a inspiração'}
  },
  {
    title:'FESTAS E VIDA PÚBLICA',
    items:[
      {title:'CARNAVAL DE UAUÁ',photos:['/celebracoes/carnaval.jpg','/celebracoes/carnaval-1981.jpg'],caption:'Registros do carnaval uauaense e da ocupação festiva das ruas. Uma das fotografias documenta o carnaval de 1981.'},
      {title:'TRIO JANGADA',photos:['/celebracoes/trio-jangada-01.jpg','/celebracoes/trio-jangada-02.jpg','/celebracoes/trio-jangada-03.jpg'],caption:'Criado em 1979 por Veinho, Nenenzinho, João Potó e colaboradores, o Trio Jangada tornou-se marca do carnaval de Uauá.'},
      {title:'CAMPANHA DE PEDRO PEIXINHO',photos:['/celebracoes/campanha-pedro-peixinho.jpg'],caption:'Material da campanha eleitoral de Pedro Peixinho, documento da mobilização política e da comunicação pública no município.'},
      {title:'DESFILE DE 7 DE SETEMBRO',photos:['/celebracoes/desfile-sete-setembro.jpg'],caption:'Desfile escolar de 7 de setembro com representação da cultura sertaneja e defesa do patrimônio cultural de Uauá.'},
      {title:'VAQUEJADA DE 1982',photos:['/celebracoes/vaquejada-1982.jpg'],caption:'Registro da vaquejada de 1982 atravessando as ruas de Uauá, encontro entre vaqueiros, cavalos e moradores.'}
    ],
    poem:{author:'CLÁUDIO BARRIS',work:'Uauá é brilho',lines:'Uauá é brilho\né fogo de estrela\nfogo de cometa\nrompendo o nascer do sol\nvagalumeando\nflor de umbuzeiro\no bode e o carneiro\nraios de luz do arrebol'}
  },
  {
    title:'PAISAGENS E MEMÓRIAS',
    items:[
      {title:'PEDRA RISCADA',photos:['/paisagens/pedra-riscada.jpg'],caption:'Sítio de arte rupestre de Uauá, reconhecido como patrimônio arqueológico brasileiro e preservado como testemunho de ocupações humanas antigas no sertão.'},
      {title:'GRUTA DO JERÔNIMO',photos:['/paisagens/gruta-jeronimo.jpg'],caption:'Formação natural do território de Uauá. A gruta integra a paisagem rochosa e a memória das comunidades que conhecem e percorrem a região.'},
      {title:'JOSÉ BORGES RIBEIRO',photos:['/paisagens/jose-borges-ribeiro.jpg'],caption:'José Borges Ribeiro nasceu em 1º de junho de 1941 e faleceu em 26 de março de 2012. Seu retrato integra a memória familiar e comunitária de Uauá.'},
      {title:'JOSÉ RAMOS DA SILVA',photos:['/paisagens/jose-ramos-01.jpg','/paisagens/jose-ramos-02.jpg'],caption:'José Ramos da Silva foi delegado e sargento de polícia em Uauá durante o período do cangaço. Segundo o registro histórico, foi contratado para combater cangaceiros na Bahia.'},
      {title:'PEDRA DO ÍNDIO',photos:['/paisagens/pedra-do-indio.jpg'],caption:'Monumento natural formado pelo equilíbrio de grandes blocos de pedra, cercado pela vegetação da Caatinga e associado à identidade visual do território uauaense.'},
      {title:'PEDRA DO SAL',photos:['/paisagens/pedra-do-sal.jpg'],caption:'Lugar relacionado às narrativas sobre a passagem de Lampião pela região. A tradição local registra que o ponto foi utilizado como posição de trincheira.'},
      {title:'UAUÁ COUNTRY CLUB',photos:['/paisagens/uaua-country-club.jpg'],caption:'Antiga residência de Constantino Tolentino de Souza e Salomé Dias Ribeiro. Depois, o imóvel tornou-se sede do Uauá Country Club, também conhecido como Clube de Anita.'},
      {title:'SERRA DO SOBRADO — TRIBUTO',photos:['/paisagens/serra-do-sobrado.jpg'],caption:'Paisagem conhecida como Tributo, na Serra do Sobrado. Rochas, água e vegetação da Caatinga compõem um lugar de referência ambiental e afetiva.'}
    ],
    poem:{author:'MARIANE DOS SANTOS CARDOSO',work:'Sou o sertão',lines:'Sou o xique-xique\nSou o mandacaru\nSou o facheiro\nSou o umbuzeiro de onde sai o umbu\n\nSou o chapéu de couro\nSou a perneira e o gibão\nSou o vaqueiro valente\nSou que desbrava nesse sertão'}
  }
]

let currentSession=0
const $=selector=>document.querySelector(selector)
const assetPath=path=>`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
const sessionAudio=new Audio()
let audioUnlocked=false
let musicPaused=false
sessionAudio.preload='auto'
sessionAudio.volume=.55

function loadSessionMusic(shouldPlay=audioUnlocked&&!musicPaused){
  sessionAudio.pause()
  sessionAudio.currentTime=0
  sessionAudio.src=assetPath(`audio/${currentSession+1}.mp3`)
  sessionAudio.load()
  if(shouldPlay)sessionAudio.play().catch(()=>{})
}

function unlockSessionMusic(){
  audioUnlocked=true
  if(sessionAudio.src&&!musicPaused)sessionAudio.play().catch(()=>{})
}

function toggleSessionMusic(){
  musicPaused=!musicPaused
  if(musicPaused)sessionAudio.pause()
  else{audioUnlocked=true;sessionAudio.play().catch(()=>{})}
  const label=$('#music-control-label')
  if(label)label.setAttribute('canvas-label','text',musicPaused?'CONTINUAR\nMÚSICA':'PAUSAR\nMÚSICA')
}

function installSBS(scene){
  const renderer=scene.renderer,originalRender=renderer.render.bind(renderer),size=new THREE.Vector2()
  let enabled=false
  renderer.render=function(scene3D,camera){
    if(!enabled||renderer.xr?.isPresenting)return originalRender(scene3D,camera)
    renderer.getDrawingBufferSize(size);const half=Math.floor(size.x/2),previousAspect=camera.aspect;renderer.setScissorTest(true)
    if(typeof camera.aspect==='number'){camera.aspect=half/size.y;camera.updateProjectionMatrix()}
    renderer.setScissor(0,0,half,size.y);renderer.setViewport(0,0,half,size.y);originalRender(scene3D,camera)
    renderer.setScissor(half,0,half,size.y);renderer.setViewport(half,0,half,size.y);originalRender(scene3D,camera)
    renderer.setScissorTest(false);renderer.setViewport(0,0,size.x,size.y)
    if(typeof previousAspect==='number'){camera.aspect=previousAspect;camera.updateProjectionMatrix()}
  }
  function setOverlay(visible){$('.hud').style.display=visible?'flex':'none';$('.orientation').style.display=visible?'flex':'none'}
  const fullscreenElement=()=>document.fullscreenElement||document.webkitFullscreenElement
  async function requestMotion(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function')try{await DeviceOrientationEvent.requestPermission()}catch{}}
  async function enterFullscreen(){document.body.classList.add('pseudo-fullscreen');const request=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen;try{if(request)await request.call(document.documentElement,{navigationUI:'hide'})}catch{};try{await screen.orientation?.lock?.('landscape')}catch{};const active=Boolean(fullscreenElement());$('#enter-fullscreen').textContent=active?'SAIR DA TELA CHEIA':'MODO AMPLO';return active}
  async function leaveFullscreen(){document.body.classList.remove('pseudo-fullscreen');const exit=document.exitFullscreen||document.webkitExitFullscreen;try{if(fullscreenElement()&&exit)await exit.call(document)}catch{};try{screen.orientation?.unlock?.()}catch{};$('#enter-fullscreen').textContent='TELA CHEIA'}
  async function activate(){unlockSessionMusic();enabled=true;setOverlay(false);document.body.classList.add('sbs-active');await Promise.allSettled([requestMotion(),enterFullscreen()])}
  async function deactivate(){enabled=false;document.body.classList.remove('sbs-active');setOverlay(true);await leaveFullscreen()}
  $('#enter-vr').addEventListener('click',()=>{unlockSessionMusic();enabled?deactivate():activate()})
  $('#enter-fullscreen').addEventListener('click',async()=>{unlockSessionMusic();if(fullscreenElement()||document.body.classList.contains('pseudo-fullscreen'))await leaveFullscreen();else await enterFullscreen()})
  ;['fullscreenchange','webkitfullscreenchange'].forEach(name=>document.addEventListener(name,()=>{$('#enter-fullscreen').textContent=fullscreenElement()||document.body.classList.contains('pseudo-fullscreen')?'SAIR DA TELA CHEIA':'TELA CHEIA'}))
  window.addEventListener('keydown',event=>{if(event.key==='Escape'&&enabled)deactivate()})
}
AFRAME.registerComponent('canvas-label',{
  schema:{text:{default:''},color:{default:'#2E1D14'},fontSize:{type:'int',default:58},align:{default:'left'},weight:{default:'600'}},
  update(){
    const planeWidth=Number(this.el.getAttribute('width'))||3.4,planeHeight=Number(this.el.getAttribute('height'))||.5
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=Math.max(80,Math.round(1024*planeHeight/planeWidth));const context=canvas.getContext('2d');context.clearRect(0,0,canvas.width,canvas.height);context.fillStyle=this.data.color;context.font=`${this.data.weight} ${this.data.fontSize}px Arial, sans-serif`;context.textBaseline='middle'
    const maxWidth=920,lines=[];this.data.text.split('\n').forEach(paragraph=>{const words=paragraph.split(' ');let line='';words.forEach(word=>{const test=line?`${line} ${word}`:word;if(context.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test});lines.push(line)})
    const lineHeight=this.data.fontSize*1.28,total=lineHeight*lines.length,start=canvas.height/2-total/2+lineHeight/2;context.textAlign=this.data.align;const x=this.data.align==='center'?512:this.data.align==='right'?972:52;lines.forEach((line,index)=>context.fillText(line,x,start+index*lineHeight))
    if(this.texture)this.texture.dispose();this.texture=new THREE.CanvasTexture(canvas);this.texture.colorSpace=THREE.SRGBColorSpace;this.texture.needsUpdate=true
    const apply=()=>{const mesh=this.el.getObject3D('mesh');if(!mesh)return;mesh.material.map=this.texture;mesh.material.color.set('#ffffff');mesh.material.transparent=true;mesh.material.needsUpdate=true};apply();this.el.addEventListener('object3dset',apply,{once:true})
  },
  remove(){this.texture?.dispose()}
})

function make(tag,attributes={}){const element=document.createElement(tag);Object.entries(attributes).forEach(([key,value])=>element.setAttribute(key,value));return element}
function canvasLabel(text,{width=3.4,height=.5,position='0 0 .15',color='#2E1D14',fontSize=58,align='left',weight='600'}={}){const plane=make('a-plane',{width:String(width),height:String(height),position,material:'shader:flat;transparent:true;opacity:1;color:#fff'});plane.setAttribute('canvas-label',{text,color,fontSize,align,weight});return plane}

function panelPosition(index,total){const angle=index*(360/total),radians=angle*Math.PI/180,radius=6.8;return{position:`${Math.sin(radians)*radius} 3.15 ${-Math.cos(radians)*radius}`,rotation:`0 ${-angle} 0`}}
function frame(){
  const panel=make('a-entity')
  panel.append(make('a-box',{width:'3.95',height:'4.65',depth:'.14',material:'shader:flat;color:#18100D'}))
  panel.append(make('a-box',{width:'3.7',height:'4.4',depth:'.04',position:'0 0 .1',material:'shader:flat;color:#F0DDB6'}))
  panel.append(make('a-box',{width:'1.25',height:'.1',depth:'.18',position:'0 2.42 .38',material:'shader:flat;color:#E6A85F'}))
  return panel
}
function fitPhoto(src,x,maxWidth,maxHeight){const resolvedSrc=assetPath(src),photo=make('a-image',{src:resolvedSrc,width:String(maxWidth),height:String(maxHeight),position:`${x} 0 0`,material:'shader:flat'}),image=new Image();image.onload=()=>{const ratio=image.naturalWidth/image.naturalHeight,box=maxWidth/maxHeight;if(ratio>box){photo.setAttribute('width',maxWidth);photo.setAttribute('height',maxWidth/ratio)}else{photo.setAttribute('height',maxHeight);photo.setAttribute('width',maxHeight*ratio)}};image.src=resolvedSrc;return photo}

function createPhotoPanel(item,index,total,sessionTitle){
  const panel=frame(),pose=panelPosition(index,total);panel.setAttribute('position',pose.position);panel.setAttribute('rotation',pose.rotation)
  panel.append(canvasLabel(`SESSÃO ${currentSession+1}  /  PAINEL ${String(index+1).padStart(2,'0')}`,{width:3.25,height:.34,position:'0 1.78 .15',color:'#6B2F10',fontSize:52}))
  panel.append(canvasLabel(item.title,{width:3.25,height:.72,position:'0 1.31 .15',color:'#2E1D14',fontSize:68}))
  const group=make('a-entity',{position:'0 .25 .16'}),count=item.photos.length,layouts=count===3?[[-1.18,1.05,1.5],[0,1.05,1.5],[1.18,1.05,1.5]]:count===2?[[-.86,1.55,1.5],[.86,1.55,1.5]]:[[0,3.05,1.5]]
  item.photos.forEach((src,i)=>{const[x,width,height]=layouts[i];group.append(fitPhoto(src,x,width,height))});panel.append(group)
  panel.append(canvasLabel(item.caption,{width:3.25,height:.9,position:'0 -1.12 .15',color:'#21150F',fontSize:52,weight:'600'}))
  panel.append(canvasLabel(`${count} ${count===1?'FOTOGRAFIA':'FOTOGRAFIAS AGRUPADAS'}`,{width:3.25,height:.28,position:'0 -1.86 .15',color:'#6B2F10',fontSize:44}));return panel
}

function createPoemPanel(poem,index,total,sessionTitle){
  const panel=frame(),pose=panelPosition(index,total);panel.setAttribute('position',pose.position);panel.setAttribute('rotation',pose.rotation)
  const poemLineCount=poem.lines.split('\n').length,poemFontSize=poemLineCount>=9?38:poemLineCount>=7?43:54
  panel.append(canvasLabel(`SESSÃO ${currentSession+1}  /  POESIA`,{width:3.25,height:.34,position:'0 1.76 .15',color:'#6B2F10',fontSize:52}));panel.append(canvasLabel('FOLHETO DIGITAL',{width:3.25,height:.45,position:'0 1.3 .15',fontSize:65}))
  panel.append(make('a-box',{width:'3.05',height:'2.35',depth:'.035',position:'0 -.05 .15',material:'shader:flat;color:#271710'}));panel.append(canvasLabel(poem.lines,{width:2.8,height:1.28,position:'0 .34 .2',color:'#FFF1D2',fontSize:poemFontSize,align:'center',weight:'600'}));panel.append(canvasLabel(poem.author,{width:2.7,height:.35,position:'0 -.88 .2',color:'#F2B769',fontSize:42,align:'center'}));panel.append(canvasLabel(`Poema: ${poem.work}\nPoesia de Uauá`,{width:3.1,height:.7,position:'0 -1.62 .15',color:'#21150F',fontSize:43,align:'center',weight:'600'}));return panel
}

function renderSession(){
  const room=$('#monuments-room'),session=sessions[currentSession],total=session.items.length+1
  while(room.firstChild)room.removeChild(room.firstChild)
  session.items.forEach((item,index)=>room.append(createPhotoPanel(item,index,total,session.title)));room.append(createPoemPanel(session.poem,total-1,total,session.title))
  $('.identity b').textContent=`MEMÓRIAS DE UAUÁ · ${session.title}`
  room.setAttribute('animation__enter','property:scale;from:.75 .75 .75;to:1 1 1;dur:650;easing:easeOutBack')
  loadSessionMusic()
}

function nextSession(){currentSession=(currentSession+1)%sessions.length;renderSession()}
function previousSession(){currentSession=(currentSession-1+sessions.length)%sessions.length;renderSession()}
function bindGaze(target,action){let timer=null,cooldown=false;target.addEventListener('mouseenter',()=>{if(cooldown)return;target.setAttribute('animation__gaze','property:scale;from:1 1 1;to:1.18 1.18 1.18;dur:1600;easing:linear');timer=setTimeout(()=>{cooldown=true;action();target.setAttribute('animation__gaze','property:scale;to:1 1 1;dur:220');setTimeout(()=>cooldown=false,1200)},1600)});target.addEventListener('mouseleave',()=>{clearTimeout(timer);target.removeAttribute('animation__gaze');target.setAttribute('scale','1 1 1')})}

function createColumns(){const columns=$('#columns');for(let i=0;i<12;i++){const angle=i*30,r=angle*Math.PI/180,e=make('a-entity',{position:`${Math.sin(r)*9.45} 0 ${Math.cos(r)*9.45}`});e.innerHTML='<a-cylinder radius=".18" height="5.65" position="0 2.85 0" material="color:#6A4B39;roughness:.88" segments-radial="12"></a-cylinder><a-cylinder radius=".34" height=".14" position="0 .07 0" material="color:#A36E42"></a-cylinder>';columns.append(e)}}

function createCeilingLabels(){const controls=$('#ceiling-controls');controls.append(canvasLabel('SESSÃO\nANTERIOR',{width:1.25,height:.62,position:'-1.5 .08 .04',color:'#FFF0D2',fontSize:50,align:'center'}));const musicLabel=canvasLabel('PAUSAR\nMÚSICA',{width:1.25,height:.62,position:'0 .08 .04',color:'#FFF0D2',fontSize:50,align:'center'});musicLabel.id='music-control-label';controls.append(musicLabel);controls.append(canvasLabel('PRÓXIMA\nSESSÃO',{width:1.25,height:.62,position:'1.5 .08 .04',color:'#FFF0D2',fontSize:50,align:'center'}));controls.append(canvasLabel('FIXE O OLHAR PARA NAVEGAR',{width:3.1,height:.32,position:'0 -1.18 .03',color:'#CFA467',fontSize:45,align:'center'}))}

window.addEventListener('DOMContentLoaded',()=>{createColumns();createCeilingLabels();renderSession();document.addEventListener('pointerdown',unlockSessionMusic,{once:true});bindGaze($('#previous-session-target'),previousSession);bindGaze($('#music-toggle-target'),toggleSessionMusic);bindGaze($('#next-session-target'),nextSession);const scene=$('a-scene');scene.addEventListener('loaded',()=>{scene.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));installSBS(scene);setTimeout(()=>$('#loading').classList.add('hide'),450)})})
