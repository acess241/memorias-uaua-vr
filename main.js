const sessions = [
  {
    title:'MONUMENTOS',
    items:[
      {title:'RÉPLICA DO BELO MONTE',photos:['/monumentos/belo-monte-01.jpg','/monumentos/belo-monte-02.jpg','/monumentos/belo-monte-03.jpg'],panorama:'/panoramas/belo-monte.png',caption:'Cenário de Gildemar de Sena que evoca Belo Monte, comunidade de Antônio Conselheiro destruída em 1897. Uauá fez parte dos caminhos militares da Guerra de Canudos.'},
      {title:'AGÊNCIA DOS CORREIOS',photos:['/monumentos/correios.jpg'],panorama:'/panoramas/correios.png',caption:'Registro da antiga agência dos Correios, importante elo de comunicação entre Uauá e outras cidades.'},
      {title:'CASA DE ROQUE FERREIRA',photos:['/monumentos/casa-roque-01.jpg','/monumentos/casa-roque-02.jpg'],panorama:'/panoramas/casa-roque.png',caption:'Ligada ao combate de 21 de novembro de 1896, considerado o primeiro confronto da Guerra de Canudos. A casa abrigou tropas republicanas e depois foi demolida.'},
      {title:'ESCOLA JOÃO BORGES DE SÁ',photos:['/monumentos/escola-joao-borges.jpg'],panorama:'/panoramas/escola-joao-borges.png',caption:'Registro da escola municipal ligada à expansão do ensino público na sede de Uauá.'},
      {title:'ESCOLA SENHOR DO BONFIM',photos:['/monumentos/escola-senhor-bonfim.jpg'],panorama:'/panoramas/escola-senhor-bonfim.png',caption:'Estudantes diante do antigo Ginásio Escolar Normal Senhor do Bonfim, parte da memória educacional uauaense.'},
      {title:'IGREJA SÃO JOÃO BATISTA',photos:['/monumentos/igreja-sao-joao-01.jpg','/monumentos/igreja-sao-joao-02.jpg'],panorama:'/panoramas/igreja-sao-joao.png',caption:'A construção da Igreja Matriz começou em 1921. A paróquia foi fundada em 1923.'},
      {title:'PRAÇA DA IGREJA',photos:['/monumentos/praca-igreja.jpg'],panorama:'/panoramas/praca-igreja.png',caption:'Registro das transformações da Praça São João Batista, no centro de Uauá.'},
      {title:'PRIMEIRA ESCOLA DE DATILOGRAFIA',photos:['/monumentos/escola-datilografia.jpg'],panorama:'/panoramas/escola-datilografia.png',caption:'Iniciativa do Padre Osvaldo, a escola foi inaugurada em 1976 e ofereceu formação profissional.'},
      {title:'PREFEITURA MUNICIPAL DE UAUÁ',photos:['/monumentos/prefeitura.jpg'],panorama:'/panoramas/prefeitura.png',caption:'Sede administrativa de Uauá. O distrito foi criado em 1905; o município foi emancipado em 1926 e restaurado definitivamente em 1933.'}
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
      {title:'PEDRA RISCADA',photos:['/paisagens/pedra-riscada.jpg'],panorama:'/panoramas/pedra-riscada.png',caption:'Sítio de arte rupestre de Uauá, reconhecido como patrimônio arqueológico brasileiro e preservado como testemunho de ocupações humanas antigas no sertão.'},
      {title:'GRUTA DO JERÔNIMO',photos:['/paisagens/gruta-jeronimo.jpg'],panorama:'/panoramas/gruta-jeronimo.png',caption:'Formação natural do território de Uauá. A gruta integra a paisagem rochosa e a memória das comunidades que conhecem e percorrem a região.'},
      {title:'JOSÉ BORGES RIBEIRO',photos:['/paisagens/jose-borges-ribeiro.jpg'],caption:'José Borges Ribeiro nasceu em 1º de junho de 1941 e faleceu em 26 de março de 2012. Seu retrato integra a memória familiar e comunitária de Uauá.'},
      {title:'JOSÉ RAMOS DA SILVA',photos:['/paisagens/jose-ramos-01.jpg','/paisagens/jose-ramos-02.jpg'],caption:'José Ramos da Silva foi delegado e sargento de polícia em Uauá durante o período do cangaço. Segundo o registro histórico, foi contratado para combater cangaceiros na Bahia.'},
      {title:'PEDRA DO ÍNDIO',photos:['/paisagens/pedra-do-indio.jpg'],panorama:'/panoramas/pedra-do-indio.png',caption:'Monumento natural formado pelo equilíbrio de grandes blocos de pedra, cercado pela vegetação da Caatinga e associado à identidade visual do território uauaense.'},
      {title:'PEDRA DO SAL',photos:['/paisagens/pedra-do-sal.jpg'],panorama:'/panoramas/pedra-do-sal.png',caption:'Lugar relacionado às narrativas sobre a passagem de Lampião pela região. A tradição local registra que o ponto foi utilizado como posição de trincheira.'},
      {title:'UAUÁ COUNTRY CLUB',photos:['/paisagens/uaua-country-club.jpg'],panorama:'/panoramas/uaua-country-club.png',caption:'Antiga residência de Constantino Tolentino de Souza e Salomé Dias Ribeiro. Depois, o imóvel tornou-se sede do Uauá Country Club, também conhecido como Clube de Anita.'},
      {title:'SERRA DO SOBRADO — TRIBUTO',photos:['/paisagens/serra-do-sobrado.jpg'],panorama:'/panoramas/serra-do-sobrado.png',caption:'Paisagem conhecida como Tributo, na Serra do Sobrado. Rochas, água e vegetação da Caatinga compõem um lugar de referência ambiental e afetiva.'}
    ],
    poem:{author:'MARIANE DOS SANTOS CARDOSO',work:'Sou o sertão',lines:'Sou o xique-xique\nSou o mandacaru\nSou o facheiro\nSou o umbuzeiro de onde sai o umbu\n\nSou o chapéu de couro\nSou a perneira e o gibão\nSou o vaqueiro valente\nSou que desbrava nesse sertão'}
  }
]

