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

// Function to switch between mini-tabs
function switchMiniTab(subtab, weaponId) {
    // Hide all upgrade options first
    const allUpgradeOptions = document.querySelectorAll('.upgrade-option');
    allUpgradeOptions.forEach(option => {
        option.style.display = 'none';
    });

    // Show upgrade options belonging to the selected weaponId
    const upgradeOptions = document.querySelectorAll(`.upgrade-option.${weaponId}`);
    upgradeOptions.forEach(option => {
        option.style.display = '';
    });

    // Ensure the selected minitab is highlighted
    const miniTabs = document.querySelectorAll('#mini-tabs button');
    miniTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    const selectedTab = document.querySelector(`#mini-tabs button[data-weapon="${weaponId}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    switchMiniTab('buy', 'touchGun');
});

let soundEnabled = true; // Ensure sound is enabled by default

function toggleSound() {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        // Play a sound effect
        playSoundEffect();
    }
}

// Adjust the setNumberFormat function to update the display based on the selected format
function setNumberFormat(selectedFormat) {
    if (selectedFormat && selectedFormat.value) {
        // Update the display based on the selected format
        const formatValue = selectedFormat.value;
        const numberElements = document.querySelectorAll('.number-format');
        numberElements.forEach(function(element) {
            const number = parseFloat(element.textContent);
            element.textContent = formatNumber(number, formatValue);
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
        points: points,
        touchGunCost: touchGunCost,
        touchGunPointsPerClick: touchGunPointsPerClick,
        touchGunLevel: touchGunLevel,

        awokenTouchGunCost: awokenTouchGunCost,
        awokenTouchGunLevel: awokenTouchGunLevel,
        
        numberFormat: numberFormat, // Add the selected number format to the game state

        // Add statistics data to the save file
        weaponUpgradeLevels: statistics.weaponUpgradeLevels,
        lifetimePoints: statistics.lifetimePoints,

        // Add big upgrade data for each weapon
        touchGunPointyFingersBought: upgrades.touchGun.pointyFingers.bought,
        touchGunAmbidextrousBought: upgrades.touchGun.ambidextrous.bought,
        touchGunTapMasterBought: upgrades.touchGun.tapMaster.bought,
        touchGunBazillionFingersBought: upgrades.touchGun.bazillionFingers.bought,
        touchGunAntirestingCreamBought: upgrades.touchGun.antirestingCream.bought,
        touchGunAwakenBought: upgrades.touchGun.awakenUpgrade.bought,
        
        pistolBiggerBulletsBought: upgrades.pistol.biggerBullets.bought,
        pistolLargerCalibreBought: upgrades.pistol.largerCalibre.bought,
        pistolEasierReloadingBought: upgrades.pistol.easierReloading.bought,
        pistolLouderFiringBought: upgrades.pistol.louderFiring.bought,
        pistolMetalPiercingBought: upgrades.pistol.metalPiercing.bought,
        pistolSpecializedMechanismsBought: upgrades.pistol.specializedMechanisms.bought,
        
        smgBetterSpreadBought: upgrades.smg.betterSpread.bought,
        smgStrongHoldBought: upgrades.smg.strongHold.bought,
        smgPressureBulletsBought: upgrades.smg.pressureBullets.bought,
        smgWickedAimerBought: upgrades.smg.wickedAimer.bought,
        smgBashingRoundsBought: upgrades.smg.bashingRounds.bought,
        smgAutoAimerBought: upgrades.smg.autoAimer.bought,
        
        shotgunMoreBarrelsBought: upgrades.shotgun.moreBarrels.bought,
        shotgunPowerfulBurstBought: upgrades.shotgun.powerfulBurst.bought,
        shotgunDevastatingBurstBought: upgrades.shotgun.devastatingBurst.bought,
        shotgunMegaBurstBought: upgrades.shotgun.megaBurst.bought,
        shotgunScattershotBought: upgrades.shotgun.scattershot.bought,
        
        sniperRifleDeadlyPrecisionBought: upgrades.sniperRifle.deadlyPrecision.bought,
        sniperRifleCripplingShotsBought: upgrades.sniperRifle.cripplingShots.bought,
        sniperRifleHeadShotBought: upgrades.sniperRifle.headShot.bought,
        sniperRifleDangerousRiflingBought: upgrades.sniperRifle.dangerousRifling.bought,
        sniperRifleLuckyShotBought: upgrades.sniperRifle.luckyShot.bought,
        
        ak47HeatTippedBulletsBought: upgrades.ak47.heatTippedBullets.bought,
        ak47StaggeringBulletsBought: upgrades.ak47.staggeringBullets.bought,
        ak47RippingBulletsBought: upgrades.ak47.rippingBullets.bought,
        ak47VehementBulletsBought: upgrades.ak47.vehementBullets.bought,
        ak47OverbearingVelocityBought: upgrades.ak47.overbearingVelocity.bought,
        
        rocketLauncherPotentRocketsBought: upgrades.rocketLauncher.potentRockets.bought,
        rocketLauncherViolentExplosionsBought: upgrades.rocketLauncher.violentExplosions.bought,
        rocketLauncherRepeatedExplosionsBought: upgrades.rocketLauncher.repeatedExplosions.bought,
        rocketLauncherBiggerExplosionsBought: upgrades.rocketLauncher.biggerExplosions.bought,
        rocketLauncherExtraGunpowderBought: upgrades.rocketLauncher.extraGunpowder.bought,
        
        tommyGunPreciseAccuracyBought: upgrades.tommyGun.preciseAccuracy.bought,
        tommyGunTightPressureBought: upgrades.tommyGun.tightPressure.bought,
        tommyGunLessPunishingBought: upgrades.tommyGun.lessPunishing.bought,
        tommyGunPowerfulOutcomesBought: upgrades.tommyGun.powerfulOutcomes.bought,
        tommyGunVehementBurstBought: upgrades.tommyGun.vehementBurst.bought,

        doubleBarrelLethalShotsBought: upgrades.doubleBarrel.lethalShots.bought,
        doubleBarrelArcSwitchingBarrelsBought: upgrades.doubleBarrel.arcSwitchingBarrels.bought,
        doubleBarrelDoubleTroubleBought: upgrades.doubleBarrel.doubleTrouble.bought,
        doubleBarrelEnergizedBought: upgrades.doubleBarrel.energized.bought,
        doubleBarrelDoubleSwarmBought: upgrades.doubleBarrel.doubleSwarm.bought,
        
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

        rocketLauncherPurchased: rocketLauncherPurchased,
        rocketLauncherPointsPerShot: rocketLauncherPointsPerShot,
        rocketLauncherFireRate: rocketLauncherFireRate,
        rocketLauncherSplashRadius: rocketLauncherSplashRadius,
        rocketLauncherSplashDamage: rocketLauncherSplashDamage,
        rocketLauncherFirerateUpgradeCost: rocketLauncherFirerateUpgradeCost,
        rocketLauncherPotencyUpgradeCost: rocketLauncherPotencyUpgradeCost,
        rocketLauncherSplashRadiusUpgradeCost: rocketLauncherSplashRadiusUpgradeCost,
        rocketLauncherSplashDamageUpgradeCost: rocketLauncherSplashDamageUpgradeCost,
        rocketLauncherFirerateLevel: rocketLauncherFirerateLevel,
        rocketLauncherPotencyLevel: rocketLauncherPotencyLevel,
        rocketLauncherSplashRadiusLevel: rocketLauncherSplashRadiusLevel,
        rocketLauncherSplashDamageLevel: rocketLauncherSplashDamageLevel,

        tommyGunPurchased: tommyGunPurchased,
        tommyGunPointsPerShot: tommyGunPointsPerShot,
        tommyGunFireRate: tommyGunFireRate,
        tommyGunInaccuracyChance:  tommyGunInaccuracyChance,
        tommyGunAccuracyPenalty: tommyGunAccuracyPenalty,
        tommyGunFirerateUpgradeCost: tommyGunFirerateUpgradeCost,
        tommyGunPotencyUpgradeCost: tommyGunPotencyUpgradeCost,
        tommyGunAccuracyUpgradeCost: tommyGunAccuracyUpgradeCost,
        tommyGunFirerateLevel: tommyGunFirerateLevel,
        tommyGunPotencyLevel: tommyGunPotencyLevel,
        tommyGunAccuracyLevel: tommyGunPotencyLevel,

        doubleBarrelPurchased: doubleBarrelPurchased,
        doubleBarrelPointsPerShot: doubleBarrelPointsPerShot,
        doubleBarrelFireRate: doubleBarrelFireRate,
        doubleBarrelBulletsPerShot: doubleBarrelBulletsPerShot,
        doubleBarrelFirerateUpgradeCost: doubleBarrelFirerateUpgradeCost,
        doubleBarrelPotencyUpgradeCost: doubleBarrelPotencyUpgradeCost,
        doubleBarrelMultiFireUpgradeCost: doubleBarrelMultiFireUpgradeCost,
        doubleBarrelFirerateLevel: doubleBarrelFirerateLevel,
        doubleBarrelPotencyLevel: doubleBarrelPotencyLevel,
        doubleBarrelMultiFireLevel: doubleBarrelMultiFireLevel,

        purchasedBigUpgrades: getPurchasedBigUpgrades()
    };

    var gameStateJSON = JSON.stringify(gameState);

    localStorage.setItem('gameState', gameStateJSON);
}

// Function to load the game state from local storage
function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
        points = savedState.points;
        statistics.weaponUpgradeLevels = savedState.weaponUpgradeLevels; // Load statistics data
        statistics.lifetimePoints = savedState.lifetimePoints; // Load lifetime points
        updateStatisticsDisplay(); // Update statistics display after loading
        updatePointsDisplay(); // Update points display after loading
    }
    var gameStateJSON = localStorage.getItem('gameState');
    if (gameStateJSON !== null) {
        var gameState = JSON.parse(gameStateJSON);

        points = gameState.points;
        touchGunCost = gameState.touchGunCost,
        touchGunPointsPerClick = gameState.touchGunPointsPerClick;
        touchGunLevel = gameState.touchGunLevel;

        awokenTouchGunCost = gameState.awokenTouchGunCost;
        awokenTouchGunLevel = gameState.awokenTouchGunLevel;

        numberFormat = gameState.numberFormat;

        // Load big upgrade data for each weapon
        upgrades.touchGun.pointyFingers.bought = gameState.touchGunPointyFingersBought;
        upgrades.touchGun.ambidextrous.bought = gameState.touchGunAmbidextrousBought;
        upgrades.touchGun.tapMaster.bought = gameState.touchGunTapMasterBought;
        upgrades.touchGun.antirestingCream.bought = gameState.touchGunAntirestingCreamBought;
        upgrades.touchGun.bazillionFingers.bought = gameState.touchGunBazillionFingersBought;
        upgrades.touchGun.awakenUpgrade.bought = gameState.touchGunAwakenBought;
        
        upgrades.pistol.biggerBullets.bought = gameState.pistolBiggerBulletsBought;
        upgrades.pistol.largerCalibre.bought = gameState.pistolLargerCalibreBought;
        upgrades.pistol.easierReloading.bought = gameState.pistolEasierReloadingBought;
        upgrades.pistol.louderFiring.bought = gameState.pistolLouderFiringBought;
        upgrades.pistol.metalPiercing.bought = gameState.pistolMetalPiercingBought;
        upgrades.pistol.specializedMechanisms.bought = gameState.pistolSpecializedMechanismsBought;
        
        upgrades.smg.betterSpread.bought = gameState.smgBetterSpreadBought;
        upgrades.smg.strongHold.bought = gameState.smgStrongHoldBought;
        upgrades.smg.pressureBullets.bought = gameState.smgPressureBulletsBought;
        upgrades.smg.wickedAimer.bought = gameState.smgWickedAimerBought;
        upgrades.smg.bashingRounds.bought = gameState.smgBashingRoundsBought;
        upgrades.smg.autoAimer.bought = gameState.smgAutoAimerBought;
        
        upgrades.shotgun.moreBarrels.bought = gameState.shotgunMoreBarrelsBought;
        upgrades.shotgun.powerfulBurst.bought = gameState.shotgunPowerfulBurstBought;
        upgrades.shotgun.devastatingBurst.bought = gameState.shotgunDevastatingBurstBought;
        upgrades.shotgun.megaBurst.bought = gameState.shotgunMegaBurstBought;
        upgrades.shotgun.scattershot.bought = gameState.shotgunScattershotBought;
        
        upgrades.sniperRifle.deadlyPrecision.bought = gameState.sniperRifleDeadlyPrecisionBought;
        upgrades.sniperRifle.cripplingShots.bought = gameState.sniperRifleCripplingShotsBought;
        upgrades.sniperRifle.headShot.bought = gameState.sniperRifleHeadShotBought;
        upgrades.sniperRifle.dangerousRifling.bought = gameState.sniperRifleDangerousRiflingBought;
        upgrades.sniperRifle.luckyShot.bought = gameState.sniperRifleLuckyShotBought;
        
        upgrades.ak47.heatTippedBullets.bought = gameState.ak47HeatTippedBulletsBought;
        upgrades.ak47.staggeringBullets.bought = gameState.ak47StaggeringBulletsBought;
        upgrades.ak47.rippingBullets.bought = gameState.ak47RippingBulletsBought;
        upgrades.ak47.vehementBullets.bought = gameState.ak47VehementBulletsBought;
        upgrades.ak47.overbearingVelocity.bought = gameState.ak47OverbearingVelocityBought;

        upgrades.rocketLauncher.potentRockets.bought = gameState.rocketLauncherPotentRocketsBought;
        upgrades.rocketLauncher.violentExplosions.bought = gameState.rocketLauncherViolentExplosionsBought;
        upgrades.rocketLauncher.repeatedExplosions.bought = gameState.rocketLauncherRepeatedExplosionsBought;
        upgrades.rocketLauncher.biggerExplosions.bought = gameState.rocketLauncherBiggerExplosionsBought;
        upgrades.rocketLauncher.extraGunpowder.bought = gameState.rocketLauncherExtraGunpowderBought;

        upgrades.tommyGun.preciseAccuracy.bought = gameState.tommyGunPreciseAccuracyBought;
        upgrades.tommyGun.tightPressure.bought = gameState.tommyGunTightPressureBought;
        upgrades.tommyGun.lessPunishing.bought = gameState.tommyGunLessPunishingBought;
        upgrades.tommyGun.powerfulOutcomes.bought = gameState.tommyGunPowerfulOutcomesBought;
        upgrades.tommyGun.vehementBurst.bought = gameState.tommyGunVehementBurstBought;

        upgrades.doubleBarrel.lethalShots.bought = gameState.doubleBarrelLethalShotsBought;
        upgrades.doubleBarrel.arcSwitchingBarrels.bought = gameState.doubleBarrelArcSwitchingBarrelsBought;
        upgrades.doubleBarrel.doubleTrouble.bought = gameState.doubleBarrelDoubleTroubleBought;
        upgrades.doubleBarrel.energized.bought = gameState.doubleBarrelEnergizedBought;
        upgrades.doubleBarrel.doubleSwarm.bought = gameState.doubleBarrelDoubleSwarmBought;
        
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

        rocketLauncherPurchased = gameState.rocketLauncherPurchased;
        rocketLauncherPointsPerShot = gameState.rocketLauncherPointsPerShot;
        rocketLauncherFireRate = gameState.rocketLauncherFireRate;
        rocketLauncherSplashRadius = gameState.rocketLauncherSplashRadius;
        rocketLauncherSplashDamage = gameState.rocketLauncherSplashDamage;
        rocketLauncherFirerateUpgradeCost = gameState.rocketLauncherFirerateUpgradeCost;
        rocketLauncherPotencyUpgradeCost = gameState.rocketLauncherPotencyUpgradeCost;
        rocketLauncherSplashRadiusUpgradeCost = gameState.rocketLauncherSplashRadiusUpgradeCost;
        rocketLauncherSplashDamageUpgradeCost = gameState.rocketLauncherSplashDamageUpgradeCost;
        rocketLauncherFirerateLevel = Math.min(gameState.rocketLauncherFirerateLevel, 15);
        rocketLauncherPotencyLevel = gameState.rocketLauncherPotencyLevel;
        rocketLauncherSplashRadiusLevel = Math.min(gameState.rocketLauncherSplashRadiusLevel, 5);
        rocketLauncherSplashDamageLevel = gameState.rocketLauncherSplashDamageLevel;

        tommyGunPurchased = gameState.tommyGunPurchased;
        tommyGunPointsPerShot = gameState.tommyGunPointsPerShot;
        tommyGunFireRate = gameState.tommyGunFireRate;
        tommyGunInaccuracyChance = gameState.tommyGunInaccuracyChance;
        tommyGunAccuracyPenalty = gameState.tommyGunAccuracyPenalty;
        tommyGunFirerateUpgradeCost = gameState.tommyGunFirerateUpgradeCost;
        tommyGunPotencyUpgradeCost = gameState.tommyGunPotencyUpgradeCost;
        tommyGunAccuracyUpgradeCost = gameState.tommyGunAccuracyUpgradeCost;
        tommyGunFirerateLevel = Math.min(gameState.tommyGunFirerateLevel, 20);
        tommyGunPotencyLevel = gameState.tommyGunPotencyLevel;
        tommyGunAccuracyLevel = gameState.tommyGunAccuracyLevel;

        doubleBarrelPurchased = gameState.doubleBarrelPurchased;
        doubleBarrelPointsPerShot = gameState.doubleBarrelPointsPerShot;
        doubleBarrelFireRate = gameState.doubleBarrelFireRate;
        doubleBarrelBulletsPerShot = gameState.doubleBarrelBulletsPerShot,
        doubleBarrelFirerateUpgradeCost = gameState.doubleBarrelFirerateUpgradeCost;
        doubleBarrelPotencyUpgradeCost = gameState.doubleBarrelPotencyUpgradeCost;
        doubleBarrelMultiFireUpgradeCost = gameState.doubleBarrelMultiFireUpgradeCost;
        doubleBarrelFirerateLevel = Math.min(gameState.doubleBarrelFirerateLevel, 25);
        doubleBarrelPotencyLevel = gameState.doubleBarrelPotencyLevel;
        doubleBarrelMultiFireLevel = gameState.doubleBarrelMultiFireLevel;

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

        document.getElementById('touchGunAwaken-cost').textContent = formatNumber(awokenTouchGunCost);
        document.getElementById('touchGunAwaken-level').textContent = awokenTouchGunLevel;
        document.getElementById('touchGunAwaken-purchase').style.display = 'none';
        document.getElementById('touchGunAwaken-display').style.display = 'none';

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

        document.getElementById('rocketLauncher-cost').textContent = formatNumber(rocketLauncherCost);
        document.getElementById('rocketLauncherFirerate-cost').textContent = formatNumber(rocketLauncherFirerateUpgradeCost);
        document.getElementById('rocketLauncherPotency-cost').textContent = formatNumber(rocketLauncherPotencyUpgradeCost);
        document.getElementById('rocketLauncherSplashRadius-cost').textContent = formatNumber(rocketLauncherSplashRadiusUpgradeCost);
        document.getElementById('rocketLauncherSplashDamage-cost').textContent = formatNumber(rocketLauncherSplashDamageUpgradeCost);
        document.getElementById('rocketLauncherFirerate-level').textContent = rocketLauncherFirerateLevel;
        document.getElementById('rocketLauncherPotency-level').textContent = rocketLauncherPotencyLevel;
        document.getElementById('rocketLauncherSplashRadius-level').textContent = rocketLauncherSplashRadiusLevel;
        document.getElementById('rocketLauncherSplashDamage-level').textContent = rocketLauncherSplashDamageLevel;
        document.getElementById('rocketLauncherFirerate-value').textContent = rocketLauncherFireRate + 'ms';
        document.getElementById('rocketLauncherPotency-value').textContent = formatNumber(rocketLauncherPointsPerShot);
        document.getElementById('rocketLauncherSplashRadius-value').textContent = rocketLauncherSplashRadius;
        document.getElementById('rocketLauncherSplashDamage-value').textContent = rocketLauncherSplashDamage;

        document.getElementById('tommyGun-cost').textContent = formatNumber(tommyGunCost);
        document.getElementById('tommyGunFirerate-cost').textContent = formatNumber(tommyGunFirerateUpgradeCost);
        document.getElementById('tommyGunPotency-cost').textContent = formatNumber(tommyGunPotencyUpgradeCost);
        document.getElementById('tommyGunAccuracy-cost').textContent = formatNumber(tommyGunAccuracyUpgradeCost);
        document.getElementById('tommyGunFirerate-level').textContent = tommyGunFirerateLevel;
        document.getElementById('tommyGunPotency-level').textContent = tommyGunPotencyLevel;
        document.getElementById('tommyGunAccuracy-level').textContent = tommyGunAccuracyLevel;
        document.getElementById('tommyGunFirerate-value').textContent = tommyGunFireRate + 'ms';
        document.getElementById('tommyGunPotency-value').textContent = formatNumber(tommyGunPointsPerShot);
        document.getElementById('tommyGunAccuracy-value').textContent = -0 + tommyGunInaccuracyChance;

        document.getElementById('doubleBarrel-cost').textContent = formatNumber(doubleBarrelCost);
        document.getElementById('doubleBarrelFirerate-cost').textContent = formatNumber(doubleBarrelFirerateUpgradeCost);
        document.getElementById('doubleBarrelPotency-cost').textContent = formatNumber(doubleBarrelPotencyUpgradeCost);
        document.getElementById('doubleBarrelMultiFire-cost').textContent = formatNumber(doubleBarrelMultiFireUpgradeCost);
        document.getElementById('doubleBarrelFirerate-level').textContent = doubleBarrelFirerateLevel;
        document.getElementById('doubleBarrelPotency-level').textContent = doubleBarrelPotencyLevel;
        document.getElementById('doubleBarrelMultiFire-level').textContent = doubleBarrelMultiFireLevel;
        document.getElementById('doubleBarrelFirerate-value').textContent = doubleBarrelFireRate + 'ms';
        document.getElementById('doubleBarrelPotency-value').textContent = formatNumber(doubleBarrelPointsPerShot);
        document.getElementById('doubleBarrelMultiFire-value').textContent = doubleBarrelBulletsPerShot;

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
        if (rocketLauncherSplashRadiusLevel === 5) {
            const rocketLauncherSplashRadiusLevelDisplay = document.getElementById('rocketLauncherSplashRadius-level');
            if (rocketLauncherSplashRadiusLevelDisplay) {
                rocketLauncherSplashRadiusLevelDisplay.textContent = "Max";
            }
            const rocketLauncherSplashRadiusCostDisplay = document.getElementById('rocketLauncherSplashRadius-cost');
            if (rocketLauncherSplashRadiusCostDisplay) {
                rocketLauncherSplashRadiusCostDisplay.textContent = "MAX";
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
        if (doubleBarrelFirerateLevel === 25) {
            const doubleBarrelFirerateLevelDisplay = document.getElementById('doubleBarrelFirerate-level');
            if (doubleBarrelFirerateLevelDisplay) {
                doubleBarrelFirerateLevelDisplay.textContent = "Max";
            }
            const doubleBarrelFirerateCostDisplay = document.getElementById('doubleBarrelFirerate-cost');
            if (doubleBarrelFirerateCostDisplay) {
                doubleBarrelFirerateCostDisplay.textContent = "MAX";
            }
        }
        if (upgrades.touchGun.awakenUpgrade.bought) {
            document.getElementById('touchGunAwaken-purchase').style.display = 'block';
            document.getElementById('touchGunAwaken-display').style.display = 'block';
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
        if (rocketLauncherPurchased) {
            document.getElementById('rocketLauncher-purchase').style.display = 'none';
        }
        if (tommyGunPurchased) {
            document.getElementById('tommyGun-purchase').style.display = 'none';
        }
        if (doubleBarrelPurchased) {
            document.getElementById('tommyGun-purchase').style.display = 'none';
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
        statistics = {
            lifetimePoints: 0,
            weaponUpgradeLevels: {
                touchGun: { firerate: 0, potency: 0 },
                pistol: { firerate: 0, potency: 0 },
                smg: { firerate: 0, potency: 0 },
                shotgun: { firerate: 0, potency: 0, multiFire: 0 },
                sniperRifle: { firerate: 0, potency: 0, criticalChance: 0, criticalDamage: 0 },
                ak47: { firerate: 0, potency: 0 },
                rocketLauncher: { firerate: 0, potency: 0, splashRadius: 0, splashDamage: 0 },
                tommyGun: { firerate: 0, potency: 0, accuracy: 0 },
                doubleBarrel: { firerate: 0, potency: 0, multiFire: 0 }
            }
        };
        touchGunCost = 100;
        touchGunPointsPerClick = 1;
        touchGunLevel = 0;

        awokenTouchGunCost = 500000;
        awokenTouchGunLevel = 0;

        numberFormat = 'standard';

        // Reset big upgrades
        upgrades.touchGun.pointyFingers.bought = false;
        upgrades.touchGun.ambidextrous.bought = false;
        upgrades.touchGun.tapMaster.bought = false;
        upgrades.touchGun.antirestingCream.bought = false;
        upgrades.touchGun.bazillionFingers.bought = false;
        upgrades.touchGun.awakenUpgrade.bought = false;
        
        upgrades.pistol.biggerBullets.bought = false;
        upgrades.pistol.largerCalibre.bought = false;
        upgrades.pistol.easierReloading.bought = false;
        upgrades.pistol.louderFiring.bought = false;
        upgrades.pistol.metalPiercing.bought = false;
        upgrades.pistol.specializedMechanisms.bought = false;
        
        upgrades.smg.betterSpread.bought = false;
        upgrades.smg.strongHold.bought = false;
        upgrades.smg.pressureBullets.bought = false;
        upgrades.smg.wickedAimer.bought = false;
        upgrades.smg.bashingRounds.bought = false;
        upgrades.smg.autoAimer.bought = false;
        
        upgrades.shotgun.moreBarrels.bought = false;
        upgrades.shotgun.powerfulBurst.bought = false;
        upgrades.shotgun.devastatingBurst.bought = false;
        upgrades.shotgun.megaBurst.bought = false;
        upgrades.shotgun.scattershot.bought = false;
        
        upgrades.sniperRifle.deadlyPrecision.bought = false;
        upgrades.sniperRifle.cripplingShots.bought = false;
        upgrades.sniperRifle.headShot.bought = false;
        upgrades.sniperRifle.dangerousRifling.bought = false;
        upgrades.sniperRifle.luckyShot.bought = false;
        
        upgrades.ak47.heatTippedBullets.bought = false;
        upgrades.ak47.staggeringBullets.bought = false;
        upgrades.ak47.rippingBullets.bought = false;
        upgrades.ak47.vehementBullets.bought = false;
        upgrades.ak47.overbearingVelocity.bought = false;

        upgrades.rocketLauncher.potentRockets.bought = false;
        upgrades.rocketLauncher.violentExplosions.bought = false;
        upgrades.rocketLauncher.repeatedExplosions.bought = false;
        upgrades.rocketLauncher.biggerExplosions.bought = false;
        upgrades.rocketLauncher.extraGunpowder.bought = false;

        upgrades.tommyGun.preciseAccuracy.bought = false;
        upgrades.tommyGun.tightPressure.bought = false;
        upgrades.tommyGun.lessPunishing.bought = false;
        upgrades.tommyGun.powerfulOutcomes.bought = false;
        upgrades.tommyGun.vehementBurst.bought = false;

        upgrades.doubleBarrel.lethalShots.bought = false;
        upgrades.doubleBarrel.arcSwitchingBarrels.bought = false;
        upgrades.doubleBarrel.doubleTrouble.bought = false;
        upgrades.doubleBarrel.energized.bought = false;
        upgrades.doubleBarrel.doubleSwarm.bought = false;
        
        pistolPurchased = false;
        pistolCost = 10;
        pistolPointsPerShot = 1;
        pistolFireRate = 1000;
        pistolFirerateUpgradeCost = 50;
        pistolPotencyUpgradeCost = 100;
        pistolFirerateLevel = 0;
        pistolPotencyLevel = 0;
        
        smgPurchased = false;
        smgCost = 100;
        smgPointsPerShot = 1;
        smgFireRate = 200;
        smgFirerateUpgradeCost = 750;
        smgPotencyUpgradeCost = 1500;
        smgFirerateLevel = 0;
        smgPotencyLevel = 0;
        
        shotgunPurchased = false;
        shotgunCost = 500;
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
        sniperRifleCost = 7500;
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

        ak47Purchased = false;
        ak47Cost = 60000;
        ak47PointsPerShot = 150;
        ak47FireRate = 500;
        ak47FirerateUpgradeCost = 300000;
        ak47PotencyUpgradeCost = 400000;
        ak47FirerateLevel = 0;
        ak47PotencyLevel = 0;

        rocketLauncherPurchased = false;
        rocketLauncherCost = 400000;
        rocketLauncherPointsPerShot = 1000;
        rocketLauncherFireRate = 5000;
        rocketLauncherSplashRadius = 30;
        rocketLauncherSplashDamage = 0.4;
        rocketLauncherFirerateUpgradeCost = 1000000;
        rocketLauncherPotencyUpgradeCost = 750000;
        rocketLauncherSplashRadiusUpgradeCost = 10000000;
        rocketLauncherSplashDamageUpgradeCost = 5000000;
        rocketLauncherFirerateLevel = 0;
        rocketLauncherPotencyLevel = 0;
        rocketLauncherSplashRadiusLevel = 0;
        rocketLauncherSplashDamageLevel = 0;

        tommyGunPurchased = false;
        tommyGunCost = 2500000;
        tommyGunPointsPerShot = 600;
        tommyGunFireRate = 150;
        tommyGunInaccuracyChance = 50;
        tommyGunAccuracyPenalty = 0.5;
        tommyGunFirerateUpgradeCost = 15000000;
        tommyGunPotencyUpgradeCost = 10000000;
        tommyGunAccuracyUpgradeCost = 20000000;
        tommyGunFirerateLevel = 0;
        tommyGunPotencyLevel = 0;
        tommyGunAccuracyLevel = 0;

        doubleBarrelPurchased = false;
        doubleBarrelCost = 30000000;
        doubleBarrelPointsPerShot = 4000;
        doubleBarrelFireRate = 2000;
        doubleBarrelMultiFireUpgradeCost = 150000000;
        doubleBarrelFirerateUpgradeCost = 80000000;
        doubleBarrelPotencyUpgradeCost = 60000000;
        doubleBarrelBulletsPerShot = 2;
        doubleBarrelFirerateLevel = 0;
        doubleBarrelPotencyLevel = 0;
        doubleBarrelMultiFireLevel = 0;

        clearInterval(pistolFireRate);
        clearInterval(smgFireRate);
        clearInterval(shotgunFireRate);
        clearInterval(sniperRifleFireRate);
        clearInterval(ak47FireRate);
        clearInterval(rocketLauncherFireRate);
        clearInterval(tommyGunFireRate);
        clearInterval(doubleBarrelFireRate);

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
        if (rocketLauncherPurchased === false) {
            document.getElementById('rocketLauncher-purchase').style.display = 'block';
        }
        if (tommyGunPurchased === false) {
            document.getElementById('tommyGun-purchase').style.display = 'block';
        }
        if (doubleBarrelPurchased === false) {
            document.getElementById('tommyGun-purchase').style.display = 'block';
        }
        if (upgrades.touchGun.awakenUpgrade.bought === false) {
            document.getElementById('touchGunAwaken-purchase').style.display = 'none';
            document.getElementById('touchGunAwaken-display').style.display = 'none';
        }

        // Update the interfaces
        updateStatisticsDisplay();
        updatePointsDisplay();
        // Add any other interface updates here
    }
}

// Call the saveGameState function whenever the game state changes
// For example, after earning points, purchasing weapons, etc.
// You can call this function wherever you modify game state variables

// Event listener for DOMContentLoaded to initialize upgrade costs
document.addEventListener('DOMContentLoaded', function() {
    initializeUpgradeCosts();
});

window.addEventListener('DOMContentLoaded', (event) => {
    initializeSoundEffects();
});
