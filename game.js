// Define variables for weapons and points
let touchGunCost = 10;
let touchGunPointsPerClick = 1;
let pistolCost = 10;
let pistolPointsPerShot = 1;
let pistolFireRate = 1000; // in milliseconds
let smgCost = 100;
let smgPointsPerShot = 1;
let smgFireRate = 200; // in milliseconds
let points = 0;

// Function to update points display
function updatePointsDisplay() {
    document.getElementById('score-value').textContent = points;
}

// Function to handle clicking the earn points button
function earnPoints() {
    points++;
    updatePointsDisplay();
}

// Function to handle purchasing a weapon
function purchaseWeapon(weaponType) {
    switch (weaponType) {
        case 'touchGun':
            if (points >= touchGunCost) {
                points -= touchGunCost;
                touchGunCost *= 2; // Increase cost for next purchase
                updatePointsDisplay();
            } else {
                alert("Not enough points to purchase Touch Gun!");
            }
            break;
        case 'pistol':
            if (points >= pistolCost) {
                points -= pistolCost;
                pistolCost *= 2; // Increase cost for next purchase
                updatePointsDisplay();
            } else {
                alert("Not enough points to purchase Pistol!");
            }
            break;
        case 'smg':
            if (points >= smgCost) {
                points -= smgCost;
                smgCost *= 2; // Increase cost for next purchase
                updatePointsDisplay();
            } else {
                alert("Not enough points to purchase SMG!");
            }
            break;
        default:
            console.error("Invalid weapon type:", weaponType);
    }
}

// Start earning points automatically
setInterval(earnPoints, 1000); // 1000ms = 1 second

// Update points display initially
updatePointsDisplay();