let currentSession=0
let leaveSBS=async()=>{}
let sbsActive=false
const $=selector=>document.querySelector(selector)
const assetPath=path=>`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
const sessionAudio=new Audio()
const monumentGuides={
  '/panoramas/belo-monte.png':{name:'ANTÔNIO LOIOLA',role:'PERSONAGEM DA MEMÓRIA CULTURAL DE UAUÁ',image:'/guias/antonio-loiola.png'},
  '/panoramas/correios.png':{name:'SENHOR ADEMAR',role:'ANFITRIÃO DE UM PONTO DE ENCONTRO CULTURAL',image:'/guias/senhor-ademar.png'},
  '/panoramas/casa-roque.png':{name:'AUTO BARBOSA',role:'MÚSICO E AGITADOR CULTURAL UAUÁENSE',image:'/guias/auto-barbosa.png'},
  '/panoramas/escola-joao-borges.png':{name:'MIKAL LÔBO',role:'POETISA E ESCRITORA DE UAUÁ',image:'/guias/mikal-lobo.png'},
  '/panoramas/escola-senhor-bonfim.png':{name:'ZÉ DE AUTO',role:'MÚSICO, COMPOSITOR E MESTRE DO PÉ-DE-BODE',image:'/guias/ze-de-auto.png'},
  '/panoramas/igreja-sao-joao.png':{name:'MESTRE CAVACHÃO',role:'CANTOR, COMPOSITOR E MEMORIALISTA',image:'/guias/mestre-cavachao.png'},
  '/panoramas/praca-igreja.png':{name:'DEDÉ DO FOTO',role:'PERSONAGEM DA CULTURA SERTANEJA',image:'/guias/dede-do-foto.png'},
  '/panoramas/escola-datilografia.png':{name:'MARIANE CARDOSO',role:'POETA DE UAUÁ',image:'/guias/mariane-cardoso.png'},
  '/panoramas/prefeitura.png':{name:'VEINHO',role:'MÚSICA, HUMOR E MEMÓRIA ORAL DE UAUÁ',image:'/guias/veinho.png'}
}
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
  const renderer=scene.renderer,originalRender=renderer.render.bind(renderer)
  let viewportWidth=1,screenWidth=1,screenHeight=1,leftWidth=1,rightWidth=1,resizeFrame=0
  function readUsableViewport(){
    const viewport=window.visualViewport
    const width=viewport?.width||document.documentElement.clientWidth||window.innerWidth
    const height=viewport?.height||document.documentElement.clientHeight||window.innerHeight
    return{width:Math.max(1,Math.round(width)),height:Math.max(1,Math.round(height))}
  }
  function updateVRSize(){
    const viewport=readUsableViewport();viewportWidth=viewport.width;screenHeight=viewport.height
    const sideMargin=sbsActive?Math.round(viewportWidth*.05):0
    screenWidth=Math.max(2,viewportWidth-sideMargin*2)
    leftWidth=Math.floor(screenWidth/2);rightWidth=screenWidth-leftWidth
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5))
    renderer.setSize(screenWidth,screenHeight,false)
    renderer.domElement.style.setProperty('width',`${screenWidth}px`,'important');renderer.domElement.style.setProperty('height',`${screenHeight}px`,'important')
    renderer.domElement.style.setProperty('left',`${sideMargin}px`,'important');renderer.domElement.style.setProperty('right','auto','important')
    const camera=$('#camera')?.getObject3D('camera')
    if(camera){camera.aspect=screenWidth/screenHeight;camera.fov=sbsActive?90:72;camera.updateProjectionMatrix()}
  }
  function scheduleResize(){cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>{updateVRSize();setTimeout(updateVRSize,120)})}
  window.addEventListener('resize',scheduleResize,{passive:true})
  window.addEventListener('orientationchange',scheduleResize,{passive:true})
  window.addEventListener('pageshow',scheduleResize,{passive:true})
  window.visualViewport?.addEventListener('resize',scheduleResize,{passive:true})
  updateVRSize()
  let enabled=false
  renderer.render=function(scene3D,camera){
    if(!enabled||renderer.xr?.isPresenting)return originalRender(scene3D,camera)
    const viewport=readUsableViewport();if(viewportWidth!==viewport.width||screenHeight!==viewport.height)updateVRSize()
    camera.aspect=(screenWidth/2)/screenHeight;camera.fov=90;camera.updateProjectionMatrix();camera.updateMatrixWorld(true);renderer.setScissorTest(true)
    renderer.setScissor(0,0,leftWidth,screenHeight);renderer.setViewport(0,0,leftWidth,screenHeight);originalRender(scene3D,camera)
    renderer.setScissor(leftWidth,0,rightWidth,screenHeight);renderer.setViewport(leftWidth,0,rightWidth,screenHeight);originalRender(scene3D,camera)
    renderer.setScissorTest(false);renderer.setViewport(0,0,screenWidth,screenHeight)
  }
  function setOverlay(visible){$('.hud').style.display='flex';$('.identity').style.display=visible?'flex':'none';$('.orientation').style.display=visible?'flex':'none';$('#enter-fullscreen').style.display=visible?'block':'none';$('#enter-vr').textContent=visible?'ATIVAR VR · SBS':'DESATIVAR VR · SBS'}
  const fullscreenElement=()=>document.fullscreenElement||document.webkitFullscreenElement
  async function requestMotion(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function')try{await DeviceOrientationEvent.requestPermission()}catch{}}
  async function enterFullscreen(){document.body.classList.add('pseudo-fullscreen');const request=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen;try{if(request)await request.call(document.documentElement,{navigationUI:'hide'})}catch{};try{await screen.orientation?.lock?.('landscape')}catch{};const active=Boolean(fullscreenElement());$('#enter-fullscreen').textContent=active?'SAIR DA TELA CHEIA':'MODO AMPLO';return active}
  async function leaveFullscreen(){document.body.classList.remove('pseudo-fullscreen');const exit=document.exitFullscreen||document.webkitExitFullscreen;try{if(fullscreenElement()&&exit)await exit.call(document)}catch{};try{screen.orientation?.unlock?.()}catch{};$('#enter-fullscreen').textContent='TELA CHEIA'}
  async function activate(){unlockSessionMusic();enabled=true;sbsActive=true;$('#camera').setAttribute('fov','90');updateVRSize();setOverlay(false);document.body.classList.add('sbs-active');$('#experience-exit').setAttribute('visible','false');await Promise.allSettled([requestMotion(),enterFullscreen()]);scheduleResize()}
  async function deactivate(){if(!enabled)return;enabled=false;sbsActive=false;$('#camera').setAttribute('fov','72');updateVRSize();document.body.classList.remove('sbs-active');setOverlay(true);$('#experience-exit').setAttribute('visible','false');await leaveFullscreen();scheduleResize()}
  leaveSBS=deactivate
  $('#enter-vr').addEventListener('click',()=>{unlockSessionMusic();enabled?deactivate():activate()})
  $('#enter-fullscreen').addEventListener('click',async()=>{unlockSessionMusic();if(fullscreenElement()||document.body.classList.contains('pseudo-fullscreen'))await leaveFullscreen();else await enterFullscreen()})
  ;['fullscreenchange','webkitfullscreenchange'].forEach(name=>document.addEventListener(name,()=>{$('#enter-fullscreen').textContent=fullscreenElement()||document.body.classList.contains('pseudo-fullscreen')?'SAIR DA TELA CHEIA':'TELA CHEIA';scheduleResize()}))
}
AFRAME.registerComponent('canvas-label',{
  schema:{text:{default:''},color:{default:'#073F73'},fontSize:{type:'int',default:58},align:{default:'left'},weight:{default:'600'}},
  update(){
    const planeWidth=Number(this.el.getAttribute('width'))||3.4,planeHeight=Number(this.el.getAttribute('height'))||.5
    const canvas=document.createElement('canvas'),resolution=1.5;canvas.width=1536;canvas.height=Math.max(120,Math.round(1536*planeHeight/planeWidth));const context=canvas.getContext('2d');context.clearRect(0,0,canvas.width,canvas.height);context.fillStyle=this.data.color;context.font=`${this.data.weight} ${this.data.fontSize*resolution}px Arial, sans-serif`;context.textBaseline='middle'
    const maxWidth=1380,lines=[];this.data.text.split('\n').forEach(paragraph=>{const words=paragraph.split(' ');let line='';words.forEach(word=>{const test=line?`${line} ${word}`:word;if(context.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test});lines.push(line)})
    const lineHeight=this.data.fontSize*1.28*resolution,total=lineHeight*lines.length,start=canvas.height/2-total/2+lineHeight/2;context.textAlign=this.data.align;const x=this.data.align==='center'?768:this.data.align==='right'?1458:78;lines.forEach((line,index)=>context.fillText(line,x,start+index*lineHeight))
    if(this.texture)this.texture.dispose();this.texture=new THREE.CanvasTexture(canvas);this.texture.colorSpace=THREE.SRGBColorSpace;this.texture.needsUpdate=true
    const apply=()=>{const mesh=this.el.getObject3D('mesh');if(!mesh)return;mesh.material.map=this.texture;mesh.material.color.set('#ffffff');mesh.material.transparent=true;mesh.material.needsUpdate=true};apply();this.el.addEventListener('object3dset',apply,{once:true})
  },
  remove(){this.texture?.dispose()}
})

AFRAME.registerComponent('waving-guide',{
  schema:{src:{default:''}},
  init(){
    this.canvas=document.createElement('canvas');this.canvas.width=768;this.canvas.height=1536
    this.ctx=this.canvas.getContext('2d');this.ready=false
    this.image=new Image();this.image.crossOrigin='anonymous'
    this.image.onload=()=>{
      const work=document.createElement('canvas');work.width=this.canvas.width;work.height=this.canvas.height
      const context=work.getContext('2d');context.drawImage(this.image,0,0,work.width,work.height)
      const pixels=context.getImageData(0,0,work.width,work.height)
      for(let i=0;i<pixels.data.length;i+=4){
        const r=pixels.data[i],g=pixels.data[i+1],b=pixels.data[i+2]
        const max=Math.max(r,g,b),min=Math.min(r,g,b),saturation=max?((max-min)/max):0
        if(max>218&&saturation<.075)pixels.data[i+3]=0
      }
      context.putImageData(pixels,0,0)
      this.body=work
      this.texture=new THREE.CanvasTexture(this.canvas);this.texture.colorSpace=THREE.SRGBColorSpace
      const apply=()=>{const mesh=this.el.getObject3D('mesh');if(!mesh)return;mesh.material.map=this.texture;mesh.material.color.set('#fff');mesh.material.transparent=true;mesh.material.alphaTest=.025;mesh.material.side=THREE.DoubleSide;mesh.material.needsUpdate=true}
      apply();this.el.addEventListener('object3dset',apply,{once:true});this.ready=true
    }
    this.image.src=this.data.src
  },
  tick(time){
    if(!this.ready)return
    const context=this.ctx,w=this.canvas.width,h=this.canvas.height,cell=24,wave=Math.sin(time*.0045)
    context.clearRect(0,0,w,h)
    for(let y=0;y<h;y+=cell){
      for(let x=0;x<w;x+=cell){
        let dx=0,dy=0
        if(x<w*.43&&y<h*.43){
          const vertical=Math.max(0,1-y/(h*.43)),horizontal=Math.max(0,1-x/(w*.43)),influence=vertical*horizontal
          dx=wave*34*influence;dy=Math.abs(wave)*8*influence
        }
        const cw=Math.min(cell,w-x),ch=Math.min(cell,h-y)
        context.drawImage(this.body,x,y,cw,ch,x+dx,y+dy,cw+1,ch+1)
      }
    }
    this.texture.needsUpdate=true
  },
  remove(){this.texture?.dispose()}
})

function make(tag,attributes={}){const element=document.createElement(tag);Object.entries(attributes).forEach(([key,value])=>element.setAttribute(key,value));return element}
function canvasLabel(text,{width=3.4,height=.5,position='0 0 .15',color='#073F73',fontSize=58,align='left',weight='600'}={}){const plane=make('a-plane',{width:String(width),height:String(height),position,material:'shader:flat;transparent:true;opacity:1;color:#fff'});plane.setAttribute('canvas-label',{text,color,fontSize,align,weight});return plane}

function panelPosition(index,total){const angle=total<=1?0:-135+index*(270/(total-1)),radians=angle*Math.PI/180,radius=8.25;return{position:`${Math.sin(radians)*radius} 3.18 ${-Math.cos(radians)*radius}`,rotation:`0 ${-angle} 0`}}
function frame(){
  const panel=make('a-entity')
  panel.append(make('a-box',{width:'4.35',height:'5.25',depth:'.14',material:'shader:flat;color:#052F57'}))
  panel.append(make('a-box',{width:'4.08',height:'4.98',depth:'.04',position:'0 0 .1',material:'shader:flat;color:#F7FBFF'}))
  panel.append(make('a-box',{width:'1.55',height:'.11',depth:'.18',position:'0 2.72 .38',material:'shader:flat;color:#FDBA18'}))
  return panel
}
function addVisitButton(panel,panorama){
  const target=make('a-plane',{class:'interactive gaze-target',width:'3.25',height:'.68',position:'0 -2.18 .22',material:'shader:flat;color:#0867C7'})
  const label=canvasLabel('VISITE ESTA ÁREA',{width:3.02,height:.5,position:'0 -2.18 .24',color:'#FFFFFF',fontSize:82,align:'center',weight:'700'})
  panel.append(target);panel.append(label);bindGaze(target,()=>enterPanorama(panorama))
}
function hideMuseumForExperience(root){
  const scene=$('a-scene'),rig=$('#rig');Array.from(scene.children).forEach(element=>{if(element===rig||element.id==='experience-exit'||element.tagName==='A-ASSETS'||element===root)return;element.dataset.visitVisibility=String(element.getAttribute('visible')!==false);element.setAttribute('visible','false')})
}
function enterPanorama(panorama){
  if($('#visit-panorama'))return
  const scene=$('a-scene'),rig=$('#rig'),sky=make('a-sky',{id:'visit-panorama',src:assetPath(panorama),radius:'45',rotation:'0 -90 0',material:'shader:flat;side:back'})
  Array.from(scene.children).forEach(element=>{
    if(element===rig||element.id==='experience-exit'||element.tagName==='A-ASSETS')return
    element.dataset.visitVisibility=String(element.getAttribute('visible')!==false)
    element.setAttribute('visible','false')
  })
  scene.append(sky)
  const guide=monumentGuides[panorama]
  if(guide){const host=make('a-entity',{id:'visit-guide',position:'-4.8 -.24 -3.4',rotation:'0 55 0'});host.append(make('a-circle',{radius:'1.02',position:'0 .025 .08',rotation:'-90 0 0',scale:'1 .34 1',material:'shader:flat;color:#06182A;transparent:true;opacity:.34;side:double'}));const character=make('a-plane',{width:'2.1',height:'4.2',position:'0 2.1 0',material:'shader:flat;transparent:true;alphaTest:.025;side:double'});character.setAttribute('waving-guide',{src:assetPath(guide.image)});host.append(character);host.append(make('a-plane',{width:'3.65',height:'1.28',position:'-2.85 1.82 .01',material:'shader:flat;color:#073F73;opacity:.98'}));host.append(canvasLabel(guide.name,{width:3.36,height:.46,position:'-2.85 2.09 .03',color:'#FFFFFF',fontSize:82,align:'center',weight:'700'}));host.append(canvasLabel(guide.role,{width:3.3,height:.62,position:'-2.85 1.59 .03',color:'#FDBA18',fontSize:59,align:'center',weight:'700'}));scene.append(host)}
  $('#camera').setAttribute('fov',sbsActive?'90':'82')
  $('#experience-exit').setAttribute('visible','true')
  document.body.classList.add('panorama-active')
}
function exitPanorama(){
  window.gazeLockedUntil=Date.now()+2600
  $('#visit-panorama')?.remove()
  $('#visit-guide')?.remove()
  const scene=$('a-scene'),rig=$('#rig')
  Array.from(scene.children).forEach(element=>{
    if(element===rig||element.tagName==='A-ASSETS'||element.id==='visit-panorama')return
    if(element.dataset.visitVisibility!==undefined){element.setAttribute('visible',element.dataset.visitVisibility==='true');delete element.dataset.visitVisibility}
  })
  $('#camera').setAttribute('fov','72')
  $('#experience-exit').setAttribute('visible','false')
  document.body.classList.remove('panorama-active')
}
async function exitExperience(){
  if($('#visit-panorama'))exitPanorama()
  $('#experience-exit').setAttribute('visible','false')
}
function fitPhoto(src,x,maxWidth,maxHeight){const resolvedSrc=assetPath(src),photo=make('a-image',{src:resolvedSrc,width:String(maxWidth),height:String(maxHeight),position:`${x} 0 0`,material:'shader:flat'}),image=new Image();image.onload=()=>{const ratio=image.naturalWidth/image.naturalHeight,box=maxWidth/maxHeight;if(ratio>box){photo.setAttribute('width',maxWidth);photo.setAttribute('height',maxWidth/ratio)}else{photo.setAttribute('height',maxHeight);photo.setAttribute('width',maxHeight*ratio)}};image.src=resolvedSrc;return photo}

function createPhotoPanel(item,index,total,sessionTitle){
  const panel=frame(),pose=panelPosition(index,total);panel.__homePose=pose;panel.setAttribute('position',pose.position);panel.setAttribute('rotation',pose.rotation)
  panel.append(canvasLabel(`SESSÃO ${currentSession+1}  /  PAINEL ${String(index+1).padStart(2,'0')}`,{width:3.6,height:.42,position:'0 2.08 .15',color:'#0867C7',fontSize:66,weight:'700'}))
  panel.append(canvasLabel(item.title,{width:3.6,height:.84,position:'0 1.57 .15',color:'#073F73',fontSize:82,weight:'700'}))
  const group=make('a-entity',{position:'0 .5 .16'}),count=item.photos.length,layouts=count===3?[[-1.25,1.12,1.55],[0,1.12,1.55],[1.25,1.12,1.55]]:count===2?[[-.96,1.72,1.55],[.96,1.72,1.55]]:[[0,3.35,1.6]]
  item.photos.forEach((src,i)=>{const[x,width,height]=layouts[i];group.append(fitPhoto(src,x,width,height))});panel.append(group)
  panel.append(canvasLabel(item.caption,{width:3.6,height:1.48,position:'0 -1.15 .15',color:'#0B3152',fontSize:62,weight:'700'}))
  if(item.panorama)addVisitButton(panel,item.panorama);return panel
}

function createPoemPanel(poem,index,total,sessionTitle){
  const panel=frame(),pose=panelPosition(index,total);panel.__homePose=pose;panel.setAttribute('position',pose.position);panel.setAttribute('rotation',pose.rotation)
  const poemLineCount=poem.lines.split('\n').length,poemFontSize=poemLineCount>=9?38:poemLineCount>=7?43:54
  panel.append(canvasLabel(`SESSÃO ${currentSession+1}  /  POESIA`,{width:3.25,height:.34,position:'0 1.76 .15',color:'#0867C7',fontSize:52}));panel.append(canvasLabel('FOLHETO DIGITAL',{width:3.25,height:.45,position:'0 1.3 .15',color:'#073F73',fontSize:65}))
  panel.append(make('a-box',{width:'3.05',height:'2.35',depth:'.035',position:'0 -.05 .15',material:'shader:flat;color:#073F73'}));panel.append(canvasLabel(poem.lines,{width:2.8,height:1.28,position:'0 .34 .2',color:'#FFFFFF',fontSize:poemFontSize,align:'center',weight:'600'}));panel.append(canvasLabel(poem.author,{width:2.7,height:.35,position:'0 -.88 .2',color:'#FDBA18',fontSize:42,align:'center'}));panel.append(canvasLabel(`Poema: ${poem.work}\nPoesia de Uauá`,{width:3.1,height:.55,position:'0 -1.52 .15',color:'#163B5C',fontSize:40,align:'center',weight:'600'}));return panel
}

function renderSession(){
  const room=$('#monuments-room'),session=sessions[currentSession],showPoem=currentSession!==0,total=session.items.length+(showPoem?1:0)
  while(room.firstChild)room.removeChild(room.firstChild)
  session.items.forEach((item,index)=>room.append(createPhotoPanel(item,index,total,session.title)));if(showPoem)room.append(createPoemPanel(session.poem,total-1,total,session.title))
  $('.identity b').textContent=`MUSEU PÁTRIA DOS VAGALUMES · ${session.title}`
  room.setAttribute('animation__enter','property:scale;from:.75 .75 .75;to:1 1 1;dur:650;easing:easeOutBack')
  loadSessionMusic()
}

function showFinale(){sessionAudio.pause();document.body.classList.add('journey-complete');$('#museum-finale')?.classList.add('show')}
function restartJourney(){currentSession=0;$('#museum-finale')?.classList.remove('show');document.body.classList.remove('journey-complete');renderSession()}
function nextSession(){if(currentSession===sessions.length-1){showFinale();return}currentSession++;renderSession()}
function previousSession(){currentSession=(currentSession-1+sessions.length)%sessions.length;renderSession()}
function bindGaze(target,action){let timer=null,cooldown=false;target.addEventListener('mouseenter',()=>{if(cooldown||Date.now()<(window.gazeLockedUntil||0))return;target.setAttribute('animation__gaze','property:scale;from:1 1 1;to:1.18 1.18 1.18;dur:1600;easing:linear');timer=setTimeout(()=>{if(Date.now()<(window.gazeLockedUntil||0))return;cooldown=true;action();target.setAttribute('animation__gaze','property:scale;to:1 1 1;dur:220');setTimeout(()=>cooldown=false,1200)},1600)});target.addEventListener('mouseleave',()=>{clearTimeout(timer);target.removeAttribute('animation__gaze');target.setAttribute('scale','1 1 1')})}

function createColumns(){const columns=$('#columns');for(let i=0;i<12;i++){const angle=i*30,r=angle*Math.PI/180,e=make('a-entity',{position:`${Math.sin(r)*9.45} 0 ${Math.cos(r)*9.45}`});e.innerHTML='<a-cylinder radius=".18" height="5.65" position="0 2.85 0" material="color:#0B67C8;roughness:.88" segments-radial="12"></a-cylinder><a-cylinder radius=".34" height=".14" position="0 .07 0" material="color:#FDBA18"></a-cylinder>';columns.append(e)}}
function createMemoryFireflies(){const scene=$('a-scene');for(let i=0;i<16;i++){const angle=i/16*Math.PI*2,radius=3.2+(i%4)*1.25,x=Math.sin(angle)*radius,z=Math.cos(angle)*radius,y=1.2+(i%5)*.72;scene.append(make('a-sphere',{class:'memory-firefly',radius:'.035',position:`${x} ${y} ${z}`,material:'shader:flat;color:#FFF38A;emissive:#FDBA18;emissiveIntensity:2',animation:`property:position;dir:alternate;loop:true;dur:${1700+i*93};easing:easeInOutSine;to:${x+.18} ${y+.3} ${z-.12}`}))}}

function createCeilingLabels(){const controls=$('#ceiling-controls');controls.append(canvasLabel('SESSÃO\nANTERIOR',{width:1.48,height:.88,position:'-1.55 .12 .16',color:'#FFFFFF',fontSize:92,align:'center',weight:'700'}));const musicLabel=canvasLabel('PAUSAR\nMÚSICA',{width:1.48,height:.88,position:'0 .12 .16',color:'#FFFFFF',fontSize:92,align:'center',weight:'700'});musicLabel.id='music-control-label';controls.append(musicLabel);controls.append(canvasLabel('PRÓXIMA\nSESSÃO',{width:1.48,height:.88,position:'1.55 .12 .16',color:'#FFFFFF',fontSize:92,align:'center',weight:'700'}));controls.append(canvasLabel('FIXE O OLHAR PARA NAVEGAR',{width:4.15,height:.5,position:'0 -.97 .14',color:'#073F73',fontSize:76,align:'center',weight:'700'}))}
function createExperienceExit(){
  const control=make('a-entity',{id:'experience-exit',position:'4.8 2.45 -3.4',rotation:'0 -55 0',visible:'false'}),target=make('a-plane',{class:'interactive gaze-target',width:'3.25',height:'.82',material:'shader:flat;color:#073F73;opacity:.98;depthTest:false'})
  control.append(target);control.append(canvasLabel('SAIR DA EXPERIÊNCIA',{width:'2.95',height:'.58',position:'0 0 .03',color:'#FFFFFF',fontSize:82,align:'center',weight:'700'}));$('a-scene').append(control);bindGaze(target,exitExperience)
}

window.addEventListener('DOMContentLoaded',()=>{createColumns();createMemoryFireflies();createCeilingLabels();createExperienceExit();renderSession();$('#restart-journey')?.addEventListener('click',restartJourney);document.addEventListener('pointerdown',unlockSessionMusic,{once:true});bindGaze($('#previous-session-target'),previousSession);bindGaze($('#music-toggle-target'),toggleSessionMusic);bindGaze($('#next-session-target'),nextSession);const scene=$('a-scene');const initializeScene=()=>{if(scene.dataset.sbsReady||!scene.renderer)return;scene.dataset.sbsReady='true';installSBS(scene);setTimeout(()=>$('#loading').classList.add('hide'),450)};if(scene.hasLoaded)initializeScene();else scene.addEventListener('loaded',initializeScene,{once:true})})
