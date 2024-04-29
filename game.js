// Define variables for weapons, points, and upgrades
let touchGunCost = 100;
let touchGunPointsPerClick = 1;
let touchGunLevel = 0;

let awokenTouchGunCost = 500000;
let awokenTouchGunLevel = 0;

let superAwokenTouchGunCost = 500000000000;
let superAwokenTouchGunLevel = 0;

let pistolCost = 10;
let pistolPointsPerShot = 1;
let pistolFireRate = 1000; // in milliseconds
let pistolFirerateUpgradeCost = 50;
let pistolPotencyUpgradeCost = 100;
let pistolFirerateLevel = 0;
let pistolPotencyLevel = 0;

let smgCost = 100;
let smgPointsPerShot = 1;
let smgFireRate = 200; // in milliseconds
let smgFirerateUpgradeCost = 600;
let smgPotencyUpgradeCost = 1200;
let smgFirerateLevel = 0;
let smgPotencyLevel = 0;

let shotgunCost = 500;
let shotgunPointsPerShot = 4;
let shotgunFireRate = 1500; // in milliseconds
let shotgunMultiFireUpgradeCost = 25000;
let shotgunFirerateUpgradeCost = 5000;
let shotgunPotencyUpgradeCost = 10000;
let shotgunBulletsPerShot = 3; // Initial bullets per shot
let shotgunFirerateLevel = 0;
let shotgunPotencyLevel = 0;
let shotgunMultiFireLevel = 0;

let sniperRifleCost = 7500;
let sniperRiflePointsPerShot = 80;
let sniperRifleFireRate = 4000; // in milliseconds
let sniperRifleFirerateUpgradeCost = 37500;
let sniperRiflePotencyUpgradeCost = 75000;
let sniperRifleCriticalShotUpgradeCost = 75000;
let sniperRifleCriticalDamageUpgradeCost = 250000;
let sniperRifleCriticalShotChance = 25; // 25% chance for a "Critical Shot" for increased points
let sniperRifleCriticalDamageMultiplier = 2.0; // The amount of extra points yielded from a "Critical Shot"
let sniperRifleCriticalShotValueIncrement = 0.02; // Increases the chance to trigger a "Critical Shot" by 2%
let sniperRifleCriticalDamageValueIncrement = 0.2; // Increases the point multiplier gained from crits by x0.2
let sniperRifleFirerateLevel = 0;
let sniperRiflePotencyLevel = 0;
let sniperRifleCriticalShotLevel = 0;
let sniperRifleCriticalDamageLevel = 0;

let ak47Cost = 60000;
let ak47PointsPerShot = 150;
let ak47FireRate = 500; // in milliseconds
let ak47FirerateUpgradeCost = 175000;
let ak47PotencyUpgradeCost = 250000;
let ak47FirerateLevel = 0;
let ak47PotencyLevel = 0;

let rocketLauncherCost = 400000;
let rocketLauncherPointsPerShot = 1000;
let rocketLauncherFireRate = 5000; // in milliseconds
let rocketLauncherSplashRadius = 300;
let rocketLauncherSplashDamage = 0.4;
let rocketLauncherFirerateUpgradeCost = 1000000;
let rocketLauncherPotencyUpgradeCost = 750000;
let rocketLauncherSplashRadiusUpgradeCost = 10000000;
let rocketLauncherSplashDamageUpgradeCost = 5000000;
let rocketLauncherFirerateLevel = 0;
let rocketLauncherPotencyLevel = 0;
let rocketLauncherSplashRadiusLevel = 0;
let rocketLauncherSplashDamageLevel = 0;

let tommyGunCost = 2500000;
let tommyGunPointsPerShot = 600;
let tommyGunFireRate = 150; // in milliseconds
let tommyGunInaccuracyChance = 50; // 50% chance to not successfully hit a target; ineffective shot
let tommyGunAccuracyPenalty = 0.5; // 50% less points for inaccurate shots
let tommyGunFirerateUpgradeCost = 15000000;
let tommyGunPotencyUpgradeCost = 10000000;
let tommyGunAccuracyUpgradeCost = 20000000;
let tommyGunFirerateLevel = 0;
let tommyGunPotencyLevel = 0;
let tommyGunAccuracyLevel = 0;

let doubleBarrelCost = 30000000;
let doubleBarrelPointsPerShot = 4000;
let doubleBarrelFireRate = 2000; // in milliseconds
let doubleBarrelMultiFireUpgradeCost = 150000000;
let doubleBarrelFirerateUpgradeCost = 80000000;
let doubleBarrelPotencyUpgradeCost = 60000000;
let doubleBarrelBulletsPerShot = 2; // Initial bullets per shot
let doubleBarrelFirerateLevel = 0;
let doubleBarrelPotencyLevel = 0;
let doubleBarrelMultiFireLevel = 0;

let points = 0;
let gameplayPoints = 0;

let numberFormat = 'standard'; // Default number format

let pistolPurchased = false;
let smgPurchased = false;
let shotgunPurchased = false;
let sniperRiflePurchased = false;
let ak47Purchased = false;
let rocketLauncherPurchased = false;
let tommyGunPurchased = false;
let doubleBarrelPurchased = false;

let lastPistolPointsTime = 0;
let lastSMGPointsTime = 0;
let lastShotgunPointsTime = 0;
let lastSniperRiflePointsTime = 0;
let lastAK47PointsTime = 0;
let lastRocketLauncherPointsTime = 0;
let lastTommyGunPointsTime = 0;
let lastDoubleBarrelPointsTime = 0;

