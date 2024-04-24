// Define function to switch tabs
function switchTab(tabName) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';
}

// Add event listeners to tab buttons
document.addEventListener('DOMContentLoaded', function() {
    // Switch to the "Main" tab when the page is loaded
    switchTab('main');

    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});

// Function to switch between Buy and Bought subtabs
function switchSubtab(subtabName) {
    // Hide all subtabs
    var subtabs = document.querySelectorAll('.subtab');
    subtabs.forEach(function(subtab) {
        subtab.style.display = 'none';
    });

    // Show the selected subtab
    var selectedSubtab = document.getElementById(subtabName + '-upgrades');
    if (selectedSubtab) {
        selectedSubtab.style.display = 'block';
    }
}

// Call switchSubtab() when the page loads to display the default subtab
document.addEventListener('DOMContentLoaded', function() {
    switchSubtab('buy');
});

let soundEnabled = true; // Ensure sound is enabled by default

function toggleSound() {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        // Play a sound effect
        playSoundEffect();
    }
}

// Adjust the setNumberFormat function to update the display without modifying the game state
function setNumberFormat(selectedFormat) {
    if (selectedFormat && selectedFormat.value) {
        // Update the display based on the selected format
        const formatValue = selectedFormat.value;
        const numberElements = document.querySelectorAll('.number-format');
        numberElements.forEach(function(element) {
            element.textContent = formatNumber(parseFloat(element.textContent), formatValue);
        });
    }
}

// Function to get IDs of purchased big upgrades
function getPurchasedBigUpgrades() {
    const purchasedBigUpgrades = [];
    // Loop through the big upgrades and check if they are bought
    for (const weapon in upgrades) {
        for (const upgrade in upgrades[weapon]) {
            if (upgrades[weapon][upgrade].bought) {
                // Construct the ID and add it to the list
                purchasedBigUpgrades.push(`${weapon}-${upgrade}`);
            }
        }
    }
    return purchasedBigUpgrades;
}

// Function to load purchased big upgrades from IDs
function loadPurchasedBigUpgrades(purchasedBigUpgradeIds) {
    purchasedBigUpgradeIds.forEach(bigUpgradeId => {
        const upgradeOption = document.getElementById(bigUpgradeId);
        if (upgradeOption) {
            // Update the display and move to "Bought" subtab
            const boughtSubtab = document.getElementById('bought-upgrades');
            if (boughtSubtab) {
                // Remove the upgrade option from its current parent
                upgradeOption.parentNode.removeChild(upgradeOption);
                // Remove the display: none style to make the upgrade option visible again
                upgradeOption.style.display = '';
                // Add the upgrade option to the "bought" subtab
                boughtSubtab.appendChild(upgradeOption);
                // Update the cost display to indicate "Bought!"
                const costDisplay = upgradeOption.querySelector('.upgrade-cost');
                if (costDisplay) {
                    costDisplay.textContent = "Bought!";
                }
            }
        }
    });
}

