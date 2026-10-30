const L=`I love you|دوستت دارم|أحبك|אני אוהב אותך|Seni seviyorum|مجھے تم سے محبت ہے|زه تا سره مينه کوم|Ez te hez dikim|خۆشم دەوێیت|مان توکي پيار ڪريان ٿو|मैं तुमसे प्यार करता हूँ|আমি তোমাকে ভালোবাসি|ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ|હું તને પ્રેમ કરું છું|मी तुझ्यावर प्रेम करतो|நான் உன்னை காதலிக்கிறேன்|నేను నిన్ను ప్రేమిస్తున్నాను|ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ|ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു|මම ඔබට ආදරෙයි|ମୁଁ ତୁମକୁ ଭଲ ପାଏ|মই তোমাক ভাল পাওঁ|म तिमीलाई माया गर्छु|अहं त्वां प्रेम करोमि|我爱你|我愛你|愛してる|사랑해요|Би чамд хайртай|مەن سېنى ياخشى كۆرىمەن|ฉันรักคุณ|ຂ້ອຍຮັກເຈົ້າ|ខ្ញុំស្រលាញ់អ្នក|ကျွန်တော် မင်းကို ချစ်တယ်|Anh yêu em|Aku cinta kamu|Saya cintakan awak|Mahal kita|Gihigugma tika|Ay ayaten ka|Aku tresna sampeyan|Abdi bogoh ka anjeun|Kuv hlub koj|Aroha au ki a koe|Aloha au iā ʻoe|Ou te alofa ia te oe|ʻOku ou ʻofa ʻia koe|Au domoni iko|Ua here au ia oe|Mi laikim yu|Te quiero|Eu te amo|Je t’aime|Ti amo|Ich liebe dich|Ik hou van je|Jag älskar dig|Jeg elsker deg|Jeg elsker dig|Ég elska þig|Eg elski teg|Minä rakastan sinua|Ma armastan sind|Es tevi mīlu|Aš tave myliu|Kocham cię|Miluji tě|Ľúbim ťa|Ljubim te|Volim te|Волим те|Те сакам|Обичам те|Te iubesc|Szeretlek|Σ’ αγαπώ|Të dua|Я тебя люблю|Я тебе кохаю|Я цябе кахаю|მიყვარხარ|Սիրում եմ քեզ|Səni sevirəm|Мен сені жақсы көремін|Men seni sevaman|Мен сени сүйөм|Men seni söýýärin|Ман туро дӯст медорам|Мин сине яратам|Tá grá agam duit|Tha gaol agam ort|Rwy’n dy garu di|Da garout a ran|Maite zaitut|T’estimo|Quérote|T’aimi|Ti tengu caru|Inħobbok|Ech hunn dech gär|Ik hâld fan dy|Ek is lief vir jou|Te amo|Mi amas vin|איך האב דיך ליב|Mi stima bo|Nakupenda|Ngiyakuthanda|Ndiyakuthanda|Ndinokuda|Mo nífẹ̀ẹ́ rẹ|Hụrụ m gị n’anya|Ina son ka|እወድሃለሁ|Waan ku jeclahay|Sin jaalladha|Tiako ianao|Ndimakukonda|Ndagukunda|Dama la bëgg|Ke a o rata|Ke a go rata|Me dɔ wo|Nalingi yo|Nkwagala|Mwen renmen w|Munayki|Rohayhu|Nimitztlazohtla|Asavakit|mi do prami`.split("|");
const N=L.length,stage=document.getElementById("heart");
let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
for(let i=N-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[L[i],L[j]]=[L[j],L[i]];}
const outline=S=>{const k=S/34,c=Math.cos,a=[];for(let i=0;i<360;i++){const t=i/360*2*Math.PI;a.push([S/2+16*Math.sin(t)**3*k,(12.5-(13*c(t)-5*c(2*t)-2*c(3*t)-c(4*t)))*k+S*.03]);}return a;};
const spans=(p,y)=>{const x=[];for(let i=0;i<p.length;i++){const[a,b]=p[i],[c,d]=p[(i+1)%p.length];if((b<=y)!==(d<=y))x.push(a+(y-b)/(d-b)*(c-a));}x.sort((m,n)=>m-n);const r=[];for(let i=0;i+1<x.length;i+=2)r.push([x[i],x[i+1]]);return r;};
function layout(p,S,size){
  stage.querySelectorAll(".row").forEach(r=>r.remove());
  const h=size*1.55;let n=0;
  for(let y=S*.03;y+h<S*.92;y+=h){
    const a=spans(p,y+2),b=spans(p,y+h-2);
    if(!a.length||a.length!==b.length)continue;
    a.forEach((s,i)=>{
      const x0=Math.max(s[0],b[i][0])+size*.5,x1=Math.min(s[1],b[i][1])-size*.5;
      if(x1-x0<size*4)return;
      const row=document.createElement("div");row.className="row";
      row.style.cssText=`left:${x0}px;top:${y}px;width:${x1-x0}px;height:${h}px;font-size:${size}px`;
      stage.appendChild(row);
      for(;;){
        const sp=document.createElement("span");sp.dir="auto";
        sp.textContent=L[n%N];sp.className="c"+(n%4);row.appendChild(sp);
        if(row.scrollWidth>row.clientWidth){row.removeChild(sp);break;}
        n++;
      }
    });
  }
  return n;
}
function build(){
  const S=stage.clientWidth,p=outline(S);
  stage.innerHTML=`<svg viewBox="0 0 ${S} ${S*.92}" aria-hidden="true"><polygon points="${p.map(q=>q.join(",")).join(" ")}"/></svg>`;
  for(let size=22;size>=7;size--){if(layout(p,S,size)>=N)break;}
}
let timer;
addEventListener("resize",()=>{clearTimeout(timer);timer=setTimeout(()=>{if(!love.hidden)build();},150);});
const intro=document.getElementById("intro"),love=document.getElementById("love");
document.getElementById("yes").addEventListener("click",()=>{intro.hidden=true;love.hidden=false;build();});
