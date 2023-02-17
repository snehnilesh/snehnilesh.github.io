window.onload = function() {
    window.scrollTo(0, 0);
}

gsap.set('.cursor',{xPercent:-50, yPercent: -50})

let cursor = document.querySelector('.cursor')

let mouseX;
let mouseY;

let isMobile = navigator.appVersion.includes('iPhone') || navigator.appVersion.includes('Android');

if (isMobile) {
    cursor.style.display = "none";
}

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.01, {x: mouseX, y:mouseY})
})

document.querySelectorAll('a, p, .footer').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, 0.1, {scale: 1.5})
        cursor.style.borderRadius = "16px";
        cursor.style.width = "60px";
        cursor.style.height = "24px";
    })
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, 0.1, {scale: 1})
        cursor.style.borderRadius = "999px";
        cursor.style.width = "20px";
        cursor.style.height = "20px";
    })
})

document.querySelectorAll('.mini-map-selection').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(cursor, 0.1, {scale: 1.5})
        cursor.style.opacity = 0.1;
    })
    card.addEventListener('mouseleave', () => {
        gsap.to(cursor, 0.01, {scale: 1})
        cursor.style.opacity = 0;
    })
})

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(cursor, 0.2, { scale: 1.5 })
        card.style.scale = 1.01;
    })
    card.addEventListener('mouseleave', () => {
        gsap.to(cursor, 0.2, { scale: 1 })
        card.style.scale = 1;
    })
})

// after 1 second of inactivity, hide the cursor
let timeout;
document.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    cursor.style.opacity = 0.1;
    timeout = setTimeout(() => {
        cursor.style.opacity = 0;
    }, 1000);
});

var blur = document.createElement("div");
blur.style.display = "block";
blur.style.position = "fixed";
blur.style.top = "0";
blur.style.left = "0";
blur.style.width = "100%";
blur.style.height = "100%";
blur.style.zIndex = "-1";
// blur.style.backgroundColor = "rgba(255, 165, 0, 0.5)";
blur.style.backdropFilter = "blur(100px)";
blur.style.webkitBackdropFilter = "blur(100px)";
blur.style.willChange = "backdrop-filter";
blur.style.transition = "backdrop-filter 0.5s ease-in-out";
document.body.appendChild(blur);

// blue blurred ball behind blur following the mouse
var ball = document.createElement("div");
ball.classList.add("ball");
ball.style.display = "block";
ball.style.position = "fixed";
if (!isMobile) {
    ball.style.top = "-50%";
    ball.style.left = "50%";
} else {
    ball.style.top = "0";
    ball.style.left = "0";
}
ball.style.width = "500px";
ball.style.height = "500px";
ball.style.borderRadius = "50%";
ball.style.zIndex = "-999";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ball.style.background = "linear-gradient(to right, aquamarine, purple)";
} else {
    ball.style.background = "linear-gradient(to right, aquamarine, violet)";
}
ball.style.transform = "scale(1.5, 1)";
ball.style.animation = "rotate 10s ease infinite";
ball.style.marginLeft = "-250px";
ball.style.marginTop = "-250px";
if (!isMobile) {
    ball.style.opacity = "0";
} else {
    ball.style.opacity = "0.35";
}
ball.style.willChange = "transform opacity";
ball.style.transition = "opacity 0.5s ease-in-out";

// check change of css dark mode
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        ball.style.background = "linear-gradient(to right, aquamarine, purple)";
    } else {
        ball.style.background = "linear-gradient(to right, aquamarine, violet)";
    }
});

document.body.appendChild(ball);

document.onpointermove = function(e) {
    if (!isMobile) {
        const { clientX, clientY } = e;

        ball.animate ({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {
            duration: 0,
            fill: 'forwards',
        });
        ball.style.opacity = "0.35";
    }
}

document.querySelectorAll('a, p, .mini-map-selection, .card, .footer').forEach(link => {
    link.addEventListener('mouseover', () => {
        ball.style.opacity = "0.25";
    });
    link.addEventListener('mouseout', () => {
        ball.style.opacity = "0.35";
    });
});