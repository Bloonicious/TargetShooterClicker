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

// Adjust the setNumberFormat function to update the game's number format variable
function setNumberFormat(selectedFormat) {
    if (selectedFormat && selectedFormat.value) {
        // Update the game's number format variable based on the selected format
        numberFormat = selectedFormat.value;

        // Update the display based on the selected format
        const numberElements = document.querySelectorAll('.number-format');
        numberElements.forEach(function(element) {
            const number = parseFloat(element.textContent);
            element.textContent = formatNumber(number, numberFormat);
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
    // Save achievements data
    const achievementsData = achievements.map(achievement => ({
        name: achievement.name,
        description: achievement.description,
        achieved: achievement.achieved
    }));
    var gameState = {
        achievements: achievementsData,
        statistics: statistics,
        points: points,
        weapons: weapons,
        
        touchGunCost: touchGunCost,
        touchGunPointsPerClick: touchGunPointsPerClick,
        touchGunLevel: touchGunLevel,
        
        awokenTouchGunCost: awokenTouchGunCost,
        awokenTouchGunLevel: awokenTouchGunLevel,
        
        superAwokenTouchGunCost: superAwokenTouchGunCost,
        superAwokenTouchGunLevel: superAwokenTouchGunLevel,

        
        numberFormat: numberFormat, // Add the selected number format to the game state

        // Add big upgrade data for each weapon
        touchGunPointyFingersBought: upgrades.touchGun.pointyFingers.bought,
        touchGunAmbidextrousBought: upgrades.touchGun.ambidextrous.bought,
        touchGunThousandFingersBought: upgrades.touchGun.thousandFingers.bought,
        touchGunPowerfulHandsBought: upgrades.touchGun.powerfulHands.bought,
        touchGunAntirestingCreamBought: upgrades.touchGun.antirestingCream.bought,
        touchGunAwakenBought: upgrades.touchGun.awakenUpgrade.bought,
        touchGunMillionFingersBought: upgrades.touchGun.millionFingers.bought,
        touchGunStingingTapsBought: upgrades.touchGun.stingingTaps.bought,
        touchGunGotToTapBought: upgrades.touchGun.gotToTap.bought,
        touchGunFingerSwarmBought: upgrades.touchGun.fingerSwarm.bought,
        touchGunBillionFingersBought: upgrades.touchGun.billionFingers.bought,
        touchGunNeedMoreBought: upgrades.touchGun.needMore.bought,
        touchGunFingerPistolsBought: upgrades.touchGun.fingerPistols.bought,
        touchGunSuperAwakenBought: upgrades.touchGun.superAwakenUpgrade.bought,
        touchGunTrillionFingersBought: upgrades.touchGun.trillionFingers.bought,
        
        pistolBiggerBulletsBought: upgrades.pistol.biggerBullets.bought,
        pistolLargerCalibreBought: upgrades.pistol.largerCalibre.bought,
        pistolEasierReloadingBought: upgrades.pistol.easierReloading.bought,
        pistolLouderFiringBought: upgrades.pistol.louderFiring.bought,
        pistolMetalPiercingBought: upgrades.pistol.metalPiercing.bought,
        pistolSpecializedMechanismsBought: upgrades.pistol.specializedMechanisms.bought,
        pistolFineTuningBought: upgrades.pistol.fineTuning.bought,
        pistolVersatileGunshotsBought: upgrades.pistol.versatileGunshots.bought,
        pistolEmpoweredBought: upgrades.pistol.empowered.bought,
        pistolOneHitBulletsBought: upgrades.pistol.oneHitBullets.bought,
        
        smgBetterSpreadBought: upgrades.smg.betterSpread.bought,
        smgStrongHoldBought: upgrades.smg.strongHold.bought,
        smgPressureBulletsBought: upgrades.smg.pressureBullets.bought,
        smgWickedAimerBought: upgrades.smg.wickedAimer.bought,
        smgBashingRoundsBought: upgrades.smg.bashingRounds.bought,
        smgAutoAimerBought: upgrades.smg.autoAimer.bought,
        smgLightweightBought: upgrades.smg.lightweight.bought,
        smgMetalPassersBought: upgrades.smg.metalPassers.bought,
        smgInescapableBarrageBought: upgrades.smg.inescapableBarrage.bought,
        smgNeverMissBarrageBought: upgrades.smg.neverMissBarrage.bought,
        
        shotgunMoreBarrelsBought: upgrades.shotgun.moreBarrels.bought,
        shotgunPowerfulBurstBought: upgrades.shotgun.powerfulBurst.bought,
        shotgunDevastatingBurstBought: upgrades.shotgun.devastatingBurst.bought,
        shotgunMegaBurstBought: upgrades.shotgun.megaBurst.bought,
        shotgunScattershotBought: upgrades.shotgun.scattershot.bought,
        shotgunGigaBurstBought: upgrades.shotgun.gigaBurst.bought,
        shotgunOmegaBurstBought: upgrades.shotgun.omegaBurst.bought,
        shotgunTeraBurstBought: upgrades.shotgun.teraBurst.bought,
        shotgunUltimatumBurstBought: upgrades.shotgun.ultimatumBurst.bought,
        shotgunBuckshotBought: upgrades.shotgun.buckshot.bought,
        
        sniperRifleDeadlyPrecisionBought: upgrades.sniperRifle.deadlyPrecision.bought,
        sniperRifleCripplingShotsBought: upgrades.sniperRifle.cripplingShots.bought,
        sniperRifleHeadShotBought: upgrades.sniperRifle.headShot.bought,
        sniperRifleDangerousRiflingBought: upgrades.sniperRifle.dangerousRifling.bought,
        sniperRifleLuckyShotBought: upgrades.sniperRifle.luckyShot.bought,
        sniperRifleEnhancedTracersBought: upgrades.sniperRifle.enhancedTracers.bought,
        sniperRifleInfraredScopeBought: upgrades.sniperRifle.infraredScope.bought,
        sniperRifleElectroshockTracersBought: upgrades.sniperRifle.electroshockTracers.bought,
        sniperRifleLethalTracersBought: upgrades.sniperRifle.lethalTracers.bought,
        sniperRifleHeatseekingSensorsBought: upgrades.sniperRifle.heatseekingSensors.bought,
        
        ak47HeatTippedBulletsBought: upgrades.ak47.heatTippedBullets.bought,
        ak47StaggeringBulletsBought: upgrades.ak47.staggeringBullets.bought,
        ak47RippingBulletsBought: upgrades.ak47.rippingBullets.bought,
        ak47VehementBulletsBought: upgrades.ak47.vehementBullets.bought,
        ak47OverbearingVelocityBought: upgrades.ak47.overbearingVelocity.bought,
        ak47PoweredVelocityBought: upgrades.ak47.poweredVelocity.bought,
        ak47InstantaneousVelocityBought: upgrades.ak47.instantaneousVelocity.bought,
        ak47SpikyBulletsBought: upgrades.ak47.spikyBullets.bought,
        ak47FerociousBulletsBought: upgrades.ak47.ferociousBullets.bought,
        ak47UnfathomablePressureBought: upgrades.ak47.unfathomablePressure.bought,
        
        rocketLauncherPotentRocketsBought: upgrades.rocketLauncher.potentRockets.bought,
        rocketLauncherViolentExplosionsBought: upgrades.rocketLauncher.violentExplosions.bought,
        rocketLauncherRepeatedExplosionsBought: upgrades.rocketLauncher.repeatedExplosions.bought,
        rocketLauncherBiggerExplosionsBought: upgrades.rocketLauncher.biggerExplosions.bought,
        rocketLauncherExtraGunpowderBought: upgrades.rocketLauncher.extraGunpowder.bought,
        rocketLauncherShatteringExplosionsBought: upgrades.rocketLauncher.shatteringExplosions.bought,
        rocketLauncherNapalmRocketsBought: upgrades.rocketLauncher.napalmRockets.bought,
        rocketLauncherImpulsiveExplosionsBought: upgrades.rocketLauncher.impulsiveExplosions.bought,
        rocketLauncherRampantTipsBought: upgrades.rocketLauncher.rampantTips.bought,
        rocketLauncherKamikazeBought: upgrades.rocketLauncher.kamikaze.bought,
        
        tommyGunPreciseAccuracyBought: upgrades.tommyGun.preciseAccuracy.bought,
        tommyGunTightPressureBought: upgrades.tommyGun.tightPressure.bought,
        tommyGunLessPunishingBought: upgrades.tommyGun.lessPunishing.bought,
        tommyGunPowerfulOutcomesBought: upgrades.tommyGun.powerfulOutcomes.bought,
        tommyGunVehementBurstBought: upgrades.tommyGun.vehementBurst.bought,
        tommyGunTheVectorBought: upgrades.tommyGun.theVector.bought,
        tommyGunDangerZoneBought: upgrades.tommyGun.dangerZone.bought,
        tommyGunDischargedRippersBought: upgrades.tommyGun.dischargedRippers.bought,
        tommyGunUnstoppableBarrageBought: upgrades.tommyGun.unstoppableBarrage.bought,
        tommyGunUnavoidableBought: upgrades.tommyGun.unavoidable.bought,

        doubleBarrelLethalShotsBought: upgrades.doubleBarrel.lethalShots.bought,
        doubleBarrelArcSwitchingBarrelsBought: upgrades.doubleBarrel.arcSwitchingBarrels.bought,
        doubleBarrelDoubleTroubleBought: upgrades.doubleBarrel.doubleTrouble.bought,
        doubleBarrelEnergizedBought: upgrades.doubleBarrel.energized.bought,
        doubleBarrelDoubleSwarmBought: upgrades.doubleBarrel.doubleSwarm.bought,
        doubleBarrelClumpedShotsBought: upgrades.doubleBarrel.clumpedShots.bought,
        doubleBarrelTightShotsBought: upgrades.doubleBarrel.tightShots.bought,
        doubleBarrelHeavyForceBought: upgrades.doubleBarrel.heavyForce.bought,
        doubleBarrelUnbearableForceBought: upgrades.doubleBarrel.unbearableForce.bought,
        doubleBarrelDoubleYeahBought: upgrades.doubleBarrel.doubleYeah.bought,

        uziFocussedSpreadBought: upgrades.uzi.focussedSpread.bought,
        uziQuickfiringSalvoBought: upgrades.uzi.quickfiringSalvo.bought,
        uziTinyRippersBought: upgrades.uzi.tinyRippers.bought,
        uziCircuitousSpreadBought: upgrades.uzi.circuitousSpread.bought,
        uziBulletOverloadBought: upgrades.uzi.bulletOverload.bought,
        uziBulletDrizzleBought: upgrades.uzi.bulletDrizzle.bought,
        uziAlwaysHittingBought: upgrades.uzi.alwaysHitting.bought,

        huntingRiflePowerfulHunterBought: upgrades.huntingRifle.powerfulHunter.bought,
        huntingRifleHeadHunterBought: upgrades.huntingRifle.headHunter.bought,
        huntingRifleNoEscapeBought: upgrades.huntingRifle.noEscape.bought,
        huntingRifleCriminalHunterBought: upgrades.huntingRifle.criminalHunter.bought,
        huntingRifleTargetHunterBought: upgrades.huntingRifle.targetHunter.bought,
        huntingRifleLongTracersBought: upgrades.huntingRifle.longTracers.bought,
        huntingRifleTitanicTracersBought: upgrades.huntingRifle.titanicTracers.bought,
        
        pistolFirerateUpgradeCost: pistolFirerateUpgradeCost,
        pistolPotencyUpgradeCost: pistolPotencyUpgradeCost,
        pistolFirerateLevel: pistolFirerateLevel,
        pistolPotencyLevel: pistolPotencyLevel,
        
        smgFirerateUpgradeCost: smgFirerateUpgradeCost,
        smgPotencyUpgradeCost: smgPotencyUpgradeCost,
        smgFirerateLevel: smgFirerateLevel,
        smgPotencyLevel: smgPotencyLevel,
        
        shotgunFirerateUpgradeCost: shotgunFirerateUpgradeCost,
        shotgunPotencyUpgradeCost: shotgunPotencyUpgradeCost,
        shotgunMultiFireUpgradeCost: shotgunMultiFireUpgradeCost,
        shotgunFirerateLevel: shotgunFirerateLevel,
        shotgunPotencyLevel: shotgunPotencyLevel,
        shotgunMultiFireLevel: shotgunMultiFireLevel,
        
        sniperRifleFirerateUpgradeCost: sniperRifleFirerateUpgradeCost,
        sniperRiflePotencyUpgradeCost: sniperRiflePotencyUpgradeCost,
        sniperRifleCriticalShotUpgradeCost: sniperRifleCriticalShotUpgradeCost,
        sniperRifleCriticalDamageUpgradeCost: sniperRifleCriticalDamageUpgradeCost,
        sniperRifleFirerateLevel: sniperRifleFirerateLevel,
        sniperRiflePotencyLevel: sniperRiflePotencyLevel,
        sniperRifleCriticalShotLevel: sniperRifleCriticalShotLevel,
        sniperRifleCriticalDamageLevel: sniperRifleCriticalDamageLevel,

        ak47FirerateUpgradeCost: ak47FirerateUpgradeCost,
        ak47PotencyUpgradeCost: ak47PotencyUpgradeCost,
        ak47FirerateLevel: ak47FirerateLevel,
        ak47PotencyLevel: ak47PotencyLevel,

        rocketLauncherFirerateUpgradeCost: rocketLauncherFirerateUpgradeCost,
        rocketLauncherPotencyUpgradeCost: rocketLauncherPotencyUpgradeCost,
        rocketLauncherSplashRadiusUpgradeCost: rocketLauncherSplashRadiusUpgradeCost,
        rocketLauncherSplashDamageUpgradeCost: rocketLauncherSplashDamageUpgradeCost,
        rocketLauncherFirerateLevel: rocketLauncherFirerateLevel,
        rocketLauncherPotencyLevel: rocketLauncherPotencyLevel,
        rocketLauncherSplashRadiusLevel: rocketLauncherSplashRadiusLevel,
        rocketLauncherSplashDamageLevel: rocketLauncherSplashDamageLevel,

        tommyGunFirerateUpgradeCost: tommyGunFirerateUpgradeCost,
        tommyGunPotencyUpgradeCost: tommyGunPotencyUpgradeCost,
        tommyGunAccuracyUpgradeCost: tommyGunAccuracyUpgradeCost,
        tommyGunFirerateLevel: tommyGunFirerateLevel,
        tommyGunPotencyLevel: tommyGunPotencyLevel,
        tommyGunAccuracyLevel: tommyGunPotencyLevel,

        doubleBarrelFirerateUpgradeCost: doubleBarrelFirerateUpgradeCost,
        doubleBarrelPotencyUpgradeCost: doubleBarrelPotencyUpgradeCost,
        doubleBarrelMultiFireUpgradeCost: doubleBarrelMultiFireUpgradeCost,
        doubleBarrelFirerateLevel: doubleBarrelFirerateLevel,
        doubleBarrelPotencyLevel: doubleBarrelPotencyLevel,
        doubleBarrelMultiFireLevel: doubleBarrelMultiFireLevel,

        uziFirerateUpgradeCost: uziFirerateUpgradeCost,
        uziPotencyUpgradeCost: uziPotencyUpgradeCost,
        uziFirerateLevel: uziFirerateLevel,
        uziPotencyLevel: uziPotencyLevel,

        huntingRifleFirerateUpgradeCost: huntingRifleFirerateUpgradeCost,
        huntingRiflePotencyUpgradeCost: huntingRiflePotencyUpgradeCost,
        huntingRifleCriticalShotUpgradeCost: huntingRifleCriticalShotUpgradeCost,
        huntingRifleCriticalDamageUpgradeCost: huntingRifleCriticalDamageUpgradeCost,
        huntingRifleFirerateLevel: huntingRifleFirerateLevel,
        huntingRiflePotencyLevel: huntingRiflePotencyLevel,
        huntingRifleCriticalShotLevel: huntingRifleCriticalShotLevel,
        huntingRifleCriticalDamageLevel: huntingRifleCriticalDamageLevel,

        purchasedBigUpgrades: getPurchasedBigUpgrades()
    };

    var gameStateJSON = JSON.stringify(gameState);

    localStorage.setItem('gameState', gameStateJSON);
    localStorage.setItem('selectedWeapons', JSON.stringify(selectedWeapons));
}

// Function to load the game state from local storage
function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    const savedWeapons = JSON.parse(localStorage.getItem('selectedWeapons'));
    if (savedWeapons) {
        // Update selected weapons from saved data
        selectedWeapons = savedWeapons;
        updateSelectedWeaponsDisplay();
    }
    var gameStateJSON = localStorage.getItem('gameState');
    if (gameStateJSON !== null) {
        var gameState = JSON.parse(gameStateJSON);
        if (savedState) {
            // Update statistics from loaded game state
            const savedAchievements = savedState.achievements;
            if (savedAchievements) {
                savedAchievements.forEach((savedAchievement, index) => {
                    // Check if the index exists in the achievements array
                    if (achievements[index]) {
                        // Update the achieved property
                        achievements[index].achieved = savedAchievement.achieved;
                    }
                });
            }
            if (gameState.statistics) {
                statistics = gameState.statistics;
                updateStatisticsDisplay();
            }
        }

        points = gameState.points;
        for (const weaponId in savedState.weapons) {
            if (weapons[weaponId]) {
                // Update weapon properties from saved data
                weapons[weaponId].purchased = savedState.weapons[weaponId].purchased;
                // Include other weapon properties to update as needed
            }
        }
        touchGunCost = gameState.touchGunCost,
        touchGunPointsPerClick = gameState.touchGunPointsPerClick;
        touchGunLevel = gameState.touchGunLevel;

        awokenTouchGunCost = gameState.awokenTouchGunCost;
        awokenTouchGunLevel = gameState.awokenTouchGunLevel;

        superAwokenTouchGunCost = gameState.superAwokenTouchGunCost;
        superAwokenTouchGunLevel = gameState.superAwokenTouchGunLevel;

        numberFormat = gameState.numberFormat;

        // Load big upgrade data for each weapon
        upgrades.touchGun.pointyFingers.bought = gameState.touchGunPointyFingersBought;
        upgrades.touchGun.ambidextrous.bought = gameState.touchGunAmbidextrousBought;
        upgrades.touchGun.thousandFingers.bought = gameState.touchGunThousandFingersBought;
        upgrades.touchGun.antirestingCream.bought = gameState.touchGunAntirestingCreamBought;
        upgrades.touchGun.powerfulHands.bought = gameState.touchGunPowerfulHandsBought;
        upgrades.touchGun.awakenUpgrade.bought = gameState.touchGunAwakenBought;
        upgrades.touchGun.millionFingers.bought = gameState.touchGunMillionFingersBought;
        upgrades.touchGun.stingingTaps.bought = gameState.touchGunStingingTapsBought;
        upgrades.touchGun.gotToTap.bought = gameState.touchGunGotToTapBought;
        upgrades.touchGun.fingerSwarm.bought = gameState.touchGunFingerSwarmBought;
        upgrades.touchGun.billionFingers.bought = gameState.touchGunBillionFingersBought;
        upgrades.touchGun.needMore.bought = gameState.touchGunNeedMoreBought;
        upgrades.touchGun.fingerPistols.bought = gameState.touchGunFingerPistolsBought;
        upgrades.touchGun.superAwakenUpgrade.bought = gameState.touchGunSuperAwakenBought;
        upgrades.touchGun.trillionFingers.bought = gameState.touchGunTrillionFingersBought;
        
        upgrades.pistol.biggerBullets.bought = gameState.pistolBiggerBulletsBought;
        upgrades.pistol.largerCalibre.bought = gameState.pistolLargerCalibreBought;
        upgrades.pistol.easierReloading.bought = gameState.pistolEasierReloadingBought;
        upgrades.pistol.louderFiring.bought = gameState.pistolLouderFiringBought;
        upgrades.pistol.metalPiercing.bought = gameState.pistolMetalPiercingBought;
        upgrades.pistol.specializedMechanisms.bought = gameState.pistolSpecializedMechanismsBought;
        upgrades.pistol.fineTuning.bought = gameState.pistolFineTuningBought;
        upgrades.pistol.versatileGunshots.bought = gameState.pistolVersatileGunshotsBought;
        upgrades.pistol.empowered.bought = gameState.pistolEmpoweredBought;
        upgrades.pistol.oneHitBullets.bought = gameState.pistolOneHitBulletsBought;
        
        upgrades.smg.betterSpread.bought = gameState.smgBetterSpreadBought;
        upgrades.smg.strongHold.bought = gameState.smgStrongHoldBought;
        upgrades.smg.pressureBullets.bought = gameState.smgPressureBulletsBought;
        upgrades.smg.wickedAimer.bought = gameState.smgWickedAimerBought;
        upgrades.smg.bashingRounds.bought = gameState.smgBashingRoundsBought;
        upgrades.smg.autoAimer.bought = gameState.smgAutoAimerBought;
        upgrades.smg.lightweight.bought = gameState.smgLightweightBought;
        upgrades.smg.metalPassers.bought = gameState.smgMetalPassersBought;
        upgrades.smg.inescapableBarrage.bought = gameState.smgInescapableBarrageBought;
        upgrades.smg.neverMissBarrage.bought = gameState.smgNeverMissBarrageBought;
        
        upgrades.shotgun.moreBarrels.bought = gameState.shotgunMoreBarrelsBought;
        upgrades.shotgun.powerfulBurst.bought = gameState.shotgunPowerfulBurstBought;
        upgrades.shotgun.devastatingBurst.bought = gameState.shotgunDevastatingBurstBought;
        upgrades.shotgun.megaBurst.bought = gameState.shotgunMegaBurstBought;
        upgrades.shotgun.scattershot.bought = gameState.shotgunScattershotBought;
        upgrades.shotgun.gigaBurst.bought = gameState.shotgunGigaBurstBought;
        upgrades.shotgun.omegaBurst.bought = gameState.shotgunOmegaBurstBought;
        upgrades.shotgun.teraBurst.bought = gameState.shotgunTeraBurstBought;
        upgrades.shotgun.ultimatumBurst.bought = gameState.shotgunUltimatumBurstBought;
        upgrades.shotgun.buckshot.bought = gameState.shotgunBuckshotBought;
        
        upgrades.sniperRifle.deadlyPrecision.bought = gameState.sniperRifleDeadlyPrecisionBought;
        upgrades.sniperRifle.cripplingShots.bought = gameState.sniperRifleCripplingShotsBought;
        upgrades.sniperRifle.headShot.bought = gameState.sniperRifleHeadShotBought;
        upgrades.sniperRifle.dangerousRifling.bought = gameState.sniperRifleDangerousRiflingBought;
        upgrades.sniperRifle.luckyShot.bought = gameState.sniperRifleLuckyShotBought;
        upgrades.sniperRifle.enhancedTracers.bought = gameState.sniperRifleEnhancedTracersBought;
        upgrades.sniperRifle.infraredScope.bought = gameState.sniperRifleInfraredScopeBought;
        upgrades.sniperRifle.electroshockTracers.bought = gameState.sniperRifleElectroshockTracersBought;
        upgrades.sniperRifle.lethalTracers.bought = gameState.sniperRifleLethalTracersBought;
        upgrades.sniperRifle.heatseekingSensors.bought = gameState.sniperRifleHeatseekingSensorsBought;
        
        upgrades.ak47.heatTippedBullets.bought = gameState.ak47HeatTippedBulletsBought;
        upgrades.ak47.staggeringBullets.bought = gameState.ak47StaggeringBulletsBought;
        upgrades.ak47.rippingBullets.bought = gameState.ak47RippingBulletsBought;
        upgrades.ak47.vehementBullets.bought = gameState.ak47VehementBulletsBought;
        upgrades.ak47.overbearingVelocity.bought = gameState.ak47OverbearingVelocityBought;
        upgrades.ak47.poweredVelocity.bought = gameState.ak47PoweredVelocityBought;
        upgrades.ak47.instantaneousVelocity.bought = gameState.ak47InstantaneousVelocityBought;
        upgrades.ak47.spikyBullets.bought = gameState.ak47SpikyBulletsBought;
        upgrades.ak47.ferociousBullets.bought = gameState.ak47FerociousBulletsBought;
        upgrades.ak47.unfathomablePressure.bought = gameState.ak47UnfathomablePressureBought;

        upgrades.rocketLauncher.potentRockets.bought = gameState.rocketLauncherPotentRocketsBought;
        upgrades.rocketLauncher.violentExplosions.bought = gameState.rocketLauncherViolentExplosionsBought;
        upgrades.rocketLauncher.repeatedExplosions.bought = gameState.rocketLauncherRepeatedExplosionsBought;
        upgrades.rocketLauncher.biggerExplosions.bought = gameState.rocketLauncherBiggerExplosionsBought;
        upgrades.rocketLauncher.extraGunpowder.bought = gameState.rocketLauncherExtraGunpowderBought;
        upgrades.rocketLauncher.shatteringExplosions.bought = gameState.rocketLauncherShatteringExplosionsBought;
        upgrades.rocketLauncher.napalmRockets.bought = gameState.rocketLauncherNapalmRocketsBought;
        upgrades.rocketLauncher.impulsiveExplosions.bought = gameState.rocketLauncherImpulsiveExplosionsBought;
        upgrades.rocketLauncher.rampantTips.bought = gameState.rocketLauncherRampantTipsBought;
        upgrades.rocketLauncher.kamikaze.bought = gameState.rocketLauncherKamikazeBought;

        upgrades.tommyGun.preciseAccuracy.bought = gameState.tommyGunPreciseAccuracyBought;
        upgrades.tommyGun.tightPressure.bought = gameState.tommyGunTightPressureBought;
        upgrades.tommyGun.lessPunishing.bought = gameState.tommyGunLessPunishingBought;
        upgrades.tommyGun.powerfulOutcomes.bought = gameState.tommyGunPowerfulOutcomesBought;
        upgrades.tommyGun.vehementBurst.bought = gameState.tommyGunVehementBurstBought;
        upgrades.tommyGun.theVector.bought = gameState.tommyGunTheVectorBought;
        upgrades.tommyGun.dangerZone.bought = gameState.tommyGunDangerZoneBought;
        upgrades.tommyGun.dischargedRippers.bought = gameState.tommyGunDischargedRippersBought;
        upgrades.tommyGun.unstoppableBarrage.bought = gameState.tommyGunUnstoppableBarrageBought;
        upgrades.tommyGun.unavoidable.bought = gameState.tommyGunUnavoidableBought;

        upgrades.doubleBarrel.lethalShots.bought = gameState.doubleBarrelLethalShotsBought;
        upgrades.doubleBarrel.arcSwitchingBarrels.bought = gameState.doubleBarrelArcSwitchingBarrelsBought;
        upgrades.doubleBarrel.doubleTrouble.bought = gameState.doubleBarrelDoubleTroubleBought;
        upgrades.doubleBarrel.energized.bought = gameState.doubleBarrelEnergizedBought;
        upgrades.doubleBarrel.doubleSwarm.bought = gameState.doubleBarrelDoubleSwarmBought;
        upgrades.doubleBarrel.clumpedShots.bought = gameState.doubleBarrelClumpedShotsBought;
        upgrades.doubleBarrel.tightShots.bought = gameState.doubleBarrelTightShotsBought;
        upgrades.doubleBarrel.heavyForce.bought = gameState.doubleBarrelHeavyForceBought;
        upgrades.doubleBarrel.unbearableForce.bought = gameState.doubleBarrelUnbearableForceBought;
        upgrades.doubleBarrel.doubleYeah.bought = gameState.doubleBarrelDoubleYeahBought;

        upgrades.uzi.focussedSpread.bought = gameState.uziFocussedSpreadBought;
        upgrades.uzi.quickfiringSalvo.bought = gameState.uziQuickfiringSalvoBought;
        upgrades.uzi.tinyRippers.bought = gameState.uziTinyRippersBought;
        upgrades.uzi.circuitousSpread.bought = gameState.uziCircuitousSpreadBought;
        upgrades.uzi.bulletOverload.bought = gameState.uziBulletOverloadBought;
        upgrades.uzi.bulletDrizzle.bought = gameState.uziBulletDrizzleBought;
        upgrades.uzi.alwaysHitting.bought = gameState.uziAlwaysHittingBought;

        upgrades.huntingRifle.powerfulHunter.bought = gameState.huntingRiflePowerfulHunterBought;
        upgrades.huntingRifle.headHunter.bought = gameState.huntingRifleHeadHunterBought;
        upgrades.huntingRifle.noEscape.bought = gameState.huntingRifleNoEscapeBought;
        upgrades.huntingRifle.criminalHunter.bought = gameState.huntingRifleCriminalHunterBought;
        upgrades.huntingRifle.targetHunter.bought = gameState.huntingRifleTargetHunterBought;
        upgrades.huntingRifle.longTracers.bought = gameState.huntingRifleLongTracersBought;
        upgrades.huntingRifle.titanicTracers.bought = gameState.huntingRifleTitanicTracersBought;
        
        pistolFirerateUpgradeCost = gameState.pistolFirerateUpgradeCost;
        pistolPotencyUpgradeCost = gameState.pistolPotencyUpgradeCost;
        pistolFirerateLevel = Math.min(gameState.pistolFirerateLevel, 20);
        pistolPotencyLevel = gameState.pistolPotencyLevel;
        
        smgFirerateUpgradeCost = gameState.smgFirerateUpgradeCost;
        smgPotencyUpgradeCost = gameState.smgPotencyUpgradeCost;
        smgFirerateLevel = Math.min(gameState.smgFirerateLevel, 10);
        smgPotencyLevel = gameState.smgPotencyLevel;
        
        shotgunFirerateUpgradeCost = gameState.shotgunFirerateUpgradeCost;
        shotgunPotencyUpgradeCost = gameState.shotgunPotencyUpgradeCost;
        shotgunMultiFireUpgradeCost = gameState.shotgunMultiFireUpgradeCost;
        shotgunFirerateLevel = Math.min(gameState.shotgunFirerateLevel, 15);
        shotgunPotencyLevel = gameState.shotgunPotencyLevel;
        shotgunMultiFireLevel = gameState.shotgunMultiFireLevel;
        
        sniperRifleFirerateUpgradeCost = gameState.sniperRifleFirerateUpgradeCost;
        sniperRiflePotencyUpgradeCost = gameState.sniperRiflePotencyUpgradeCost;
        sniperRifleCriticalShotUpgradeCost = gameState.sniperRifleCriticalShotUpgradeCost;
        sniperRifleCriticalDamageUpgradeCost = gameState.sniperRifleCriticalDamageUpgradeCost;
        sniperRifleFirerateLevel = Math.min(gameState.sniperRifleFirerateLevel, 10);
        sniperRiflePotencyLevel = gameState.sniperRiflePotencyLevel;
        sniperRifleCriticalShotLevel = gameState.sniperRifleCriticalShotLevel;
        sniperRifleCriticalDamageLevel = gameState.sniperRifleCriticalDamageLevel;

        ak47FirerateUpgradeCost = gameState.ak47FirerateUpgradeCost;
        ak47PotencyUpgradeCost = gameState.ak47PotencyUpgradeCost;
        ak47FirerateLevel = Math.min(gameState.ak47FirerateLevel, 15);
        ak47PotencyLevel = gameState.ak47PotencyLevel;

        rocketLauncherFirerateUpgradeCost = gameState.rocketLauncherFirerateUpgradeCost;
        rocketLauncherPotencyUpgradeCost = gameState.rocketLauncherPotencyUpgradeCost;
        rocketLauncherSplashRadiusUpgradeCost = gameState.rocketLauncherSplashRadiusUpgradeCost;
        rocketLauncherSplashDamageUpgradeCost = gameState.rocketLauncherSplashDamageUpgradeCost;
        rocketLauncherFirerateLevel = Math.min(gameState.rocketLauncherFirerateLevel, 15);
        rocketLauncherPotencyLevel = gameState.rocketLauncherPotencyLevel;
        rocketLauncherSplashRadiusLevel = Math.min(gameState.rocketLauncherSplashRadiusLevel, 5);
        rocketLauncherSplashDamageLevel = gameState.rocketLauncherSplashDamageLevel;

        tommyGunFirerateUpgradeCost = gameState.tommyGunFirerateUpgradeCost;
        tommyGunPotencyUpgradeCost = gameState.tommyGunPotencyUpgradeCost;
        tommyGunAccuracyUpgradeCost = gameState.tommyGunAccuracyUpgradeCost;
        tommyGunFirerateLevel = Math.min(gameState.tommyGunFirerateLevel, 20);
        tommyGunPotencyLevel = gameState.tommyGunPotencyLevel;
        tommyGunAccuracyLevel = gameState.tommyGunAccuracyLevel;

        doubleBarrelFirerateUpgradeCost = gameState.doubleBarrelFirerateUpgradeCost;
        doubleBarrelPotencyUpgradeCost = gameState.doubleBarrelPotencyUpgradeCost;
        doubleBarrelMultiFireUpgradeCost = gameState.doubleBarrelMultiFireUpgradeCost;
        doubleBarrelFirerateLevel = Math.min(gameState.doubleBarrelFirerateLevel, 25);
        doubleBarrelPotencyLevel = gameState.doubleBarrelPotencyLevel;
        doubleBarrelMultiFireLevel = gameState.doubleBarrelMultiFireLevel;

        uziFirerateUpgradeCost = gameState.uziFirerateUpgradeCost;
        uziPotencyUpgradeCost = gameState.uziPotencyUpgradeCost;
        uziFirerateLevel = Math.min(gameState.uziFirerateLevel, 10);
        uziPotencyLevel = gameState.uziPotencyLevel;

        huntingRifleFirerateUpgradeCost = gameState.huntingRifleFirerateUpgradeCost;
        huntingRiflePotencyUpgradeCost = gameState.huntingRiflePotencyUpgradeCost;
        huntingRifleCriticalShotUpgradeCost = gameState.huntingRifleCriticalShotUpgradeCost;
        huntingRifleCriticalDamageUpgradeCost = gameState.huntingRifleCriticalDamageUpgradeCost;
        huntingRifleFirerateLevel = Math.min(gameState.huntingRifleFirerateLevel, 15);
        huntingRiflePotencyLevel = gameState.huntingRiflePotencyLevel;
        huntingRifleCriticalShotLevel = gameState.huntingRifleCriticalShotLevel;
        huntingRifleCriticalDamageLevel = gameState.huntingRifleCriticalDamageLevel;

        // Load the purchased big upgrades interface
        loadPurchasedBigUpgrades(gameState.purchasedBigUpgrades);

        // Call the setNumberFormat function to update the display based on the loaded format
        setNumberFormat();

        // Update the interface
        updatePointsDisplay();

        // Update achievements and statistics display
        updateAchievements();
        updateStatistics();

        // Array of weapon IDs
        const weaponIds = ['pistol', 'smg', 'shotgun', 'sniperRifle', 'ak47', 'rocketLauncher', 'tommyGun', 'doubleBarrel', 'uzi', 'huntingRifle'];

        // Iterate over each weapon ID
        weaponIds.forEach(weaponId => {
            // Check if the weapon is purchased
            if (weapons.hasOwnProperty(weaponId) && weapons[weaponId].purchased) {
                // Hide the purchase button for the corresponding weapon
                document.getElementById(`${weaponId}-purchase`).style.display = 'none';
                // Update cost display
                document.getElementById(`${weaponId}-cost`).textContent = formatNumber(weapons[weaponId].cost);
            }
        });
    
        // Update firerate value display
        if (weapon.stats && weapon.stats.fireRate) {
            document.getElementById(`${weaponId}Firerate-value`).textContent = weapon.stats.fireRate + 'ms';
        }
    
        // Update potency value display
        if (weapon.stats && weapon.stats.pointsPerShot) {
            document.getElementById(`${weaponId}Potency-value`).textContent = formatNumber(weapon.stats.pointsPerShot);
        }

        // Update hp value display
        if (weapon.stats && weapon.stats.hp) {
            document.getElementById(`${weaponId}HP-value`).textContent = formatNumber(weapon.stats.hp);
        }

        // Update damage value display
        if (weapon.stats && weapon.stats.damage) {
            document.getElementById(`${weaponId}Damage-value`).textContent = formatNumber(weapon.stats.damage);
        }

        // Update range value display
        if (weapon.stats && weapon.stats.range) {
            document.getElementById(`${weaponId}Range-value`).textContent = formatNumber(weapon.stats.range);
        }

        // Update attack rate display
        if (weapon.stats && weapon.stats.fireRate) {
            document.getElementById(`${weaponId}AttackRate-value`).textContent = weapon.stats.fireRate + 'ms';
        }

        // Calculate and update other values
        const firerateValue = weapon.stats && weapon.stats.fireRate ? weapon.stats.fireRate : 0;
        const potencyValue = weapon.stats && weapon.stats.pointsPerShot ? weapon.stats.pointsPerShot : 0;
        const pointsPerSecond = (potencyValue / firerateValue) * 1000;
        let damagePerSecond = 0;

        if (weapon.stats && weapon.stats.damage) {
            const bulletsPerShot = weapon.stats.bulletsPerShot || 1;
            damagePerSecond = (weapon.stats.damage * bulletsPerShot / firerateValue) * 1000;
        }

        // Update firerate and potency display for each weapon
        document.getElementById('touchGun-cost').textContent = formatNumber(touchGunCost);
        document.getElementById('touchGun-level').textContent = touchGunLevel;
        document.getElementById('touchGun-points-per-click').textContent = formatNumber(touchGunPointsPerClick);

        document.getElementById('touchGunAwaken-cost').textContent = formatNumber(awokenTouchGunCost);
        document.getElementById('touchGunAwaken-level').textContent = awokenTouchGunLevel;
        document.getElementById('touchGunAwaken-purchase').style.display = 'none';
        document.getElementById('touchGunAwaken-display').style.display = 'none';

        document.getElementById('touchGunSuperAwaken-cost').textContent = formatNumber(superAwokenTouchGunCost);
        document.getElementById('touchGunSuperAwaken-level').textContent = superAwokenTouchGunLevel;
        document.getElementById('touchGunSuperAwaken-purchase').style.display = 'none';
        document.getElementById('touchGunSuperAwaken-display').style.display = 'none';
    
        document.getElementById('pistolFirerate-cost').textContent = formatNumber(pistolFirerateUpgradeCost);
        document.getElementById('pistolPotency-cost').textContent = formatNumber(pistolPotencyUpgradeCost);
        document.getElementById('pistolFirerate-level').textContent = pistolFirerateLevel;
        document.getElementById('pistolPotency-level').textContent = pistolPotencyLevel;
    
        document.getElementById('smgFirerate-cost').textContent = formatNumber(smgFirerateUpgradeCost);
        document.getElementById('smgPotency-cost').textContent = formatNumber(smgPotencyUpgradeCost);
        document.getElementById('smgFirerate-level').textContent = smgFirerateLevel;
        document.getElementById('smgPotency-level').textContent = smgPotencyLevel;
    
        document.getElementById('shotgunFirerate-cost').textContent = formatNumber(shotgunFirerateUpgradeCost);
        document.getElementById('shotgunPotency-cost').textContent = formatNumber(shotgunPotencyUpgradeCost);
        document.getElementById('shotgunMultiFire-cost').textContent = formatNumber(shotgunMultiFireUpgradeCost);
        document.getElementById('shotgunFirerate-level').textContent = shotgunFirerateLevel;
        document.getElementById('shotgunPotency-level').textContent = shotgunPotencyLevel;
        document.getElementById('shotgunMultiFire-level').textContent = shotgunMultiFireLevel;
    
        document.getElementById('sniperRifleFirerate-cost').textContent = formatNumber(sniperRifleFirerateUpgradeCost);
        document.getElementById('sniperRiflePotency-cost').textContent = formatNumber(sniperRiflePotencyUpgradeCost);
        document.getElementById('sniperRifleCriticalShot-cost').textContent = formatNumber(sniperRifleCriticalShotUpgradeCost);
        document.getElementById('sniperRifleCriticalDamage-cost').textContent = formatNumber(sniperRifleCriticalDamageUpgradeCost);
        document.getElementById('sniperRifleFirerate-level').textContent = sniperRifleFirerateLevel;
        document.getElementById('sniperRiflePotency-level').textContent = sniperRiflePotencyLevel;
        document.getElementById('sniperRifleCriticalShot-level').textContent = sniperRifleCriticalShotLevel;
        document.getElementById('sniperRifleCriticalDamage-level').textContent = sniperRifleCriticalDamageLevel;

        document.getElementById('ak47Firerate-cost').textContent = formatNumber(ak47FirerateUpgradeCost);
        document.getElementById('ak47Potency-cost').textContent = formatNumber(ak47PotencyUpgradeCost);
        document.getElementById('ak47Firerate-level').textContent = ak47FirerateLevel;
        document.getElementById('ak47Potency-level').textContent = ak47PotencyLevel;

        document.getElementById('rocketLauncherFirerate-cost').textContent = formatNumber(rocketLauncherFirerateUpgradeCost);
        document.getElementById('rocketLauncherPotency-cost').textContent = formatNumber(rocketLauncherPotencyUpgradeCost);
        document.getElementById('rocketLauncherSplashRadius-cost').textContent = formatNumber(rocketLauncherSplashRadiusUpgradeCost);
        document.getElementById('rocketLauncherSplashDamage-cost').textContent = formatNumber(rocketLauncherSplashDamageUpgradeCost);
        document.getElementById('rocketLauncherFirerate-level').textContent = rocketLauncherFirerateLevel;
        document.getElementById('rocketLauncherPotency-level').textContent = rocketLauncherPotencyLevel;
        document.getElementById('rocketLauncherSplashRadius-level').textContent = rocketLauncherSplashRadiusLevel;
        document.getElementById('rocketLauncherSplashDamage-level').textContent = rocketLauncherSplashDamageLevel;

        document.getElementById('tommyGunFirerate-cost').textContent = formatNumber(tommyGunFirerateUpgradeCost);
        document.getElementById('tommyGunPotency-cost').textContent = formatNumber(tommyGunPotencyUpgradeCost);
        document.getElementById('tommyGunAccuracy-cost').textContent = formatNumber(tommyGunAccuracyUpgradeCost);
        document.getElementById('tommyGunFirerate-level').textContent = tommyGunFirerateLevel;
        document.getElementById('tommyGunPotency-level').textContent = tommyGunPotencyLevel;
        document.getElementById('tommyGunAccuracy-level').textContent = tommyGunAccuracyLevel;

        document.getElementById('doubleBarrelFirerate-cost').textContent = formatNumber(doubleBarrelFirerateUpgradeCost);
        document.getElementById('doubleBarrelPotency-cost').textContent = formatNumber(doubleBarrelPotencyUpgradeCost);
        document.getElementById('doubleBarrelMultiFire-cost').textContent = formatNumber(doubleBarrelMultiFireUpgradeCost);
        document.getElementById('doubleBarrelFirerate-level').textContent = doubleBarrelFirerateLevel;
        document.getElementById('doubleBarrelPotency-level').textContent = doubleBarrelPotencyLevel;
        document.getElementById('doubleBarrelMultiFire-level').textContent = doubleBarrelMultiFireLevel;

        document.getElementById('uziFirerate-cost').textContent = formatNumber(uziFirerateUpgradeCost);
        document.getElementById('uziPotency-cost').textContent = formatNumber(uziPotencyUpgradeCost);
        document.getElementById('uziFirerate-level').textContent = uziFirerateLevel;
        document.getElementById('uziPotency-level').textContent = uziPotencyLevel;

        document.getElementById('huntingRifleFirerate-cost').textContent = formatNumber(huntingRifleFirerateUpgradeCost);
        document.getElementById('huntingRiflePotency-cost').textContent = formatNumber(huntingRiflePotencyUpgradeCost);
        document.getElementById('huntingRifleCriticalShot-cost').textContent = formatNumber(huntingRifleCriticalShotUpgradeCost);
        document.getElementById('huntingRifleCriticalDamage-cost').textContent = formatNumber(huntingRifleCriticalDamageUpgradeCost);
        document.getElementById('huntingRifleFirerate-level').textContent = huntingRifleFirerateLevel;
        document.getElementById('huntingRiflePotency-level').textContent = huntingRiflePotencyLevel;
        document.getElementById('huntingRifleCriticalShot-level').textContent = huntingRifleCriticalShotLevel;
        document.getElementById('huntingRifleCriticalDamage-level').textContent = huntingRifleCriticalDamageLevel;

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
        if (uziFirerateLevel === 10) {
            const uziFirerateLevelDisplay = document.getElementById('uziFirerate-level');
            if (uziFirerateLevelDisplay) {
                uziFirerateLevelDisplay.textContent = "Max";
            }
            const uziFirerateCostDisplay = document.getElementById('uziFirerate-cost');
            if (uziFirerateCostDisplay) {
                uziFirerateCostDisplay.textContent = "MAX";
            }
        }
        if (huntingRifleFirerateLevel === 15) {
            const huntingRifleFirerateLevelDisplay = document.getElementById('huntingRifleFirerate-level');
            if (huntingRifleFirerateLevelDisplay) {
                huntingRifleFirerateLevelDisplay.textContent = "Max";
            }
            const huntingRifleFirerateCostDisplay = document.getElementById('huntingRifleFirerate-cost');
            if (huntingRifleFirerateCostDisplay) {
                huntingRifleFirerateCostDisplay.textContent = "MAX";
            }
        }
        if (upgrades.touchGun.awakenUpgrade.bought) {
            document.getElementById('touchGunAwaken-purchase').style.display = 'block';
            document.getElementById('touchGunAwaken-display').style.display = 'block';
        }
        if (upgrades.touchGun.superAwakenUpgrade.bought) {
            document.getElementById('touchGunSuperAwaken-purchase').style.display = 'block';
            document.getElementById('touchGunSuperAwaken-display').style.display = 'block';
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
        gameplayPoints = 0;
        // Reset achievements
        achievements.forEach(achievement => {
            achievement.achieved = false;
        });
        statistics = {
            totalLifetimePoints: 0,
            totalBigUpgradesPurchased: 0,
            totalPotencyUpgrades: 0,
            totalFirerateUpgrades: 0,
            totalMultiFireUpgrades: 0,
            totalAccuracyUpgrades: 0,
            totalCriticalShotUpgrades: 0,
            totalCriticalDamageUpgrades: 0,
            totalSplashRadiusUpgrades: 0,
            totalSplashDamageUpgrades: 0
        };
        selectedWeapons = {};
        for (const weaponId in savedState.weapons) {
            if (weapons[weaponId]) {
                // Update weapon properties from saved data
                weapons[weaponId].purchased = savedState.weapons[weaponId].purchased;

                // Mark the weapon as unpurchased
                weapons[weaponId].purchased = false;

                // Include other weapon properties to update as needed
            }
        }
        touchGunCost = 100;
        touchGunPointsPerClick = 1;
        touchGunLevel = 0;

        awokenTouchGunCost = 500000;
        awokenTouchGunLevel = 0;

        superAwokenTouchGunCost = 500000000000;
        superAwokenTouchGunLevel = 0;

        numberFormat = 'standard';

        // Array of weapon IDs
        const weaponIds = ['pistol', 'smg', 'shotgun', 'sniperRifle', 'ak47', 'rocketLauncher', 'tommyGun', 'doubleBarrel', 'uzi', 'huntingRifle'];

        // Iterate over each weapon ID
        weaponIds.forEach(weaponId => {
            // Make the purchase button visible for the corresponding weapon
            document.getElementById(`${weaponId}-purchase`).style.display = 'block';
        });

        // Reset big upgrades
        upgrades.touchGun.pointyFingers.bought = false;
        upgrades.touchGun.ambidextrous.bought = false;
        upgrades.touchGun.thousandFingers.bought = false;
        upgrades.touchGun.antirestingCream.bought = false;
        upgrades.touchGun.powerfulHands.bought = false;
        upgrades.touchGun.awakenUpgrade.bought = false;
        upgrades.touchGun.millionFingers.bought = false;
        upgrades.touchGun.stingingTaps.bought = false;
        upgrades.touchGun.gotToTap.bought = false;
        upgrades.touchGun.fingerSwarm.bought = false;
        upgrades.touchGun.billionFingers.bought = false;
        upgrades.touchGun.needMore.bought = false;
        upgrades.touchGun.fingerPistols.bought = false;
        upgrades.touchGun.superAwakenUpgrade.bought = false;
        upgrades.touchGun.trillionFingers.bought = false;
        
        upgrades.pistol.biggerBullets.bought = false;
        upgrades.pistol.largerCalibre.bought = false;
        upgrades.pistol.easierReloading.bought = false;
        upgrades.pistol.louderFiring.bought = false;
        upgrades.pistol.metalPiercing.bought = false;
        upgrades.pistol.specializedMechanisms.bought = false;
        upgrades.pistol.fineTuning.bought = false;
        upgrades.pistol.versatileGunshots.bought = false;
        upgrades.pistol.empowered.bought = false;
        upgrades.pistol.oneHitBullets.bought = false;
        
        upgrades.smg.betterSpread.bought = false;
        upgrades.smg.strongHold.bought = false;
        upgrades.smg.pressureBullets.bought = false;
        upgrades.smg.wickedAimer.bought = false;
        upgrades.smg.bashingRounds.bought = false;
        upgrades.smg.autoAimer.bought = false;
        upgrades.smg.lightweight.bought = false;
        upgrades.smg.metalPassers.bought = false;
        upgrades.smg.inescapableBarrage.bought = false;
        upgrades.smg.neverMissBarrage.bought = false;
        
        upgrades.shotgun.moreBarrels.bought = false;
        upgrades.shotgun.powerfulBurst.bought = false;
        upgrades.shotgun.devastatingBurst.bought = false;
        upgrades.shotgun.megaBurst.bought = false;
        upgrades.shotgun.scattershot.bought = false;
        upgrades.shotgun.gigaBurst.bought = false;
        upgrades.shotgun.omegaBurst.bought = false;
        upgrades.shotgun.teraBurst.bought = false;
        upgrades.shotgun.ultimatumBurst.bought = false;
        upgrades.shotgun.buckshot.bought = false;
        
        upgrades.sniperRifle.deadlyPrecision.bought = false;
        upgrades.sniperRifle.cripplingShots.bought = false;
        upgrades.sniperRifle.headShot.bought = false;
        upgrades.sniperRifle.dangerousRifling.bought = false;
        upgrades.sniperRifle.luckyShot.bought = false;
        upgrades.sniperRifle.enhancedTracers.bought = false;
        upgrades.sniperRifle.infraredScope.bought = false;
        upgrades.sniperRifle.electroshockTracers.bought = false;
        upgrades.sniperRifle.lethalTracers.bought = false;
        upgrades.sniperRifle.heatseekingSensors.bought = false;
        
        upgrades.ak47.heatTippedBullets.bought = false;
        upgrades.ak47.staggeringBullets.bought = false;
        upgrades.ak47.rippingBullets.bought = false;
        upgrades.ak47.vehementBullets.bought = false;
        upgrades.ak47.overbearingVelocity.bought = false;
        upgrades.ak47.poweredVelocity.bought = false;
        upgrades.ak47.instantaneousVelocity.bought = false;
        upgrades.ak47.spikyBullets.bought = false;
        upgrades.ak47.ferociousBullets.bought = false;
        upgrades.ak47.unfathomablePressure.bought = false;

        upgrades.rocketLauncher.potentRockets.bought = false;
        upgrades.rocketLauncher.violentExplosions.bought = false;
        upgrades.rocketLauncher.repeatedExplosions.bought = false;
        upgrades.rocketLauncher.biggerExplosions.bought = false;
        upgrades.rocketLauncher.extraGunpowder.bought = false;
        upgrades.rocketLauncher.shatteringExplosions.bought = false;
        upgrades.rocketLauncher.napalmRockets.bought = false;
        upgrades.rocketLauncher.impulsiveExplosions.bought = false;
        upgrades.rocketLauncher.rampantTips.bought = false;
        upgrades.rocketLauncher.kamikaze.bought = false;

        upgrades.tommyGun.preciseAccuracy.bought = false;
        upgrades.tommyGun.tightPressure.bought = false;
        upgrades.tommyGun.lessPunishing.bought = false;
        upgrades.tommyGun.powerfulOutcomes.bought = false;
        upgrades.tommyGun.vehementBurst.bought = false;
        upgrades.tommyGun.theVector.bought = false;
        upgrades.tommyGun.dangerZone.bought = false;
        upgrades.tommyGun.dischargedRippers.bought = false;
        upgrades.tommyGun.unstoppableBarrage.bought = false;
        upgrades.tommyGun.unavoidable.bought = false;

        upgrades.doubleBarrel.lethalShots.bought = false;
        upgrades.doubleBarrel.arcSwitchingBarrels.bought = false;
        upgrades.doubleBarrel.doubleTrouble.bought = false;
        upgrades.doubleBarrel.energized.bought = false;
        upgrades.doubleBarrel.doubleSwarm.bought = false;
        upgrades.doubleBarrel.clumpedShots.bought = false;
        upgrades.doubleBarrel.tightShots.bought = false;
        upgrades.doubleBarrel.heavyForce.bought = false;
        upgrades.doubleBarrel.unbearableForce.bought = false;
        upgrades.doubleBarrel.doubleYeah.bought = false;

        upgrades.uzi.focussedSpread.bought = false;
        upgrades.uzi.quickfiringSalvo.bought = false;
        upgrades.uzi.tinyRippers.bought = false;
        upgrades.uzi.circuitousSpread.bought = false;
        upgrades.uzi.bulletOverload.bought = false;
        upgrades.uzi.bulletDrizzle.bought = false;
        upgrades.uzi.alwaysHitting.bought = false;

        upgrades.huntingRifle.powerfulHunter.bought = false;
        upgrades.huntingRifle.headHunter.bought = false;
        upgrades.huntingRifle.noEscape.bought = false;
        upgrades.huntingRifle.criminalHunter.bought = false;
        upgrades.huntingRifle.targetHunter.bought = false;
        upgrades.huntingRifle.longTracers.bought = false;
        upgrades.huntingRifle.titanicTracers.bought = false;
        
        pistolFirerateUpgradeCost = 50;
        pistolPotencyUpgradeCost = 100;
        pistolFirerateLevel = 0;
        pistolPotencyLevel = 0;
        
        smgFirerateUpgradeCost = 600;
        smgPotencyUpgradeCost = 1200;
        smgFirerateLevel = 0;
        smgPotencyLevel = 0;
        
        shotgunFirerateUpgradeCost = 5000;
        shotgunPotencyUpgradeCost = 10000;
        shotgunMultiFireUpgradeCost = 25000;
        shotgunFirerateLevel = 0;
        shotgunPotencyLevel = 0;
        shotgunMultiFireLevel = 0;
        
        sniperRifleFirerateUpgradeCost = 37500;
        sniperRiflePotencyUpgradeCost = 75000;
        sniperRifleCriticalShotUpgradeCost = 75000;
        sniperRifleCriticalDamageUpgradeCost = 250000;
        sniperRifleFirerateLevel = 0;
        sniperRiflePotencyLevel = 0;
        sniperRifleCriticalShotLevel = 0;
        sniperRifleCriticalDamageLevel = 0;

        ak47FirerateUpgradeCost = 175000;
        ak47PotencyUpgradeCost = 250000;
        ak47FirerateLevel = 0;
        ak47PotencyLevel = 0;

        rocketLauncherFirerateUpgradeCost = 1000000;
        rocketLauncherPotencyUpgradeCost = 750000;
        rocketLauncherSplashRadiusUpgradeCost = 10000000;
        rocketLauncherSplashDamageUpgradeCost = 5000000;
        rocketLauncherFirerateLevel = 0;
        rocketLauncherPotencyLevel = 0;
        rocketLauncherSplashRadiusLevel = 0;
        rocketLauncherSplashDamageLevel = 0;

        tommyGunFirerateUpgradeCost = 15000000;
        tommyGunPotencyUpgradeCost = 10000000;
        tommyGunAccuracyUpgradeCost = 20000000;
        tommyGunFirerateLevel = 0;
        tommyGunPotencyLevel = 0;
        tommyGunAccuracyLevel = 0;

        doubleBarrelMultiFireUpgradeCost = 150000000;
        doubleBarrelFirerateUpgradeCost = 80000000;
        doubleBarrelPotencyUpgradeCost = 60000000;
        doubleBarrelFirerateLevel = 0;
        doubleBarrelPotencyLevel = 0;
        doubleBarrelMultiFireLevel = 0;

        uziFirerateUpgradeCost = 1500000000;
        uziPotencyUpgradeCost = 1000000000;
        uziFirerateLevel = 0;
        uziPotencyLevel = 0;

        huntingRifleFirerateUpgradeCost = 8000000000;
        huntingRiflePotencyUpgradeCost = 6000000000;
        huntingRifleCriticalShotUpgradeCost = 20000000000;
        huntingRifleCriticalDamageUpgradeCost = 30000000000;
        huntingRifleFirerateLevel = 0;
        huntingRiflePotencyLevel = 0;
        huntingRifleCriticalShotLevel = 0;
        huntingRifleCriticalDamageLevel = 0;

        clearInterval(pistolFireRate);
        clearInterval(smgFireRate);
        clearInterval(shotgunFireRate);
        clearInterval(sniperRifleFireRate);
        clearInterval(ak47FireRate);
        clearInterval(rocketLauncherFireRate);
        clearInterval(tommyGunFireRate);
        clearInterval(doubleBarrelFireRate);
        clearInterval(uziFireRate);
        clearInterval(huntingRifleFireRate);

        // Update the interfaces
        updatePointsDisplay();
        updateAchievements();
        updateStatistics();
        updateSelectedWeaponsDisplay();
        saveGameState();
        // Add any other interface updates here
    }
}

// Call the saveGameState function whenever the game state changes
// For example, after earning points, purchasing weapons, etc.
// You can call this function wherever you modify game state variables

// Event listeners to call in initialization of those in-game functions
document.addEventListener('DOMContentLoaded', function() {
    initializeUpgradeCosts();
    initializeAchievements();
    initializeStatistics();
    initializeBattle();
});

window.addEventListener('DOMContentLoaded', (event) => {
    initializeSoundEffects();
});