// Function to save the game state to local storage
function saveGameState() {
    var gameState = {
        score: points,
        touchGunCost: touchGunCost,
        touchGunPointsPerClick: touchGunPointsPerClick,
        touchGunLevel: touchGunLevel,
        
        numberFormat: numberFormat, // Add the selected number format to the game state

        // Add big upgrade data for each weapon
        pistolBiggerBulletsBought: upgrades.pistol.biggerBullets.bought,
        pistolLargerCalibreBought: upgrades.pistol.largerCalibre.bought,
        smgBetterSpreadBought: upgrades.smg.betterSpread.bought,
        shotgunMoreBarrelsBought: upgrades.shotgun.moreBarrels.bought,
        sniperRifleDeadlyPrecisionBought: upgrades.sniperRifle.deadlyPrecision.bought,
        ak47HeatTippedBulletsBought: upgrades.ak47.heatTippedBullets.bought,
        
        pistolPurchased: pistolPurchased,
        pistolPointsPerShot: pistolPointsPerShot,
        pistolFireRate: pistolFireRate,
        pistolFirerateUpgradeCost: pistolFirerateUpgradeCost,
        pistolPotencyUpgradeCost: pistolPotencyUpgradeCost,
        pistolFirerateLevel: pistolFirerateLevel,
        pistolPotencyLevel: pistolPotencyLevel,
        
        smgPurchased: smgPurchased,
        smgPointsPerShot: smgPointsPerShot,
        smgFireRate: smgFireRate,
        smgFirerateUpgradeCost: smgFirerateUpgradeCost,
        smgPotencyUpgradeCost: smgPotencyUpgradeCost,
        smgFirerateLevel: smgFirerateLevel,
        smgPotencyLevel: smgPotencyLevel,
        
        shotgunPurchased: shotgunPurchased,
        shotgunPointsPerShot: shotgunPointsPerShot,
        shotgunFireRate: shotgunFireRate,
        shotgunBulletsPerShot: shotgunBulletsPerShot,
        shotgunFirerateUpgradeCost: shotgunFirerateUpgradeCost,
        shotgunPotencyUpgradeCost: shotgunPotencyUpgradeCost,
        shotgunMultiFireUpgradeCost: shotgunMultiFireUpgradeCost,
        shotgunFirerateLevel: shotgunFirerateLevel,
        shotgunPotencyLevel: shotgunPotencyLevel,
        shotgunMultiFireLevel: shotgunMultiFireLevel,
        
        sniperRiflePurchased: sniperRiflePurchased,
        sniperRiflePointsPerShot: sniperRiflePointsPerShot,
        sniperRifleFireRate: sniperRifleFireRate,
        sniperRifleCriticalShotChance: sniperRifleCriticalShotChance,
        sniperRifleCriticalDamageMultiplier: sniperRifleCriticalDamageMultiplier,
        sniperRifleFirerateUpgradeCost: sniperRifleFirerateUpgradeCost,
        sniperRiflePotencyUpgradeCost: sniperRiflePotencyUpgradeCost,
        sniperRifleCriticalShotUpgradeCost: sniperRifleCriticalShotUpgradeCost,
        sniperRifleCriticalDamageUpgradeCost: sniperRifleCriticalDamageUpgradeCost,
        sniperRifleFirerateLevel: sniperRifleFirerateLevel,
        sniperRiflePotencyLevel: sniperRiflePotencyLevel,
        sniperRifleCriticalShotLevel: sniperRifleCriticalShotLevel,
        sniperRifleCriticalDamageLevel: sniperRifleCriticalDamageLevel,

        ak47Purchased: ak47Purchased,
        ak47PointsPerShot: ak47PointsPerShot,
        ak47FireRate: ak47FireRate,
        ak47FirerateUpgradeCost: ak47FirerateUpgradeCost,
        ak47PotencyUpgradeCost: ak47PotencyUpgradeCost,
        ak47FirerateLevel: ak47FirerateLevel,
        ak47PotencyLevel: ak47PotencyLevel,

        purchasedBigUpgrades: getPurchasedBigUpgrades()
    };

    var gameStateJSON = JSON.stringify(gameState);

    localStorage.setItem('gameState', gameStateJSON);
}

