let current = Object.keys(MENU)[0];
const nav=document.getElementById('nav'), menu=document.getElementById('menu');
const icons=['🍹','🔥','🍺','🍷','🥤','☕','🥃'];
function renderNav(){
  nav.innerHTML='';
  Object.keys(MENU).forEach((key,i)=>{
    const b=document.createElement('button'); b.className='pill'+(key===current?' active':'');
    b.textContent=key; b.onclick=()=>{current=key; render();};
    nav.appendChild(b);
  });
}
function render(){
  renderNav(); menu.innerHTML='';
  const section=document.createElement('section'); section.className='section';
  const h=document.createElement('h2'); h.textContent=current; section.appendChild(h);
  Object.entries(MENU[current]).forEach(([group,items])=>{
    const gt=document.createElement('div'); gt.className='group-title'; gt.textContent=group; section.appendChild(gt);
    items.forEach(item=>{
      const [name,desc,extra]=item;
      const el=document.createElement('article'); el.className='item';
      el.innerHTML=`<div class="name">${name}</div><div class="desc">${desc||''}</div>${extra?`<div class="extra">${extra}</div>`:''}<div class="toggle">▼ ingredientes</div><div class="details">${desc||'Información del producto'}</div>`;
      el.querySelector('.toggle').onclick=()=>el.classList.toggle('open');
      section.appendChild(el);
    });
  });
  menu.appendChild(section);
}
render();
