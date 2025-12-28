const statusEl = document.getElementById('status');

let idleTimer;

// Function to set status
function setStatus(online) {
    if (online) {
        statusEl.textContent = "Online";
        statusEl.style.color = "limegreen";
    } else {
        statusEl.textContent = "Offline";
        statusEl.style.color = "red";
    }
}

// User is active
function userActive() {
    setStatus(true);

    // Clear previous timer
    clearTimeout(idleTimer);

    // If no activity for 1 minute, set offline
    idleTimer = setTimeout(() => setStatus(false), 60000);
}

// Listen for activity
window.addEventListener('mousemove', userActive);
window.addEventListener('keydown', userActive);
window.addEventListener('touchstart', userActive); // for mobile

// Start as online
userActive();