// Function to load the game state from local storage
function loadGameState() {
    var gameStateJSON = localStorage.getItem('gameState');

    if (gameStateJSON !== null) {
        var gameState = JSON.parse(gameStateJSON);

        points = gameState.score;
        touchGunCost = gameState.touchGunCost,
        touchGunPointsPerClick = gameState.touchGunPointsPerClick;
        touchGunLevel = gameState.touchGunLevel;

        numberFormat = gameState.numberFormat;

        // Load big upgrade data for each weapon
        upgrades.pistol.biggerBullets.bought = gameState.pistolBiggerBulletsBought;
        upgrades.pistol.largerCalibre.bought = gameState.pistolLargerCalibreBought;
        upgrades.smg.betterSpread.bought = gameState.smgBetterSpreadBought;
        upgrades.shotgun.moreBarrels.bought = gameState.shotgunMoreBarrelsBought;
        upgrades.sniperRifle.deadlyPrecision.bought = gameState.sniperRifleDeadlyPrecisionBought;
        upgrades.ak47.heatTippedBullets.bought = gameState.ak47HeatTippedBulletsBought;
        
        pistolPurchased = gameState.pistolPurchased;
        pistolPointsPerShot = gameState.pistolPointsPerShot;
        pistolFireRate = gameState.pistolFireRate;
        pistolFirerateUpgradeCost = gameState.pistolFirerateUpgradeCost;
        pistolPotencyUpgradeCost = gameState.pistolPotencyUpgradeCost;
        pistolFirerateLevel = Math.min(gameState.pistolFirerateLevel, 20);
        pistolPotencyLevel = gameState.pistolPotencyLevel;
        
        smgPurchased = gameState.smgPurchased;
        smgPointsPerShot = gameState.smgPointsPerShot;
        smgFireRate = gameState.smgFireRate;
        smgFirerateUpgradeCost = gameState.smgFirerateUpgradeCost;
        smgPotencyUpgradeCost = gameState.smgPotencyUpgradeCost;
        smgFirerateLevel = Math.min(gameState.smgFirerateLevel, 10);
        smgPotencyLevel = gameState.smgPotencyLevel;
        
        shotgunPurchased = gameState.shotgunPurchased;
        shotgunPointsPerShot = gameState.shotgunPointsPerShot;
        shotgunFireRate = gameState.shotgunFireRate;
        shotgunBulletsPerShot = gameState.shotgunBulletsPerShot,
        shotgunFirerateUpgradeCost = gameState.shotgunFirerateUpgradeCost;
        shotgunPotencyUpgradeCost = gameState.shotgunPotencyUpgradeCost;
        shotgunMultiFireUpgradeCost = gameState.shotgunMultiFireUpgradeCost;
        shotgunFirerateLevel = Math.min(gameState.shotgunFirerateLevel, 15);
        shotgunPotencyLevel = gameState.shotgunPotencyLevel;
        shotgunMultiFireLevel = gameState.shotgunMultiFireLevel;
        
        sniperRiflePurchased = gameState.sniperRiflePurchased;
        sniperRiflePointsPerShot = gameState.sniperRiflePointsPerShot;
        sniperRifleFireRate = gameState.sniperRifleFireRate;
        sniperRifleCriticalShotChance = gameState.sniperRifleCriticalShotChance;
        sniperRifleCriticalDamageMultiplier = gameState.sniperRifleCriticalDamageMultiplier;
        sniperRifleFirerateUpgradeCost = gameState.sniperRifleFirerateUpgradeCost;
        sniperRiflePotencyUpgradeCost = gameState.sniperRiflePotencyUpgradeCost;
        sniperRifleCriticalShotUpgradeCost = gameState.sniperRifleCriticalShotUpgradeCost;
        sniperRifleCriticalDamageUpgradeCost = gameState.sniperRifleCriticalDamageUpgradeCost;
        sniperRifleFirerateLevel = Math.min(gameState.sniperRifleFirerateLevel, 10);
        sniperRiflePotencyLevel = gameState.sniperRiflePotencyLevel;
        sniperRifleCriticalShotLevel = gameState.sniperRifleCriticalShotLevel;
        sniperRifleCriticalDamageLevel = gameState.sniperRifleCriticalDamageLevel;

        ak47Purchased = gameState.ak47Purchased;
        ak47PointsPerShot = gameState.ak47PointsPerShot;
        ak47FireRate = gameState.ak47FireRate;
        ak47FirerateUpgradeCost = gameState.ak47FirerateUpgradeCost;
        ak47PotencyUpgradeCost = gameState.ak47PotencyUpgradeCost;
        ak47FirerateLevel = Math.min(gameState.ak47FirerateLevel, 15);
        ak47PotencyLevel = gameState.ak47PotencyLevel;

        // Load the purchased big upgrades interface
        loadPurchasedBigUpgrades(gameState.purchasedBigUpgrades);
        
        // Call the setNumberFormat function to update the display based on the loaded format
        setNumberFormat();

        // Update the interface
        updatePointsDisplay();

        // Update firerate and potency display for each weapon
        document.getElementById('touchGun-cost').textContent = formatNumber(touchGunCost);
        document.getElementById('touchGun-level').textContent = touchGunLevel;
        document.getElementById('touchGun-points-per-click').textContent = touchGunPointsPerClick;

        document.getElementById('pistol-cost').textContent = formatNumber(pistolCost);
        document.getElementById('pistolFirerate-cost').textContent = formatNumber(pistolFirerateUpgradeCost);
        document.getElementById('pistolPotency-cost').textContent = formatNumber(pistolPotencyUpgradeCost);
        document.getElementById('pistolFirerate-level').textContent = pistolFirerateLevel;
        document.getElementById('pistolPotency-level').textContent = pistolPotencyLevel;
        document.getElementById('pistolFirerate-value').textContent = pistolFireRate + 'ms';
        document.getElementById('pistolPotency-value').textContent = formatNumber(pistolPointsPerShot);

        document.getElementById('smg-cost').textContent = formatNumber(smgCost);
        document.getElementById('smgFirerate-cost').textContent = formatNumber(smgFirerateUpgradeCost);
        document.getElementById('smgPotency-cost').textContent = formatNumber(smgPotencyUpgradeCost);
        document.getElementById('smgFirerate-level').textContent = smgFirerateLevel;
        document.getElementById('smgPotency-level').textContent = smgPotencyLevel;
        document.getElementById('smgFirerate-value').textContent = smgFireRate + 'ms';
        document.getElementById('smgPotency-value').textContent = formatNumber(smgPointsPerShot);

        document.getElementById('shotgun-cost').textContent = formatNumber(shotgunCost);
        document.getElementById('shotgunFirerate-cost').textContent = formatNumber(shotgunFirerateUpgradeCost);
        document.getElementById('shotgunPotency-cost').textContent = formatNumber(shotgunPotencyUpgradeCost);
        document.getElementById('shotgunMultiFire-cost').textContent = formatNumber(shotgunMultiFireUpgradeCost);
        document.getElementById('shotgunFirerate-level').textContent = shotgunFirerateLevel;
        document.getElementById('shotgunPotency-level').textContent = shotgunPotencyLevel;
        document.getElementById('shotgunMultiFire-level').textContent = shotgunMultiFireLevel;
        document.getElementById('shotgunFirerate-value').textContent = shotgunFireRate + 'ms';
        document.getElementById('shotgunPotency-value').textContent = formatNumber(shotgunPointsPerShot);
        document.getElementById('shotgunMultiFire-value').textContent = shotgunBulletsPerShot;

        document.getElementById('sniperRifle-cost').textContent = formatNumber(sniperRifleCost);
        document.getElementById('sniperRifleFirerate-cost').textContent = formatNumber(sniperRifleFirerateUpgradeCost);
        document.getElementById('sniperRiflePotency-cost').textContent = formatNumber(sniperRiflePotencyUpgradeCost);
        document.getElementById('sniperRifleCriticalShot-cost').textContent = formatNumber(sniperRifleCriticalShotUpgradeCost);
        document.getElementById('sniperRifleCriticalDamage-cost').textContent = formatNumber(sniperRifleCriticalDamageUpgradeCost);
        document.getElementById('sniperRifleFirerate-level').textContent = sniperRifleFirerateLevel;
        document.getElementById('sniperRiflePotency-level').textContent = sniperRiflePotencyLevel;
        document.getElementById('sniperRifleCriticalShot-level').textContent = sniperRifleCriticalShotLevel;
        document.getElementById('sniperRifleCriticalDamage-level').textContent = sniperRifleCriticalDamageLevel;
        document.getElementById('sniperRifleFirerate-value').textContent = sniperRifleFireRate + 'ms';
        document.getElementById('sniperRiflePotency-value').textContent = formatNumber(sniperRiflePointsPerShot);
        document.getElementById('sniperRifleCriticalChance-value').textContent = sniperRifleCriticalShotChance;
        document.getElementById('sniperRifleCriticalDamage-value').textContent = sniperRifleCriticalDamageMultiplier;

        document.getElementById('ak47-cost').textContent = formatNumber(ak47Cost);
        document.getElementById('ak47Firerate-cost').textContent = formatNumber(ak47FirerateUpgradeCost);
        document.getElementById('ak47Potency-cost').textContent = formatNumber(ak47PotencyUpgradeCost);
        document.getElementById('ak47Firerate-level').textContent = ak47FirerateLevel;
        document.getElementById('ak47Potency-level').textContent = ak47PotencyLevel;
        document.getElementById('ak47Firerate-value').textContent = ak47FireRate + 'ms';
        document.getElementById('ak47Potency-value').textContent = formatNumber(ak47PointsPerShot);

        // Check if pistol fire rate level is at maximum
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
        
        // Hide purchase buttons for purchased weapons
        if (pistolPurchased) {
            document.getElementById('pistol-purchase').style.display = 'none';
        }
        if (smgPurchased) {
            document.getElementById('smg-purchase').style.display = 'none';
        }
        if (shotgunPurchased) {
            document.getElementById('shotgun-purchase').style.display = 'none';
        }
        if (sniperRiflePurchased) {
            document.getElementById('sniperRifle-purchase').style.display = 'none';
        }
        if (ak47Purchased) {
            document.getElementById('ak47-purchase').style.display = 'none';
        }
    }
}

