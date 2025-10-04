const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move "No" button when hovered or tapped
function moveButton() {
    const padding = 50; // keep inside screen
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth - padding));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight - padding));

    noBtn.style.position = "absolute";
    noBtn.style.transition = "all 0.3s ease"; // smooth move
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveButton); // desktop
noBtn.addEventListener("click", moveButton);     // mobile tap

// Yes button action
yesBtn.addEventListener("click", () => {
    // instead of alert, show a cute popup message
    const msg = document.createElement("div");
    msg.classList.add("popup");
    msg.innerHTML = "Yay! ❤️ Thank you my love, you mean the world to me 💕🥰";

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 3000); // disappear after 3s
});

