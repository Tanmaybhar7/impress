const text =
"Every sky has stars, but some stars shine brighter than the rest. Today, this little website is dedicated to one special star... Soma ❤️";

let i = 0;

function typeWriter() {

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

typeWriter();

document.getElementById("startBtn").addEventListener("click",()=>{

document.getElementById("photoSection").classList.remove("hidden");

document.getElementById("messageSection").classList.remove("hidden");

document.getElementById("musicSection").classList.remove("hidden");

document.getElementById("finalSection").classList.remove("hidden");

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

});

document.getElementById("finalBtn").addEventListener("click",()=>{

document.getElementById("finalMessage").innerHTML =
" <br><br> — Tanmay ❤️";

createHearts();

});

function createHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.transition="all 4s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.top="-100px";
heart.style.opacity="0";
},100);

setTimeout(()=>{
heart.remove();
},4000);

}

}