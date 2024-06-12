let isProgressReset = false;
let isProgressPrestiged = false;

// Define function to switch tabs
function switchTab(tabName) {
    if (battleInProgress) {
        alert("You cannot switch tabs while a battle is in progress.");
        return;
    }

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

document.addEventListener('DOMContentLoaded', () => {
    // Function to open a subtab
    function openSubTab(subTabName) {
        // Hide all subtab content
        const subtabContent = document.querySelectorAll('.subtab-content');
        subtabContent.forEach(tab => {
            tab.style.display = 'none';
        });

        // Remove the active class from all subtab buttons
        const subtabButtons = document.querySelectorAll('.subtab-button');
        subtabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Show the current subtab and add an active class to the button
        document.getElementById(subTabName).style.display = 'block';
        document.querySelector(`.subtab-button[data-target="${subTabName}"]`).classList.add('active');
    }

    // Ensure the default subtab is displayed (battle subtab)
    openSubTab('battle-subtab');

    // Handle click events on subtab buttons
    const subtabButtons = document.querySelectorAll('.subtab-button');
    subtabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const subTabName = this.getAttribute('data-target');
            openSubTab(subTabName);
        });
    });

    // Export the function to be used in HTML onclick attribute
    window.openSubTab = openSubTab;

    // Update loadout selection based on purchased weapons
    updateLoadoutSelection();
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
	
	// Save loadout selections and unlocked slots
    const loadoutSelections = [];
    document.querySelectorAll('.loadout-slot').forEach(slot => {
        const slotIndex = slot.dataset.slotIndex;
        const weaponSelect = slot.querySelector('.weapon-slot');
        const selectedWeapon = weaponSelect ? weaponSelect.value : '';

        const equipmentSelections = [];
        slot.querySelectorAll('.equipment-slot').forEach(equipmentSelect => {
            equipmentSelections.push({
                equipmentIndex: equipmentSelect.dataset.equipmentIndex,
                selectedEquipment: equipmentSelect.value,
                unlocked: !equipmentSelect.disabled
            });
        });

        loadoutSelections.push({
            slotIndex,
            selectedWeapon,
            equipmentSelections
        });
    });

    const gameState = {
        weapons: weapons,
        enemies: enemies,
        achievements: achievementsData,
        statistics: statistics,
        points: points,
        totalPointsEarned: totalPointsEarned,
        totalTouchGunClicks: totalTouchGunClicks,
        totalEnemiesKilled: totalEnemiesKilled,

        touchGunCost: touchGunCost,
        touchGunPointsPerClick: touchGunPointsPerClick,
        touchGunLevel: touchGunLevel,

        awokenTouchGunCost: awokenTouchGunCost,
        awokenTouchGunLevel: awokenTouchGunLevel,

        superAwokenTouchGunCost: superAwokenTouchGunCost,
        superAwokenTouchGunLevel: superAwokenTouchGunLevel,

        numberFormat: numberFormat, // Add the selected number format to the game state
        prestigeLevel: parseInt(localStorage.getItem('prestigeLevel')) || 0,

        pistolFirerateUpgradeCost: pistolFirerateUpgradeCost,
        pistolPotencyUpgradeCost: pistolPotencyUpgradeCost,
        pistolHPUpgradeCost: pistolHPUpgradeCost,
        pistolFirerateLevel: pistolFirerateLevel,
        pistolPotencyLevel: pistolPotencyLevel,
        pistolHPLevel: pistolHPLevel,

        smgFirerateUpgradeCost: smgFirerateUpgradeCost,
        smgPotencyUpgradeCost: smgPotencyUpgradeCost,
        smgHPUpgradeCost: smgHPUpgradeCost,
        smgFirerateLevel: smgFirerateLevel,
        smgPotencyLevel: smgPotencyLevel,
        smgHPLevel: smgHPLevel,

        shotgunFirerateUpgradeCost: shotgunFirerateUpgradeCost,
        shotgunPotencyUpgradeCost: shotgunPotencyUpgradeCost,
        shotgunMultiFireUpgradeCost: shotgunMultiFireUpgradeCost,
        shotgunHPUpgradeCost: shotgunHPUpgradeCost,
        shotgunFirerateLevel: shotgunFirerateLevel,
        shotgunPotencyLevel: shotgunPotencyLevel,
        shotgunMultiFireLevel: shotgunMultiFireLevel,
        shotgunHPLevel: shotgunHPLevel,

        sniperRifleFirerateUpgradeCost: sniperRifleFirerateUpgradeCost,
        sniperRiflePotencyUpgradeCost: sniperRiflePotencyUpgradeCost,
        sniperRifleCriticalShotUpgradeCost: sniperRifleCriticalShotUpgradeCost,
        sniperRifleCriticalDamageUpgradeCost: sniperRifleCriticalDamageUpgradeCost,
        sniperRifleHPUpgradeCost: sniperRifleHPUpgradeCost,
        sniperRifleFirerateLevel: sniperRifleFirerateLevel,
        sniperRiflePotencyLevel: sniperRiflePotencyLevel,
        sniperRifleCriticalShotLevel: sniperRifleCriticalShotLevel,
        sniperRifleCriticalDamageLevel: sniperRifleCriticalDamageLevel,
        sniperRifleHPLevel: sniperRifleHPLevel,

        ak47FirerateUpgradeCost: ak47FirerateUpgradeCost,
        ak47PotencyUpgradeCost: ak47PotencyUpgradeCost,
        ak47HPUpgradeCost: ak47HPUpgradeCost,
        ak47FirerateLevel: ak47FirerateLevel,
        ak47PotencyLevel: ak47PotencyLevel,
        ak47HPLevel: ak47HPLevel,

        rocketLauncherFirerateUpgradeCost: rocketLauncherFirerateUpgradeCost,
        rocketLauncherPotencyUpgradeCost: rocketLauncherPotencyUpgradeCost,
        rocketLauncherSplashRadiusUpgradeCost: rocketLauncherSplashRadiusUpgradeCost,
        rocketLauncherSplashDamageUpgradeCost: rocketLauncherSplashDamageUpgradeCost,
		rocketLauncherHPUpgradeCost: rocketLauncherHPUpgradeCost,
        rocketLauncherFirerateLevel: rocketLauncherFirerateLevel,
        rocketLauncherPotencyLevel: rocketLauncherPotencyLevel,
        rocketLauncherSplashRadiusLevel: rocketLauncherSplashRadiusLevel,
        rocketLauncherSplashDamageLevel: rocketLauncherSplashDamageLevel,
		rocketLauncherHPLevel: rocketLauncherHPLevel,

        tommyGunFirerateUpgradeCost: tommyGunFirerateUpgradeCost,
        tommyGunPotencyUpgradeCost: tommyGunPotencyUpgradeCost,
        tommyGunAccuracyUpgradeCost: tommyGunAccuracyUpgradeCost,
		tommyGunHPUpgradeCost: tommyGunHPUpgradeCost,
        tommyGunFirerateLevel: tommyGunFirerateLevel,
        tommyGunPotencyLevel: tommyGunPotencyLevel,
        tommyGunAccuracyLevel: tommyGunPotencyLevel,
		tommyGunHPLevel: tommyGunHPLevel,

        doubleBarrelFirerateUpgradeCost: doubleBarrelFirerateUpgradeCost,
        doubleBarrelPotencyUpgradeCost: doubleBarrelPotencyUpgradeCost,
        doubleBarrelMultiFireUpgradeCost: doubleBarrelMultiFireUpgradeCost,
		doubleBarrelHPUpgradeCost: doubleBarrelHPUpgradeCost,
        doubleBarrelFirerateLevel: doubleBarrelFirerateLevel,
        doubleBarrelPotencyLevel: doubleBarrelPotencyLevel,
        doubleBarrelMultiFireLevel: doubleBarrelMultiFireLevel,
		doubleBarrelHPLevel: doubleBarrelHPLevel,

        uziFirerateUpgradeCost: uziFirerateUpgradeCost,
        uziPotencyUpgradeCost: uziPotencyUpgradeCost,
		uziHPUpgradeCost: uziHPUpgradeCost,
        uziFirerateLevel: uziFirerateLevel,
        uziPotencyLevel: uziPotencyLevel,
		uziHPLevel: uziHPLevel,

        huntingRifleFirerateUpgradeCost: huntingRifleFirerateUpgradeCost,
        huntingRiflePotencyUpgradeCost: huntingRiflePotencyUpgradeCost,
        huntingRifleCriticalShotUpgradeCost: huntingRifleCriticalShotUpgradeCost,
        huntingRifleCriticalDamageUpgradeCost: huntingRifleCriticalDamageUpgradeCost,
		huntingRifleHPUpgradeCost: huntingRifleHPUpgradeCost,
        huntingRifleFirerateLevel: huntingRifleFirerateLevel,
        huntingRiflePotencyLevel: huntingRiflePotencyLevel,
        huntingRifleCriticalShotLevel: huntingRifleCriticalShotLevel,
        huntingRifleCriticalDamageLevel: huntingRifleCriticalDamageLevel,
		huntingRifleHPLevel: huntingRifleHPLevel,

        musketFirerateUpgradeCost: musketFirerateUpgradeCost,
        musketPotencyUpgradeCost: musketPotencyUpgradeCost,
        musketRangeUpgradeCost: musketRangeUpgradeCost,
		musketHPUpgradeCost: musketHPUpgradeCost,
        musketFirerateLevel: musketFirerateLevel,
        musketPotencyLevel: musketPotencyLevel,
        musketRangeLevel: musketRangeLevel,
		musketHPLevel: musketHPLevel,

        fingerPistolsMultiplier: fingerPistolsMultiplier,

        currentWave: currentWave,
		
		loadoutSelections,
        currentEquipments,
        unlockedSlots,
        availableEquipments,

        purchasedBigUpgrades: getPurchasedBigUpgrades()
    };
	
	for (const weapon in upgradesList) {
        if (upgradesList.hasOwnProperty(weapon)) {
            upgradesList[weapon].forEach(upgrade => {
                const key = `${weapon}${capitalizeFirstLetter(upgrade)}Bought`;
                gameState[key] = upgrades[weapon][upgrade].bought;
            });
        }
    }

    var gameStateJSON = JSON.stringify(gameState);

    localStorage.setItem('gameState', gameStateJSON);
}

