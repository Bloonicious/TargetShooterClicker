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

// Function to set localization based on the language settings
function setLocalization() {
    var language = document.getElementById("language-select").value;

    // Translations for points
    var pointsTranslations = {
        english: "Points: ",
        spanish: "Puntos: ",
        french: "Points: ",
        polish: "Punkty: "
    };

    // Update the points header texts
    var pointsHeaders = document.querySelectorAll("#score h2");
        pointsHeaders.forEach(function(pointsHeader) {
        pointsHeader.textContent = pointsTranslations[language];
    });

    // Update the points counter values
    var mainPointsCounter = document.getElementById("score-value-main");
    var upgradesPointsCounter = document.getElementById("score-value-upgrades");

    // Get the current points values
    var mainPointsValue = parseInt(mainPointsCounter.textContent);
    var upgradesPointsValue = parseInt(upgradesPointsCounter.textContent);

    // Set the updated points counter values
    mainPointsCounter.textContent = mainPointsValue.toString();
    upgradesPointsCounter.textContent = upgradesPointsValue.toString();
    
    // Translations for touch gun button
    var touchGunButton = document.getElementById("earn-points-button");
    var touchGunTranslations = {
        english: "Fire Touch Gun!",
        spanish: "¡Dispara la pistola táctil!",
        french: "Tirez avec le pistolet tactile !",
        polish: "Ogień Touch Gun!"
    };
    touchGunButton.textContent = touchGunTranslations[language];

    // Translations for tab buttons
    var tabButtons = document.querySelectorAll(".tab-button");
    var tabTranslations = {
        main: { english: "Main", spanish: "Principal", french: "Principal", polish: "Główny" },
        upgrades: { english: "Upgrades", spanish: "Mejoras", french: "Améliorations", polish: "Ulepszenia" },
        battle: { english: "Battle", spanish: "Batalla", french: "Bataille", polish: "Bitwa" },
        tutorial: { english: "Tutorial", spanish: "Tutorial", french: "Tutoriel", polish: "Samouczek" },
        changelog: { english: "Changelog", spanish: "Registro de cambios", french: "Journal des modifications", polish: "Dziennik zmian" },
        settings: { english: "Settings", spanish: "Ajustes", french: "Paramètres", polish: "Ustawienia" },
        achievements: { english: "Achievements", spanish: "Logros", french: "Réalisations", polish: "Osiągnięcia" },
        statistics: { english: "Statistics", spanish: "Estadísticas", french: "Statistiques", polish: "Statystyki" },
        prestige: { english: "Prestige", spanish: "Prestigio", french: "Prestige", polish: "Prestiż" }
    };

    // Usage example:
    var weaponName = translateWeaponName("pistol", language);
    console.log(weaponName); // Output: Pistol

    tabButtons.forEach(function(tabButton) {
        var tab = tabButton.dataset.tab;
        if (tabTranslations[tab] && tabTranslations[tab][language]) {
            tabButton.textContent = tabTranslations[tab][language];
        }
    });

    // Translations for purchase buttons, upgrade buttons, and level displays
    var purchaseButtons = document.querySelectorAll(".purchase-button");
    var upgradeButtons = document.querySelectorAll(".upgrade-button");
    var levelDisplays = document.querySelectorAll(".level-display");

    var purchaseButtonTranslations = {
        english: "Purchase",
        spanish: "Comprar",
        french: "Acheter",
        polish: "Zakupić"
    };

    var upgradeButtonTranslations = {
        english: "Upgrade",
        spanish: "Mejorar",
        french: "Améliorer",
        polish: "Ulepszenie"
    };

    // Translation for stat names based on language and weaponId
    var statTranslations = {
        firerate: { english: "Firerate Level:", spanish: "Nivel de Cadencia:", french: "Niveau de Cadence:", polish: "Poziom szybkostrzelności:" },
        potency: { english: "Potency Level:", spanish: "Nivel de Potencia:", french: "Niveau de Puissance:", polish: "Poziom potencji:" },
        pps: { english: "Points Per Second:", spanish: "Puntos Por Segundo:", french: "Points Par Seconde:", polish: "Punkty na sekundę:" }
    };

    purchaseButtons.forEach(function(button) {
        button.textContent = purchaseButtonTranslations[language] + " " + button.dataset.weapon;
    });

    upgradeButtons.forEach(function(button) {
        button.textContent = upgradeButtonTranslations[language] + " " + button.dataset.upgrade;
    });

    levelDisplays.forEach(function(display) {
        var weaponId = display.id.split("-")[0];
        var upgradeType = display.dataset.upgradeType;
        display.textContent = statTranslations[upgradeType][language] + " " + display.querySelector("span").textContent;
    });

    // Add more translations for other elements as needed
}