let achievements = [
    { name: "Target Practicer", description: "Start your target-shooting practice by earning your first point from the touch gun.", condition: () => points > 0, achieved: false },
    { name: "You're Doing Great!", description: "Reach 1,000 points.", condition: () => points >= 1000, achieved: false },
    { name: "Target Mauler", description: "Reach 10,000 points.", condition: () => points >= 10000, achieved: false },
    { name: "Target Assassin", description: "Reach 100,000 points.", condition: () => points >= 100000, achieved: false },
    { name: "Target Millionaire", description: "Reach 1,000,000 points.", condition: () => points >= 1000000, achieved: false },
    { name: "Target Billionaire", description: "Reach 1,000,000,000 points.", condition: () => points >= 1000000000, achieved: false },
    { name: "Target Trillionaire", description: "Reach 1,000,000,000,000 points.", condition: () => points >= 1000000000000, achieved: false },
    { name: "Target Quadrillionaire", description: "Reach 1,000,000,000,000,000 points.", condition: () => points >= 1000000000000000, achieved: false },
    { name: "Target Quintillionaire", description: "Reach 1,000,000,000,000,000,000 points.", condition: () => points >= 1000000000000000000, achieved: false },
    { name: "Potency Leveller", description: "Upgrade the stat 'Potency' a total of 10 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 10, achieved: false },
    { name: "Potency Expert", description: "Upgrade the stat 'Potency' a total of 100 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 100, achieved: false },
    { name: "Potency Master", description: "Upgrade the stat 'Potency' a total of 500 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 500, achieved: false },
    { name: "Potency Grandmaster", description: "Upgrade the stat 'Potency' a total of 1,000 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 1000, achieved: false },
    { name: "Firerate Leveller", description: "Upgrade the stat 'Firerate' a total of 10 times (for any weapon type).", condition: () => getTotalFirerateUpgrades() >= 10, achieved: false },
    { name: "Firerate Expert", description: "Upgrade the stat 'Firerate' a total of 100 times (for any weapon type).", condition: () => getTotalFirerateUpgrades() >= 100, achieved: false },
    { name: "Bullet Storm", description: "Upgrade the stat 'Multi-Fire' a total of 5 times (only for Shotguns and Double Barrels).", condition: () => getTotalMultiFireUpgrades() >= 5, achieved: false },
    { name: "Bullet Hell", description: "Upgrade the stat 'Multi-Fire' a total of 25 times (only for Shotguns and Double Barrels).", condition: () => getTotalMultiFireUpgrades() >= 25, achieved: false },
    { name: "Weapon Forger", description: "Purchase a 'Big Upgrade' on any weapon type (including Touch Gun).", condition: () => getTotalBigUpgrades() > 0, achieved: false },
    { name: "Weapon Crafter", description: "Purchase 10 different types of big upgrades on any weapon (including Touch Gun).", condition: () => getTotalBigUpgrades() >= 10, achieved: false },
    { name: "Weapon Smelter", description: "Purchase 50 different types of big upgrades on any weapon (including Touch Gun).", condition: () => getTotalBigUpgrades() >= 50, achieved: false }
];

let statistics = {
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

const weaponSFX = {};
const upgrades = {
    touchGun: {
        pointyFingers: {
            cost: 500,
            effect: function() {
                touchGunPointsPerClick *= 2; // Doubles the amount of points per click
            }
        },
        ambidextrous: {
            cost: 5000,
            effect: function() {
                touchGunPointsPerClick *= 2;
            }
        },
        thousandFingers: {
            cost: 100000,
            effect: function() {
                touchGunPointsPerClick += 0.5 * pistolPotencyLevel; // Increases touch gun value based on the current potency levels of those weapons
            }
        },
        antirestingCream: {
            cost: 500000,
            effect: function() {
                touchGunPointsPerClick *= 3;
            }
        },
        powerfulHands: {
            cost: 20000000,
            effect: function() {
                touchGunPointsPerClick *= 5;
            }
        },
        awakenUpgrade: {
            cost: 100000000,
            effect: function() {}
        },
        millionFingers: {
            cost: 200000000,
            effect: function() {
                touchGunPointsPerClick += 5 * pistolPotencyLevel; // Increases touch gun value based on the current potency levels of those weapons
            }
        },
        stingingTaps: {
            cost: 1000000000,
            effect: function() {
                touchGunPointsPerClick *= 4;
            }
        },
        gotToTap: {
            cost: 5000000000,
            effect: function() {
                touchGunPointsPerClick *= 3;
            }
        },
        fingerSwarm: {
            cost: 50000000000,
            effect: function() {
                touchGunPointsPerClick *= 4;
            }
        },
        billionFingers: {
            cost: 300000000000,
            effect: function() {
                touchGunPointsPerClick += 50 * pistolPotencyLevel; // Increases touch gun value based on the current potency levels of those weapons
            }
        },
        superAwakenUpgrade: {
            cost: 100000000000000,
            effect: function() {}
        },
        // Add more upgrades for touchGun here
    },
    pistol: {
        biggerBullets: {
            cost: 1000,
            effect: function() {
                pistolPointsPerShot *= 2; // Doubles the amount of points per shot
            }
        },
        largerCalibre: {
            cost: 200000,
            effect: function() {
                pistolPointsPerShot *= 3; // Triples the amount of points per shot
            }
        },
        easierReloading: {
            cost: 875000,
            effect: function() {
                pistolFireRate -= 150; // Reduces the fire rate speed (in milliseconds) for the pistol
            }
        },
        louderFiring: {
            cost: 5000000,
            effect: function() {
                pistolPointsPerShot *= 3; // Triples the amount of points per shot
            }
        },
        metalPiercing: {
            cost: 100000000,
            effect: function() {
                pistolPointsPerShot *= 4; // Quadruples the amount of points per shot
            }
        },
        specializedMechanisms: {
            cost: 3000000000,
            effect: function() {
                pistolPointsPerShot *= 4; // Quadruples the amount of points per shot
            }
        },
        fineTuning: {
            cost: 10000000000,
            effect: function() {
                pistolPointsPerShot *= 1.5;
                pistolFireRate -= 100;
            }
        },
        versatileGunshots: {
            cost: 100000000000,
            effect: function() {
                pistolPointsPerShot *= 5;
            }
        },
        empowered: {
            cost: 1000000000000,
            effect: function() {
                pistolPointsPerShot *= 5;
            }
        },
        oneHitBullets: {
            cost: 25000000000000,
            effect: function() {
                pistolPointsPerShot *= 6;
            }
        },
        // Add more upgrades for pistol here
    },
    smg: {
        betterSpread: {
            cost: 10000,
            effect: function() {
                smgPointsPerShot *= 2;
            }
        },
        strongHold: {
            cost: 1500000,
            effect: function() {
                smgPointsPerShot *= 3;
            }
        },
        pressureBullets: {
            cost: 22500000,
            effect: function() {
                smgPointsPerShot *= 3;
            }
        },
        wickedAimer: {
            cost: 125000000,
            effect: function() {
                smgFireRate *= 0.8;
            }
        },
        bashingRounds: {
            cost: 1000000000,
            effect: function() {
                smgPointsPerShot *= 4;
            }
        },
        autoAimer: {
            cost: 10000000000,
            effect: function() {
                smgPointsPerShot *= 4;
            }
        },
        lightweight: {
            cost: 50000000000,
            effect: function() {
                smgFireRate *= 0.85;
            }
        },
        metalPassers: {
            cost: 250000000000,
            effect: function() {
                smgPointsPerShot *= 5;
            }
        },
        inescapableBarrage: {
            cost: 2500000000000,
            effect: function() {
                smgPointsPerShot *= 5;
            }
        },
        neverMissBarrage: {
            cost: 50000000000000,
            effect: function() {
                smgPointsPerShot *= 6;
            }
        },
        // Add more upgrades for smg here
    },
    shotgun: {
        moreBarrels: {
            cost: 100000,
            effect: function() {
                shotgunBulletsPerShot += 2; // Increases the number of barrels by 2
            }
        },
        powerfulBurst: {
            cost: 7500000,
            effect: function() {
                shotgunPointsPerShot *= 2;
            }
        },
        devastatingBurst: {
            cost: 200000000,
            effect: function() {
                shotgunPointsPerShot *= 3;
            }
        },
        megaBurst: {
            cost: 2500000000,
            effect: function() {
                shotgunPointsPerShot *= 3;
            }
        },
        scattershot: {
            cost: 50000000000,
            effect: function() {
                shotgunBulletsPerShot *= 2; // Multiplies the number of barrels by 2
            }
        },
        gigaBurst: {
            cost: 300000000000,
            effect: function() {
                shotgunPointsPerShot *= 4;
            }
        },
        omegaBurst: {
            cost: 2000000000000,
            effect: function() {
                shotgunPointsPerShot *= 4;
            }
        },
        teraBurst: {
            cost: 20000000000000,
            effect: function() {
                shotgunPointsPerShot *= 5;
            }
        },
        ultimatumBurst: {
            cost: 250000000000000,
            effect: function() {
                shotgunPointsPerShot *= 5;
            }
        },
        buckshot: {
            cost: 750000000000000,
            effect: function() {
                shotgunBulletsPerShot *= 2;
            }
        },
        // Add more upgrades for shotgun here
    },
    sniperRifle: {
        deadlyPrecision: {
            cost: 2000000,
            effect: function() {
                sniperRifleCriticalDamageMultiplier += 1; // Increases the critical damage multiplier by 1
            }
        },
        cripplingShots: {
            cost: 37500000,
            effect: function() {
                sniperRiflePointsPerShot *= 2;
            }
        },
        headShot: {
            cost: 750000000,
            effect: function() {
                sniperRifleCriticalDamageMultiplier += 2;
            }
        },
        dangerousRifling: {
            cost: 3333000000,
            effect: function() {
                sniperRiflePointsPerShot *= 3;
            }
        },
        luckyShot: {
            cost: 77777000000,
            effect: function() {
                sniperRifleCriticalShotChance += 10; // Increases the critical chance by an additional 10%
            }
        },
        enhancedTracers: {
            cost: 150000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 3;
            }
        },
        infraredScope: {
            cost: 750000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 2;
                sniperRifleCriticalDamageMultiplier *= 1.5;
            }
        },
        electroshockTracers: {
            cost: 3000000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 4;
            }
        },
        lethalTracers: {
            cost: 30000000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 4;
            }
        },
        heatseekingSensors: {
            cost: 200000000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 3;
                sniperRifleCriticalShotChance += 5;
            }
        },
        // Add more upgrades for sniperRifle here
    },
    ak47: {
        heatTippedBullets: {
            cost: 12000000,
            effect: function() {
                ak47PointsPerShot *= 2;
            }
        },
        staggeringBullets: {
            cost: 800000000,
            effect: function() {
                ak47PointsPerShot *= 3;
            }
        },
        rippingBullets: {
            cost: 17500000000,
            effect: function() {
                ak47PointsPerShot *= 3;
            }
        },
        vehementBullets: {
            cost: 150000000000,
            effect: function() {
                ak47PointsPerShot *= 4;
            }
        },
        overbearingVelocity: {
            cost: 1500000000000,
            effect: function() {
                ak47PointsPerShot *= 4;
            }
        },
        poweredVelocity: {
            cost: 7500000000000,
            effect: function() {
                ak47PointsPerShot *= 2;
            }
        },
        instantaneousVelocity: {
            cost: 75000000000000,
            effect: function() {
                ak47PointsPerShot *= 5;
            }
        },
        spikyBullets: {
            cost: 750000000000000,
            effect: function() {
                ak47PointsPerShot *= 5;
            }
        },
        ferociousBullets: {
            cost: 10000000000000000,
            effect: function() {
                ak47PointsPerShot *= 6;
            }
        },
        unfathomablePressure: {
            cost: 150000000000000000,
            effect: function() {
                ak47PointsPerShot *= 6;
            }
        },
        // Add more upgrades for ak47 here
    },
    rocketLauncher: {
        potentRockets: {
            cost: 150000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 2;
            }
        },
        violentExplosions: {
            cost: 3000000000,
            effect: function() {
                rocketLauncherSplashDamage += 0.2;
            }
        },
        repeatedExplosions: {
            cost: 15000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 3;
            }
        },
        biggerExplosions: {
            cost: 250000000000,
            effect: function() {
                rocketLauncherSplashRadius += 100;
            }
        },
        extraGunpowder: {
            cost: 500000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 3;
            }
        },
        shatteringExplosions: {
            cost: 5000000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 4;
            }
        },
        napalmRockets: {
            cost: 40000000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 4;
            }
        },
        impulsiveExplosions: {
            cost: 300000000000000,
            effect: function() {
                rocketLauncherSplashDamage += 0.2;
            }
        },
        rampantTips: {
            cost: 1000000000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 5;
            }
        },
        kamikaze: {
            cost: 5000000000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 2;
                rocketLauncherSplashRadius += 100;
            }
        },
        // Add more upgrades for rocketLauncher here
    },
    tommyGun: {
        preciseAccuracy: {
            cost: 750000000,
            effect: function() {
                tommyGunInaccuracyChance -= 10; // Reduces the inaccuracy chance of the tommy gun
            }
        },
        tightPressure: {
            cost: 2500000000,
            effect: function() {
                tommyGunPointsPerShot *= 2;
            }
        },
        lessPunishing: {
            cost: 10000000000,
            effect: function() {
                tommyGunAccuracyPenalty += 0.17; // Reduces the accuracy penalty of the tommy gun
            }
        },
        powerfulOutcomes: {
            cost: 62500000000,
            effect: function() {
                tommyGunPointsPerShot *= 3;
            }
        },
        vehementBurst: {
            cost: 750000000000,
            effect: function() {
                tommyGunPointsPerShot *= 3;
            }
        },
        theVector: {
            cost: 6000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 4;
            }
        },
        dangerZone: {
            cost: 45000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 4;
            }
        },
        dischargedRippers: {
            cost: 300000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 5;
            }
        },
        unstoppableBarrage: {
            cost: 3000000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 5;
            }
        },
        unavoidable: {
            cost: 20000000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 3;
                tommyGunInaccuracyChance -= 10;
            }
        },
        // Add more upgrades for tommyGun here
    },
    doubleBarrel: {
        lethalShots: {
            cost: 1000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 2;
            }
        },
        arcSwitchingBarrels: {
            cost: 10000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 3;
            }
        },
        doubleTrouble: {
            cost: 250000000000,
            effect: function() {
                doubleBarrelBulletsPerShot *= 2;
            }
        },
        energized: {
            cost: 1500000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 3;
            }
        },
        doubleSwarm: {
            cost: 75000000000000,
            effect: function() {
                doubleBarrelBulletsPerShot *= 2;
            }
        },
        clumpedShots: {
            cost: 200000000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 4;
            }
        },
        tightShots: {
            cost: 1500000000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 4;
            }
        },
        heavyForce: {
            cost: 15000000000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 5;
            }
        },
        unbearableForce: {
            cost: 125000000000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 5;
            }
        },
        doubleYeah: {
            cost: 875000000000000000,
            effect: function() {
                doubleBarrelBulletsPerShot *= 2;
            }
        },
        // Add more upgrades for doubleBarrel here
    }
    // Add more weapons and upgrades as needed
};