// Function to load the game state from local storage
function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
		// Update weapons from loaded game state
        if (savedState.weapons) {
            Object.keys(savedState.weapons).forEach(weaponId => {
                weapons[weaponId] = savedState.weapons[weaponId];
            });
        }

        // Update enemies from loaded game state
        if (savedState.enemies) {
            Object.keys(savedState.enemies).forEach(enemyId => {
                enemies[enemyId] = savedState.enemies[enemyId];
            });
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
		totalPointsEarned = savedState.totalPointsEarned;
		totalTouchGunClicks = savedState.totalTouchGunClicks;
		totalEnemiesKilled = savedState.totalEnemiesKilled;
        
        touchGunCost = savedState.touchGunCost,
        touchGunPointsPerClick = savedState.touchGunPointsPerClick;
        touchGunLevel = savedState.touchGunLevel;

        awokenTouchGunCost = savedState.awokenTouchGunCost;
        awokenTouchGunLevel = savedState.awokenTouchGunLevel;

        superAwokenTouchGunCost = savedState.superAwokenTouchGunCost;
        superAwokenTouchGunLevel = savedState.superAwokenTouchGunLevel;

        numberFormat = savedState.numberFormat;

        for (const weapon in upgradesList) {
            if (upgradesList.hasOwnProperty(weapon)) {
                upgradesList[weapon].forEach(upgrade => {
                    const key = `${weapon}${capitalizeFirstLetter(upgrade)}Bought`;
                    if (savedState.hasOwnProperty(key)) {
                        upgrades[weapon][upgrade].bought = savedState[key];
                    }
                });
            }
        }
		
        currentEquipments = savedState.currentEquipments || [];
        unlockedSlots = savedState.unlockedSlots || {};

        availableEquipments = savedState.availableEquipments || {};

        // Load loadout selections and unlocked slots
        if (savedState.loadoutSelections) {
            savedState.loadoutSelections.forEach(loadout => {
                const slot = document.querySelector(`.loadout-slot[data-slot-index="${loadout.slotIndex}"]`);
                if (slot) {
                    const weaponSelect = slot.querySelector('.weapon-slot');
                    if (weaponSelect) {
                        weaponSelect.value = loadout.selectedWeapon;
                    }

                    loadout.equipmentSelections.forEach(equipmentSelection => {
                        const equipmentSelect = slot.querySelector(`.equipment-slot[data-slot-index="${loadout.slotIndex}"][data-equipment-index="${equipmentSelection.equipmentIndex}"]`);
                        if (equipmentSelect) {
                            equipmentSelect.value = equipmentSelection.selectedEquipment;
                            equipmentSelect.disabled = !equipmentSelection.unlocked;
                        }
                    });
                }
            });
        }
        
        pistolFirerateUpgradeCost = savedState.pistolFirerateUpgradeCost;
        pistolPotencyUpgradeCost = savedState.pistolPotencyUpgradeCost;
		pistolHPUpgradeCost = savedState.pistolHPUpgradeCost;
        pistolFirerateLevel = Math.min(savedState.pistolFirerateLevel, 20);
        pistolPotencyLevel = savedState.pistolPotencyLevel;
		pistolHPLevel = savedState.pistolHPLevel;
        
        smgFirerateUpgradeCost = savedState.smgFirerateUpgradeCost;
        smgPotencyUpgradeCost = savedState.smgPotencyUpgradeCost;
		smgHPUpgradeCost = savedState.smgHPUpgradeCost;
        smgFirerateLevel = Math.min(savedState.smgFirerateLevel, 10);
        smgPotencyLevel = savedState.smgPotencyLevel;
		smgHPLevel = savedState.smgHPLevel;
        
        shotgunFirerateUpgradeCost = savedState.shotgunFirerateUpgradeCost;
        shotgunPotencyUpgradeCost = savedState.shotgunPotencyUpgradeCost;
        shotgunMultiFireUpgradeCost = savedState.shotgunMultiFireUpgradeCost;
		shotgunHPUpgradeCost = savedState.shotgunHPUpgradeCost;
        shotgunFirerateLevel = Math.min(savedState.shotgunFirerateLevel, 15);
        shotgunPotencyLevel = savedState.shotgunPotencyLevel;
        shotgunMultiFireLevel = savedState.shotgunMultiFireLevel;
		shotgunHPLevel = savedState.shotgunHPLevel;
        
        sniperRifleFirerateUpgradeCost = savedState.sniperRifleFirerateUpgradeCost;
        sniperRiflePotencyUpgradeCost = savedState.sniperRiflePotencyUpgradeCost;
        sniperRifleCriticalShotUpgradeCost = savedState.sniperRifleCriticalShotUpgradeCost;
        sniperRifleCriticalDamageUpgradeCost = savedState.sniperRifleCriticalDamageUpgradeCost;
		sniperRifleHPUpgradeCost = savedState.sniperRifleHPUpgradeCost;
        sniperRifleFirerateLevel = Math.min(savedState.sniperRifleFirerateLevel, 10);
        sniperRiflePotencyLevel = savedState.sniperRiflePotencyLevel;
        sniperRifleCriticalShotLevel = savedState.sniperRifleCriticalShotLevel;
        sniperRifleCriticalDamageLevel = savedState.sniperRifleCriticalDamageLevel;
		sniperRifleHPLevel = savedState.sniperRifleHPLevel;

        ak47FirerateUpgradeCost = savedState.ak47FirerateUpgradeCost;
        ak47PotencyUpgradeCost = savedState.ak47PotencyUpgradeCost;
		ak47HPUpgradeCost = savedState.ak47HPUpgradeCost;
        ak47FirerateLevel = Math.min(savedState.ak47FirerateLevel, 15);
        ak47PotencyLevel = savedState.ak47PotencyLevel;
		ak47HPLevel = savedState.ak47HPLevel;

        rocketLauncherFirerateUpgradeCost = savedState.rocketLauncherFirerateUpgradeCost;
        rocketLauncherPotencyUpgradeCost = savedState.rocketLauncherPotencyUpgradeCost;
        rocketLauncherSplashRadiusUpgradeCost = savedState.rocketLauncherSplashRadiusUpgradeCost;
        rocketLauncherSplashDamageUpgradeCost = savedState.rocketLauncherSplashDamageUpgradeCost;
		rocketLauncherHPUpgradeCost = savedState.rocketLauncherHPUpgradeCost;
        rocketLauncherFirerateLevel = Math.min(savedState.rocketLauncherFirerateLevel, 15);
        rocketLauncherPotencyLevel = savedState.rocketLauncherPotencyLevel;
        rocketLauncherSplashRadiusLevel = Math.min(savedState.rocketLauncherSplashRadiusLevel, 5);
        rocketLauncherSplashDamageLevel = savedState.rocketLauncherSplashDamageLevel;
		rocketLauncherHPLevel = savedState.rocketLauncherHPLevel;

        tommyGunFirerateUpgradeCost = savedState.tommyGunFirerateUpgradeCost;
        tommyGunPotencyUpgradeCost = savedState.tommyGunPotencyUpgradeCost;
        tommyGunAccuracyUpgradeCost = savedState.tommyGunAccuracyUpgradeCost;
		tommyGunHPUpgradeCost = savedState.tommyGunHPUpgradeCost;
        tommyGunFirerateLevel = Math.min(savedState.tommyGunFirerateLevel, 20);
        tommyGunPotencyLevel = savedState.tommyGunPotencyLevel;
        tommyGunAccuracyLevel = savedState.tommyGunAccuracyLevel;
		tommyGunHPLevel = savedState.tommyGunHPLevel;

        doubleBarrelFirerateUpgradeCost = savedState.doubleBarrelFirerateUpgradeCost;
        doubleBarrelPotencyUpgradeCost = savedState.doubleBarrelPotencyUpgradeCost;
        doubleBarrelMultiFireUpgradeCost = savedState.doubleBarrelMultiFireUpgradeCost;
		doubleBarrelHPUpgradeCost = savedState.doubleBarrelHPUpgradeCost;
        doubleBarrelFirerateLevel = Math.min(savedState.doubleBarrelFirerateLevel, 25);
        doubleBarrelPotencyLevel = savedState.doubleBarrelPotencyLevel;
        doubleBarrelMultiFireLevel = savedState.doubleBarrelMultiFireLevel;
		doubleBarrelHPLevel = savedState.doubleBarrelHPLevel;

        uziFirerateUpgradeCost = savedState.uziFirerateUpgradeCost;
        uziPotencyUpgradeCost = savedState.uziPotencyUpgradeCost;
		uziHPUpgradeCost = savedState.uziHPUpgradeCost;
        uziFirerateLevel = Math.min(savedState.uziFirerateLevel, 10);
        uziPotencyLevel = savedState.uziPotencyLevel;
		uziHPLevel = savedState.uziHPLevel;

        huntingRifleFirerateUpgradeCost = savedState.huntingRifleFirerateUpgradeCost;
        huntingRiflePotencyUpgradeCost = savedState.huntingRiflePotencyUpgradeCost;
        huntingRifleCriticalShotUpgradeCost = savedState.huntingRifleCriticalShotUpgradeCost;
        huntingRifleCriticalDamageUpgradeCost = savedState.huntingRifleCriticalDamageUpgradeCost;
		huntingRifleHPUpgradeCost = savedState.huntingRifleHPUpgradeCost;
        huntingRifleFirerateLevel = Math.min(savedState.huntingRifleFirerateLevel, 15);
        huntingRiflePotencyLevel = savedState.huntingRiflePotencyLevel;
        huntingRifleCriticalShotLevel = savedState.huntingRifleCriticalShotLevel;
        huntingRifleCriticalDamageLevel = savedState.huntingRifleCriticalDamageLevel;
		huntingRifleHPLevel = savedState.huntingRifleHPLevel;
		
		musketFirerateUpgradeCost = savedState.musketFirerateUpgradeCost;
        musketPotencyUpgradeCost = savedState.musketPotencyUpgradeCost;
        musketRangeUpgradeCost = savedState.musketRangeUpgradeCost;
		musketHPUpgradeCost = savedState.musketHPUpgradeCost;
        musketFirerateLevel = Math.min(savedState.musketFirerateLevel, 15);
        musketPotencyLevel = savedState.musketPotencyLevel;
        musketRangeLevel = savedState.musketRangeLevel;
		musketHPLevel = savedState.musketHPLevel;
		
		fingerPistolsMultiplier = savedState.fingerPistolsMultiplier;
		
		currentWave = savedState.currentWave;
		
		// Initialize battle state
        try {
            let storedBattleState = localStorage.getItem('battleState');
            if (storedBattleState) {
                battleState = JSON.parse(storedBattleState);
            }
        } catch (e) {
            console.error("Error parsing battleState from local storage:", e);
            battleState = null; // Reset to null or default state if parsing fails
        }

        document.getElementById('wave-counter').innerText = `${currentWave}`;
        document.getElementById('game-status').innerText = 'Game Status: Loaded';
        document.getElementById('surrender-btn').style.display = battleInProgress ? 'block' : 'none';

        updateBattlefield();
        if (battleInProgress) {
            battleLoop();
        }
		
		// Load the purchased big upgrades interface
        loadPurchasedBigUpgrades(savedState.purchasedBigUpgrades);

        // Call the setNumberFormat function to update the display based on the loaded format
        setNumberFormat();

        // Update the interface
        updatePointsDisplay();

        // Update achievements and statistics display
        updateAchievements();
        updateStatistics();
		
		// Update the loadout selection
		updateLoadoutSelection();
		
		// Remove "test" keys if they exist
        if (weapons.hasOwnProperty("test") || weapons.hasOwnProperty("testWeapon")) {
            delete weapons["test"];
			delete weapons["testWeapon"];
        }
        if (enemies.hasOwnProperty("test") || enemies.hasOwnProperty("testEnemy")) {
            delete enemies["test"];
			delete enemies["testEnemy"];
        }
		
		let existingData = JSON.parse(localStorage.getItem('gameData')) || {};

        existingData.weapons = mergeData(defaultWeapons, existingData.weapons || {});
        existingData.enemies = mergeData(defaultEnemies, existingData.enemies || {});

        localStorage.setItem('gameData', JSON.stringify(existingData));
        return existingData;
    } else {
		console.error("Load state not found. Resetting all progress.");
        resetProgress(); // Reset state if no saved state is found
    }
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mergeData(defaultData, existingData) {
    for (let key in defaultData) {
        if (!existingData.hasOwnProperty(key)) {
            existingData[key] = defaultData[key];
        }
    }
    return existingData;
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
		// Set isProgressReset flag to true
        isProgressReset = true;
		isProgressPrestiged = false;
		
        localStorage.removeItem('gameState');
		localStorage.removeItem('weapons');
		localStorage.removeItem('enemies');
		localStorage.removeItem('battleState');
		localStorage.removeItem('encounteredEnemies');
		
		// Reset all variables to their default values
        points = 0;
        totalPointsEarned = 0;
		totalTouchGunClicks = 0;
		totalEnemiesKilled = 0;
		
        // Reset achievements
        achievements.forEach(achievement => {
            achievement.achieved = false;
        });
        statistics = {
            totalLifetimePoints: 0,
	        totalTouchGunClicks: 0,
            totalWeaponsPurchased: 0,
            totalBigUpgradesPurchased: 0,
	        totalAchievementsAchieved: 0,
            totalEnemiesKilled: 0,
            totalPotencyUpgrades: 0,
            totalFirerateUpgrades: 0,
            totalMultiFireUpgrades: 0,
            totalAccuracyUpgrades: 0,
            totalCriticalShotUpgrades: 0,
            totalCriticalDamageUpgrades: 0,
            totalSplashRadiusUpgrades: 0,
            totalSplashDamageUpgrades: 0,
	        totalRangeUpgrades: 0
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
		
		// Clear existing weapon timers
        for (const weaponId in weaponTimers) {
            clearInterval(weaponTimers[weaponId]);
        }
        weaponTimers = {}; // Reset the weapon timers object

        // Reset lastPointsTime for all weapons
        lastPointsTime = {};

        // Reset touch gun big upgrades
        const touchGunUpgrades = [
            'pointyFingers', 'ambidextrous', 'thousandFingers', 'antirestingCream',
            'powerfulHands', 'awakenUpgrade', 'millionFingers', 'stingingTaps',
            'gotToTap', 'fingerSwarm', 'billionFingers', 'needMore', 'fingerPistols',
            'superAwakenUpgrade', 'trillionFingers', 'heavyFingers', 'magicHands',
			'healthyFingers', 'quadrillionFingers', 'tapExpert'
        ];
        touchGunUpgrades.forEach(upgrade => {
            upgrades.touchGun[upgrade].bought = false;
        });
		
		weapons = defaultWeapons;
		enemies = defaultEnemies;
        
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
		pistolHPUpgradeCost = 100;
        pistolFirerateLevel = 0;
        pistolPotencyLevel = 0;
		pistolHPLevel = 0;
        
        smgFirerateUpgradeCost = 600;
        smgPotencyUpgradeCost = 1200;
		smgHPUpgradeCost = 1000;
        smgFirerateLevel = 0;
        smgPotencyLevel = 0;
		smgHPLevel = 0;
        
        shotgunFirerateUpgradeCost = 3750;
        shotgunPotencyUpgradeCost = 7500;
        shotgunMultiFireUpgradeCost = 25000;
		shotgunHPUpgradeCost = 5000;
        shotgunFirerateLevel = 0;
        shotgunPotencyLevel = 0;
        shotgunMultiFireLevel = 0;
		shotgunHPLevel = 0;
        
        sniperRifleFirerateUpgradeCost = 32500;
        sniperRiflePotencyUpgradeCost = 65000;
        sniperRifleCriticalShotUpgradeCost = 75000;
        sniperRifleCriticalDamageUpgradeCost = 250000;
		sniperRifleHPUpgradeCost = 75000;
        sniperRifleFirerateLevel = 0;
        sniperRiflePotencyLevel = 0;
        sniperRifleCriticalShotLevel = 0;
        sniperRifleCriticalDamageLevel = 0;
		sniperRifleHPLevel = 0;

        ak47FirerateUpgradeCost = 175000;
        ak47PotencyUpgradeCost = 250000;
		ak47HPUpgradeCost = 600000;
        ak47FirerateLevel = 0;
        ak47PotencyLevel = 0;
		ak47HPLevel = 0;

        rocketLauncherFirerateUpgradeCost = 1000000;
        rocketLauncherPotencyUpgradeCost = 750000;
        rocketLauncherSplashRadiusUpgradeCost = 10000000;
        rocketLauncherSplashDamageUpgradeCost = 5000000;
		rocketLauncherHPUpgradeCost = 4000000;
        rocketLauncherFirerateLevel = 0;
        rocketLauncherPotencyLevel = 0;
        rocketLauncherSplashRadiusLevel = 0;
        rocketLauncherSplashDamageLevel = 0;
		rocketLauncherHPLevel = 0;

        tommyGunFirerateUpgradeCost = 12000000;
        tommyGunPotencyUpgradeCost = 8000000;
        tommyGunAccuracyUpgradeCost = 20000000;
		tommyGunHPUpgradeCost = 25000000;
        tommyGunFirerateLevel = 0;
        tommyGunPotencyLevel = 0;
        tommyGunAccuracyLevel = 0;
		tommyGunHPLevel = 0;

        doubleBarrelMultiFireUpgradeCost = 150000000;
        doubleBarrelFirerateUpgradeCost = 80000000;
        doubleBarrelPotencyUpgradeCost = 60000000;
		doubleBarrelHPUpgradeCost = 300000000;
        doubleBarrelFirerateLevel = 0;
        doubleBarrelPotencyLevel = 0;
        doubleBarrelMultiFireLevel = 0;
		doubleBarrelHPLevel = 0;

        uziFirerateUpgradeCost = 1000000000;
        uziPotencyUpgradeCost = 750000000;
		uziHPUpgradeCost = 1750000000;
        uziFirerateLevel = 0;
        uziPotencyLevel = 0;
		uziHPLevel = 0;

        huntingRifleFirerateUpgradeCost = 8000000000;
        huntingRiflePotencyUpgradeCost = 6000000000;
        huntingRifleCriticalShotUpgradeCost = 20000000000;
        huntingRifleCriticalDamageUpgradeCost = 30000000000;
		huntingRifleHPUpgradeCost = 12500000000;
        huntingRifleFirerateLevel = 0;
        huntingRiflePotencyLevel = 0;
        huntingRifleCriticalShotLevel = 0;
        huntingRifleCriticalDamageLevel = 0;
		huntingRifleHPLevel = 0;
		
		musketFirerateUpgradeCost = 40000000000;
        musketPotencyUpgradeCost = 30000000000;
        musketRangeUpgradeCost = 150000000000;
		musketHPUpgradeCost = 85000000000;
        musketFirerateLevel = 0;
        musketPotencyLevel = 0;
        musketRangeLevel = 0;
		musketHPLevel = 0;
		
		fingerPistolsMultiplier = 1;
		
		currentWave = 1;
        activeEnemies = [];
        currentWeapons = [];
		battleInProgress = false;
		
		document.getElementById('wave-counter').innerText = `${currentWave}`;
        document.getElementById('game-status').innerText = 'Game Status: Reset';
        document.getElementById('surrender-btn').style.display = 'none';
        clearBattlefield();

        resetPrestigeLevel();

        document.getElementById('prestige-level').textContent = prestigeLevels[0].name;
        document.getElementById('multiplier').textContent = 'x' + prestigeLevels[0].multiplier;
        document.getElementById('next-prestige-cost').textContent = formatNumber(prestigeLevels[1].cost);
        document.getElementById('prestige-button').textContent = "Prestige to " + prestigeLevels[1].name;

        document.getElementById('score-value-main').textContent = formatNumber(points);
        document.getElementById('score-value-upgrades').textContent = formatNumber(points);
		
        // Reset loadout selections and unlocked slots
        document.querySelectorAll('.loadout-slot').forEach(slot => {
            const weaponSelect = slot.querySelector('.weapon-slot');
            if (weaponSelect) {
                weaponSelect.value = null;
            }

            slot.querySelectorAll('.equipment-slot').forEach(equipmentSelect => {
                equipmentSelect.value = null;
                equipmentSelect.disabled = true;
            });
        });

        currentWeapons = [];
        currentEquipments = [];
        unlockedSlots = {};
        availableEquipments = {};

        // Update the interfaces
        updatePointsDisplay();
        updateCostDisplay();
        updateAchievements();
        updateStatistics();
		setNumberFormat();
        initializeUpgradeCosts();
        saveGameState();
		
		// Resetting complete, unset the flag
        isProgressReset = false;
		
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
