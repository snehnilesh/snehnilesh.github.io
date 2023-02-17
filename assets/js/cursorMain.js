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

    gsap.to(cursor, 0.2, {x: mouseX, y:mouseY})
})

document.querySelectorAll('a, p').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, 0.2, {scale: 1.5})
        cursor.style.borderRadius = "16px";
        cursor.style.width = "60px";
        cursor.style.height = "24px";
    })
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, 0.2, {scale: 1})
        cursor.style.borderRadius = "999px";
        cursor.style.width = "20px";
        cursor.style.height = "20px";
    })
})

document.querySelectorAll('.mini-map-selection').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(cursor, 0.2, {scale: 1.5})
        cursor.style.opacity = 0.1;
        body.style.cursor = "none";
        ball.style.opacity = "0.25";
    })
    card.addEventListener('mouseleave', () => {
        gsap.to(cursor, 0.2, {scale: 1})
        cursor.style.opacity = 0;
        body.style.cursor = "default";
        ball.style.opacity = "0.4";
    })
})

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(cursor, 0.2, { scale: 1.5 })
    })
    card.addEventListener('mouseleave', () => {
        gsap.to(cursor, 0.2, { scale: 1 })

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
