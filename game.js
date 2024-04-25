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
let smgFirerateUpgradeCost = 600;
let smgPotencyUpgradeCost = 1200;
let smgFirerateLevel = 0;
let smgPotencyLevel = 0;

let shotgunCost = 500;
let shotgunPointsPerShot = 4;
let shotgunFireRate = 1500; // in milliseconds
let shotgunMultiFireUpgradeCost = 25000;
let shotgunFirerateUpgradeCost = 5000;
let shotgunPotencyUpgradeCost = 10000;
let shotgunBulletsPerShot = 3; // Initial bullets per shot
let shotgunFirerateLevel = 0;
let shotgunPotencyLevel = 0;
let shotgunMultiFireLevel = 0;

let sniperRifleCost = 7500;
let sniperRiflePointsPerShot = 80;
let sniperRifleFireRate = 4000; // in milliseconds
let sniperRifleFirerateUpgradeCost = 37500;
let sniperRiflePotencyUpgradeCost = 75000;
let sniperRifleCriticalShotUpgradeCost = 750000;
let sniperRifleCriticalDamageUpgradeCost = 250000;
let sniperRifleCriticalShotChance = 25; // 25% chance for a "Critical Shot" for increased points
let sniperRifleCriticalDamageMultiplier = 2.0; // The amount of extra points yielded from a "Critical Shot"
let sniperRifleCriticalShotValueIncrement = 0.02; // Increases the chance to trigger a "Critical Shot" by 2%
let sniperRifleCriticalDamageValueIncrement = 0.2; // Increases the point multiplier gained from crits by x0.2
let sniperRifleFirerateLevel = 0;
let sniperRiflePotencyLevel = 0;
let sniperRifleCriticalShotLevel = 0;
let sniperRifleCriticalDamageLevel = 0;

let ak47Cost = 60000;
let ak47PointsPerShot = 150;
let ak47FireRate = 500; // in milliseconds
let ak47FirerateUpgradeCost = 175000;
let ak47PotencyUpgradeCost = 250000;
let ak47FirerateLevel = 0;
let ak47PotencyLevel = 0;

let rocketLauncherCost = 400000;
let rocketLauncherPointsPerShot = 1000;
let rocketLauncherFireRate = 5000; // in milliseconds
let rocketLauncherSplashRadius = 3;
let rocketLauncherSplashDamage = 0.4;
let rocketLauncherFirerateUpgradeCost = 1000000;
let rocketLauncherPotencyUpgradeCost = 750000;
let rocketLauncherSplashRadiusUpgradeCost = 10000000;
let rocketLauncherSplashDamageUpgradeCost = 5000000;
let rocketLauncherFirerateLevel = 0;
let rocketLauncherPotencyLevel = 0;
let rocketLauncherSplashRadiusLevel = 0;
let rocketLauncherSplashDamageLevel = 0;

let tommyGunCost = 2500000;
let tommyGunPointsPerShot = 600;
let tommyGunFireRate = 150; // in milliseconds
let tommyGunInaccuracyChance = 50; // 50% chance to not successfully hit a target; ineffective shot
let tommyGunAccuracyPenalty = 0.5; // 50% less points for inaccurate shots
let tommyGunFirerateUpgradeCost = 15000000;
let tommyGunPotencyUpgradeCost = 10000000;
let tommyGunAccuracyUpgradeCost = 20000000;
let tommyGunFirerateLevel = 0;
let tommyGunPotencyLevel = 0;
let tommyGunAccuracyLevel = 0;

let points = 0;
let numberFormat = 'standard'; // Default number format

let pistolPurchased = false;
let smgPurchased = false;
let shotgunPurchased = false;
let sniperRiflePurchased = false;
let ak47Purchased = false;
let rocketLauncherPurchased = false;
let tommyGunPurchased = false;

let lastPistolPointsTime = 0;
let lastSMGPointsTime = 0;
let lastShotgunPointsTime = 0;
let lastSniperRiflePointsTime = 0;
let lastAK47PointsTime = 0;
let lastRocketLauncherPointsTime = 0;
let lastTommyGunPointsTime = 0;

