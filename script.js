const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

let confettiElements = [];
let confettiColors = ["#ff0", "#f00", "#0f0", "#00f", "#f0f", "#0ff", "#fff"];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createConfetti() {
    for (let i = 0; i < 200; i++) {
        confettiElements.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 5 + 5,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 3 + 1,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        });
    }
}

// Function to show the pop-up
window.onload = function() {
    setTimeout(function() {
        document.getElementById("popup").style.visibility = "visible";
    }, 2000); // Show the pop-up after 2 seconds
};

// Hide the pop-up when the button is clicked
document.getElementById("popupButton").addEventListener("click", function() {
    document.getElementById("popup").style.visibility = "hidden";
    window.location.href = "testimonials.html"; // Redirect to the next page
});

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiElements.forEach((confetti) => {
        ctx.beginPath();
        ctx.arc(confetti.x, confetti.y, confetti.size, 0, Math.PI * 2);
        ctx.fillStyle = confetti.color;
        ctx.fill();

        // Update confetti position
        confetti.x += confetti.speedX;
        confetti.y += confetti.speedY;

        // Respawn confetti if it falls off screen
        if (confetti.y > canvas.height) {
            confetti.y = -10;
            confetti.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
createConfetti();
drawConfetti();
