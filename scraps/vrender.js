const W=1600,H=1000,FPS=24,OW=1280,OH=800;
const keys=['plan','ai','malaysia','todo','add','mytrip','itin1','itin2','map','posts','reviews','inbox','explore'];
const I={};for(const k of keys)I[k]=await readImage('scraps/v-'+k+'.png');
const c=document.createElement('canvas');c.width=OW;c.height=OH;const x=c.getContext('2d');
const ease=t=>t<0?0:t>1?1:t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const cl=(v)=>v<0?0:v>1?1:v;
const IW=852,IH=1796;const barCol='rgb(243,244,246)';
const B=document.createElement('canvas');B.width=W;B.height=H;{const b=B.getContext('2d');
  let g=b.createLinearGradient(0,0,0,H);g.addColorStop(0,'#f7f6ff');g.addColorStop(1,'#ecebff');b.fillStyle=g;b.fillRect(0,0,W,H);
  g=b.createRadialGradient(800,1420,200,800,1420,1000);g.addColorStop(0,'rgba(67,56,202,1)');g.addColorStop(.5,'rgba(99,102,241,.9)');g.addColorStop(.75,'rgba(165,180,252,.55)');g.addColorStop(1,'rgba(224,231,255,0)');b.fillStyle=g;b.fillRect(0,0,W,H);
  g=b.createRadialGradient(1500,-50,0,1500,-50,650);g.addColorStop(0,'rgba(196,181,253,.6)');g.addColorStop(1,'rgba(196,181,253,0)');b.fillStyle=g;b.fillRect(0,0,W,H);
  g=b.createRadialGradient(100,-50,0,100,-50,600);g.addColorStop(0,'rgba(199,210,254,.55)');g.addColorStop(1,'rgba(199,210,254,0)');b.fillStyle=g;b.fillRect(0,0,W,H);}
