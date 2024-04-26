// statistics.js

// Object to store statistics data
const statistics = {
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
            multiFire: 0 // Special upgrade stat for Shotgun
        },
        sniperRifle: {
            firerate: 0,
            potency: 0,
            criticalChance: 0, // Special upgrade stat for Sniper Rifle
            criticalDamage: 0 // Special upgrade stat for Sniper Rifle
        },
        ak47: {
            firerate: 0,
            potency: 0
        },
        rocketLauncher: {
            firerate: 0,
            potency: 0,
            splashRadius: 0, // Special upgrade stat for Rocket Launcher
            splashDamage: 0 // Special upgrade stat for Rocket Launcher
        },
        tommyGun: {
            firerate: 0,
            potency: 0,
            accuracy: 0 // Special upgrade stat for Tommy Gun
        },
        doubleBarrel: {
            firerate: 0,
            potency: 0,
            multiFire: 0 // Special upgrade stat for Double Barrel
        }
    }
};

// Function to update lifetime points
function updateLifetimePoints(points) {
    statistics.lifetimePoints += points;
}

// Function to update weapon upgrade levels
function updateWeaponUpgradeLevel(weapon, upgradeType) {
    if (statistics.weaponUpgradeLevels.hasOwnProperty(weapon) && upgradeType in statistics.weaponUpgradeLevels[weapon]) {
        statistics.weaponUpgradeLevels[weapon][upgradeType]++;
    }
}

// Function to get statistics data
function getStatistics() {
    return statistics;
}

// Function to update the statistics displayed in the HTML
function updateStatisticsDisplay() {
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement) {
        lifetimePointsElement.textContent = statistics.lifetimePoints.toLocaleString(); // Format lifetime points
    }

    const weaponUpgradesDiv = document.getElementById('weapon-upgrades');
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

// Initial update of statistics display when the page loads
document.addEventListener('DOMContentLoaded', updateStatisticsDisplay);
