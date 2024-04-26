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
            potency: 0
        },
        sniperRifle: {
            firerate: 0,
            potency: 0
        },
        ak47: {
            firerate: 0,
            potency: 0
        },
        rocketLauncher: {
            firerate: 0,
            potency: 0
        },
        tommyGun: {
            firerate: 0,
            potency: 0
        },
        doubleBarrel: {
            firerate: 0,
            potency: 0
        }
    }
};

// Function to update lifetime points
function updateLifetimePoints(points) {
    statistics.lifetimePoints += points;
}

// Function to update weapon upgrade levels
function updateWeaponUpgradeLevel(weapon, upgradeType) {
    if (statistics.weaponUpgradeLevels.hasOwnProperty(weapon) && (upgradeType === 'firerate' || upgradeType === 'potency')) {
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
                    </div>
                `;
                weaponUpgradesDiv.insertAdjacentHTML('beforeend', weaponUpgradeHTML);
            }
        }
    }
}

// Initial update of statistics display when the page loads
document.addEventListener('DOMContentLoaded', updateStatisticsDisplay);
