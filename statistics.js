let statistics = {
    totalLifetimePoints: 0,
    totalPotencyUpgrades: 0,
    totalFirerateUpgrades: 0,
    totalMultiFireUpgrades: 0,
    totalAccuracyUpgrades: 0,
    totalCriticalShotUpgrades: 0,
    totalCriticalDamageUpgrades: 0,
    totalSplashRadiusUpgrades: 0,
    totalSplashDamageUpgrades: 0,
    totalBigUpgradesPurchased: 0
};

// Function to update statistics display
function updateStatisticsDisplay() {
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement) {
        lifetimePointsElement.textContent = statistics.totalLifetimePoints.toLocaleString(); // Format lifetime points
    }

    const weaponUpgradesDiv = document.getElementById('total-weapon-upgrades');
    if (weaponUpgradesDiv) {
        weaponUpgradesDiv.innerHTML = ''; // Clear previous content

        const upgradeCategories = [
            { name: 'Potency Upgrades', key: 'totalPotencyUpgrades' },
            { name: 'Firerate Upgrades', key: 'totalFirerateUpgrades' },
            { name: 'Multi-Fire Upgrades', key: 'totalMultiFireUpgrades' },
            { name: 'Accuracy Upgrades', key: 'totalAccuracyUpgrades' },
            { name: 'Critical Shot Upgrades', key: 'totalCriticalShotUpgrades' },
            { name: 'Critical Damage Upgrades', key: 'totalCriticalDamageUpgrades' },
            { name: 'Splash Radius Upgrades', key: 'totalSplashRadiusUpgrades' },
            { name: 'Splash Damage Upgrades', key: 'totalSplashDamageUpgrades' },
            { name: 'Big Upgrades Purchased', key: 'totalBigUpgradesPurchased' }
        ];

        upgradeCategories.forEach(category => {
            const categoryHTML = `
                <div class="upgrade-category">
                    <h3>${category.name}</h3>
                    <p>${statistics[category.key]}</p>
                </div>
            `;
            weaponUpgradesDiv.insertAdjacentHTML('beforeend', categoryHTML);
        });
    }
}

// Function to update statistics at regular intervals
function updateStatisticsInterval() {
    updateStatisticsDisplay(); // Update immediately
    setInterval(updateStatisticsDisplay, 100); // Update every 100 milliseconds
}

// Function to initialize statistics based on game data
function initializeStatistics(gameData) {
    if (gameData) {
        // Calculate the total lifetime points by summing up points from all sources
        let totalLifetimePoints = 0;
        
        // Summing up points from items
        if (gameData.items) {
            gameData.items.forEach(item => {
                totalLifetimePoints += item.points || 0;
            });
        }
        
        // Adding points from touch gun
        totalLifetimePoints += gameData.points || 0;

        // Assign the calculated total lifetime points to the statistics object
        statistics.totalLifetimePoints = totalLifetimePoints;

        // Assign other statistics properties based on game data
        statistics.totalPotencyUpgrades = determineTotalPotencyUpgrades(gameData);
        statistics.totalFirerateUpgrades = gameData.totalFirerateUpgrades || 0;
        statistics.totalMultiFireUpgrades = gameData.totalMultiFireUpgrades || 0;
        statistics.totalAccuracyUpgrades = gameData.totalAccuracyUpgrades || 0;
        statistics.totalCriticalShotUpgrades = gameData.totalCriticalShotUpgrades || 0;
        statistics.totalCriticalDamageUpgrades = gameData.totalCriticalDamageUpgrades || 0;
        statistics.totalSplashRadiusUpgrades = gameData.totalSplashRadiusUpgrades || 0;
        statistics.totalSplashDamageUpgrades = gameData.totalSplashDamageUpgrades || 0;
        statistics.totalBigUpgradesPurchased = gameData.totalBigUpgradesPurchased || 0;
    }
}

// Example function to get total potency upgrades from game data
function determineTotalPotencyUpgrades(gameData) {
    let potencyUpgrades = 0;
    if (gameData && gameData.weaponUpgradeLevels) {
        for (const weapon in gameData.weaponUpgradeLevels) {
            if (gameData.weaponUpgradeLevels.hasOwnProperty(weapon)) {
                potencyUpgrades += gameData.weaponUpgradeLevels[weapon].potency || 0;
            }
        }
    }
    return potencyUpgrades;
}