// Function to translate weapon names
function translateWeaponName(weaponId, language) {
    var weapons = {
        "pistol": { name: { english: "Pistol", spanish: "Pistola", french: "Pistolet", polish: "Pistolet" } },
        "smg": { name: { english: "SMG", spanish: "Subfusil", french: "Mitraillette", polish: "PM" } },
        "shotgun": { name: { english: "Shotgun", spanish: "Escopeta", french: "Fusil à pompe", polish: "Strzelba" } },
        "sniperRifle": { name: { english: "Sniper Rifle", spanish: "Rifle de francotirador", french: "Fusil de précision", polish: "Karabin snajperski" } },
        "ak47": { name: { english: "AK-47", spanish: "AK-47", french: "AK-47", polish: "AK-47" } },
        "rocketLauncher": { name: { english: "Rocket Launcher", spanish: "Lanzacohetes", french: "Lance-roquettes", polish: "Wyrzutnia rakiet" } },
        "tommyGun": { name: { english: "Tommy Gun", spanish: "Tommy Gun", french: "Fusil-mitrailleur Thompson", polish: "Tommy Gun" } },
        "doubleBarrel": { name: { english: "Double Barrel", spanish: "Doble cañón", french: "Fusil à double canon", polish: "Podwójna lufa" } },
        "uzi": { name: { english: "Uzi", spanish: "Uzi", french: "Uzi", polish: "Uzi" } },
        "huntingRifle": { name: { english: "Hunting Rifle", spanish: "Rifle de caza", french: "Fusil de chasse", polish: "Karabin myśliwski" } }
    };

    // Check if the weaponId exists and has a translation for the given language
    if (weapons[weaponId] && weapons[weaponId].name[language]) {
        return weapons[weaponId].name[language];
    } else {
        // If translation doesn't exist, return the default English name
        return weapons[weaponId].name.english;
    }
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
        
        touchGunCost: touchGunCost,
        touchGunPointsPerClick: touchGunPointsPerClick,
        touchGunLevel: touchGunLevel,
        
        awokenTouchGunCost: awokenTouchGunCost,
        awokenTouchGunLevel: awokenTouchGunLevel,
        
        superAwokenTouchGunCost: superAwokenTouchGunCost,
        superAwokenTouchGunLevel: superAwokenTouchGunLevel,

        numberFormat: numberFormat, // Add the selected number format to the game state
        prestigeLevel: parseInt(localStorage.getItem('prestigeLevel')) || 0,

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
        touchGunHeavyFingersBought: upgrades.touchGun.heavyFingers.bought,
        touchGunMagicHandsBought: upgrades.touchGun.magicHands.bought,
        
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
        uziCantDodgeThisBought: upgrades.uzi.cantDodgeThis.bought,
        uziBulletFletcherBought: upgrades.uzi.bulletFletcher.bought,
        uziEasyToUseBought: upgrades.uzi.easyToUse.bought,

        huntingRiflePowerfulHunterBought: upgrades.huntingRifle.powerfulHunter.bought,
        huntingRifleHeadHunterBought: upgrades.huntingRifle.headHunter.bought,
        huntingRifleNoEscapeBought: upgrades.huntingRifle.noEscape.bought,
        huntingRifleCriminalHunterBought: upgrades.huntingRifle.criminalHunter.bought,
        huntingRifleTargetHunterBought: upgrades.huntingRifle.targetHunter.bought,
        huntingRifleLongTracersBought: upgrades.huntingRifle.longTracers.bought,
        huntingRifleTitanicTracersBought: upgrades.huntingRifle.titanicTracers.bought,
        huntingRifleBeastHunterBought: upgrades.huntingRifle.beastHunter.bought,
        huntingRifleMarkedTracersBought: upgrades.huntingRifle.markedTracers.bought,
        huntingRifleMasterHuntingBought: upgrades.huntingRifle.masterHunting.bought,
        
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

    localStorage.setItem('weapons', JSON.stringify(weapons));
    localStorage.setItem('enemies', JSON.stringify(enemies));
    localStorage.setItem('gameState', gameStateJSON);
}