// Function to update points display
function updatePointsDisplay() {
    const scoreValueMain = document.getElementById('score-value-main');
    const scoreValueUpgrades = document.getElementById('score-value-upgrades');

    // Update main tab points display
    if (scoreValueMain) {
        scoreValueMain.textContent = formatNumber(points);
    }

    // Update upgrades tab points display
    if (scoreValueUpgrades) {
        scoreValueUpgrades.textContent = formatNumber(points);
    }
    
    // Update lifetime points statistic
    updateLifetimePoints();
}

// Function to handle clicking the earn points button
function earnPoints() {
    points += touchGunPointsPerClick; // Increment points based on Touch Gun
    updatePointsDisplay();
}

// Function to handle automatic points generation for purchased weapons
function automaticPointsGeneration() {
    if (pistolPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastPistolPointsTime >= pistolFireRate) {
                // Calculate points per shot
                let pointsPerShot = pistolPointsPerShot;
                shoot('pistol', pointsPerShot, false, false);
                lastPistolPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (smgPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastSMGPointsTime >= smgFireRate) {
                // Calculate points per shot
                let pointsPerShot = smgPointsPerShot;
                shoot('smg', pointsPerShot, false, false);
                lastSMGPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (shotgunPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastShotgunPointsTime >= shotgunFireRate) {
                // Calculate points per shot
                let pointsPerShot = shotgunPointsPerShot * shotgunBulletsPerShot;
                shoot('shotgun', pointsPerShot, false, false);
                lastShotgunPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (sniperRiflePurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastSniperRiflePointsTime >= sniperRifleFireRate) {
                // Calculate points per shot
                let pointsPerShot = sniperRiflePointsPerShot;
                let critical = false;

                // For sniper rifle, check for critical hit
                const criticalChance = Math.min(100, 25 + sniperRifleCriticalShotLevel * 2);
                if (criticalChance >= Math.random() * 100) {
                    // Critical shot
                    pointsPerShot *= sniperRifleCriticalDamageMultiplier;
                    critical = true;
                }
                shoot('sniperRifle', pointsPerShot, critical, false);
                lastSniperRiflePointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (ak47Purchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastAK47PointsTime >= ak47FireRate) {
                // Calculate points per shot
                let pointsPerShot = ak47PointsPerShot;
                shoot('ak47', pointsPerShot, false, false);
                lastAK47PointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (rocketLauncherPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastRocketLauncherPointsTime >= rocketLauncherFireRate) {
                // Calculate points per shot
                let pointsPerShot = rocketLauncherPointsPerShot;
                shoot('rocketLauncher', pointsPerShot, false, false);
                lastRocketLauncherPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (tommyGunPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastTommyGunPointsTime >= tommyGunFireRate) {
                // Calculate points per shot
                let pointsPerShot = tommyGunPointsPerShot;
                let miss = false;
                // Check for miss based on inaccuracy chance
                const inaccuracyChance = Math.min(100, 50 + tommyGunAccuracyLevel * -2);
                if (inaccuracyChance >= Math.random() * 100) {
                    // Apply inaccuracy penalty if missed
                    pointsPerShot *= tommyGunAccuracyPenalty; // 50% less points for inaccurate shots
                    miss = true;
                }
                shoot('tommyGun', pointsPerShot, false, miss); // Pass 'miss' to indicate if the shot missed
                lastTommyGunPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
    if (doubleBarrelPurchased) {
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastDoubleBarrelPointsTime >= doubleBarrelFireRate) {
                // Calculate points per shot
                let pointsPerShot = doubleBarrelPointsPerShot * doubleBarrelBulletsPerShot;
                shoot('doubleBarrel', pointsPerShot, false, false);
                lastDoubleBarrelPointsTime = currentTime;
            }
        }, 100); // Check every 100 milliseconds for points generation
    }
}

// Function to handle purchasing weapons and upgrades
function purchase(item) {
    switch (item) {
        case 'touchGun':
            purchaseUpgrade('touchGun', touchGunLevel, touchGunCost, 2, 1, 'touchGun');
            break;
        case 'touchGunAwaken':
            purchaseUpgrade('touchGunAwaken', awokenTouchGunLevel, awokenTouchGunCost, 4, 100, 'touchGun');
            break;
        case 'touchGunSuperAwaken':
            purchaseUpgrade('touchGunSuperAwaken', superAwokenTouchGunLevel, superAwokenTouchGunCost, 8, 10000, 'touchGun');
            break;
        case 'pistol':
            if (!pistolPurchased) {
                purchaseWeapon('pistol', pistolCost);
            } else {
                alert("Pistol has already been purchased!");
            }
            break;
        case 'smg':
            if (!smgPurchased) {
                purchaseWeapon('smg', smgCost);
            } else {
                alert("SMG has already been purchased!");
            }
            break;
        case 'shotgun':
            if (!shotgunPurchased) {
                purchaseWeapon('shotgun', shotgunCost);
            } else {
                alert("Shotgun has already been purchased!");
            }
            break;
        case 'sniperRifle':
            if (!sniperRiflePurchased) {
                purchaseWeapon('sniperRifle', sniperRifleCost);
            } else {
                alert("Sniper Rifle has already been purchased!");
            }
            break;
        case 'ak47':
            if (!ak47Purchased) {
                purchaseWeapon('ak47', ak47Cost);
            } else {
                alert("AK-47 has already been purchased!");
            }
            break;
        case 'rocketLauncher':
            if (!rocketLauncherPurchased) {
                purchaseWeapon('rocketLauncher', rocketLauncherCost);
            } else {
                alert("Rocket Launcher has already been purchased!");
            }
            break;
        case 'tommyGun':
            if (!tommyGunPurchased) {
                purchaseWeapon('tommyGun', tommyGunCost);
            } else {
                alert("Tommy Gun has already been purchased!");
            }
            break;
        case 'doubleBarrel':
            if (!doubleBarrelPurchased) {
                purchaseWeapon('doubleBarrel', doubleBarrelCost);
            } else {
                alert("Double Barrel has already been purchased!");
            }
            break;
        case 'pistolFirerate':
            purchaseUpgrade('pistolFirerate', pistolFirerateLevel, pistolFirerateUpgradeCost, 1.8, -25, 'firerate');
            break;
        case 'pistolPotency':
            purchaseUpgrade('pistolPotency', pistolPotencyLevel, pistolPotencyUpgradeCost, 1.4, 1, 'potency');
            break;
        case 'smgFirerate':
            purchaseUpgrade('smgFirerate', smgFirerateLevel, smgFirerateUpgradeCost, 2.2, -10, 'firerate');
            break;
        case 'smgPotency':
            purchaseUpgrade('smgPotency', smgPotencyLevel, smgPotencyUpgradeCost, 1.4, 1, 'potency');
            break;
        case 'shotgunFirerate':
            purchaseUpgrade('shotgunFirerate', shotgunFirerateLevel, shotgunFirerateUpgradeCost, 2, -50, 'firerate');
            break;
        case 'shotgunPotency':
            purchaseUpgrade('shotgunPotency', shotgunPotencyLevel, shotgunPotencyUpgradeCost, 1.4, 4, 'potency');
            break;
        case 'shotgunMultiFire':
            purchaseUpgrade('shotgunMultiFire', shotgunMultiFireLevel, shotgunMultiFireUpgradeCost, 5, 1, 'multiFire');
            break;
        case 'sniperRifleFirerate':
            purchaseUpgrade('sniperRifleFirerate', sniperRifleFirerateLevel, sniperRifleFirerateUpgradeCost, 2, -200, 'firerate');
            break;
        case 'sniperRiflePotency':
            purchaseUpgrade('sniperRiflePotency', sniperRiflePotencyLevel, sniperRiflePotencyUpgradeCost, 1.4, 80, 'potency');
            break;
        case 'sniperRifleCriticalShot':
            purchaseUpgrade('sniperRifleCriticalShot', sniperRifleCriticalShotLevel, sniperRifleCriticalShotUpgradeCost, 3, 2, 'criticalShotChance');
            break;
        case 'sniperRifleCriticalDamage':
            purchaseUpgrade('sniperRifleCriticalDamage', sniperRifleCriticalDamageLevel, sniperRifleCriticalDamageUpgradeCost, 2.5, 0.2, 'criticalDamage');
            break;
        case 'ak47Firerate':
            purchaseUpgrade('ak47Firerate', ak47FirerateLevel, ak47FirerateUpgradeCost, 1.8, -20, 'firerate');
            break;
        case 'ak47Potency':
            purchaseUpgrade('ak47Potency', ak47PotencyLevel, ak47PotencyUpgradeCost, 1.4, 150, 'potency');
            break;
        case 'rocketLauncherFirerate':
            purchaseUpgrade('rocketLauncherFirerate', rocketLauncherFirerateLevel, rocketLauncherFirerateUpgradeCost, 2, -200, 'firerate');
            break;
        case 'rocketLauncherPotency':
            purchaseUpgrade('rocketLauncherPotency', rocketLauncherPotencyLevel, rocketLauncherPotencyUpgradeCost, 1.4, 1000, 'potency');
            break;
        case 'rocketLauncherSplashRadius':
            purchaseUpgrade('rocketLauncherSplashRadius', rocketLauncherSplashRadiusLevel, rocketLauncherSplashRadiusUpgradeCost, 50, 10, 'splashRadius');
            break;
        case 'rocketLauncherSplashDamage':
            purchaseUpgrade('rocketLauncherSplashDamage', rocketLauncherSplashDamageLevel, rocketLauncherSplashDamageUpgradeCost, 7.5, 0.05, 'splashDamage');
            break;
        case 'tommyGunFirerate':
            purchaseUpgrade('tommyGunFirerate', tommyGunFirerateLevel, tommyGunFirerateUpgradeCost, 2.2, -5, 'firerate');
            break;
        case 'tommyGunPotency':
            purchaseUpgrade('tommyGunPotency', tommyGunPotencyLevel, tommyGunPotencyUpgradeCost, 1.4, 600, 'potency');
            break;
        case 'tommyGunAccuracy':
            purchaseUpgrade('tommyGunAccuracy', tommyGunAccuracyLevel, tommyGunAccuracyUpgradeCost, 2.5, 2, 'accuracy');
            break;
        case 'doubleBarrelFirerate':
            purchaseUpgrade('doubleBarrelFirerate', doubleBarrelFirerateLevel, doubleBarrelFirerateUpgradeCost, 1.8, -50, 'firerate');
            break;
        case 'doubleBarrelPotency':
            purchaseUpgrade('doubleBarrelPotency', doubleBarrelPotencyLevel, doubleBarrelPotencyUpgradeCost, 1.4, 4000, 'potency');
            break;
        case 'doubleBarrelMultiFire':
            purchaseUpgrade('doubleBarrelMultiFire', doubleBarrelMultiFireLevel, doubleBarrelMultiFireUpgradeCost, 10, 2, 'multiFire');
            break;
        default:
            console.error("Invalid item:", item);
    }
}

// Function to purchase a weapon
function purchaseWeapon(weapon, cost) {
    if (points >= cost) {
        points -= cost;
        switch (weapon) {
            case 'touchGun':
                break;
            case 'pistol':
                pistolCost *= 2;
                pistolPurchased = true;
                break;
            case 'smg':
                smgCost *= 2;
                smgPurchased = true;
                break;
            case 'shotgun':
                shotgunCost *= 2;
                shotgunPurchased = true;
                break;
            case 'sniperRifle':
                sniperRifleCost *= 2;
                sniperRiflePurchased = true;
                break;
            case 'ak47':
                ak47Cost *= 2;
                ak47Purchased = true;
                break;
            case 'rocketLauncher':
                rocketLauncherCost *= 2;
                rocketLauncherPurchased = true;
                break;
            case 'tommyGun':
                tommyGunCost *= 2;
                tommyGunPurchased = true;
                break;
            case 'doubleBarrel':
                doubleBarrelCost *= 2;
                doubleBarrelPurchased = true;
                break;
            default:
                console.error("Invalid weapon:", weapon);
        }
        document.getElementById(`${weapon}-purchase`).style.display = 'none';
        updatePointsDisplay();
        updateCostDisplay();
    } else {
        alert(`Not enough points to purchase ${weapon}!`);
    }
}

// Function to purchase an upgrade
function purchaseUpgrade(upgradeType, level, cost, costMultiplier, valueIncrement, upgradeCategory) {
    if (points >= cost) {
        points -= cost;
        cost *= costMultiplier;
        level++;
        switch (upgradeType) {
            case 'touchGun':
                touchGunCost = cost;
                touchGunLevel = level;
                if (upgrades.touchGun.pointyFingers.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.ambidextrous.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.thousandFingers.bought) {
                    valueIncrement += 0.5 * pistolPotencyLevel;
                }
                if (upgrades.touchGun.antirestingCream.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.powerfulHands.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.millionFingers.bought) {
                    valueIncrement += 5 * pistolPotencyLevel;
                }
                if (upgrades.touchGun.stingingTaps.bought) {
                    valueIncrement *= 4;
                }
                if (upgrades.touchGun.gotToTap.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.fingerSwarm.bought) {
                    valueIncrement *= 4;
                }
                if (upgrades.touchGun.billionFingers.bought) {
                    valueIncrement += 50 * pistolPotencyLevel;
                }
                touchGunPointsPerClick += valueIncrement;
                break;
            case 'touchGunAwaken':
                awokenTouchGunCost = cost;
                awokenTouchGunLevel = level;
                if (upgrades.touchGun.pointyFingers.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.ambidextrous.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.thousandFingers.bought) {
                    valueIncrement += 50 * pistolPotencyLevel;
                }
                if (upgrades.touchGun.antirestingCream.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.powerfulHands.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.millionFingers.bought) {
                    valueIncrement += 500 * pistolPotencyLevel;
                }
                if (upgrades.touchGun.stingingTaps.bought) {
                    valueIncrement *= 4;
                }
                if (upgrades.touchGun.gotToTap.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.fingerSwarm.bought) {
                    valueIncrement *= 4;
                }
                if (upgrades.touchGun.billionFingers.bought) {
                    valueIncrement += 5000 * pistolPotencyLevel;
                }
                touchGunPointsPerClick += valueIncrement;
                break;
            case 'touchGunSuperAwaken':
                superAwokenTouchGunCost = cost;
                superAwokenTouchGunLevel = level;
                if (upgrades.touchGun.pointyFingers.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.ambidextrous.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.thousandFingers.bought) {
                    valueIncrement += 5000 * pistolPotencyLevel;
                }
                if (upgrades.touchGun.antirestingCream.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.powerfulHands.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.millionFingers.bought) {
                    valueIncrement += 50000 * pistolPotencyLevel;
                }
                if (upgrades.touchGun.stingingTaps.bought) {
                    valueIncrement *= 4;
                }
                if (upgrades.touchGun.gotToTap.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.fingerSwarm.bought) {
                    valueIncrement *= 4;
                }
                if (upgrades.touchGun.billionFingers.bought) {
                    valueIncrement += 500000 * pistolPotencyLevel;
                }
                touchGunPointsPerClick += valueIncrement;
                break;
            case 'pistolFirerate':
                if (level <= 20) {
                    pistolFirerateUpgradeCost = cost;
                    pistolFirerateLevel = level;
                    pistolFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for pistol fire rate upgrade.");
                    alert("Pistol's firing rate has been maxed out!");
                }
                break;
            case 'pistolPotency':
                pistolPotencyUpgradeCost = cost;
                pistolPotencyLevel = level;
                if (upgrades.pistol.biggerBullets.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if biggerBullets upgrade is purchased
                }
                if (upgrades.pistol.largerCalibre.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the largerCalibre upgrade is purchased
                }
                if (upgrades.pistol.louderFiring.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the louderFiring upgrade is purchased
                }
                if (upgrades.pistol.metalPiercing.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the metalPiercing upgrade is purchased
                }
                if (upgrades.pistol.fineTuning.bought) {
                    valueIncrement *= 1.5; // Multiplies valueIncrement by 1.5 if the fineTuning upgrade is purchased
                }
                if (upgrades.pistol.versatileGunshots.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the versatileGunshots upgrade is purchased
                }
                if (upgrades.pistol.empowered.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the empowered upgrade is purchased
                }
                if (upgrades.pistol.oneHitBullets.bought) {
                    valueIncrement *= 6; // Multiplies valueIncrement by 6 if the oneHitBullets upgrade is purchased
                }
                pistolPointsPerShot += valueIncrement;
                break;
            case 'smgFirerate':
                if (level <= 10) {
                    smgFirerateUpgradeCost = cost;
                    smgFirerateLevel = level;
                    smgFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for smg fire rate upgrade.");
                    alert("SMG's firing rate has been maxed out!");
                }
                break;
            case 'smgPotency':
                smgPotencyUpgradeCost = cost;
                smgPotencyLevel = level;
                if (upgrades.smg.betterSpread.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the betterSpread upgrade is purchased
                }
                if (upgrades.smg.strongHold.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the strongHold upgrade is purchased
                }
                if (upgrades.smg.pressureBullets.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the pressureBullets upgrade is purchased
                }
                if (upgrades.smg.bashingRounds.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the bashingRounds upgrade is purchased
                }
                if (upgrades.smg.autoAimer.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the autoAimer upgrade is purchased
                }
                if (upgrades.smg.metalPassers.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the metalPassers upgrade is purchased
                }
                if (upgrades.smg.inescapableBarrage.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the inescapableBarrage upgrade is purchased
                }
                if (upgrades.smg.neverMissBarrage.bought) {
                    valueIncrement *= 6; // Multiplies valueIncrement by 6 if the neverMissBarrage upgrade is purchased
                }
                smgPointsPerShot += valueIncrement;
                break;
            case 'shotgunFirerate':
                if (level <= 15) {
                    shotgunFirerateUpgradeCost = cost;
                    shotgunFirerateLevel = level;
                    shotgunFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for shotgun fire rate upgrade.");
                    alert("Shotgun's firing rate has been maxed out!");
                }
                break;
            case 'shotgunPotency':
                shotgunPotencyUpgradeCost = cost;
                shotgunPotencyLevel = level;
                if (upgrades.shotgun.powerfulBurst.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the powerfulBurst upgrade is purchased
                }
                if (upgrades.shotgun.devastatingBurst.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the devastatingBurst upgrade is purchased
                }
                if (upgrades.shotgun.megaBurst.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the megaBurst upgrade is purchased
                }
                if (upgrades.shotgun.gigaBurst.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the gigaBurst upgrade is purchased
                }
                if (upgrades.shotgun.omegaBurst.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the omegaBurst upgrade is purchased
                }
                if (upgrades.shotgun.teraBurst.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the teraBurst upgrade is purchased
                }
                if (upgrades.shotgun.ultimatumBurst.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the ultimatumBurst upgrade is purchased
                }
                shotgunPointsPerShot += valueIncrement;
                break;
            case 'shotgunMultiFire':
                shotgunMultiFireUpgradeCost = cost;
                shotgunMultiFireLevel = level;
                if (upgrades.shotgun.scattershot.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the scattershot upgrade is purchased
                }
                if (upgrades.shotgun.buckshot.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the buckshot upgrade is purchased
                }
                shotgunBulletsPerShot += valueIncrement;
                break;
            case 'sniperRifleFirerate':
                if (level <= 10) {
                    sniperRifleFirerateUpgradeCost = cost;
                    sniperRifleFirerateLevel = level;
                    sniperRifleFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for sniper rifle fire rate upgrade.");
                    alert("Sniper Rifle's firing rate has been maxed out!");
                }
                break;
            case 'sniperRiflePotency':
                sniperRiflePotencyUpgradeCost = cost;
                sniperRiflePotencyLevel = level;
                if (upgrades.sniperRifle.cripplingShots.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the cripplingShots upgrade is purchased
                }
                if (upgrades.sniperRifle.dangerousRifling.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the dangerousRifling upgrade is purchased
                }
                if (upgrades.sniperRifle.enhancedTracers.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the enhancedTracers upgrade is purchased
                }
                if (upgrades.sniperRifle.infraredScope.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the infraredScope upgrade is purchased
                }
                if (upgrades.sniperRifle.electroshockTracers.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the electroshockTracers upgrade is purchased
                }
                if (upgrades.sniperRifle.lethalTracers.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the lethalTracers upgrade is purchased
                }
                if (upgrades.sniperRifle.heatseekingSensors.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the heatseekingSensors upgrade is purchased
                }
                sniperRiflePointsPerShot += valueIncrement;
                break;
            case 'sniperRifleCriticalShot':
                sniperRifleCriticalShotUpgradeCost = cost;
                sniperRifleCriticalShotLevel = level;
                sniperRifleCriticalShotChance += valueIncrement;
                break;
            case 'sniperRifleCriticalDamage':
                sniperRifleCriticalDamageUpgradeCost = cost;
                sniperRifleCriticalDamageLevel = level;
                if (upgrades.sniperRifle.infraredScope.bought) {
                    valueIncrement *= 1.5;
                }
                sniperRifleCriticalDamageMultiplier += valueIncrement;
                break;
            case 'ak47Firerate':
                if (level <= 15) {
                    ak47FirerateUpgradeCost = cost;
                    ak47FirerateLevel = level;
                    ak47FireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for ak47 fire rate upgrade.");
                    alert("AK-47's firing rate has been maxed out!");
                }
                break;
            case 'ak47Potency':
                ak47PotencyUpgradeCost = cost;
                ak47PotencyLevel = level;
                if (upgrades.ak47.heatTippedBullets.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the heatTippedBullets upgrade is purchased
                }
                if (upgrades.ak47.staggeringBullets.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the staggeringBullets upgrade is purchased
                }
                if (upgrades.ak47.rippingBullets.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the rippingBullets upgrade is purchased
                }
                if (upgrades.ak47.vehementBullets.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the vehementBullets upgrade is purchased
                }
                if (upgrades.ak47.overbearingVelocity.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the overbearingVelocity upgrade is purchased
                }
                if (upgrades.ak47.poweredVelocity.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the poweredVelocity upgrade is purchased
                }
                if (upgrades.ak47.instantaneousVelocity.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the instantaneousVelocity upgrade is purchased
                }
                if (upgrades.ak47.spikyBullets.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the spikyBullets upgrade is purchased
                }
                if (upgrades.ak47.ferociousBullets.bought) {
                    valueIncrement *= 6; // Multiplies valueIncrement by 6 if the ferociousBullets upgrade is purchased
                }
                if (upgrades.ak47.unfathomablePressure.bought) {
                    valueIncrement *= 6; // Multiplies valueIncrement by 6 if the unfathomablePressure upgrade is purchased
                }
                ak47PointsPerShot += valueIncrement;
                break;
            case 'rocketLauncherFirerate':
                if (level <= 15) {
                    rocketLauncherFirerateUpgradeCost = cost;
                    rocketLauncherFirerateLevel = level;
                    rocketLauncherFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for rocket launcher fire rate upgrade.");
                    alert("Rocket Launcher's firing rate has been maxed out!");
                }
                break;
            case 'rocketLauncherPotency':
                rocketLauncherPotencyUpgradeCost = cost;
                rocketLauncherPotencyLevel = level;
                if (upgrades.rocketLauncher.potentRockets.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the potentRockets upgrade is purchased
                }
                if (upgrades.rocketLauncher.repeatedExplosions.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the repeatedExplosions upgrade is purchased
                }
                if (upgrades.rocketLauncher.extraGunpowder.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the extraGunpowder upgrade is purchased
                }
                if (upgrades.rocketLauncher.shatteringExplosions.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the shatteringExplosions upgrade is purchased
                }
                if (upgrades.rocketLauncher.napalmRockets.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the napalmRockets upgrade is purchased
                }
                if (upgrades.rocketLauncher.rampantTips.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the rampantTips upgrade is purchased
                }
                if (upgrades.rocketLauncher.kamikaze.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the kamikaze upgrade is purchased
                }
                rocketLauncherPointsPerShot += valueIncrement;
                break;
            case 'rocketLauncherSplashRadius':
                if (level <= 5) {
                    rocketLauncherSplashRadiusUpgradeCost = cost;
                    rocketLauncherSplashRadiusLevel = level;
                    rocketLauncherSplashRadius += valueIncrement;
                } else {
                    console.log("Maximum level reached for rocket launcher splash radius upgrade.");
                    alert("Rocket Launcher's splash radius has been maxed out!");
                }
                break;
            case 'rocketLauncherSplashDamage':
                rocketLauncherSplashDamageUpgradeCost = cost;
                rocketLauncherSplashDamageLevel = level;
                rocketLauncherSplashDamage += valueIncrement;
                break;
            case 'tommyGunFirerate':
                if (level <= 20) {
                    tommyGunFirerateUpgradeCost = cost;
                    tommyGunFirerateLevel = level;
                    tommyGunFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for tommy gun fire rate upgrade.");
                    alert("Tommy Gun's firing rate has been maxed out!");
                }
                break;
            case 'tommyGunPotency':
                tommyGunPotencyUpgradeCost = cost;
                tommyGunPotencyLevel = level;
                if (upgrades.tommyGun.tightPressure.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the tightPressure upgrade is purchased
                }
                if (upgrades.tommyGun.powerfulOutcomes.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the powerfulOutcomes upgrade is purchased
                }
                if (upgrades.tommyGun.vehementBurst.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the vehementBurst upgrade is purchased
                }
                if (upgrades.tommyGun.theVector.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the theVector upgrade is purchased
                }
                if (upgrades.tommyGun.dangerZone.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the dangerZone upgrade is purchased
                }
                if (upgrades.tommyGun.dischargedRippers.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the dischargedRippers upgrade is purchased
                }
                if (upgrades.tommyGun.unstoppableBarrage.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the unstoppableBarrage upgrade is purchased
                }
                if (upgrades.tommyGun.unavoidable.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the unavoidable upgrade is purchased
                }
                tommyGunPointsPerShot += valueIncrement;
                break;
            case 'tommyGunAccuracy':
                tommyGunAccuracyUpgradeCost = cost;
                tommyGunAccuracyLevel = level;
                tommyGunInaccuracyChance -= valueIncrement;
                break;
            case 'doubleBarrelFirerate':
                if (level <= 25) {
                    doubleBarrelFirerateUpgradeCost = cost;
                    doubleBarrelFirerateLevel = level;
                    doubleBarrelFireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for double barrel fire rate upgrade.");
                    alert("Double Barrel's firing rate has been maxed out!");
                }
                break;
            case 'doubleBarrelPotency':
                doubleBarrelPotencyUpgradeCost = cost;
                doubleBarrelPotencyLevel = level;
                if (upgrades.doubleBarrel.lethalShots.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the lethalShots upgrade is purchased
                }
                if (upgrades.doubleBarrel.arcSwitchingBarrels.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the arcSwitchingBarrels upgrade is purchased
                }
                if (upgrades.doubleBarrel.energized.bought) {
                    valueIncrement *= 3; // Multiplies valueIncrement by 3 if the energized upgrade is purchased
                }
                if (upgrades.doubleBarrel.clumpedShots.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the clumpedShots upgrade is purchased
                }
                if (upgrades.doubleBarrel.tightShots.bought) {
                    valueIncrement *= 4; // Multiplies valueIncrement by 4 if the tightShots upgrade is purchased
                }
                if (upgrades.doubleBarrel.heavyForce.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the heavyForce upgrade is purchased
                }
                if (upgrades.doubleBarrel.unbearableForce.bought) {
                    valueIncrement *= 5; // Multiplies valueIncrement by 5 if the unbearableForce upgrade is purchased
                }
                doubleBarrelPointsPerShot += valueIncrement;
                break;
            case 'doubleBarrelMultiFire':
                doubleBarrelMultiFireUpgradeCost = cost;
                doubleBarrelMultiFireLevel = level;
                if (upgrades.doubleBarrel.doubleTrouble.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the doubleTrouble upgrade is purchased
                }
                if (upgrades.doubleBarrel.doubleSwarm.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the doubleSwarm upgrade is purchased
                }
                if (upgrades.doubleBarrel.doubleYeah.bought) {
                    valueIncrement *= 2; // Multiplies valueIncrement by 2 if the doubleYeah upgrade is purchased
                }
                doubleBarrelBulletsPerShot += valueIncrement;
                break;
            default:
                console.error("Invalid upgradeType:", upgradeType);
        }
        updatePointsDisplay();
        updateCostDisplay();
    } else {
        alert(`Not enough points to upgrade ${upgradeType}!`);
    }
}

function bigUpgrades(weapon, upgrade, cost) {
    // Retrieve upgrade data based on weapon and upgrade
    const upgradeData = upgrades[weapon][upgrade];

    // Find the upgrade option elements based on class name
    const upgradeOptions = document.querySelectorAll(`.upgrade-option.${weapon}`);
    let upgradeOption; // Variable to hold the specific upgrade option

    // Find the specific upgrade option based on its ID
    upgradeOptions.forEach(option => {
        if (option.id === `${weapon}-${upgrade}`) {
            upgradeOption = option;
        }
    });

    if (!upgradeOption) {
        console.error(`Upgrade option ${weapon}-${upgrade} not found.`);
        return;
    }

    // Check if the upgrade is already bought
    if (upgradeData.bought) {
        alert(`${upgrade} already bought!`);
        return; // Exit the function if the upgrade is already bought
    }

    // Check if the player has enough points to purchase the upgrade
    if (points >= cost) {
        // Deduct the cost of the upgrade from the player's points
        points -= cost;

        // Apply the upgrade effect
        upgradeData.effect();

        // Update points display after purchasing the upgrade
        updatePointsDisplay();

        // Mark the upgrade as bought to prevent re-purchasing
        upgradeData.bought = true;

        // Update the cost display to indicate "Bought!" and format the cost
        const costDisplay = upgradeOption.querySelector('.upgrade-cost');
        if (costDisplay) {
            costDisplay.textContent = "Bought!";
        }

        // Remove the display: none style to make the upgrade option visible again
        upgradeOption.style.display = '';

        // Move the upgrade option to the "bought" subtab
        const boughtSubtab = document.getElementById('bought-upgrades');
        if (boughtSubtab) {
            // Remove the upgrade option from its current parent
            upgradeOption.parentNode.removeChild(upgradeOption);
            // Add the upgrade option to the "bought" subtab
            boughtSubtab.appendChild(upgradeOption);
        }
    } else {
        // Player doesn't have enough points to purchase the upgrade
        console.log("Insufficient points to purchase the upgrade.");
        alert(`You don't have enough points to purchase ${upgrade}!`);
    }

    // Format the cost for non-bought upgrades
    if (!upgradeData.bought) {
        const formattedCost = formatNumber(cost);
        // Update the cost display with the formatted cost
        const costDisplay = upgradeOption.querySelector('.upgrade-cost');
        if (costDisplay) {
            costDisplay.textContent = `Cost: ${formattedCost}`; // Update the cost display
        }
    }
}

// Function to update weapon and upgrade costs in the HTML
function updateCostDisplay() {
    const pistolFirerateValue = pistolFireRate; // Convert fire rate to milliseconds
    const pistolPotencyValue = pistolPointsPerShot; // No need for calculations, potency is already in points per shot
    const smgFirerateValue = smgFireRate;
    const smgPotencyValue = smgPointsPerShot;
    const shotgunFirerateValue = shotgunFireRate;
    const shotgunPotencyValue = shotgunPointsPerShot;
    const shotgunMultiFireValue = shotgunBulletsPerShot;
    const sniperRifleFirerateValue = sniperRifleFireRate;
    const sniperRiflePotencyValue = sniperRiflePointsPerShot;
    const sniperRifleCriticalChanceValue = sniperRifleCriticalShotChance;
    const sniperRifleCriticalDamageValue = sniperRifleCriticalDamageMultiplier;
    const ak47FirerateValue = ak47FireRate;
    const ak47PotencyValue = ak47PointsPerShot;
    const rocketLauncherFirerateValue = rocketLauncherFireRate;
    const rocketLauncherPotencyValue = rocketLauncherPointsPerShot;
    const rocketLauncherSplashRadiusValue = rocketLauncherSplashRadius;
    const rocketLauncherSplashDamageValue = rocketLauncherSplashDamage;
    const tommyGunFirerateValue = tommyGunFireRate;
    const tommyGunPotencyValue = tommyGunPointsPerShot;
    const tommyGunInaccuracyChanceValue = -0 + tommyGunInaccuracyChance;
    const doubleBarrelFirerateValue = doubleBarrelFireRate;
    const doubleBarrelPotencyValue = doubleBarrelPointsPerShot;
    const doubleBarrelMultiFireValue = doubleBarrelBulletsPerShot;
    
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
    
    document.getElementById('pistol-cost').textContent = formatNumber(pistolCost);
    document.getElementById('pistolFirerate-cost').textContent = formatNumber(pistolFirerateUpgradeCost);
    document.getElementById('pistolPotency-cost').textContent = formatNumber(pistolPotencyUpgradeCost);
    document.getElementById('pistolFirerate-level').textContent = pistolFirerateLevel;
    document.getElementById('pistolPotency-level').textContent = pistolPotencyLevel;
    document.getElementById('pistolFirerate-value').textContent = pistolFirerateValue + 'ms';
    document.getElementById('pistolPotency-value').textContent = formatNumber(pistolPotencyValue);
    
    document.getElementById('smg-cost').textContent = formatNumber(smgCost);
    document.getElementById('smgFirerate-cost').textContent = formatNumber(smgFirerateUpgradeCost);
    document.getElementById('smgPotency-cost').textContent = formatNumber(smgPotencyUpgradeCost);
    document.getElementById('smgFirerate-level').textContent = smgFirerateLevel;
    document.getElementById('smgPotency-level').textContent = smgPotencyLevel;
    document.getElementById('smgFirerate-value').textContent = smgFirerateValue + 'ms';
    document.getElementById('smgPotency-value').textContent = formatNumber(smgPotencyValue);
    
    document.getElementById('shotgun-cost').textContent = formatNumber(shotgunCost);
    document.getElementById('shotgunFirerate-cost').textContent = formatNumber(shotgunFirerateUpgradeCost);
    document.getElementById('shotgunPotency-cost').textContent = formatNumber(shotgunPotencyUpgradeCost);
    document.getElementById('shotgunMultiFire-cost').textContent = formatNumber(shotgunMultiFireUpgradeCost);
    document.getElementById('shotgunFirerate-level').textContent = shotgunFirerateLevel;
    document.getElementById('shotgunPotency-level').textContent = shotgunPotencyLevel;
    document.getElementById('shotgunMultiFire-level').textContent = shotgunMultiFireLevel;
    document.getElementById('shotgunFirerate-value').textContent = shotgunFirerateValue + 'ms';
    document.getElementById('shotgunPotency-value').textContent = formatNumber(shotgunPotencyValue);
    document.getElementById('shotgunMultiFire-value').textContent = shotgunMultiFireValue;
    
    document.getElementById('sniperRifle-cost').textContent = formatNumber(sniperRifleCost);
    document.getElementById('sniperRifleFirerate-cost').textContent = formatNumber(sniperRifleFirerateUpgradeCost);
    document.getElementById('sniperRiflePotency-cost').textContent = formatNumber(sniperRiflePotencyUpgradeCost);
    document.getElementById('sniperRifleCriticalShot-cost').textContent = formatNumber(sniperRifleCriticalShotUpgradeCost);
    document.getElementById('sniperRifleCriticalDamage-cost').textContent = formatNumber(sniperRifleCriticalDamageUpgradeCost);
    document.getElementById('sniperRifleFirerate-level').textContent = sniperRifleFirerateLevel;
    document.getElementById('sniperRiflePotency-level').textContent = sniperRiflePotencyLevel;
    document.getElementById('sniperRifleCriticalShot-level').textContent = sniperRifleCriticalShotLevel;
    document.getElementById('sniperRifleCriticalDamage-level').textContent = sniperRifleCriticalDamageLevel;
    document.getElementById('sniperRifleFirerate-value').textContent = sniperRifleFirerateValue + 'ms';
    document.getElementById('sniperRiflePotency-value').textContent = formatNumber(sniperRiflePotencyValue);
    document.getElementById('sniperRifleCriticalChance-value').textContent = sniperRifleCriticalChanceValue;
    document.getElementById('sniperRifleCriticalDamage-value').textContent = sniperRifleCriticalDamageValue;

    document.getElementById('ak47-cost').textContent = formatNumber(ak47Cost);
    document.getElementById('ak47Firerate-cost').textContent = formatNumber(ak47FirerateUpgradeCost);
    document.getElementById('ak47Potency-cost').textContent = formatNumber(ak47PotencyUpgradeCost);
    document.getElementById('ak47Firerate-level').textContent = ak47FirerateLevel;
    document.getElementById('ak47Potency-level').textContent = ak47PotencyLevel;
    document.getElementById('ak47Firerate-value').textContent = ak47FirerateValue + 'ms';
    document.getElementById('ak47Potency-value').textContent = formatNumber(ak47PotencyValue);

    document.getElementById('rocketLauncher-cost').textContent = formatNumber(rocketLauncherCost);
    document.getElementById('rocketLauncherFirerate-cost').textContent = formatNumber(rocketLauncherFirerateUpgradeCost);
    document.getElementById('rocketLauncherPotency-cost').textContent = formatNumber(rocketLauncherPotencyUpgradeCost);
    document.getElementById('rocketLauncherSplashRadius-cost').textContent = formatNumber(rocketLauncherSplashRadiusUpgradeCost);
    document.getElementById('rocketLauncherSplashDamage-cost').textContent = formatNumber(rocketLauncherSplashDamageUpgradeCost);
    document.getElementById('rocketLauncherFirerate-level').textContent = rocketLauncherFirerateLevel;
    document.getElementById('rocketLauncherPotency-level').textContent = rocketLauncherPotencyLevel;
    document.getElementById('rocketLauncherSplashRadius-level').textContent = rocketLauncherSplashRadiusLevel;
    document.getElementById('rocketLauncherSplashDamage-level').textContent = rocketLauncherSplashDamageLevel;
    document.getElementById('rocketLauncherFirerate-value').textContent = rocketLauncherFirerateValue + 'ms';
    document.getElementById('rocketLauncherPotency-value').textContent = formatNumber(rocketLauncherPotencyValue);
    document.getElementById('rocketLauncherSplashRadius-value').textContent = rocketLauncherSplashRadiusValue;
    document.getElementById('rocketLauncherSplashDamage-value').textContent = rocketLauncherSplashDamageValue;

    document.getElementById('tommyGun-cost').textContent = formatNumber(tommyGunCost);
    document.getElementById('tommyGunFirerate-cost').textContent = formatNumber(tommyGunFirerateUpgradeCost);
    document.getElementById('tommyGunPotency-cost').textContent = formatNumber(tommyGunPotencyUpgradeCost);
    document.getElementById('tommyGunAccuracy-cost').textContent = formatNumber(tommyGunAccuracyUpgradeCost);
    document.getElementById('tommyGunFirerate-level').textContent = tommyGunFirerateLevel;
    document.getElementById('tommyGunPotency-level').textContent = tommyGunPotencyLevel;
    document.getElementById('tommyGunAccuracy-level').textContent = tommyGunAccuracyLevel;
    document.getElementById('tommyGunFirerate-value').textContent = tommyGunFirerateValue + 'ms';
    document.getElementById('tommyGunPotency-value').textContent = formatNumber(tommyGunPotencyValue);
    document.getElementById('tommyGunAccuracy-value').textContent = tommyGunInaccuracyChanceValue;

    document.getElementById('doubleBarrel-cost').textContent = formatNumber(doubleBarrelCost);
    document.getElementById('doubleBarrelFirerate-cost').textContent = formatNumber(doubleBarrelFirerateUpgradeCost);
    document.getElementById('doubleBarrelPotency-cost').textContent = formatNumber(doubleBarrelPotencyUpgradeCost);
    document.getElementById('doubleBarrelMultiFire-cost').textContent = formatNumber(doubleBarrelMultiFireUpgradeCost);
    document.getElementById('doubleBarrelFirerate-level').textContent = doubleBarrelFirerateLevel;
    document.getElementById('doubleBarrelPotency-level').textContent = doubleBarrelPotencyLevel;
    document.getElementById('doubleBarrelMultiFire-level').textContent = doubleBarrelMultiFireLevel;
    document.getElementById('doubleBarrelFirerate-value').textContent = doubleBarrelFirerateValue + 'ms';
    document.getElementById('doubleBarrelPotency-value').textContent = formatNumber(doubleBarrelPotencyValue);
    document.getElementById('doubleBarrelMultiFire-value').textContent = doubleBarrelMultiFireValue;

    // Check if fire rate level is at maximum for each weapon
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
    if (upgrades.touchGun.superAwakenUpgrade.bought) {
        document.getElementById('touchGunSuperAwaken-purchase').style.display = 'block';
        document.getElementById('touchGunSuperAwaken-display').style.display = 'block';
    }
}

// Function to format numbers into units
function formatNumber(number) {
    if (number === 0) return '0';
    
    if (numberFormat === 'standard') {
        const suffixes = ['', 'k', 'M', 'B', 'T', 'Qd', 'Qn', 'Sx', 'Sp', 'O', 'N', 'Dc', 'UD', 'DD', 'TD', 'QdD', 'QnD', 'SxD', 'SpD', 'OcD', 'NoD', 'Vg', 'UV', 'DV'];
        const suffixIndex = Math.floor(Math.log10(number) / 3);
        const suffix = suffixes[suffixIndex];
        const scaledNumber = number / Math.pow(10, suffixIndex * 3);
        return scaledNumber.toFixed(3) + '' + suffix;
    } else if (numberFormat === 'scientific') {
        if (number < 1000) {
            // Display numbers less than 1000 without scientific notation
            return number.toLocaleString();
        } else if (number < 1000000000000000) {
            // Display numbers between 1000 and 1 quadrillion in scientific notation with commas for thousands
            return number.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            // Display numbers greater than or equal to 1 quadrillion in scientific notation
            return number.toExponential(3);
        }
    } else if (numberFormat === 'long') {
        const longSuffixes = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion', ' decillion', ' undecillion', ' duodecillion', ' tredecillion', ' quattuordecillion', ' quindecillion', ' sexdecillion', 'septendecillion', ' octodecillion', ' novemdecillion', ' vigintillion', ' unvigintillion', ' duovigintillion'];
        const longSuffixIndex = Math.floor(Math.log10(number) / 3);
        const longSuffix = longSuffixes[longSuffixIndex];
        const longScaledNumber = number / Math.pow(10, longSuffixIndex * 3);
        return longScaledNumber.toFixed(3) + longSuffix;
    } else {
        console.error("Invalid numberFormat:", numberFormat);
        return 'ERROR';
    }
}

// Function to update achievements display and progress bar
function updateAchievementsDisplay() {
    const achievementList = document.getElementById('achievement-list');
    const achievementsAlert = document.getElementById('achievements-alert');
    
    // Clear previous content
    achievementList.innerHTML = '';

    achievements.forEach(achievement => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${achievement.name}</h3>
            <p>${achievement.description}</p>
            <p>Status: ${achievement.achieved ? 'Achieved' : 'Not achieved'}</p>
        `;
        
        // Add class based on achievement status
        if (achievement.achieved) {
            listItem.classList.add('achieved');
        }

        // Add progress bar
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        const progress = document.createElement('div');
        progress.classList.add('progress');
        progressBar.appendChild(progress);
        listItem.appendChild(progressBar);

        achievementList.appendChild(listItem);

        // Update progress bar for this achievement
        updateProgressBar(achievement, progress);
    });

    // Show achievements alert for newly achieved ones
    const newlyAchieved = achievements.filter(achievement => achievement.achieved && !achievement.notified);
    if (newlyAchieved.length > 0) {
        handleAchievementAlert('New achievement unlocked: ' + newlyAchieved.map(a => a.name).join(', '));
        newlyAchieved.forEach(achievement => {
            achievement.notified = true;
        });
    }
}

// Function to update progress bar for a specific achievement
function updateProgressBar(achievement, progress) {
    setInterval(() => {
        const completionPercentage = calculateCompletionPercentage(achievement);
        progress.style.width = `${completionPercentage}%`;
        if (achievement.achieved) {
            progress.style.backgroundColor = 'green'; // Green color for completed achievements
        } else {
            progress.style.backgroundColor = 'red'; // Red color for incomplete achievements
        }
    }, 100);
}

// Function to calculate completion percentage for incomplete achievements
function calculateCompletionPercentage(achievement) {
    // Check if achievement is defined and has a condition method
    if (achievement && typeof achievement.condition === 'function') {
        // If the condition of the achievement is met, return 100; otherwise, return 0
        return achievement.condition() ? 100 : 0;
    } else {
        // If achievement is undefined or has no condition, return 0
        return 0;
    }
}

// Function to handle achievement alert
function handleAchievementAlert(message) {
    const achievementsAlert = document.getElementById('achievements-alert');
    achievementsAlert.textContent = message;
    setTimeout(() => {
        achievementsAlert.textContent = '';
    }, 3000); // Hide after 3 seconds
}

// Function to check and update achievements
function checkAndUpdateAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.achieved && achievement.condition()) {
            achievement.achieved = true;
        }
    });

    // Update achievements display
    updateAchievementsDisplay();
}

// Function to get total potency upgrades
function getTotalPotencyUpgrades() {
    return pistolPotencyLevel + smgPotencyLevel + shotgunPotencyLevel + sniperRiflePotencyLevel + ak47PotencyLevel + rocketLauncherPotencyLevel + tommyGunPotencyLevel + doubleBarrelPotencyLevel;
}

// Function to get total firerate upgrades
function getTotalFirerateUpgrades() {
    return pistolFirerateLevel + smgFirerateLevel + shotgunFirerateLevel + sniperRifleFirerateLevel + ak47FirerateLevel + rocketLauncherFirerateLevel + tommyGunFirerateLevel + doubleBarrelFirerateLevel;
}

// Function to get total multifire upgrades
function getTotalMultiFireUpgrades() {
    return shotgunMultiFireLevel + doubleBarrelMultiFireLevel;
}

// Function to get total accuracy upgrades
function getTotalAccuracyUpgrades() {
    return tommyGunAccuracyLevel;
}

// Functions to get total critical shot and damage upgrades
function getTotalCriticalShotUpgrades() {
    return sniperRifleCriticalShotLevel;
}

function getTotalCriticalDamageUpgrades() {
    return sniperRifleCriticalDamageLevel;
}

// Functions to get total splash radius and damage upgrades
function getTotalSplashRadiusUpgrades() {
    return rocketLauncherSplashRadiusLevel;
}

function getTotalSplashDamageUpgrades() {
    return rocketLauncherSplashDamageLevel;
}


// Function to calculate the total number of big upgrades purchased
function getTotalBigUpgrades() {
    var totalBigUpgrades = 0;

    // Iterate over each weapon in the upgrades object
    for (const weapon in upgrades) {
        // Iterate over each upgrade option for the current weapon
        for (const upgrade in upgrades[weapon]) {
            // Retrieve the upgrade data
            const upgradeData = upgrades[weapon][upgrade];

            // Check if the upgrade is bought
            if (upgradeData.bought) {
                totalBigUpgrades++;
            }
        }
    }

    return totalBigUpgrades;
}

// Function to initialize upgrade costs with proper formatting
function initializeUpgradeCosts() {
    const upgradeOptions = document.querySelectorAll('.upgrade-option');
    upgradeOptions.forEach(upgradeOption => {
        const costElement = upgradeOption.querySelector('.upgrade-cost');
        if (costElement) {
            const costText = costElement.textContent.trim(); // Trim any leading/trailing whitespace
            const isBought = costText === "Bought!"; // Check if upgrade is already bought
            if (!isBought) {
                const cost = parseInt(costText.replace(/\D/g, ''), 10); // Extract cost as integer
                const formattedCost = formatNumber(cost); // Format the cost using your formatNumber function
                costElement.textContent = `Cost: ${formattedCost}`; // Update the cost display
            }
        }
    });
}

// Function to initialize achievements
function initializeAchievements() {
    // Set default values for achievements if not already set
    achievements.forEach(achievement => {
        achievement.notified = false;
    });

    // Update achievements based on current game state
    checkAndUpdateAchievements();
}

// Function to initialize sound effects
function initializeSoundEffects() {
    // Load or create SFX IDs for each weapon
    weaponSFX.pistol = new Audio('sfx/pistol.wav');
    weaponSFX.smg = new Audio('sfx/smg.wav');
    weaponSFX.shotgun = new Audio('sfx/shotgun.wav');
    weaponSFX.sniperRifle = new Audio('sfx/sniper.wav');
    weaponSFX.ak47 = new Audio('sfx/ak47.wav');
    weaponSFX.rocketLauncher = new Audio('sfx/bazooka.wav');
    weaponSFX.tommyGun = new Audio('sfx/smg.wav');
    weaponSFX.doubleBarrel = new Audio('sfx/doublebarrel.wav');
}

// Function to play sound effect for a specific weapon
function playWeaponSoundEffect(weaponId) {
    try {
        if (soundEnabled && weaponSFX.hasOwnProperty(weaponId)) {
            weaponSFX[weaponId].play();
        }
    } catch (error) {
        console.error('Error playing sound effect:', error);
    }
}

function shoot(weaponId, pointsPerShot, critical, miss) {
    // Define floatingTextContainer variable
    const floatingTextContainer = document.getElementById('floating-text-container');
    // Generate points and display them as floating text
    const floatingText = document.createElement('div');
    floatingText.textContent = '+' + formatNumber(pointsPerShot);
    floatingText.classList.add('floating-text');

    // Set text color based on critical and miss status
    if (critical) {
        floatingText.textContent += ' Crit!';
        floatingText.classList.add('critical'); // Add critical class for critical hits
    }
    
    if (miss) {
        floatingText.textContent += ' Miss!';
        floatingText.classList.add('miss'); // Add miss class for missed shots
    }

    // Get the target element based on the weaponId
    const targetId = weaponId + '-target';
    const target = document.getElementById(targetId);

    if (!target) {
        // If target element doesn't exist, do nothing
        return;
    }

    // Calculate position at the center of the target
    const targetRect = target.getBoundingClientRect();
    const centerX = targetRect.left + window.pageXOffset + targetRect.width / 2;
    const centerY = targetRect.top + window.pageYOffset + targetRect.height / 2;

    // Set floating text position
    floatingText.style.left = centerX + 'px';
    floatingText.style.top = centerY + 'px';
    floatingText.style.animation = 'float-upwards 1s ease-out'; // Add animation for floating upwards

    // Append the floating text to the container
    floatingTextContainer.appendChild(floatingText);

    // Remove the floating text after a short delay
    setTimeout(() => {
        floatingText.remove();
    }, 1000); // Adjust the delay as needed

    // Increment the total points if it's not a rocket launcher or a rocket launcher's splash damage
    if (weaponId !== 'rocketLauncher' || (weaponId === 'rocketLauncher' && !miss)) {
        points += pointsPerShot;
        updatePointsDisplay();
    }

    // Handle rocket launcher's splash radius and damage
    if (weaponId === 'rocketLauncher') {
        // Get all shooting-range targets
        const targets = document.querySelectorAll('.target');

        // Calculate position of rocket launcher target
        const rocketTarget = document.getElementById('rocketLauncher-target');
        const rocketTargetRect = rocketTarget.getBoundingClientRect();
        const rocketTargetX = rocketTargetRect.left + rocketTargetRect.width / 2;
        const rocketTargetY = rocketTargetRect.top + rocketTargetRect.height / 2;

        // Loop through all targets to check for splash damage
        targets.forEach(t => {
            const tRect = t.getBoundingClientRect();
            const tCenterX = tRect.left + tRect.width / 2;
            const tCenterY = tRect.top + tRect.height / 2;

            // Calculate distance between rocket launcher target and current target
            const distanceX = Math.abs(rocketTargetX - tCenterX);
            const distanceY = Math.abs(rocketTargetY - tCenterY);

            // Check if target is within splash radius
            if (distanceX <= rocketLauncherSplashRadius && distanceY <= rocketLauncherSplashRadius && !(distanceX === 0 && distanceY === 0)) {
                // Apply splash damage
                const splashDamage = rocketLauncherPointsPerShot * rocketLauncherSplashDamage; // 40% of points per shot
                points += splashDamage;
                updatePointsDisplay();

                // Show splash damage text for each affected target
                const splashText = document.createElement('div');
                splashText.textContent = '+' + formatNumber(splashDamage);
                splashText.classList.add('floating-text');
                splashText.style.left = tCenterX + 'px';
                splashText.style.top = tCenterY + 'px';
                splashText.style.animation = 'float-upwards 1s ease-out'; // Add animation for floating upwards
                floatingTextContainer.appendChild(splashText);
                setTimeout(() => {
                    splashText.remove();
                }, 1000); // Adjust the delay as needed
            }
        });
    }

    // Play sound effect based on weapon type
    switch (weaponId) {
        case 'pistol':
            playWeaponSoundEffect('pistol');
            break;
        case 'smg':
            playWeaponSoundEffect('smg');
            break;
        case 'shotgun':
            playWeaponSoundEffect('shotgun');
            break;
        case 'sniperRifle':
            playWeaponSoundEffect('sniperRifle');
            break;
        case 'ak47':
            playWeaponSoundEffect('ak47');
            break;
        case 'rocketLauncher':
            playWeaponSoundEffect('rocketLauncher');
            break;
        case 'tommyGun':
            playWeaponSoundEffect('tommyGun');
            break;
        case 'doubleBarrel':
            playWeaponSoundEffect('doubleBarrel');
            break;
        default:
            break;
    }
}

// Function to get the total number of big upgrades purchased
function getTotalBigUpgradesPurchased() {
    // Loop through all upgrade data and count the total number of big upgrades purchased
    var totalBigUpgrades = 0;

    // Iterate over each weapon in the upgrades object
    for (const weapon in upgrades) {
        // Iterate over each upgrade option for the current weapon
        for (const upgrade in upgrades[weapon]) {
            // Retrieve the upgrade data
            const upgradeData = upgrades[weapon][upgrade];

            // Check if the upgrade is bought
            if (upgradeData.bought) {
                totalBigUpgrades++;
            }
        }
    }

    return totalBigUpgrades;
}

function updateStatisticsDisplay() {
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement) {
        lifetimePointsElement.textContent = formatNumber(statistics.totalLifetimePoints);
    }

    const totalBigUpgradesElement = document.getElementById('total-big-upgrades');
    if (totalBigUpgradesElement) {
        totalBigUpgradesElement.textContent = statistics.totalBigUpgradesPurchased;
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
            { name: 'Splash Damage Upgrades', key: 'totalSplashDamageUpgrades' }
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

// Loads the statistics data
function setStatistics() {
    // Calculate the total lifetime points
    let totalLifetimePoints = 0;
    
    totalLifetimePoints += points;
    statistics.totalLifetimePoints = totalLifetimePoints;

    // Calculate and assign the total big upgrades purchased
    statistics.totalBigUpgradesPurchased = getTotalBigUpgradesPurchased();

    // Calculate and assign other statistics based on game data
    statistics.totalPotencyUpgrades = getTotalPotencyUpgrades();
    statistics.totalFirerateUpgrades = getTotalFirerateUpgrades();
    statistics.totalMultiFireUpgrades = getTotalMultiFireUpgrades();
    statistics.totalAccuracyUpgrades = getTotalAccuracyUpgrades();
    statistics.totalCriticalShotUpgrades = getTotalCriticalShotUpgrades();
    statistics.totalCriticalDamageUpgrades = getTotalCriticalDamageUpgrades();
    statistics.totalSplashRadiusUpgrades = getTotalSplashRadiusUpgrades();
    statistics.totalSplashDamageUpgrades = getTotalSplashDamageUpgrades();

    // Update the statistics display
    updateStatisticsDisplay();
}

function initializeStatistics() {
    setStatistics();
}

// Function to update lifetime points statistic
function updateLifetimePoints() {
    // Calculate the difference in points earned from gameplay since the last update
    const pointsDifference = points - gameplayPoints;

    // Update the totalLifetimePoints with the points earned from gameplay
    statistics.totalLifetimePoints += pointsDifference;

    // Update the gameplayPoints variable for the next update
    gameplayPoints = points;

    // Display the updated lifetime points
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement) {
        lifetimePointsElement.textContent = formatNumber(statistics.totalLifetimePoints);
    }
}

// Initial setup
updatePointsDisplay();
updateCostDisplay();
updateAchievementsDisplay();
updateStatisticsDisplay();

// Start earning points automatically for purchased weapons
setInterval(automaticPointsGeneration, 1000); // Check every second for points generation

// Interval timer to update cost display every second
setInterval(updateCostDisplay, 100);

// Function to update achievements display every second
function updateAchievements() {
    updateAchievementsDisplay();
    checkAndUpdateAchievements(); // Check and update achievements status
}
setInterval(updateAchievements, 100);

// Function to update statistics display every second
function updateStatistics() {
    updateStatisticsDisplay();
    setStatistics();
    calculateCompletionPercentage(); // Update achievement progress
}
setInterval(updateStatistics, 100);
