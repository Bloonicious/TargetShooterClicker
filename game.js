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

let sniperRifleCost = 7500;
let sniperRiflePointsPerShot = 80;
let sniperRifleFireRate = 4000; // in milliseconds
let sniperRifleFirerateUpgradeCost = 50000;
let sniperRiflePotencyUpgradeCost = 100000;
let sniperRifleCriticalShotUpgradeCost = 75000;
let sniperRifleCriticalDamageUpgradeCost = 250000;
let sniperRifleCriticalShotChance = 0.25; // 25% chance for a "Critical Shot" for increased points
let sniperRifleCriticalDamageMultiplier = 2.0; // The amount of extra points yielded from a "Critical Shot"
let sniperRifleCriticalShotValueIncrement = 0.02; // Increases the chance to trigger a "Critical Shot" by 2%
let sniperRifleCriticalDamageValueIncrement = 0.2; // Increases the point multiplier gained from crits by x0.2
let sniperRifleFirerateLevel = 0;
let sniperRiflePotencyLevel = 0;
let sniperRifleCriticalShotLevel = 0;
let sniperRifleCriticalDamageLevel = 0;

let points = 0;
let pistolPurchased = false;
let smgPurchased = false;
let shotgunPurchased = false;
let sniperRiflePurchased = false;
let lastPistolPointsTime = 0;
let lastSMGPointsTime = 0;
let lastShotgunPointsTime = 0;
let lastSniperRiflePointsTime = 0;

let pistolSFX, smgSFX, shotgunSFX, sniperRifleSFX; // Declare variables for storing sound effects
let numberFormat = 'standard'; // Default number format

