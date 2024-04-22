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
let shotgunCost = 500;
let shotgunPointsPerShot = 4;
let shotgunFireRate = 1500; // in milliseconds
let shotgunMultiFireUpgradeCost = 25000;
let shotgunFirerateUpgradeCost = 5000;
let shotgunPotencyUpgradeCost = 12500;
let shotgunBulletsPerShot = 3; // Initial bullets per shot
let points = 0;
let pistolPurchased = false;
let smgPurchased = false;
let lastPistolPointsTime = 0;
let lastSMGPointsTime = 0;

// Function to update points display
function updatePointsDisplay() {
    document.getElementById('score-value').textContent = points;
}

// Function to handle clicking the earn points button
function earnPoints() {
    points += touchGunPointsPerClick; // Increment points based on Touch Gun
    updatePointsDisplay();
}

// Function to handle automatic points generation for purchased weapons
function automaticPointsGeneration() {
    if (pistolPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastPistolPointsTime >= pistolFireRate) {
                points += pistolPointsPerShot;
                updatePointsDisplay();
                lastPistolPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (smgPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastSMGPointsTime >= smgFireRate) {
                points += smgPointsPerShot;
                updatePointsDisplay();
                lastSMGPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (shotgunPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastShotgunPointsTime >= shotgunFireRate) {
                points += shotgunPointsPerShot * shotgunBulletsPerShot; // Multiply points by number of bullets
                updatePointsDisplay();
                lastShotgunPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
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
                updateCostDisplay();
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
                updateCostDisplay();
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
                updateCostDisplay();
            } else if (smgPurchased) {
                alert("SMG has already been purchased!");
            } else {
                alert("Not enough points to purchase SMG!");
            }
            break;
        case 'shotgun':
            if (!shotgunPurchased && points >= shotgunCost) {
                points -= shotgunCost;
                shotgunCost *= 2; // Double cost for next purchase
                shotgunPurchased = true; // Mark as purchased
                document.getElementById('shotgun-purchase').style.display = 'none'; // Hide purchase button
                updatePointsDisplay();
                updateCostDisplay();
            } else if (shotgunPurchased) {
                alert("Shotgun has already been purchased!");
            } else {
                alert("Not enough points to purchase Shotgun!");
            }
            break;
        case 'pistolFirerate':
            if (points >= pistolFirerateUpgradeCost) {
                points -= pistolFirerateUpgradeCost;
                pistolFirerateUpgradeCost *= 2; // Double cost for next upgrade
                pistolFireRate -= 100; // Decrease fire rate by 100ms
                updatePointsDisplay();
                updateCostDisplay();
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
                updateCostDisplay();
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
                updateCostDisplay();
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
                updateCostDisplay();
            } else {
                alert("Not enough points to upgrade SMG's potency!");
            }
            break;
        case 'shotgunFirerate':
            if (points >= shotgunFirerateUpgradeCost) {
                points -= shotgunFirerateUpgradeCost;
                shotgunFirerateUpgradeCost *= 2; // Double cost for next upgrade
                shotgunFireRate -= 100; // Decrease fire rate by 100ms
                updatePointsDisplay();
                updateCostDisplay();
            } else {
                alert("Not enough points to upgrade Shotgun's firerate!");
            }
            break;
        case 'shotgunPotency':
            if (points >= shotgunPotencyUpgradeCost) {
                points -= shotgunPotencyUpgradeCost;
                shotgunPotencyUpgradeCost *= 1.5; // Increase cost by 50% for next upgrade
                shotgunPointsPerShot += 4; // Increase points per shot
                updatePointsDisplay();
                updateCostDisplay();
            } else {
                alert("Not enough points to upgrade Shotgun's potency!");
            }
            break;
        case 'shotgunMultiFire':
            if (points >= shotgunMultiFireUpgradeCost) {
                points -= shotgunMultiFireUpgradeCost;
                shotgunMultiFireUpgradeCost *= 5; // Increase cost by 5 times for next upgrade
                shotgunBulletsPerShot++; // Increase number of bullets per shot
                updatePointsDisplay();
                updateCostDisplay();
            } else {
                alert("Not enough points to upgrade MultiFire!");
            }
            break;
        default:
            console.error("Invalid item:", item);
    }
}

// Function to update weapon and upgrade costs in the HTML
function updateCostDisplay() {
    document.getElementById('touchGun-cost').textContent = touchGunCost;
    document.getElementById('pistol-cost').textContent = pistolCost;
    document.getElementById('pistolFirerate-cost').textContent = pistolFirerateUpgradeCost;
    document.getElementById('pistolPotency-cost').textContent = pistolPotencyUpgradeCost;
    document.getElementById('smg-cost').textContent = smgCost;
    document.getElementById('smgFirerate-cost').textContent = smgFirerateUpgradeCost;
    document.getElementById('smgPotency-cost').textContent = smgPotencyUpgradeCost;
    document.getElementById('shotgun-cost').textContent = shotgunCost;
    document.getElementById('shotgunFirerate-cost').textContent = shotgunFirerateUpgradeCost;
    document.getElementById('shotgunPotency-cost').textContent = shotgunPotencyUpgradeCost;
    document.getElementById('shotgunMultiFire-cost').textContent = shotgunMultiFireUpgradeCost;
}

function shoot() {
    // Calculate points based on the selected weapon's fire rate
    let pointsPerShot;
    if (pistolPurchased) {
        pointsPerShot = pistolPointsPerShot;
    } else if (smgPurchased) {
        pointsPerShot = smgPointsPerShot;
    } else {
        // If no weapon is purchased, do nothing
        return;
    }

    // Generate points and display them as floating text
    const floatingText = document.createElement('div');
    floatingText.textContent = '+' + pointsPerShot;
    floatingText.classList.add('floating-text');

    // Randomize position above the target
    const target = document.getElementById('target');
    const targetRect = target.getBoundingClientRect();
    const randomX = targetRect.left + Math.random() * targetRect.width;
    const randomY = targetRect.top + Math.random() * targetRect.height;
    floatingText.style.left = randomX + 'px';
    floatingText.style.top = randomY + 'px';

    // Append the floating text to the container
    const floatingTextContainer = document.getElementById('floating-text-container');
    floatingTextContainer.appendChild(floatingText);

    // Remove the floating text after a short delay
    setTimeout(() => {
        floatingText.remove();
    }, 1000); // Adjust the delay as needed

    // Increment the total points
    points += pointsPerShot;
    updatePointsDisplay();
}

// Update points and cost display initially
updatePointsDisplay();
updateCostDisplay();

// Start earning points automatically for purchased weapons
setInterval(automaticPointsGeneration, 1000); // Check every second for points generation