// Function to auto-save the game state every 60 seconds
function autoSave() {
    setInterval(function() {
        saveGameState();
    }, 60000); // 60 seconds
}

// Function to handle saving progress manually
function saveProgress() {
    saveGameState();
}

// Event listener to load game state when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGameState();
    autoSave();
});

// Function to reset game progress
function resetProgress() {
    // Prompt confirmation before resetting progress
    var confirmation = confirm("Are you sure you want to clear your whole progression? NOTE: this cannot be reversed!");
    
    if (confirmation) {
        localStorage.removeItem('gameState');
        // Reset all variables to their default values
        points = 0;
        touchGunCost = 100;
        touchGunPointsPerClick = 1;
        touchGunLevel = 0;

        numberFormat = 'standard';

        // Reset big upgrades
        upgrades.pistol.biggerBullets.bought = false;
        upgrades.pistol.largerCalibre.bought = false;
        upgrades.smg.betterSpread.bought = false;
        upgrades.shotgun.moreBarrels.bought = false;
        upgrades.sniperRifle.deadlyPrecision.bought = false;
        upgrades.ak47.heatTippedBullets.bought = false;
        
        pistolPurchased = false;
        pistolPointsPerShot = 1;
        pistolFireRate = 1000;
        pistolFirerateUpgradeCost = 50;
        pistolPotencyUpgradeCost = 100;
        pistolFirerateLevel = 0;
        pistolPotencyLevel = 0;
        
        smgPurchased = false;
        smgPointsPerShot = 1;
        smgFireRate = 200;
        smgFirerateUpgradeCost = 750;
        smgPotencyUpgradeCost = 1500;
        smgFirerateLevel = 0;
        smgPotencyLevel = 0;
        
        shotgunPurchased = false;
        shotgunPointsPerShot = 4;
        shotgunFireRate = 1500;
        shotgunBulletsPerShot = 3,
        shotgunFirerateUpgradeCost = 5000;
        shotgunPotencyUpgradeCost = 12500;
        shotgunMultiFireUpgradeCost = 25000;
        shotgunFirerateLevel = 0;
        shotgunPotencyLevel = 0;
        shotgunMultiFireLevel = 0;
        
        sniperRiflePurchased = false;
        sniperRiflePointsPerShot = 80;
        sniperRifleFireRate = 4000;
        sniperRifleCriticalShotChance = 0.25;
        sniperRifleCriticalDamageMultiplier = 2.0;
        sniperRifleFirerateUpgradeCost = 50000;
        sniperRiflePotencyUpgradeCost = 100000;
        sniperRifleCriticalShotUpgradeCost = 75000;
        sniperRifleCriticalDamageUpgradeCost = 250000;
        sniperRifleFirerateLevel = 0;
        sniperRiflePotencyLevel = 0;
        sniperRifleCriticalShotLevel = 0;
        sniperRifleCriticalDamageLevel = 0;

        ak47Cost = 60000;
        ak47PointsPerShot = 150;
        ak47FireRate = 500;
        ak47FirerateUpgradeCost = 300000;
        ak47PotencyUpgradeCost = 400000;
        ak47FirerateLevel = 0;
        ak47PotencyLevel = 0;

        clearInterval(pistolFireRate);
        clearInterval(smgFireRate);
        clearInterval(shotgunFireRate);
        clearInterval(sniperRifleFireRate);
        clearInterval(ak47FireRate);

        // Enable purchase buttons for reset weapons
        if (pistolPurchased === false) {
            document.getElementById('pistol-purchase').style.display = 'block';
        }
        if (smgPurchased === false) {
            document.getElementById('smg-purchase').style.display = 'block';
        }
        if (shotgunPurchased === false) {
            document.getElementById('shotgun-purchase').style.display = 'block';
        }
        if (sniperRiflePurchased === false) {
            document.getElementById('sniperRifle-purchase').style.display = 'block';
        }
        if (ak47Purchased === false) {
            document.getElementById('ak47-purchase').style.display = 'block';
        }

        // Update the interface
        updatePointsDisplay();
        // Add any other interface updates here
    }
}

// Call the saveGameState function whenever the game state changes
// For example, after earning points, purchasing weapons, etc.
// You can call this function wherever you modify game state variables

window.addEventListener('DOMContentLoaded', (event) => {
    initializeSoundEffects();
});
