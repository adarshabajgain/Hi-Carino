/* ==========================
   ANNIVERSARY COUNTDOWN
========================== */

// Change this date to your friend's anniversary date.
// Format: Year, Month-1, Day
const anniversaryDate = new Date("June 23, 2023 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = now - anniversaryDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);



/* ==========================
   MUSIC BUTTON
========================== */

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function(){

    if(!playing){

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;

    }

}



/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".memory,.timeline-item,.letter-card").forEach((el)=>{

    observer.observe(el);

});



/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.opacity=Math.random();

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="transform 8s linear, opacity 8s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120vh)";

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,700);



/* ==========================
   SMOOTH NAVIGATION ACTIVE LINK
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});
function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌹";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(6+Math.random()*5)+"s";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,500);
const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

document.querySelectorAll(".memory img").forEach(img=>{

img.onclick=function(){

lightbox.style.display="flex";

lightboxImage.src=this.src;

}

});

closeLightbox.onclick=function(){

lightbox.style.display="none";

}

lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.style.display="none";

}

}
window.addEventListener("scroll",()=>{

if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){

confetti();

}

});