const weaponSFX = {};
const upgrades = {
    pistol: {
        biggerBullets: {
            cost: 1000,
            effect: function() {
                pistolPointsPerShot *= 2; // Doubles the amount of points per shot
            }
        },
        largerCalibre: {
            cost: 500000,
            effect: function() {
                pistolPointsPerShot *= 3; // Triples the amount of points per shot
            }
        },
        // Add more upgrades for pistol here
    },
    smg: {
        betterSpread: {
            cost: 10000,
            effect: function() {
                smgPointsPerShot *= 2;
            }
        },
        strongHold: {
            cost: 3000000,
            effect: function() {
                smgPointsPerShot *= 3;
            }
        },
        // Add more upgrades for smg here
    },
    shotgun: {
        moreBarrels: {
            cost: 100000,
            effect: function() {
                shotgunBulletsPerShot += 2; // Increases the number of barrels by 2
            }
        },
        powerfulBurst: {
            cost: 15000000,
            effect: function() {
                shotgunPointsPerShot *= 2;
            }
        },
        // Add more upgrades for shotgun here
    },
    sniperRifle: {
        deadlyPrecision: {
            cost: 2000000,
            effect: function() {
                sniperRifleCriticalDamageMultiplier += 1; // Increases the critical damage multiplier by 1
            }
        },
        // Add more upgrades for sniperRifle here
    },
    ak47: {
        heatTippedBullets: {
            cost: 15000000,
            effect: function() {
                ak47PointsPerShot *= 2;
            }
        },
        // Add more upgrades for ak47 here
    }
    // Add more weapons and upgrades as needed
};

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
                // Calculate points per shot
                let pointsPerShot = pistolPointsPerShot;
                shoot('pistol', pointsPerShot, false);
                lastPistolPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (smgPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastSMGPointsTime >= smgFireRate) {
                // Calculate points per shot
                let pointsPerShot = smgPointsPerShot;
                shoot('smg', pointsPerShot, false);
                lastSMGPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (shotgunPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastShotgunPointsTime >= shotgunFireRate) {
                // Calculate points per shot
                let pointsPerShot = shotgunPointsPerShot * shotgunBulletsPerShot;
                shoot('shotgun', pointsPerShot, false);
                lastShotgunPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (sniperRiflePurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastSniperRiflePointsTime >= sniperRifleFireRate) {
                // Calculate points per shot
                let pointsPerShot = sniperRiflePointsPerShot;
                let critical = false;

                // For sniper rifle, check for critical hit
                const criticalChance = Math.min(100, 25 + sniperRifleCriticalShotLevel * 2);
                if (criticalChance >= Math.random() * 100) {
                    // Critical shot
                    pointsPerShot *= sniperRifleCriticalDamageMultiplier;
                    critical = true;
                }
                shoot('sniperRifle', pointsPerShot, critical);
                lastSniperRiflePointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (ak47Purchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastAK47PointsTime >= ak47FireRate) {
                // Calculate points per shot
                let pointsPerShot = ak47PointsPerShot;
                shoot('ak47', pointsPerShot, false);
                lastAK47PointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (rocketLauncherPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastRocketLauncherPointsTime >= rocketLauncherFireRate) {
                // Calculate points per shot
                let pointsPerShot = rocketLauncherPointsPerShot;
                shoot('rocketLauncher', pointsPerShot, false);
                lastRocketLauncherPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (tommyGunPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastTommyGunPointsTime >= tommyGunFireRate) {
                // Calculate points per shot
                let pointsPerShot = tommyGunPointsPerShot;
                // Apply inaccuracy
                if (Math.random() < tommyGunInaccuracyChance) {
                    pointsPerShot *= tommyGunAccuracyPenalty; // 50% less points for inaccurate shots
                }
                shoot('tommyGun', pointsPerShot, false);
                lastTommyGunPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
}

// Function to handle purchasing weapons and upgrades
function purchase(item) {
    switch (item) {
        case 'touchGun':
            purchaseUpgrade('touchGun', touchGunLevel, touchGunCost, 2, 1, 'touchGun');
            break;
        case 'pistol':
            if (!pistolPurchased) {
                purchaseWeapon('pistol', pistolCost);
            } else {
                alert("Pistol has already been purchased!");
            }
            break;
        case 'smg':
            if (!smgPurchased) {
                purchaseWeapon('smg', smgCost);
            } else {
                alert("SMG has already been purchased!");
            }
            break;
        case 'shotgun':
            if (!shotgunPurchased) {
                purchaseWeapon('shotgun', shotgunCost);
            } else {
                alert("Shotgun has already been purchased!");
            }
            break;
        case 'sniperRifle':
            if (!sniperRiflePurchased) {
                purchaseWeapon('sniperRifle', sniperRifleCost);
            } else {
                alert("Sniper Rifle has already been purchased!");
            }
            break;
        case 'ak47':
            if (!ak47Purchased) {
                purchaseWeapon('ak47', ak47Cost);
            } else {
                alert("AK-47 has already been purchased!");
            }
            break;
        case 'rocketLauncher':
            if (!rocketLauncherPurchased) {
                purchaseWeapon('rocketLauncher', rocketLauncherCost);
            } else {
                alert("Rocket Launcher has already been purchased!");
            }
            break;
        case 'tommyGun':
            if (!tommyGunPurchased) {
                purchaseWeapon('tommyGun', tommyGunCost);
            } else {
                alert("Tommy Gun has already been purchased!");
            }
            break;
        case 'pistolFirerate':
            purchaseUpgrade('pistolFirerate', pistolFirerateLevel, pistolFirerateUpgradeCost, 1.8, -25, 'firerate');
            break;
        case 'pistolPotency':
            purchaseUpgrade('pistolPotency', pistolPotencyLevel, pistolPotencyUpgradeCost, 1.4, 1, 'potency');
            break;
        case 'smgFirerate':
            purchaseUpgrade('smgFirerate', smgFirerateLevel, smgFirerateUpgradeCost, 2.2, -10, 'firerate');
            break;
        case 'smgPotency':
            purchaseUpgrade('smgPotency', smgPotencyLevel, smgPotencyUpgradeCost, 1.4, 1, 'potency');
            break;
        case 'shotgunFirerate':
            purchaseUpgrade('shotgunFirerate', shotgunFirerateLevel, shotgunFirerateUpgradeCost, 2, -50, 'firerate');
            break;
        case 'shotgunPotency':
            purchaseUpgrade('shotgunPotency', shotgunPotencyLevel, shotgunPotencyUpgradeCost, 1.4, 4, 'potency');
            break;
        case 'shotgunMultiFire':
            purchaseUpgrade('shotgunMultiFire', shotgunMultiFireLevel, shotgunMultiFireUpgradeCost, 5, 1, 'multiFire');
            break;
        case 'sniperRifleFirerate':
            purchaseUpgrade('sniperRifleFirerate', sniperRifleFirerateLevel, sniperRifleFirerateUpgradeCost, 2, -200, 'firerate');
            break;
        case 'sniperRiflePotency':
            purchaseUpgrade('sniperRiflePotency', sniperRiflePotencyLevel, sniperRiflePotencyUpgradeCost, 1.4, 80, 'potency');
            break;
        case 'sniperRifleCriticalShot':
            purchaseUpgrade('sniperRifleCriticalShot', sniperRifleCriticalShotLevel, sniperRifleCriticalShotUpgradeCost, 3, 2, 'criticalShotChance');
            break;
        case 'sniperRifleCriticalDamage':
            purchaseUpgrade('sniperRifleCriticalDamage', sniperRifleCriticalDamageLevel, sniperRifleCriticalDamageUpgradeCost, 2.5, 0.2, 'criticalDamage');
            break;
        case 'ak47Firerate':
            purchaseUpgrade('ak47Firerate', ak47FirerateLevel, ak47FirerateUpgradeCost, 1.8, -20, 'firerate');
            break;
        case 'ak47Potency':
            purchaseUpgrade('ak47Potency', ak47PotencyLevel, ak47PotencyUpgradeCost, 1.4, 150, 'potency');
            break;
        case 'rocketLauncherFirerate':
            purchaseUpgrade('rocketLauncherFirerate', rocketLauncherFirerateLevel, rocketLauncherFirerateUpgradeCost, 2, -200, 'firerate');
            break;
        case 'rocketLauncherPotency':
            purchaseUpgrade('rocketLauncherPotency', rocketLauncherPotencyLevel, rocketLauncherPotencyUpgradeCost, 1.4, 1000, 'potency');
            break;
        case 'tommyGunFirerate':
            purchaseUpgrade('tommyGunFirerate', tommyGunFirerateLevel, tommyGunFirerateUpgradeCost, 2.2, -5, 'firerate');
            break;
        case 'tommyGunPotency':
            purchaseUpgrade('tommyGunPotency', tommyGunPotencyLevel, tommyGunPotencyUpgradeCost, 1.4, 600, 'potency');
            break;
        case 'tommyGunAccuracy':
            purchaseUpgrade('tommyGunAccuracy', tommyGunAccuracyLevel, tommyGunAccuracyUpgradeCost, 2.5, 2, 'accuracy');
            break;
        default:
            console.error("Invalid item:", item);
    }
}

// Function to purchase a weapon
function purchaseWeapon(weapon, cost) {
    if (points >= cost) {
        points -= cost;
        switch (weapon) {
            case 'pistol':
                pistolCost *= 2;
                pistolPurchased = true;
                break;
            case 'smg':
                smgCost *= 2;
                smgPurchased = true;
                break;
            case 'shotgun':
                shotgunCost *= 2;
                shotgunPurchased = true;
                break;
            case 'sniperRifle':
                sniperRifleCost *= 2;
                sniperRiflePurchased = true;
                break;
            case 'ak47':
                ak47Cost *= 2;
                ak47Purchased = true;
                break;
            case 'rocketLauncher':
                rocketLauncherCost *= 2;
                rocketLauncherPurchased = true;
                break;
            case 'tommyGun':
                tommyGunCost *= 2;
                tommyGunPurchased = true;
                break;
            default:
                console.error("Invalid weapon:", weapon);
        }
        document.getElementById(`${weapon}-purchase`).style.display = 'none';
        updatePointsDisplay();
        updateCostDisplay();
    } else {
        alert(`Not enough points to purchase ${weapon}!`);
    }
}

// Function to purchase an upgrade
function purchaseUpgrade(upgradeType, level, cost, costMultiplier, valueIncrement, upgradeCategory) {
    if (points >= cost) {
        points -= cost;
        cost *= costMultiplier;
        level++;
        switch (upgradeType) {
            case 'touchGun':
                touchGunCost = cost;
                touchGunLevel = level;
                touchGunPointsPerClick += valueIncrement;
                break;
            case 'pistolFirerate':
                if (level <= 20) {
                    pistolFirerateUpgradeCost = cost;
                    pistolFirerateLevel = level;
                    pistolFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for pistol fire rate upgrade.");
                    alert("Pistol's firing rate has been maxed out!");
                }
                break;
            case 'pistolPotency':
                pistolPotencyUpgradeCost = cost;
                pistolPotencyLevel = level;
                if (upgrades.pistol.biggerBullets.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if biggerBullets upgrade is purchased
                }
                if (upgrades.pistol.largerCalibre.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if largerCalibre upgrade is purchased
                }
                pistolPointsPerShot += valueIncrement;
                break;
            case 'smgFirerate':
                if (level <= 10) {
                    smgFirerateUpgradeCost = cost;
                    smgFirerateLevel = level;
                    smgFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for smg fire rate upgrade.");
                    alert("SMG's firing rate has been maxed out!");
                }
                break;
            case 'smgPotency':
                smgPotencyUpgradeCost = cost;
                smgPotencyLevel = level;
                if (upgrades.smg.betterSpread.bought) {
                    valueIncrement *= 2; // Set valueIncrement to 2 if betterSpread upgrade is purchased
                }
                if (upgrades.smg.strongHold.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if strongHold upgrade is purchased
                }
                smgPointsPerShot += valueIncrement;
                break;
            case 'shotgunFirerate':
                if (level <= 15) {
                    shotgunFirerateUpgradeCost = cost;
                    shotgunFirerateLevel = level;
                    shotgunFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for shotgun fire rate upgrade.");
                    alert("Shotgun's firing rate has been maxed out!");
                }
                break;
            case 'shotgunPotency':
                shotgunPotencyUpgradeCost = cost;
                shotgunPotencyLevel = level;
                if (upgrades.shotgun.powerfulBurst.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if powerfulBurst upgrade is purchased
                }
                shotgunPointsPerShot += valueIncrement;
                break;
            case 'shotgunMultiFire':
                shotgunMultiFireUpgradeCost = cost;
                shotgunMultiFireLevel = level;
                shotgunBulletsPerShot += valueIncrement;
                break;
            case 'sniperRifleFirerate':
                if (level <= 10) {
                    sniperRifleFirerateUpgradeCost = cost;
                    sniperRifleFirerateLevel = level;
                    sniperRifleFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for sniper rifle fire rate upgrade.");
                    alert("Sniper Rifle's firing rate has been maxed out!");
                }
                break;
            case 'sniperRiflePotency':
                sniperRiflePotencyUpgradeCost = cost;
                sniperRiflePotencyLevel = level;
                sniperRiflePointsPerShot += valueIncrement;
                break;
            case 'sniperRifleCriticalShot':
                sniperRifleCriticalShotUpgradeCost = cost;
                sniperRifleCriticalShotLevel = level;
                sniperRifleCriticalShotChance += valueIncrement;
                break;
            case 'sniperRifleCriticalDamage':
                sniperRifleCriticalDamageUpgradeCost = cost;
                sniperRifleCriticalDamageLevel = level;
                sniperRifleCriticalDamageMultiplier += valueIncrement;
                break;
            case 'ak47Firerate':
                if (level <= 15) {
                    ak47FirerateUpgradeCost = cost;
                    ak47FirerateLevel = level;
                    ak47FireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for ak47 fire rate upgrade.");
                    alert("AK-47's firing rate has been maxed out!");
                }
                break;
            case 'ak47Potency':
                ak47PotencyUpgradeCost = cost;
                ak47PotencyLevel = level;
                if (upgrades.ak47.heatTippedBullets.bought) {
                    valueIncrement *= 2; // Set valueIncrement to 2 if heatTippedBullets upgrade is purchased
                }
                ak47PointsPerShot += valueIncrement;
                break;
            case 'rocketLauncherFirerate':
                if (level <= 15) {
                    rocketLauncherFirerateUpgradeCost = cost;
                    rocketLauncherFirerateLevel = level;
                    rocketLauncherFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for rocket launcher fire rate upgrade.");
                    alert("Rocket Launcher's firing rate has been maxed out!");
                }
                break;
            case 'rocketLauncherPotency':
                rocketLauncherPotencyUpgradeCost = cost;
                rocketLauncherPotencyLevel = level;
                rocketLauncherPointsPerShot += valueIncrement;
                break;
            case 'tommyGunFirerate':
                if (level <= 20) {
                    tommyGunFirerateUpgradeCost = cost;
                    tommyGunFirerateLevel = level;
                    tommyGunFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for tommy gun fire rate upgrade.");
                    alert("Tommy Gun's firing rate has been maxed out!");
                }
                break;
            case 'tommyGunPotency':
                tommyGunPotencyUpgradeCost = cost;
                tommyGunPotencyLevel = level;
                tommyGunPointsPerShot += valueIncrement;
                break;
            case 'tommyGunAccuracy':
                tommyGunAccuracyUpgradeCost = cost;
                tommyGunAccuracyLevel = level;
                tommyGunInaccuracyChance -= valueIncrement;
                break;
            default:
                console.error("Invalid upgradeType:", upgradeType);
        }
        updatePointsDisplay();
        updateCostDisplay();
    } else {
        alert(`Not enough points to upgrade ${upgradeType}!`);
    }
}

function bigUpgrades(weapon, upgrade, cost) {
    // Retrieve upgrade data based on weapon and upgrade
    const upgradeData = upgrades[weapon][upgrade];

    // Find the upgrade option element based on class name
    const upgradeOption = document.querySelector(`.upgrade-option#${weapon}-${upgrade}`);
    if (!upgradeOption) {
        console.error(`Upgrade option ${weapon}-${upgrade} not found.`);
        return;
    }

    // Check if the upgrade is already bought
    if (upgradeData.bought) {
        alert(`${upgrade} already bought!`);
        return; // Exit the function if the upgrade is already bought
    }

    // Check if the player has enough points to purchase the upgrade
    if (points >= cost) {
        // Deduct the cost of the upgrade from the player's points
        points -= cost;

        // Apply the upgrade effect
        upgradeData.effect();

        // Update points display after purchasing the upgrade
        updatePointsDisplay();

        // Mark the upgrade as bought to prevent re-purchasing
        upgradeData.bought = true;

        // Update the cost display to indicate "Bought!" and format the cost
        const costDisplay = upgradeOption.querySelector('.upgrade-cost');
        if (costDisplay) {
            costDisplay.textContent = "Bought!";
        }

        // Remove the display: none style to make the upgrade option visible again
        upgradeOption.style.display = '';

        // Move the upgrade option to the "bought" subtab
        const boughtSubtab = document.getElementById('bought-upgrades');
        if (boughtSubtab) {
            // Remove the upgrade option from its current parent
            upgradeOption.parentNode.removeChild(upgradeOption);
            // Add the upgrade option to the "bought" subtab
            boughtSubtab.appendChild(upgradeOption);
        }
    } else {
        // Player doesn't have enough points to purchase the upgrade
        console.log("Insufficient points to purchase the upgrade.");
        alert(`You don't have enough points to purchase ${upgrade}!`);
    }
}

// Function to update weapon and upgrade costs in the HTML
function updateCostDisplay() {
    const pistolFirerateValue = pistolFireRate; // Convert fire rate to milliseconds
    const pistolPotencyValue = pistolPointsPerShot; // No need for calculations, potency is already in points per shot
    const smgFirerateValue = smgFireRate;
    const smgPotencyValue = smgPointsPerShot;
    const shotgunFirerateValue = shotgunFireRate;
    const shotgunPotencyValue = shotgunPointsPerShot;
    const shotgunMultiFireValue = shotgunBulletsPerShot;
    const sniperRifleFirerateValue = sniperRifleFireRate;
    const sniperRiflePotencyValue = sniperRiflePointsPerShot;
    const sniperRifleCriticalChanceValue = sniperRifleCriticalShotChance;
    const sniperRifleCriticalDamageValue = sniperRifleCriticalDamageMultiplier;
    const ak47FirerateValue = ak47FireRate;
    const ak47PotencyValue = ak47PointsPerShot;
    
    document.getElementById('touchGun-cost').textContent = formatNumber(touchGunCost);
    document.getElementById('touchGun-level').textContent = touchGunLevel;
    document.getElementById('touchGun-points-per-click').textContent = touchGunPointsPerClick;
    
    document.getElementById('pistol-cost').textContent = formatNumber(pistolCost);
    document.getElementById('pistolFirerate-cost').textContent = formatNumber(pistolFirerateUpgradeCost);
    document.getElementById('pistolPotency-cost').textContent = formatNumber(pistolPotencyUpgradeCost);
    document.getElementById('pistolFirerate-level').textContent = pistolFirerateLevel;
    document.getElementById('pistolPotency-level').textContent = pistolPotencyLevel;
    document.getElementById('pistolFirerate-value').textContent = pistolFirerateValue + 'ms';
    document.getElementById('pistolPotency-value').textContent = formatNumber(pistolPotencyValue);
    
    document.getElementById('smg-cost').textContent = formatNumber(smgCost);
    document.getElementById('smgFirerate-cost').textContent = formatNumber(smgFirerateUpgradeCost);
    document.getElementById('smgPotency-cost').textContent = formatNumber(smgPotencyUpgradeCost);
    document.getElementById('smgFirerate-level').textContent = smgFirerateLevel;
    document.getElementById('smgPotency-level').textContent = smgPotencyLevel;
    document.getElementById('smgFirerate-value').textContent = smgFirerateValue + 'ms';
    document.getElementById('smgPotency-value').textContent = formatNumber(smgPotencyValue);
    
    document.getElementById('shotgun-cost').textContent = formatNumber(shotgunCost);
    document.getElementById('shotgunFirerate-cost').textContent = formatNumber(shotgunFirerateUpgradeCost);
    document.getElementById('shotgunPotency-cost').textContent = formatNumber(shotgunPotencyUpgradeCost);
    document.getElementById('shotgunMultiFire-cost').textContent = formatNumber(shotgunMultiFireUpgradeCost);
    document.getElementById('shotgunFirerate-level').textContent = shotgunFirerateLevel;
    document.getElementById('shotgunPotency-level').textContent = shotgunPotencyLevel;
    document.getElementById('shotgunMultiFire-level').textContent = shotgunMultiFireLevel;
    document.getElementById('shotgunFirerate-value').textContent = shotgunFirerateValue + 'ms';
    document.getElementById('shotgunPotency-value').textContent = formatNumber(shotgunPotencyValue);
    document.getElementById('shotgunMultiFire-value').textContent = shotgunMultiFireValue;
    
    document.getElementById('sniperRifle-cost').textContent = formatNumber(sniperRifleCost);
    document.getElementById('sniperRifleFirerate-cost').textContent = formatNumber(sniperRifleFirerateUpgradeCost);
    document.getElementById('sniperRiflePotency-cost').textContent = formatNumber(sniperRiflePotencyUpgradeCost);
    document.getElementById('sniperRifleCriticalShot-cost').textContent = formatNumber(sniperRifleCriticalShotUpgradeCost);
    document.getElementById('sniperRifleCriticalDamage-cost').textContent = formatNumber(sniperRifleCriticalDamageUpgradeCost);
    document.getElementById('sniperRifleFirerate-level').textContent = sniperRifleFirerateLevel;
    document.getElementById('sniperRiflePotency-level').textContent = sniperRiflePotencyLevel;
    document.getElementById('sniperRifleCriticalShot-level').textContent = sniperRifleCriticalShotLevel;
    document.getElementById('sniperRifleCriticalDamage-level').textContent = sniperRifleCriticalDamageLevel;
    document.getElementById('sniperRifleFirerate-value').textContent = sniperRifleFirerateValue + 'ms';
    document.getElementById('sniperRiflePotency-value').textContent = formatNumber(sniperRiflePotencyValue);
    document.getElementById('sniperRifleCriticalChance-value').textContent = sniperRifleCriticalChanceValue;
    document.getElementById('sniperRifleCriticalDamage-value').textContent = sniperRifleCriticalDamageValue;

    document.getElementById('ak47-cost').textContent = formatNumber(ak47Cost);
    document.getElementById('ak47Firerate-cost').textContent = formatNumber(ak47FirerateUpgradeCost);
    document.getElementById('ak47Potency-cost').textContent = formatNumber(ak47PotencyUpgradeCost);
    document.getElementById('ak47Firerate-level').textContent = ak47FirerateLevel;
    document.getElementById('ak47Potency-level').textContent = ak47PotencyLevel;
    document.getElementById('ak47Firerate-value').textContent = ak47FirerateValue + 'ms';
    document.getElementById('ak47Potency-value').textContent = formatNumber(ak47PotencyValue);

    document.getElementById('rocketLauncher-cost').textContent = formatNumber(rocketLauncherCost);
    document.getElementById('rocketLauncherFirerate-cost').textContent = formatNumber(rocketLauncherFirerateUpgradeCost);
    document.getElementById('rocketLauncherPotency-cost').textContent = formatNumber(rocketLauncherPotencyUpgradeCost);
    document.getElementById('rocketLauncherFirerate-level').textContent = rocketLauncherFirerateLevel;
    document.getElementById('rocketLauncherPotency-level').textContent = rocketLauncherPotencyLevel;
    document.getElementById('rocketLauncherFirerate-value').textContent = rocketLauncherFirerateValue + 'ms';
    document.getElementById('rocketLauncherPotency-value').textContent = formatNumber(rocketLauncherPotencyValue);

    document.getElementById('tommyGun-cost').textContent = formatNumber(tommyGunCost);
    document.getElementById('tommyGunFirerate-cost').textContent = formatNumber(tommyGunFirerateUpgradeCost);
    document.getElementById('tommyGunPotency-cost').textContent = formatNumber(tommyGunPotencyUpgradeCost);
    document.getElementById('tommyGunFirerate-level').textContent = tommyGunFirerateLevel;
    document.getElementById('tommyGunPotency-level').textContent = tommyGunPotencyLevel;
    document.getElementById('tommyGunFirerate-value').textContent = tommyGunFirerateValue + 'ms';
    document.getElementById('tommyGunPotency-value').textContent = formatNumber(tommyGunPotencyValue);

    // Check if fire rate level is at maximum for each weapon
    if (pistolFirerateLevel === 20) {
        const pistolFirerateLevelDisplay = document.getElementById('pistolFirerate-level');
        if (pistolFirerateLevelDisplay) {
            pistolFirerateLevelDisplay.textContent = "Max";
        }
        const pistolFirerateCostDisplay = document.getElementById('pistolFirerate-cost');
        if (pistolFirerateCostDisplay) {
            pistolFirerateCostDisplay.textContent = "MAX";
        }
    }
    if (smgFirerateLevel === 10) {
        const smgFirerateLevelDisplay = document.getElementById('smgFirerate-level');
        if (smgFirerateLevelDisplay) {
            smgFirerateLevelDisplay.textContent = "Max";
        }
        const smgFirerateCostDisplay = document.getElementById('smgFirerate-cost');
        if (smgFirerateCostDisplay) {
            smgFirerateCostDisplay.textContent = "MAX";
        }
    }
    if (shotgunFirerateLevel === 15) {
        const shotgunFirerateLevelDisplay = document.getElementById('shotgunFirerate-level');
        if (shotgunFirerateLevelDisplay) {
            shotgunFirerateLevelDisplay.textContent = "Max";
        }
        const shotgunFirerateCostDisplay = document.getElementById('shotgunFirerate-cost');
        if (shotgunFirerateCostDisplay) {
            shotgunFirerateCostDisplay.textContent = "MAX";
        }
    }
    if (sniperRifleFirerateLevel === 10) {
        const sniperRifleFirerateLevelDisplay = document.getElementById('sniperRifleFirerate-level');
        if (sniperRifleFirerateLevelDisplay) {
            sniperRifleFirerateLevelDisplay.textContent = "Max";
        }
        const sniperRifleFirerateCostDisplay = document.getElementById('sniperRifleFirerate-cost');
        if (sniperRifleFirerateCostDisplay) {
            sniperRifleFirerateCostDisplay.textContent = "MAX";
        }
    }
    if (ak47FirerateLevel === 15) {
        const ak47FirerateLevelDisplay = document.getElementById('ak47Firerate-level');
        if (ak47FirerateLevelDisplay) {
            ak47FirerateLevelDisplay.textContent = "Max";
        }
        const ak47FirerateCostDisplay = document.getElementById('ak47Firerate-cost');
        if (ak47FirerateCostDisplay) {
            ak47FirerateCostDisplay.textContent = "MAX";
        }
    }
    if (rocketLauncherFirerateLevel === 15) {
        const rocketLauncherFirerateLevelDisplay = document.getElementById('rocketLauncherFirerate-level');
        if (rocketLauncherFirerateLevelDisplay) {
            rocketLauncherFirerateLevelDisplay.textContent = "Max";
        }
        const rocketLauncherFirerateCostDisplay = document.getElementById('rocketLauncherFirerate-cost');
        if (rocketLauncherFirerateCostDisplay) {
            rocketLauncherFirerateCostDisplay.textContent = "MAX";
        }
    }
    if (tommyGunFirerateLevel === 20) {
        const tommyGunFirerateLevelDisplay = document.getElementById('tommyGunFirerate-level');
        if (tommyGunFirerateLevelDisplay) {
            tommyGunFirerateLevelDisplay.textContent = "Max";
        }
        const tommyGunFirerateCostDisplay = document.getElementById('tommyGunFirerate-cost');
        if (tommyGunFirerateCostDisplay) {
            tommyGunFirerateCostDisplay.textContent = "MAX";
        }
    }
}

// Function to format numbers into units
function formatNumber(number) {
    if (number === 0) return '0';
    
    if (numberFormat === 'standard') {
        const suffixes = ['', 'k', 'M', 'B', 'T', 'Qd', 'Qn', 'Sx', 'Sp', 'O', 'N', 'Dc', 'UD', 'DD', 'TD', 'QdD', 'QQD', 'SxD', 'SpD', 'OcD', 'NoD', 'Vg', 'UV', 'DV'];
        const suffixIndex = Math.floor(Math.log10(number) / 3);
        const suffix = suffixes[suffixIndex];
        const scaledNumber = number / Math.pow(10, suffixIndex * 3);
        return scaledNumber.toFixed(3) + '' + suffix;
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
        const longSuffixes = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion', ' decillion', ' undecillion', ' duodecillion', ' tredecillion', ' quattuordecillion', ' quindecillion', ' sexdecillion', 'septendecillion', ' octodecillion', ' novemdecillion', ' vigintillion', ' unvigintillion', ' duovigintillion'];
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
    weaponSFX.pistol = new Audio('sfx/pistol.wav');
    weaponSFX.smg = new Audio('sfx/smg.wav');
    weaponSFX.shotgun = new Audio('sfx/shotgun.wav');
    weaponSFX.sniperRifle = new Audio('sfx/sniper.wav');
    weaponSFX.ak47 = new Audio('sfx/ak47.wav');
    weaponSFX.rocketLauncher = new Audio('sfx/bazooka.wav');
    weaponSFX.tommyGun = new Audio('sfx/smg.wav');
}

// Function to play sound effect for a specific weapon
function playWeaponSoundEffect(weaponId) {
    try {
        if (soundEnabled && weaponSFX.hasOwnProperty(weaponId)) {
            weaponSFX[weaponId].play();
        }
    } catch (error) {
        console.error('Error playing sound effect:', error);
    }
}

function shoot(weaponId, pointsPerShot, critical) {
    // Generate points and display them as floating text
    const floatingText = document.createElement('div');
    floatingText.textContent = '+' + pointsPerShot;
    floatingText.classList.add('floating-text');

    // Set text color based on critical status
    if (critical) {
        floatingText.classList.add('critical'); // Add critical class for critical hits
        floatingText.textContent += ' Crit!';
    }

    // Get the target element based on the weaponId
    const targetId = weaponId + '-target';
    const target = document.getElementById(targetId);

    if (!target) {
        // If target element doesn't exist, do nothing
        return;
    }

    // Calculate position at the center of the target
    const targetRect = target.getBoundingClientRect();
    const centerX = targetRect.left + targetRect.width / 2;
    const centerY = targetRect.top + targetRect.height / 2;

    // Set floating text position
    floatingText.style.left = centerX + 'px';
    floatingText.style.top = centerY + 'px';

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

    // Play sound effect based on weapon type
    switch (weaponId) {
        case 'pistol':
            playWeaponSoundEffect('pistol');
            break;
        case 'smg':
            playWeaponSoundEffect('smg');
            break;
        case 'shotgun':
            playWeaponSoundEffect('shotgun');
            break;
        case 'sniperRifle':
            playWeaponSoundEffect('sniperRifle');
            break;
        case 'ak47':
            playWeaponSoundEffect('ak47');
            break;
        case 'rocketLauncher':
            playWeaponSoundEffect('rocketLauncher');
            break;
        case 'tommyGun':
            playWeaponSoundEffect('tommyGun');
            break;
        default:
            break;
    }
}

// Update points and cost display initially
updatePointsDisplay();
updateCostDisplay();

// Start earning points automatically for purchased weapons
setInterval(automaticPointsGeneration, 1000); // Check every second for points generation
