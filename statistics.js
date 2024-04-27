let statistics = {
    lifetimePoints: 0,
    weaponUpgradeLevels: {
        touchGun: {
            firerate: 0,
            potency: 0
        },
        pistol: {
            firerate: 0,
            potency: 0
        },
        smg: {
            firerate: 0,
            potency: 0
        },
        shotgun: {
            firerate: 0,
            potency: 0,
            multiFire: 0 // Added multiFire for Shotgun
        },
        sniperRifle: {
            firerate: 0,
            potency: 0,
            criticalChance: 0, // Added criticalChance for Sniper Rifle
            criticalDamage: 0 // Added criticalDamage for Sniper Rifle
        },
        ak47: {
            firerate: 0,
            potency: 0
        },
        rocketLauncher: {
            firerate: 0,
            potency: 0,
            splashRadius: 0, // Added splashRadius for Rocket Launcher
            splashDamage: 0 // Added splashDamage for Rocket Launcher
        },
        tommyGun: {
            firerate: 0,
            potency: 0,
            accuracy: 0 // Added accuracy for Tommy Gun
        },
        doubleBarrel: {
            firerate: 0,
            potency: 0, // Double Barrel shares upgrade stats with Shotgun
            multiFire: 0 // Added multiFire for Double Barrel
        }
    }
};

// Function to update lifetime points
function updateLifetimePoints() {
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement) {
        lifetimePointsElement.textContent = points.toLocaleString(); // Format lifetime points
        statistics.lifetimePoints = points; // Update statistics data with current points
    }
}

// Function to update weapon upgrade levels
function updateWeaponUpgradeLevel(weapon, upgradeType) {
    if (statistics.weaponUpgradeLevels.hasOwnProperty(weapon) && (upgradeType === 'firerate' || upgradeType === 'potency' || upgradeType === 'multiFire' || upgradeType === 'criticalChance' || upgradeType === 'criticalDamage' || upgradeType === 'splashRadius' || upgradeType === 'splashDamage' || upgradeType === 'accuracy')) {
        statistics.weaponUpgradeLevels[weapon][upgradeType]++;
        updateStatisticsDisplay();
    }
}

// Function to get statistics data
function getStatistics() {
    return statistics;
}

// Function to update the statistics displayed in the HTML
function updateStatisticsDisplay() {
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement && statistics.lifetimePoints !== undefined) {
        lifetimePointsElement.textContent = statistics.lifetimePoints.toLocaleString(); // Format lifetime points
    }

    const weaponUpgradesDiv = document.getElementById('total-weapon-upgrades');
    if (weaponUpgradesDiv) {
        weaponUpgradesDiv.innerHTML = ''; // Clear previous content

        for (const weapon in statistics.weaponUpgradeLevels) {
            if (statistics.weaponUpgradeLevels.hasOwnProperty(weapon)) {
                const weaponUpgradeLevels = statistics.weaponUpgradeLevels[weapon];
                const weaponUpgradeHTML = `
                    <div class="weapon-upgrade">
                        <h3>${weapon.toUpperCase()}</h3>
                        <p>Firerate: ${weaponUpgradeLevels.firerate}</p>
                        <p>Potency: ${weaponUpgradeLevels.potency}</p>
                        ${weapon === 'shotgun' || weapon === 'doubleBarrel' ? `<p>Multi-Fire: ${weaponUpgradeLevels.multiFire}</p>` : ''}
                        ${weapon === 'sniperRifle' ? `<p>Critical Chance: ${weaponUpgradeLevels.criticalChance}</p><p>Critical Damage: ${weaponUpgradeLevels.criticalDamage}</p>` : ''}
                        ${weapon === 'rocketLauncher' ? `<p>Splash Radius: ${weaponUpgradeLevels.splashRadius}</p><p>Splash Damage: ${weaponUpgradeLevels.splashDamage}</p>` : ''}
                        ${weapon === 'tommyGun' ? `<p>Accuracy: ${weaponUpgradeLevels.accuracy}</p>` : ''}
                    </div>
                `;
                weaponUpgradesDiv.insertAdjacentHTML('beforeend', weaponUpgradeHTML);
            }
        }
    }
}
