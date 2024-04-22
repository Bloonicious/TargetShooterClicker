// Define variables for weapons, points, and upgrades
let touchGunCost = 100;
let touchGunPointsPerClick = 1;
let pistolCost = 50;
let pistolPointsPerShot = 1;
let pistolFireRate = 1000; // in milliseconds
let pistolFirerateUpgradeCost = 50;
let pistolPotencyUpgradeCost = 100;
let smgCost = 750;
let smgPointsPerShot = 1;
let smgFireRate = 200; // in milliseconds
let smgFirerateUpgradeCost = 750;
let smgPotencyUpgradeCost = 1500;
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

// Function to handle purchasing weapons and upgrades
function purchase(item) {
    switch (item) {
        case 'touchGun':
            if (points >= touchGunCost) {
                points -= touchGunCost;
                touchGunCost *= 2; // Double cost for next purchase
                touchGunPointsPerClick++; // Increase points per click
                updatePointsDisplay();
            } else {
                alert("Not enough points to purchase Touch Gun!");
            }
            break;
        case 'pistolFirerate':
            if (points >= pistolFirerateUpgradeCost) {
                points -= pistolFirerateUpgradeCost;
                pistolFirerateUpgradeCost *= 2; // Double cost for next upgrade
                pistolFireRate -= 100; // Decrease fire rate by 100ms
                updatePointsDisplay();
            } else {
                alert("Not enough points to upgrade Pistol's firerate!");
            }
            break;
        case 'pistolPotency':
            if (points >= pistolPotencyUpgradeCost) {
                points -= pistolPotencyUpgradeCost;
                pistolPotencyUpgradeCost *= 1.5; // Increase cost by 50% for next upgrade
                pistolPointsPerShot++; // Increase points per shot
                updatePointsDisplay();
            } else {
                alert("Not enough points to upgrade Pistol's potency!");
            }
            break;
        case 'smgFirerate':
            if (points >= smgFirerateUpgradeCost) {
                points -= smgFirerateUpgradeCost;
                smgFirerateUpgradeCost *= 2; // Double cost for next upgrade
                smgFireRate -= 25; // Decrease fire rate by 25ms
                updatePointsDisplay();
            } else {
                alert("Not enough points to upgrade SMG's firerate!");
            }
            break;
        case 'smgPotency':
            if (points >= smgPotencyUpgradeCost) {
                points -= smgPotencyUpgradeCost;
                smgPotencyUpgradeCost *= 1.5; // Increase cost by 50% for next upgrade
                smgPointsPerShot++; // Increase points per shot
                updatePointsDisplay();
            } else {
                alert("Not enough points to upgrade SMG's potency!");
            }
            break;
        default:
            console.error("Invalid item:", item);
    }
}

// Start earning points automatically
setInterval(earnPoints, 1000); // 1000ms = 1 second

// Update points display initially
updatePointsDisplay();