// Function to load the game state from local storage
function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
        let storedWeapons = localStorage.getItem('weapons');
        let storedEnemies = localStorage.getItem('enemies');

        if (storedWeapons) {
            weapons = JSON.parse(storedWeapons);
        }

        if (storedEnemies) {
            enemies = JSON.parse(storedEnemies);
        }
        // Update statistics from loaded game state
        const savedAchievements = savedState.achievements;
        if (savedAchievements) {
            savedAchievements.forEach((savedAchievement, index) => {
                if (achievements[index]) {
                    achievements[index].achieved = savedAchievement.achieved;
                }
            });
        }
        // Update prestige from loaded game state
        const currentPrestigeLevel = savedState.prestigeLevel || 0;
        localStorage.setItem('prestigeLevel', currentPrestigeLevel);

        if (savedState.statistics) {
            statistics = savedState.statistics;
            updateStatisticsDisplay();
        }
        
        points = savedState.points;
        
        touchGunCost = savedState.touchGunCost,
        touchGunPointsPerClick = savedState.touchGunPointsPerClick;
        touchGunLevel = savedState.touchGunLevel;

        awokenTouchGunCost = savedState.awokenTouchGunCost;
        awokenTouchGunLevel = savedState.awokenTouchGunLevel;

        superAwokenTouchGunCost = savedState.superAwokenTouchGunCost;
        superAwokenTouchGunLevel = savedState.superAwokenTouchGunLevel;

        numberFormat = savedState.numberFormat;

        // Load big upgrade data for each weapon
        upgrades.touchGun.pointyFingers.bought = savedState.touchGunPointyFingersBought;
        upgrades.touchGun.ambidextrous.bought = savedState.touchGunAmbidextrousBought;
        upgrades.touchGun.thousandFingers.bought = savedState.touchGunThousandFingersBought;
        upgrades.touchGun.antirestingCream.bought = savedState.touchGunAntirestingCreamBought;
        upgrades.touchGun.powerfulHands.bought = savedState.touchGunPowerfulHandsBought;
        upgrades.touchGun.awakenUpgrade.bought = savedState.touchGunAwakenBought;
        upgrades.touchGun.millionFingers.bought = savedState.touchGunMillionFingersBought;
        upgrades.touchGun.stingingTaps.bought = savedState.touchGunStingingTapsBought;
        upgrades.touchGun.gotToTap.bought = savedState.touchGunGotToTapBought;
        upgrades.touchGun.fingerSwarm.bought = savedState.touchGunFingerSwarmBought;
        upgrades.touchGun.billionFingers.bought = savedState.touchGunBillionFingersBought;
        upgrades.touchGun.needMore.bought = savedState.touchGunNeedMoreBought;
        upgrades.touchGun.fingerPistols.bought = savedState.touchGunFingerPistolsBought;
        upgrades.touchGun.superAwakenUpgrade.bought = savedState.touchGunSuperAwakenBought;
        upgrades.touchGun.trillionFingers.bought = savedState.touchGunTrillionFingersBought;
        upgrades.touchGun.heavyFingers.bought = savedState.touchGunHeavyFingersBought;
        upgrades.touchGun.magicHands.bought = savedState.touchGunMagicHandsBought;
        
        upgrades.pistol.biggerBullets.bought = savedState.pistolBiggerBulletsBought;
        upgrades.pistol.largerCalibre.bought = savedState.pistolLargerCalibreBought;
        upgrades.pistol.easierReloading.bought = savedState.pistolEasierReloadingBought;
        upgrades.pistol.louderFiring.bought = savedState.pistolLouderFiringBought;
        upgrades.pistol.metalPiercing.bought = savedState.pistolMetalPiercingBought;
        upgrades.pistol.specializedMechanisms.bought = savedState.pistolSpecializedMechanismsBought;
        upgrades.pistol.fineTuning.bought = savedState.pistolFineTuningBought;
        upgrades.pistol.versatileGunshots.bought = savedState.pistolVersatileGunshotsBought;
        upgrades.pistol.empowered.bought = savedState.pistolEmpoweredBought;
        upgrades.pistol.oneHitBullets.bought = savedState.pistolOneHitBulletsBought;
        
        upgrades.smg.betterSpread.bought = savedState.smgBetterSpreadBought;
        upgrades.smg.strongHold.bought = savedState.smgStrongHoldBought;
        upgrades.smg.pressureBullets.bought = savedState.smgPressureBulletsBought;
        upgrades.smg.wickedAimer.bought = savedState.smgWickedAimerBought;
        upgrades.smg.bashingRounds.bought = savedState.smgBashingRoundsBought;
        upgrades.smg.autoAimer.bought = savedState.smgAutoAimerBought;
        upgrades.smg.lightweight.bought = savedState.smgLightweightBought;
        upgrades.smg.metalPassers.bought = savedState.smgMetalPassersBought;
        upgrades.smg.inescapableBarrage.bought = savedState.smgInescapableBarrageBought;
        upgrades.smg.neverMissBarrage.bought = savedState.smgNeverMissBarrageBought;
        
        upgrades.shotgun.moreBarrels.bought = savedState.shotgunMoreBarrelsBought;
        upgrades.shotgun.powerfulBurst.bought = savedState.shotgunPowerfulBurstBought;
        upgrades.shotgun.devastatingBurst.bought = savedState.shotgunDevastatingBurstBought;
        upgrades.shotgun.megaBurst.bought = savedState.shotgunMegaBurstBought;
        upgrades.shotgun.scattershot.bought = savedState.shotgunScattershotBought;
        upgrades.shotgun.gigaBurst.bought = savedState.shotgunGigaBurstBought;
        upgrades.shotgun.omegaBurst.bought = savedState.shotgunOmegaBurstBought;
        upgrades.shotgun.teraBurst.bought = savedState.shotgunTeraBurstBought;
        upgrades.shotgun.ultimatumBurst.bought = savedState.shotgunUltimatumBurstBought;
        upgrades.shotgun.buckshot.bought = savedState.shotgunBuckshotBought;
        
        upgrades.sniperRifle.deadlyPrecision.bought = savedState.sniperRifleDeadlyPrecisionBought;
        upgrades.sniperRifle.cripplingShots.bought = savedState.sniperRifleCripplingShotsBought;
        upgrades.sniperRifle.headShot.bought = savedState.sniperRifleHeadShotBought;
        upgrades.sniperRifle.dangerousRifling.bought = savedState.sniperRifleDangerousRiflingBought;
        upgrades.sniperRifle.luckyShot.bought = savedState.sniperRifleLuckyShotBought;
        upgrades.sniperRifle.enhancedTracers.bought = savedState.sniperRifleEnhancedTracersBought;
        upgrades.sniperRifle.infraredScope.bought = savedState.sniperRifleInfraredScopeBought;
        upgrades.sniperRifle.electroshockTracers.bought = savedState.sniperRifleElectroshockTracersBought;
        upgrades.sniperRifle.lethalTracers.bought = savedState.sniperRifleLethalTracersBought;
        upgrades.sniperRifle.heatseekingSensors.bought = savedState.sniperRifleHeatseekingSensorsBought;
        
        upgrades.ak47.heatTippedBullets.bought = savedState.ak47HeatTippedBulletsBought;
        upgrades.ak47.staggeringBullets.bought = savedState.ak47StaggeringBulletsBought;
        upgrades.ak47.rippingBullets.bought = savedState.ak47RippingBulletsBought;
        upgrades.ak47.vehementBullets.bought = savedState.ak47VehementBulletsBought;
        upgrades.ak47.overbearingVelocity.bought = savedState.ak47OverbearingVelocityBought;
        upgrades.ak47.poweredVelocity.bought = savedState.ak47PoweredVelocityBought;
        upgrades.ak47.instantaneousVelocity.bought = savedState.ak47InstantaneousVelocityBought;
        upgrades.ak47.spikyBullets.bought = savedState.ak47SpikyBulletsBought;
        upgrades.ak47.ferociousBullets.bought = savedState.ak47FerociousBulletsBought;
        upgrades.ak47.unfathomablePressure.bought = savedState.ak47UnfathomablePressureBought;

        upgrades.rocketLauncher.potentRockets.bought = savedState.rocketLauncherPotentRocketsBought;
        upgrades.rocketLauncher.violentExplosions.bought = savedState.rocketLauncherViolentExplosionsBought;
        upgrades.rocketLauncher.repeatedExplosions.bought = savedState.rocketLauncherRepeatedExplosionsBought;
        upgrades.rocketLauncher.biggerExplosions.bought = savedState.rocketLauncherBiggerExplosionsBought;
        upgrades.rocketLauncher.extraGunpowder.bought = savedState.rocketLauncherExtraGunpowderBought;
        upgrades.rocketLauncher.shatteringExplosions.bought = savedState.rocketLauncherShatteringExplosionsBought;
        upgrades.rocketLauncher.napalmRockets.bought = savedState.rocketLauncherNapalmRocketsBought;
        upgrades.rocketLauncher.impulsiveExplosions.bought = savedState.rocketLauncherImpulsiveExplosionsBought;
        upgrades.rocketLauncher.rampantTips.bought = savedState.rocketLauncherRampantTipsBought;
        upgrades.rocketLauncher.kamikaze.bought = savedState.rocketLauncherKamikazeBought;

        upgrades.tommyGun.preciseAccuracy.bought = savedState.tommyGunPreciseAccuracyBought;
        upgrades.tommyGun.tightPressure.bought = savedState.tommyGunTightPressureBought;
        upgrades.tommyGun.lessPunishing.bought = savedState.tommyGunLessPunishingBought;
        upgrades.tommyGun.powerfulOutcomes.bought = savedState.tommyGunPowerfulOutcomesBought;
        upgrades.tommyGun.vehementBurst.bought = savedState.tommyGunVehementBurstBought;
        upgrades.tommyGun.theVector.bought = savedState.tommyGunTheVectorBought;
        upgrades.tommyGun.dangerZone.bought = savedState.tommyGunDangerZoneBought;
        upgrades.tommyGun.dischargedRippers.bought = savedState.tommyGunDischargedRippersBought;
        upgrades.tommyGun.unstoppableBarrage.bought = savedState.tommyGunUnstoppableBarrageBought;
        upgrades.tommyGun.unavoidable.bought = savedState.tommyGunUnavoidableBought;

        upgrades.doubleBarrel.lethalShots.bought = savedState.doubleBarrelLethalShotsBought;
        upgrades.doubleBarrel.arcSwitchingBarrels.bought = savedState.doubleBarrelArcSwitchingBarrelsBought;
        upgrades.doubleBarrel.doubleTrouble.bought = savedState.doubleBarrelDoubleTroubleBought;
        upgrades.doubleBarrel.energized.bought = savedState.doubleBarrelEnergizedBought;
        upgrades.doubleBarrel.doubleSwarm.bought = savedState.doubleBarrelDoubleSwarmBought;
        upgrades.doubleBarrel.clumpedShots.bought = savedState.doubleBarrelClumpedShotsBought;
        upgrades.doubleBarrel.tightShots.bought = savedState.doubleBarrelTightShotsBought;
        upgrades.doubleBarrel.heavyForce.bought = savedState.doubleBarrelHeavyForceBought;
        upgrades.doubleBarrel.unbearableForce.bought = savedState.doubleBarrelUnbearableForceBought;
        upgrades.doubleBarrel.doubleYeah.bought = savedState.doubleBarrelDoubleYeahBought;

        upgrades.uzi.focussedSpread.bought = savedState.uziFocussedSpreadBought;
        upgrades.uzi.quickfiringSalvo.bought = savedState.uziQuickfiringSalvoBought;
        upgrades.uzi.tinyRippers.bought = savedState.uziTinyRippersBought;
        upgrades.uzi.circuitousSpread.bought = savedState.uziCircuitousSpreadBought;
        upgrades.uzi.bulletOverload.bought = savedState.uziBulletOverloadBought;
        upgrades.uzi.bulletDrizzle.bought = savedState.uziBulletDrizzleBought;
        upgrades.uzi.alwaysHitting.bought = savedState.uziAlwaysHittingBought;
        upgrades.uzi.cantDodgeThis.bought = savedState.uziCantDodgeThisBought;
        upgrades.uzi.bulletFletcher.bought = savedState.uziBulletFletcherBought;
        upgrades.uzi.easyToUse.bought = savedState.uziEasyToUseBought;

        upgrades.huntingRifle.powerfulHunter.bought = savedState.huntingRiflePowerfulHunterBought;
        upgrades.huntingRifle.headHunter.bought = savedState.huntingRifleHeadHunterBought;
        upgrades.huntingRifle.noEscape.bought = savedState.huntingRifleNoEscapeBought;
        upgrades.huntingRifle.criminalHunter.bought = savedState.huntingRifleCriminalHunterBought;
        upgrades.huntingRifle.targetHunter.bought = savedState.huntingRifleTargetHunterBought;
        upgrades.huntingRifle.longTracers.bought = savedState.huntingRifleLongTracersBought;
        upgrades.huntingRifle.titanicTracers.bought = savedState.huntingRifleTitanicTracersBought;
        upgrades.huntingRifle.beastHunter.bought = savedState.huntingRifleBeastHunterBought;
        upgrades.huntingRifle.markedTracers.bought = savedState.huntingRifleMarkedTracersBought;
        upgrades.huntingRifle.masterHunting.bought = savedState.huntingRifleMasterHuntingBought;
        
        pistolFirerateUpgradeCost = savedState.pistolFirerateUpgradeCost;
        pistolPotencyUpgradeCost = savedState.pistolPotencyUpgradeCost;
        pistolFirerateLevel = Math.min(savedState.pistolFirerateLevel, 20);
        pistolPotencyLevel = savedState.pistolPotencyLevel;
        
        smgFirerateUpgradeCost = savedState.smgFirerateUpgradeCost;
        smgPotencyUpgradeCost = savedState.smgPotencyUpgradeCost;
        smgFirerateLevel = Math.min(savedState.smgFirerateLevel, 10);
        smgPotencyLevel = savedState.smgPotencyLevel;
        
        shotgunFirerateUpgradeCost = savedState.shotgunFirerateUpgradeCost;
        shotgunPotencyUpgradeCost = savedState.shotgunPotencyUpgradeCost;
        shotgunMultiFireUpgradeCost = savedState.shotgunMultiFireUpgradeCost;
        shotgunFirerateLevel = Math.min(savedState.shotgunFirerateLevel, 15);
        shotgunPotencyLevel = savedState.shotgunPotencyLevel;
        shotgunMultiFireLevel = savedState.shotgunMultiFireLevel;
        
        sniperRifleFirerateUpgradeCost = savedState.sniperRifleFirerateUpgradeCost;
        sniperRiflePotencyUpgradeCost = savedState.sniperRiflePotencyUpgradeCost;
        sniperRifleCriticalShotUpgradeCost = savedState.sniperRifleCriticalShotUpgradeCost;
        sniperRifleCriticalDamageUpgradeCost = savedState.sniperRifleCriticalDamageUpgradeCost;
        sniperRifleFirerateLevel = Math.min(savedState.sniperRifleFirerateLevel, 10);
        sniperRiflePotencyLevel = savedState.sniperRiflePotencyLevel;
        sniperRifleCriticalShotLevel = savedState.sniperRifleCriticalShotLevel;
        sniperRifleCriticalDamageLevel = savedState.sniperRifleCriticalDamageLevel;

        ak47FirerateUpgradeCost = savedState.ak47FirerateUpgradeCost;
        ak47PotencyUpgradeCost = savedState.ak47PotencyUpgradeCost;
        ak47FirerateLevel = Math.min(savedState.ak47FirerateLevel, 15);
        ak47PotencyLevel = savedState.ak47PotencyLevel;

        rocketLauncherFirerateUpgradeCost = savedState.rocketLauncherFirerateUpgradeCost;
        rocketLauncherPotencyUpgradeCost = savedState.rocketLauncherPotencyUpgradeCost;
        rocketLauncherSplashRadiusUpgradeCost = savedState.rocketLauncherSplashRadiusUpgradeCost;
        rocketLauncherSplashDamageUpgradeCost = savedState.rocketLauncherSplashDamageUpgradeCost;
        rocketLauncherFirerateLevel = Math.min(savedState.rocketLauncherFirerateLevel, 15);
        rocketLauncherPotencyLevel = savedState.rocketLauncherPotencyLevel;
        rocketLauncherSplashRadiusLevel = Math.min(savedState.rocketLauncherSplashRadiusLevel, 5);
        rocketLauncherSplashDamageLevel = savedState.rocketLauncherSplashDamageLevel;

        tommyGunFirerateUpgradeCost = savedState.tommyGunFirerateUpgradeCost;
        tommyGunPotencyUpgradeCost = savedState.tommyGunPotencyUpgradeCost;
        tommyGunAccuracyUpgradeCost = savedState.tommyGunAccuracyUpgradeCost;
        tommyGunFirerateLevel = Math.min(savedState.tommyGunFirerateLevel, 20);
        tommyGunPotencyLevel = savedState.tommyGunPotencyLevel;
        tommyGunAccuracyLevel = savedState.tommyGunAccuracyLevel;

        doubleBarrelFirerateUpgradeCost = savedState.doubleBarrelFirerateUpgradeCost;
        doubleBarrelPotencyUpgradeCost = savedState.doubleBarrelPotencyUpgradeCost;
        doubleBarrelMultiFireUpgradeCost = savedState.doubleBarrelMultiFireUpgradeCost;
        doubleBarrelFirerateLevel = Math.min(savedState.doubleBarrelFirerateLevel, 25);
        doubleBarrelPotencyLevel = savedState.doubleBarrelPotencyLevel;
        doubleBarrelMultiFireLevel = savedState.doubleBarrelMultiFireLevel;

        uziFirerateUpgradeCost = savedState.uziFirerateUpgradeCost;
        uziPotencyUpgradeCost = savedState.uziPotencyUpgradeCost;
        uziFirerateLevel = Math.min(savedState.uziFirerateLevel, 10);
        uziPotencyLevel = savedState.uziPotencyLevel;

        huntingRifleFirerateUpgradeCost = savedState.huntingRifleFirerateUpgradeCost;
        huntingRiflePotencyUpgradeCost = savedState.huntingRiflePotencyUpgradeCost;
        huntingRifleCriticalShotUpgradeCost = savedState.huntingRifleCriticalShotUpgradeCost;
        huntingRifleCriticalDamageUpgradeCost = savedState.huntingRifleCriticalDamageUpgradeCost;
        huntingRifleFirerateLevel = Math.min(savedState.huntingRifleFirerateLevel, 15);
        huntingRiflePotencyLevel = savedState.huntingRiflePotencyLevel;
        huntingRifleCriticalShotLevel = savedState.huntingRifleCriticalShotLevel;
        huntingRifleCriticalDamageLevel = savedState.huntingRifleCriticalDamageLevel;

        // Load the purchased big upgrades interface
        loadPurchasedBigUpgrades(savedState.purchasedBigUpgrades);

        // Call the setNumberFormat function to update the display based on the loaded format
        setNumberFormat();

        // Update the interface
        updatePointsDisplay();

        // Update achievements and statistics display
        updateAchievements();
        updateStatistics();
    }
}

