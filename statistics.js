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