const S1=1500/IH, S2=1060/IH;
const scenes=[
 {pair:['plan','ai'],d:3.0},
 {k:'plan',d:3.4,cam:[0,60],typing:[0.7,2.0],tap:[426,820,2.6]},
 {k:'malaysia',d:2.6,cam:[60,220],tap:[300,938,2.0]},
 {k:'todo',d:2.4,cam:[0,60],tap:[412,704,1.8]},
 {k:'add',d:2.4,cam:[300,380],tap:[754,920,1.8]},
 {k:'mytrip',d:2.6,cam:[150,260],tap:[426,918,2.0]},
 {k:'itin1',d:2.6,cam:[300,480],tap:[426,1322,2.0]},
 {pair:['itin2','map'],d:3.2},
 {pair:['posts','reviews'],d:3.2},
 {pair:['inbox','explore'],d:3.2},
];
let acc=0;for(const s of scenes){s.t0=acc;acc+=s.d;}const DUR=acc,NF=Math.round(DUR*FPS),TR=0.6;
function rr(l,t,w,h,r){x.beginPath();x.roundRect(l,t,w,h,r);}
function screen(k,l,t,w,h){const img=I[k];const s=Math.max(w/img.width,h/img.height);const dw=img.width*s,dh=img.height*s;x.drawImage(img,l+(w-dw)/2,t,dw,dh);}
function phoneBody(l,t,w,h,sc){x.save();x.shadowColor='rgba(30,27,75,.28)';x.shadowBlur=40*sc;x.shadowOffsetY=30*sc;x.fillStyle='#fff';rr(l+w*.02,t+h*.015,w*.96,Math.min(h*.97,1100-t),w*.15);x.fill();x.restore();}
function camAt(s,lt){const a=TR,b=s.tap?s.tap[2]-0.3:s.d;return s.cam[0]+(s.cam[1]-s.cam[0])*ease((lt-a)/(b-a));}
function overlays(s,lt,l,t,sc){
  if(s.typing){const txt='Malaysia';const n=Math.floor(cl((lt-s.typing[0])/(s.typing[1]-s.typing[0]))*txt.length);
    if(lt>=s.typing[0]-0.25){x.fillStyle=barCol;x.fillRect(l+140*sc,t+790*sc,470*sc,62*sc);
      x.fillStyle='#111827';x.font=`500 ${32*sc}px "Inter", system-ui, -apple-system, sans-serif`;x.textBaseline='middle';const str=txt.slice(0,n);x.fillText(str,l+148*sc,t+821*sc);
      const blink=lt>=s.typing[1]?(Math.floor(lt*2.5)%2===0):true;if(blink){const cw=x.measureText(str).width;x.fillStyle='#4f46e5';x.fillRect(l+150*sc+cw,t+801*sc,3*sc,40*sc);}}
    if(n>=3){const a=cl((lt-s.typing[0]-0.5)/0.3);x.save();x.globalAlpha*=a;const dl=l+56*sc,dt=t+884*sc,dw=740*sc,dh=104*sc;x.shadowColor='rgba(30,27,75,.18)';x.shadowBlur=24*sc;x.shadowOffsetY=10*sc;x.fillStyle='#fff';rr(dl,dt,dw,dh,20*sc);x.fill();x.shadowColor='transparent';
      x.fillStyle='#eef2ff';rr(dl+22*sc,dt+22*sc,60*sc,60*sc,14*sc);x.fill();x.fillStyle='#4f46e5';x.beginPath();x.arc(dl+52*sc,dt+48*sc,10*sc,0,7);x.fill();x.fillRect(dl+50*sc,dt+52*sc,4*sc,16*sc);
      x.fillStyle='#111827';x.font=`600 ${30*sc}px "Inter", system-ui, sans-serif`;x.fillText('Malaysia',dl+104*sc,dt+38*sc);x.fillStyle='#6b7280';x.font=`400 ${24*sc}px "Inter", system-ui, sans-serif`;x.fillText('Southeast Asia · Country',dl+104*sc,dt+72*sc);x.restore();}
  }
  if(s.tap){const [tx,ty,tt]=s.tap;const p=(lt-tt+0.15)/0.7;if(p>0&&p<1){const cx=l+tx*sc,cy=t+ty*sc;
    x.save();x.globalAlpha=(1-p)*.9;x.fillStyle='rgba(79,70,229,.28)';x.beginPath();x.arc(cx,cy,(26+50*p),0,7);x.fill();
    x.globalAlpha=p<.5?1:(1-p)*2;x.fillStyle='rgba(255,255,255,.85)';x.strokeStyle='rgba(79,70,229,.9)';x.lineWidth=3;x.beginPath();x.arc(cx,cy,22*(1-p*.3),0,7);x.fill();x.stroke();x.restore();}}
}
function drawSingle(s,lt,alpha,dy,prev,push,cam2){
  const w=IW*S1,h=IH*S1,l=800-w/2;const cam=cam2!==undefined?cam2:camAt(s,lt);const t=80-cam*S1+dy+Math.sin(lt*1.6)*4;
  x.save();x.globalAlpha=alpha;phoneBody(l,t,w,h,1);rr(l,t,w,h,w*.15);x.clip();
  if(push!==undefined){x.save();x.translate(-w*push,0);screen(prev.k,l,t,w,h);overlays(prev,prev.d,l,t,S1);x.restore();x.save();x.translate(w*(1-push),0);screen(s.k,l,t,w,h);overlays(s,lt,l,t,S1);x.restore();}
  else{screen(s.k,l,t,w,h);overlays(s,lt,l,t,S1);}
  x.restore();
}
function drawPair(s,lt,alpha,dy){
  const w=IW*S2,h=IH*S2;const fl=Math.sin(lt*1.6)*6;
  [[0,-1],[1,1]].forEach(([i,dir])=>{const cx=800+dir*300,l=cx-w/2;const rise=(1-ease(cl((lt-i*0.15)/0.8)))*60;const t=100+dy+rise+fl*dir;
    x.save();x.globalAlpha=alpha*(lt>1.5?1:cl((lt-i*0.15)/0.5));phoneBody(l,t,w,h,.7);rr(l,t,w,h,w*.15);x.clip();screen(s.pair[i],l,t,w,h);x.restore();});
}
function draw(s,lt,alpha,dy){if(s.pair)drawPair(s,lt,alpha,dy);else drawSingle(s,lt,alpha,dy);}
function frame(T){
  x.setTransform(OW/W,0,0,OH/H,0,0);x.drawImage(B,0,0);
  let i=scenes.findIndex(s=>T>=s.t0&&T<s.t0+s.d);if(i<0)i=scenes.length-1;const s=scenes[i],lt=T-s.t0;const prev=scenes[(i-1+scenes.length)%scenes.length];
  if(lt<TR){const p=ease(lt/TR);
    if(!s.pair&&!prev.pair){const camP=camAt(prev,prev.d),camN=s.cam[0];drawSingle(s,lt,1,0,prev,p,camP+(camN-camP)*p);}
    else{draw(prev,prev.d+lt,1-p,-30*p);draw(s,lt,p,40*(1-p));}
  } else draw(s,lt,1,0);
}
async function encodeRange(a,b){
  const chunks=[];
  const enc=new VideoEncoder({output:(ch)=>{const u=new Uint8Array(ch.byteLength);ch.copyTo(u);chunks.push({key:ch.type==='key',ts:ch.timestamp,data:u});},error:e=>log('ERR',e.message)});
  enc.configure({codec:'vp09.00.40.08',width:OW,height:OH,bitrate:4e6,framerate:FPS,latencyMode:'realtime'});
  for(let i=a;i<Math.min(b,NF);i++){frame(i/FPS);const vf=new VideoFrame(c,{timestamp:Math.round(i*1e6/FPS),duration:Math.round(1e6/FPS)});enc.encode(vf,{keyFrame:(i-a)%48===0});vf.close();if(enc.encodeQueueSize>8)await new Promise(r=>setTimeout(r,0));}
  await enc.flush();
  const meta=chunks.map(ch=>[ch.key?1:0,ch.ts,ch.data.length]);
  return {meta,blob:new Blob(chunks.map(ch=>ch.data))};
}
return {frame,encodeRange,NF,DUR,c,OW,OH};