function updateWeaponDisplays() {
    Object.entries(weapons).forEach(([weaponId, weapon]) => {
        const weaponElement = document.getElementById(weaponId);
        if (weaponElement) {
            if (weapon.purchased) {
                weaponElement.classList.add('purchased');
                const purchaseButton = document.getElementById(`${weaponId}-purchase`);
                if (purchaseButton) {
                    purchaseButton.style.display = 'none';
                }
            } else {
                weaponElement.classList.remove('purchased');
                const purchaseButton = document.getElementById(`${weaponId}-purchase`);
                if (purchaseButton) {
                    purchaseButton.style.display = 'block';
                }
            }
        }
    });
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
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    // Prompt confirmation before resetting progress
    var confirmation = confirm("Are you sure you want to clear your whole progression? NOTE: this cannot be reversed!");
    
    if (confirmation) {
        localStorage.removeItem('gameState');
        localStorage.removeItem('weapons');
        localStorage.removeItem('enemies');
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
        // Reset weapon variables and upgrades
        for (const weaponId in weapons) {
            weapons[weaponId].purchased = false;
            if (weaponInitialStats[weaponId]) {
                weapons[weaponId].stats = { ...weaponInitialStats[weaponId] };
            } else {
                console.warn(`Initial stats for ${weaponId} are undefined.`);
            }

            for (const upgrade in upgrades[weaponId]) {
                upgrades[weaponId][upgrade].bought = false;
            }
        }

        // Reset touch gun big upgrades
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
        upgrades.touchGun.heavyFingers.bought = false;
        upgrades.touchGun.magicHands.bought = false;
        
        touchGunCost = 100;
        touchGunPointsPerClick = 1;
        touchGunLevel = 0;

        awokenTouchGunCost = 500000;
        awokenTouchGunLevel = 0;

        superAwokenTouchGunCost = 500000000000;
        superAwokenTouchGunLevel = 0;

        numberFormat = 'standard';
        
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

        resetPrestigeLevel();

        document.getElementById('prestige-level').textContent = prestigeLevels[0].name;
        document.getElementById('multiplier').textContent = 'x' + prestigeLevels[0].multiplier;
        document.getElementById('next-prestige-cost').textContent = formatNumber(prestigeLevels[1].cost);
        document.getElementById('prestige-button').textContent = "Prestige to " + prestigeLevels[1].name;

        document.getElementById('score-value-main').textContent = formatNumber(points);
        document.getElementById('score-value-upgrades').textContent = formatNumber(points);

        // Update the interfaces
        updatePointsDisplay();
        updateAchievements();
        updateStatistics();
        saveGameState();
        // Add any other interface updates here
    }
}

function resetPrestigeLevel() {
    localStorage.setItem('prestigeLevel', 0);
}

// Call the saveGameState function whenever the game state changes
// For example, after earning points, purchasing weapons, etc.
// You can call this function wherever you modify game state variables

// Event listeners to call in initialization of those in-game functions
document.addEventListener('DOMContentLoaded', function() {
    initializeUI();
    initializeUpgradeCosts();
    initializeAchievements();
    initializeStatistics();
    initializeBattle();
});

window.addEventListener('DOMContentLoaded', (event) => {
    initializeSoundEffects();
});