// Function to update points display
function updatePointsDisplay() {
    document.getElementById('score-value').textContent = formatNumber(points);
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
                playWeaponSoundEffect(pistolSFX); // Play pistol sound effect
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
                playWeaponSoundEffect(smgSFX); // Play SMG sound effect
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
                playWeaponSoundEffect(shotgunSFX); // Play shotgun sound effect
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (sniperRiflePurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastSniperRiflePointsTime >= sniperRifleFireRate) {
                // Check for critical hit
                const criticalChance = Math.random() * 100; // Generate random number between 0 and 100
                if (criticalChance <= sniperRifleCriticalShotChance) {
                    points += sniperRiflePointsPerShot * sniperRifleCriticalDamageMultiplier;
                } else {
                    points += sniperRiflePointsPerShot;
                }
                updatePointsDisplay();
                lastSniperRiflePointsTime = currentTime;
                playWeaponSoundEffect(sniperRifleSFX); // Play sniper rifle sound effect
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
        case 'sniperRifle':
           if (!sniperRiflePurchased && points >= sniperRifleCost) {
               points -= sniperRifleCost;
               sniperRiflePurchased = true; // Mark as purchased
               document.getElementById('sniper-rifle-purchase').style.display = 'none'; // Hide purchase button
               updatePointsDisplay();
               updateCostDisplay();
           } else if (sniperRiflePurchased) {
               alert("Sniper Rifle has already been purchased!");
           } else {
               alert("Not enough points to purchase Sniper Rifle!");
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
        case 'sniperRifleFirerate':
            purchaseUpgrade('sniperRifleFirerate', sniperRifleFirerateLevel, sniperRifleFirerateUpgradeCost, 2, -2000, 'firerate');
            break;
        case 'sniperRiflePotency':
            purchaseUpgrade('sniperRiflePotency', sniperRiflePotencyLevel, sniperRiflePotencyUpgradeCost, 1.5, 80, 'potency');
            break;
        case 'sniperRifleCriticalShot':
            purchaseUpgrade('sniperRifleCriticalShot', sniperRifleCriticalShotLevel, sniperRifleCriticalShotUpgradeCost, 3, 0.02, 'criticalShotChance');
            break;
        case 'sniperRifleCriticalDamage':
            purchaseUpgrade('sniperRifleCriticalDamage', sniperRifleCriticalDamageLevel, sniperRifleCriticalDamageUpgradeCost, 2.5, 0.2, 'criticalDamage');
            break;
        default:
            console.error("Invalid item:", item);
    }
}

function purchaseUpgrade(upgradeType, level, cost, costMultiplier, valueIncrement, upgradeCategory) {
    if (points >= cost) {
        points -= cost;
        cost *= costMultiplier; // Update cost for next upgrade
        // Update the global variable with the new cost for the next upgrade
        switch (upgradeType) {
            case 'pistolFirerate':
                pistolFirerateUpgradeCost = cost;
                break;
            case 'pistolPotency':
                pistolPotencyUpgradeCost = cost;
                break;
            case 'smgFirerate':
                smgFirerateUpgradeCost = cost;
                break;
            case 'smgPotency':
                smgPotencyUpgradeCost = cost;
                break;
            case 'shotgunFirerate':
                shotgunFirerateUpgradeCost = cost;
                break;
            case 'shotgunPotency':
                shotgunPotencyUpgradeCost = cost;
                break;
            case 'shotgunMultiFire':
                shotgunMultiFireUpgradeCost = cost;
                break;
            case 'sniperRifleFirerate':
                sniperRifleFirerateUpgradeCost = cost;
                break;
            case 'sniperRiflePotency':
                sniperRiflePotencyUpgradeCost = cost;
                break;
            case 'sniperRifleCriticalShot':
                sniperRifleCriticalShotUpgradeCost = cost;
                break;
            case 'sniperRifleCriticalDamage':
                sniperRifleCriticalDamageUpgradeCost = cost;
                break;
            default:
                console.error("Invalid upgradeType:", upgradeType);
        }
        if (upgradeCategory === 'firerate') {
            switch (upgradeType) {
                case 'pistolFirerate':
                    pistolFireRate += valueIncrement;
                    break;
                case 'smgFirerate':
                    smgFireRate += valueIncrement;
                    break;
                case 'shotgunFirerate':
                    shotgunFireRate += valueIncrement;
                    break;
                case 'sniperRifleFirerate':
                    sniperRifleFireRate += valueIncrement;
                    break;
                default:
                    console.error("Invalid upgradeType for firerate:", upgradeType);
            }
        } else if (upgradeCategory === 'potency') {
            switch (upgradeType) {
                case 'pistolPotency':
                    pistolPointsPerShot += valueIncrement;
                    break;
                case 'smgPotency':
                    smgPointsPerShot += valueIncrement;
                    break;
                case 'shotgunPotency':
                    shotgunPointsPerShot += valueIncrement;
                    break;
                case 'sniperRiflePotency':
                    sniperRiflePointsPerShot += valueIncrement;
                    break;
                default:
                    console.error("Invalid upgradeType for potency:", upgradeType);
            }
        } else if (upgradeCategory === 'multiFire') {
            if (upgradeType === 'shotgunMultiFire') {
                shotgunBulletsPerShot += valueIncrement;
            } else {
                console.error("Invalid upgradeType for multiFire:", upgradeType);
            }
        } else if (upgradeCategory === 'criticalShotChance') {
            if (upgradeType === 'sniperRifleCriticalShot') {
                sniperRifleCriticalShotChance += valueIncrement;
            } else {
                console.error("Invalid upgradeType for criticalShotChance:", upgradeType);
            }
        } else if (upgradeCategory === 'criticalDamage') {
            if (upgradeType === 'sniperRifleCriticalDamage') {
                sniperRifleCriticalDamageMultiplier += valueIncrement;
            } else {
                console.error("Invalid upgradeType for criticalDamage:", upgradeType);
            }
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
            case 'sniperRifleFirerate':
                sniperRifleFirerateLevel = level;
                break;
            case 'sniperRiflePotency':
                sniperRiflePotencyLevel = level;
                break;
            case 'sniperRifleCriticalShot':
                sniperRifleCriticalShotLevel = level;
                break;
            case 'sniperRifleCriticalDamage':
                sniperRifleCriticalDamageLevel = level;
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
    document.getElementById('touchGun-cost').textContent = formatNumber(touchGunCost);
    document.getElementById('touchGun-level').textContent = touchGunLevel;
    document.getElementById('pistol-cost').textContent = formatNumber(pistolCost);
    document.getElementById('pistolFirerate-cost').textContent = formatNumber(pistolFirerateUpgradeCost);
    document.getElementById('pistolPotency-cost').textContent = formatNumber(pistolPotencyUpgradeCost);
    document.getElementById('pistolFirerate-level').textContent = pistolFirerateLevel;
    document.getElementById('pistolPotency-level').textContent = pistolPotencyLevel;
    document.getElementById('smg-cost').textContent = formatNumber(smgCost);
    document.getElementById('smgFirerate-cost').textContent = formatNumber(smgFirerateUpgradeCost);
    document.getElementById('smgPotency-cost').textContent = formatNumber(smgPotencyUpgradeCost);
    document.getElementById('smgFirerate-level').textContent = smgFirerateLevel;
    document.getElementById('smgPotency-level').textContent = smgPotencyLevel;
    document.getElementById('shotgun-cost').textContent = formatNumber(shotgunCost);
    document.getElementById('shotgunFirerate-cost').textContent = formatNumber(shotgunFirerateUpgradeCost);
    document.getElementById('shotgunPotency-cost').textContent = formatNumber(shotgunPotencyUpgradeCost);
    document.getElementById('shotgunMultiFire-cost').textContent = formatNumber(shotgunMultiFireUpgradeCost);
    document.getElementById('shotgunFirerate-level').textContent = shotgunFirerateLevel;
    document.getElementById('shotgunPotency-level').textContent = shotgunPotencyLevel;
    document.getElementById('shotgunMultiFire-level').textContent = shotgunMultiFireLevel;
    document.getElementById('sniperRifle-cost').textContent = formatNumber(sniperRifleCost);
    document.getElementById('sniperRifleFirerate-cost').textContent = formatNumber(sniperRifleFirerateUpgradeCost);
    document.getElementById('sniperRiflePotency-cost').textContent = formatNumber(sniperRiflePotencyUpgradeCost);
    document.getElementById('sniperRifleCriticalShot-cost').textContent = formatNumber(sniperRifleCriticalShotUpgradeCost);
    document.getElementById('sniperRifleCriticalDamage-cost').textContent = formatNumber(sniperRifleCriticalDamageUpgradeCost);
    document.getElementById('sniperRifleFirerate-level').textContent = sniperRifleFirerateLevel;
    document.getElementById('sniperRiflePotency-level').textContent = sniperRiflePotencyLevel;
    document.getElementById('sniperRifleCriticalShot-level').textContent = sniperRifleCriticalShotLevel;
    document.getElementById('sniperRifleCriticalDamage-level').textContent = sniperRifleCriticalDamageLevel;
}

// Function to format numbers into units
function formatNumber(number) {
    if (number === 0) return '0';
    
    if (numberFormat === 'standard') {
        const suffixes = ['', 'k', 'M', 'B', 'T', 'Qd', 'Qn', 'Sx', 'Sp', 'O', 'N', 'Dc'];
        const suffixIndex = Math.floor(Math.log10(number) / 3);
        const suffix = suffixes[suffixIndex];
        const scaledNumber = number / Math.pow(10, suffixIndex * 3);
        return scaledNumber.toFixed(3) + ' ' + suffix;
    } else if (numberFormat === 'scientific') {
        if (number < 1000) {
            // Display numbers less than 1000 without scientific notation
            return number.toLocaleString();
        } else if (number < 1000000000000000) {
            // Display numbers between 1000 and 1 quadrillion in scientific notation with commas for thousands
            return number.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            // Display numbers greater than or equal to 1 quadrillion in scientific notation
            return number.toExponential(3);
        }
    } else if (numberFormat === 'long') {
        const longSuffixes = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion', ' decillion'];
        const longSuffixIndex = Math.floor(Math.log10(number) / 3);
        const longSuffix = longSuffixes[longSuffixIndex];
        const longScaledNumber = number / Math.pow(10, longSuffixIndex * 3);
        return longScaledNumber.toFixed(3) + longSuffix;
    } else {
        console.error("Invalid numberFormat:", numberFormat);
        return 'ERROR';
    }
}

// Function to initialize sound effects
function initializeSoundEffects() {
    // Load or create SFX IDs for each weapon
    pistolSFX = new Audio('sfx/pistol.wav');
    smgSFX = new Audio('sfx/smg.wav');
    shotgunSFX = new Audio('sfx/shotgun.wav');
    sniperRifleSFX = new Audio('sfx/sniper.wav');
}

// Function to play sound effect for a specific weapon
function playWeaponSoundEffect(weaponSFX) {
    if (soundEnabled) {
        weaponSFX.play();
    }
}

function shoot() {
    // Calculate points based on the selected weapon's fire rate
    let pointsPerShot;
    let critical = false;
    
    if (pistolPurchased) {
        pointsPerShot = pistolPointsPerShot;
    } else if (smgPurchased) {
        pointsPerShot = smgPointsPerShot;
    } else if (shotgunPurchased) {
        pointsPerShot = shotgunPointsPerShot;
    } else if (sniperRiflePurchased) {
        // For sniper rifle, check for critical shot
        const criticalChance = Math.random() * 100; // Generate random number for critical chance
        if (criticalChance <= sniperRifleCriticalShotLevel) {
            // Critical shot
            pointsPerShot = sniperRiflePointsPerShot * sniperRifleCriticalDamageLevel;
            critical = true;
        } else {
            pointsPerShot = sniperRiflePointsPerShot;
        }
    } else {
        // If no weapon is purchased, do nothing
        return;
    }

    // Generate points and display them as floating text
    const floatingText = document.createElement('div');
    floatingText.textContent = '+' + pointsPerShot;
    floatingText.classList.add('floating-text');
    
    // Set text color based on critical status
    if (critical) {
        floatingText.style.color = 'red';
        floatingText.textContent += ' Crit!';
    }

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
