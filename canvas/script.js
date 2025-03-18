let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let boxX = 200, boxY = 200;
let speed = 10;
let ballX = Math.random() * 400 + 50;
let ballY = Math.random() * 300 + 50;
let ballSpeedX = 2, ballSpeedY = 2;
let ballRadius = 20;
let triangleX = 60, triangleY = 350, jump = false, onGround = true;
let boxColor = "blue";
let ballColor = "red";
let boxClicked = false;

function moveBox(direction) {
    if (direction === "ArrowUp" && boxY > 0) boxY -= speed;
    if (direction === "ArrowDown" && boxY < canvas.height - 100) boxY += speed;
    if (direction === "ArrowLeft" && boxX > 0) boxX -= speed;
    if (direction === "ArrowRight" && boxX < canvas.width - 100) boxX += speed;
}

function moveTriangle(direction) {
    if (direction === "left" && triangleX > 20) { // Trojuholník nesmie ísť za ľavý okraj
        triangleX -= speed;
    } else if (direction === "right" && triangleX < canvas.width - 20) { // Trojuholník nesmie ísť za pravý okraj
        triangleX += speed;
    }
}

document.addEventListener("keydown", (event) => {
    moveBox(event.key);
});

document.getElementById("left").addEventListener("click", () => moveBox("ArrowLeft"));
document.getElementById("right").addEventListener("click", () => moveBox("ArrowRight"));
document.getElementById("up").addEventListener("click", () => moveBox("ArrowUp"));
document.getElementById("down").addEventListener("click", () => moveBox("ArrowDown"));

document.getElementById("triangleLeft").addEventListener("click", () => moveTriangle("left"));
document.getElementById("triangleRight").addEventListener("click", () => moveTriangle("right"));

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && onGround) {
        jump = true;
        onGround = false;
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballX <= ballRadius || ballX >= canvas.width - ballRadius) ballSpeedX *= -1;
    if (ballY <= ballRadius || ballY >= canvas.height - ballRadius) ballSpeedY *= -1;

    ctx.fillStyle = ballColor;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = boxColor;
    ctx.fillRect(boxX, boxY, 100, 100);

    if (
        boxX < ballX + ballRadius &&
        boxX + 100 > ballX - ballRadius &&
        boxY < ballY + ballRadius &&
        boxY + 100 > ballY - ballRadius
    ) {
        boxColor = "red";
    } else if (!boxClicked) {
        boxColor = "blue";
    }

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(triangleX, triangleY);
    ctx.lineTo(triangleX - 20, triangleY + 30);
    ctx.lineTo(triangleX + 20, triangleY + 30);
    ctx.closePath();
    ctx.fill();

    if (jump) {
        triangleY -= 5;
        if (triangleY <= 250) {
            jump = false;
        }
    } else if (!onGround) {
        triangleY += 5;
        if (triangleY >= 350) {
            triangleY = 350;
            onGround = true;
        }
    }

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(`Box: (${boxX}, ${boxY})`, 10, 20);
    ctx.fillText(`Ball: (${Math.floor(ballX)}, ${Math.floor(ballY)})`, 10, 40);

    requestAnimationFrame(animate);
}

canvas.addEventListener("click", (event) => {
    let rect = canvas.getBoundingClientRect();
    let clickX = event.clientX - rect.left;
    let clickY = event.clientY - rect.top;
    let dx = clickX - ballX;
    let dy = clickY - ballY;
    if (Math.sqrt(dx * dx + dy * dy) < ballRadius) {
        ballColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    } else if (
        clickX >= boxX && clickX <= boxX + 100 &&
        clickY >= boxY && clickY <= boxY + 100
    ) {
        boxColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        boxClicked = true;
    }
});

animate();
