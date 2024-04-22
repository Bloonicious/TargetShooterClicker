// Define variables for weapons, points, and upgrades
let touchGunCost = 100;
let touchGunPointsPerClick = 1;
let pistolCost = 10;
let pistolPointsPerShot = 1;
let pistolFireRate = 1000; // in milliseconds
let pistolFirerateUpgradeCost = 50;
let pistolPotencyUpgradeCost = 100;
let smgCost = 100;
let smgPointsPerShot = 1;
let smgFireRate = 200; // in milliseconds
let smgFirerateUpgradeCost = 750;
let smgPotencyUpgradeCost = 1500;
let points = 0;
let pistolPurchased = false;
let smgPurchased = false;

// Function to update points display
function updatePointsDisplay() {
    document.getElementById('score-value').textContent = points;
}

// Function to handle clicking the earn points button
function earnPoints() {
    points += touchGunPointsPerClick; // Increment points based on Touch Gun
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
        case 'pistol':
            if (!pistolPurchased && points >= pistolCost) {
                points -= pistolCost;
                pistolCost *= 2; // Double cost for next purchase
                pistolPurchased = true; // Mark as purchased
                document.getElementById('pistol-purchase').style.display = 'none'; // Hide purchase button
                updatePointsDisplay();
            } else if (pistolPurchased) {
                alert("Pistol has already been purchased!");
            } else {
                alert("Not enough points to purchase Pistol!");
            }
            break;
        case 'smg':
            if (!smgPurchased && points >= smgCost) {
                points -= smgCost;
                smgCost *= 2; // Double cost for next purchase
                smgPurchased = true; // Mark as purchased
                document.getElementById('smg-purchase').style.display = 'none'; // Hide purchase button
                updatePointsDisplay();
            } else if (smgPurchased) {
                alert("SMG has already been purchased!");
            } else {
                alert("Not enough points to purchase SMG!");
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

// Update points display initially
updatePointsDisplay();
