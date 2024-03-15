document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.id = 'rainCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    let raindropImg = new Image();
    raindropImg.src = './assets/pix/3.png'; //

    let raindrops = [];
    for (let i = 0; i < 100; i++) {
        raindrops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 15 + 10,
            opacity: Math.random() * 0.5 + 0.5,
            speed: Math.random() * 10 + 5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < raindrops.length; i++) {
            let r = raindrops[i];
            ctx.globalAlpha = r.opacity;
            ctx.drawImage(raindropImg, r.x, r.y, 50, 50);
        }
    }

    function update() {
        for (let i = 0; i < raindrops.length; i++) {
            let r = raindrops[i];
            r.y += r.speed;
            if (r.y > canvas.height) {
                r.y = -r.length;
            }
        }
    }

    // Main loop
    function loop() {
        update();
        draw();
        requestAnimationFrame(loop);
    }

    loop();
});

const username = localStorage.getItem('userName');

// Update the HTML to display the greeting with the username
window.onload = function () {
    document.getElementById('greeting').textContent = "Hi, " + username + "!";
};