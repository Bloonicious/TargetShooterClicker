// Define variables for weapons, points, and upgrades
let touchGunCost = 100;
let touchGunPointsPerClick = 1;
let touchGunLevel = 0;

let pistolCost = 10;
let pistolPointsPerShot = 1;
let pistolFireRate = 1000; // in milliseconds
let pistolFirerateUpgradeCost = 50;
let pistolPotencyUpgradeCost = 100;
let pistolFirerateLevel = 0;
let pistolPotencyLevel = 0;

let smgCost = 100;
let smgPointsPerShot = 1;
let smgFireRate = 200; // in milliseconds
let smgFirerateUpgradeCost = 750;
let smgPotencyUpgradeCost = 1500;
let smgFirerateLevel = 0;
let smgPotencyLevel = 0;

let shotgunCost = 500;
let shotgunPointsPerShot = 4;
let shotgunFireRate = 1500; // in milliseconds
let shotgunMultiFireUpgradeCost = 25000;
let shotgunFirerateUpgradeCost = 5000;
let shotgunPotencyUpgradeCost = 12500;
let shotgunBulletsPerShot = 3; // Initial bullets per shot
let shotgunFirerateLevel = 0;
let shotgunPotencyLevel = 0;
let shotgunMultiFireLevel = 0;

let points = 0;
let pistolPurchased = false;
let smgPurchased = false;
let shotgunPurchased = false;
let lastPistolPointsTime = 0;
let lastSMGPointsTime = 0;
let lastShotgunPointsTime = 0;

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
                touchGunLevel++; // Increment Touch Gun level
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
            purchaseUpgrade('pistolFirerate', pistolFirerateLevel, pistolFirerateUpgradeCost, 2, -100, 'firerate');
            break;
        case 'pistolPotency':
            purchaseUpgrade('pistolPotency', pistolPotencyLevel, pistolPotencyUpgradeCost, 1.5, 1, 'potency');
            break;
        case 'smgFirerate':
            purchaseUpgrade('smgFirerate', smgFirerateLevel, smgFirerateUpgradeCost, 2, -25, 'firerate');
            break;
        case 'smgPotency':
            purchaseUpgrade('smgPotency', smgPotencyLevel, smgPotencyUpgradeCost, 1.5, 1, 'potency');
            break;
        case 'shotgunFirerate':
            purchaseUpgrade('shotgunFirerate', shotgunFirerateLevel, shotgunFirerateUpgradeCost, 2, -100, 'firerate');
            break;
        case 'shotgunPotency':
            purchaseUpgrade('shotgunPotency', shotgunPotencyLevel, shotgunPotencyUpgradeCost, 1.5, 4, 'potency');
            break;
        case 'shotgunMultiFire':
            purchaseUpgrade('shotgunMultiFire', shotgunMultiFireLevel, shotgunMultiFireUpgradeCost, 5, 1, 'multiFire');
            break;
        default:
            console.error("Invalid item:", item);
    }
}

function purchaseUpgrade(upgradeType, level, cost, costMultiplier, valueIncrement, upgradeCategory) {
    if (points >= cost) {
        points -= cost;
        cost *= costMultiplier; // Update cost for next upgrade
        if (upgradeCategory === 'firerate') {
            pistolFireRate += valueIncrement;
            smgFireRate += valueIncrement;
            shotgunFireRate += valueIncrement;
        } else if (upgradeCategory === 'potency') {
            pistolPointsPerShot += valueIncrement;
            smgPointsPerShot += valueIncrement;
            shotgunPointsPerShot += valueIncrement;
        } else if (upgradeCategory === 'multiFire') {
            shotgunBulletsPerShot += valueIncrement;
        }
        level++; // Increment level
        // Update the global variable with the new level
        switch (upgradeType) {
            case 'pistolFirerate':
                pistolFirerateLevel = level;
                break;
            case 'pistolPotency':
                pistolPotencyLevel = level;
                break;
            case 'smgFirerate':
                smgFirerateLevel = level;
                break;
            case 'smgPotency':
                smgPotencyLevel = level;
                break;
            case 'shotgunFirerate':
                shotgunFirerateLevel = level;
                break;
            case 'shotgunPotency':
                shotgunPotencyLevel = level;
                break;
            case 'shotgunMultiFire':
                shotgunMultiFireLevel = level;
                break;
            default:
                console.error("Invalid upgradeType:", upgradeType);
        }
        updatePointsDisplay();
    } else {
        alert(`Not enough points to upgrade ${upgradeType}!`);
    }
    updateCostDisplay();
}

// Function to update weapon and upgrade costs in the HTML
function updateCostDisplay() {
    document.getElementById('touchGun-cost').textContent = touchGunCost;
    document.getElementById('touchGun-level').textContent = touchGunLevel;
    document.getElementById('pistol-cost').textContent = pistolCost;
    document.getElementById('pistolFirerate-cost').textContent = pistolFirerateUpgradeCost;
    document.getElementById('pistolPotency-cost').textContent = pistolPotencyUpgradeCost;
    document.getElementById('pistolFirerate-level').textContent = pistolFirerateLevel;
    document.getElementById('pistolPotency-level').textContent = pistolPotencyLevel;
    document.getElementById('smg-cost').textContent = smgCost;
    document.getElementById('smgFirerate-cost').textContent = smgFirerateUpgradeCost;
    document.getElementById('smgPotency-cost').textContent = smgPotencyUpgradeCost;
    document.getElementById('smgFirerate-level').textContent = smgFirerateLevel;
    document.getElementById('smgPotency-level').textContent = smgPotencyLevel;
    document.getElementById('shotgun-cost').textContent = shotgunCost;
    document.getElementById('shotgunFirerate-cost').textContent = shotgunFirerateUpgradeCost;
    document.getElementById('shotgunPotency-cost').textContent = shotgunPotencyUpgradeCost;
    document.getElementById('shotgunMultiFire-cost').textContent = shotgunMultiFireUpgradeCost;
    document.getElementById('shotgunFirerate-level').textContent = shotgunFirerateLevel;
    document.getElementById('shotgunPotency-level').textContent = shotgunPotencyLevel;
    document.getElementById('shotgunMultiFire-level').textContent = shotgunMultiFireLevel;
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
