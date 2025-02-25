
console.log("opicka");

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("medved");
    button.addEventListener("click", function() {
        button.innerText = "Tlačidlo bolo kliknuté!";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("ivo");
    button.addEventListener("click", function() {
document.body.style.backgroundColor = "lightblue";
});
});

const form = document.getElementById('userForm');
const usernameInput = document.getElementById('username');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
    if (usernameInput.value.trim() === "") {
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
    }
});