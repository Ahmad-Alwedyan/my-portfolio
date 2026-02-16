/* Custom Cursor */
const cursor=document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

/* 3D Tilt + Spotlight */
document.querySelectorAll(".glass").forEach(card=>{
card.addEventListener("mousemove",e=>{
const rect=card.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;
const centerX=rect.width/2;
const centerY=rect.height/2;

const rotateX=((y-centerY)/25)*-1;
const rotateY=(x-centerX)/25;

card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
card.style.setProperty("--x",x+"px");
card.style.setProperty("--y",y+"px");
});

card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0deg) rotateY(0deg)";
});
});

/* Scroll Reveal */
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});

/* Page Fade Transition */
document.querySelectorAll("a").forEach(link=>{
link.addEventListener("click",e=>{
if(link.href.includes(window.location.hostname)){
e.preventDefault();
document.body.classList.add("fade-out");
setTimeout(()=>{
window.location=link.href;
},500);
}
});
});
