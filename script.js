/* ==========================
   PERSONALIZACIÓN
========================== */

const CONFIG = {

    nombre: "Mi Sofi",

    mensaje: `
Por si no te veo 
y tardan en llegar las siguientes
flores❤️

Ten un lindo día Test update style
`
};

/* ==========================
   TEXTO ANIMADO
========================== */

const title =
document.getElementById("title");

const message =
document.getElementById("message");

setTimeout(() => {

    typeText(
        title,
        `Para ${CONFIG.nombre} ❤️`,
        90
    );

}, 6500);

setTimeout(() => {

    typeText(
        message,
        CONFIG.mensaje,
        35
    );

}, 9000);

function typeText(element,text,speed){

    let i = 0;

    const interval =
    setInterval(() => {

        element.textContent += text[i];
        i++;

        if(i >= text.length){
            clearInterval(interval);
        }

    }, speed);
}

/* ==========================
   LUCIÉRNAGAS
========================== */

const canvas =
document.getElementById("fireflies");

const ctx =
canvas.getContext("2d");

function resize(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;
}

resize();

window.addEventListener(
    "resize",
    resize
);

const particles = [];

for(let i=0;i<80;i++){

    particles.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        r:1+Math.random()*3,

        vx:(Math.random()-.5)*0.3,
        vy:(Math.random()-.5)*0.3,

        alpha:Math.random()
    });
}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p=>{

        p.x += p.vx;
        p.y += p.vy;

        p.alpha +=
        (Math.random()-.5)*0.05;

        if(p.alpha<0.2)
            p.alpha=0.2;

        if(p.alpha>1)
            p.alpha=1;

        if(p.x<0) p.x=canvas.width;
        if(p.x>canvas.width) p.x=0;

        if(p.y<0) p.y=canvas.height;
        if(p.y>canvas.height) p.y=0;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.r,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        `rgba(247,231,169,${p.alpha})`;

        ctx.fill();
    });

    requestAnimationFrame(
        animate
    );
}

animate();
