let weapons = {};
let enemies = {};

fetch('config/weapons.json')
    .then(response => response.json())
    .then(data => {
        weapons = data.weapons;
    })
    .catch(error => console.error('Error loading weapons JSON:', error));

fetch('config/enemies.json')
  .then(response => response.json())
  .then(data => {
       enemies = data.enemies;
  })
  .catch(error => console.error('Error loading enemies data:', error));

let touchGunCost = 100;
let touchGunPointsPerClick = 1;
let touchGunLevel = 0;

let awokenTouchGunCost = 500000;
let awokenTouchGunLevel = 0;

let superAwokenTouchGunCost = 500000000000;
let superAwokenTouchGunLevel = 0;

let pistolFirerateUpgradeCost = 50;
let pistolPotencyUpgradeCost = 100;
let pistolFirerateLevel = 0;
let pistolPotencyLevel = 0;

let smgFirerateUpgradeCost = 600;
let smgPotencyUpgradeCost = 1200;
let smgFirerateLevel = 0;
let smgPotencyLevel = 0;

let shotgunMultiFireUpgradeCost = 25000;
let shotgunFirerateUpgradeCost = 5000;
let shotgunPotencyUpgradeCost = 10000;
let shotgunFirerateLevel = 0;
let shotgunPotencyLevel = 0;
let shotgunMultiFireLevel = 0;

let sniperRifleFirerateUpgradeCost = 37500;
let sniperRiflePotencyUpgradeCost = 75000;
let sniperRifleCriticalShotUpgradeCost = 75000;
let sniperRifleCriticalDamageUpgradeCost = 250000;
let sniperRifleFirerateLevel = 0;
let sniperRiflePotencyLevel = 0;
let sniperRifleCriticalShotLevel = 0;
let sniperRifleCriticalDamageLevel = 0;

let ak47FirerateUpgradeCost = 175000;
let ak47PotencyUpgradeCost = 250000;
let ak47FirerateLevel = 0;
let ak47PotencyLevel = 0;

let rocketLauncherFirerateUpgradeCost = 1000000;
let rocketLauncherPotencyUpgradeCost = 750000;
let rocketLauncherSplashRadiusUpgradeCost = 10000000;
let rocketLauncherSplashDamageUpgradeCost = 5000000;
let rocketLauncherFirerateLevel = 0;
let rocketLauncherPotencyLevel = 0;
let rocketLauncherSplashRadiusLevel = 0;
let rocketLauncherSplashDamageLevel = 0;

let tommyGunFirerateUpgradeCost = 15000000;
let tommyGunPotencyUpgradeCost = 10000000;
let tommyGunAccuracyUpgradeCost = 20000000;
let tommyGunFirerateLevel = 0;
let tommyGunPotencyLevel = 0;
let tommyGunAccuracyLevel = 0;

let doubleBarrelMultiFireUpgradeCost = 150000000;
let doubleBarrelFirerateUpgradeCost = 80000000;
let doubleBarrelPotencyUpgradeCost = 60000000;
let doubleBarrelFirerateLevel = 0;
let doubleBarrelPotencyLevel = 0;
let doubleBarrelMultiFireLevel = 0;

let uziFirerateUpgradeCost = 1500000000;
let uziPotencyUpgradeCost = 1000000000;
let uziFirerateLevel = 0;
let uziPotencyLevel = 0;

let huntingRifleFirerateUpgradeCost = 8000000000;
let huntingRiflePotencyUpgradeCost = 6000000000;
let huntingRifleCriticalShotUpgradeCost = 20000000000;
let huntingRifleCriticalDamageUpgradeCost = 30000000000;
let huntingRifleFirerateLevel = 0;
let huntingRiflePotencyLevel = 0;
let huntingRifleCriticalShotLevel = 0;
let huntingRifleCriticalDamageLevel = 0;

let points = 0;
let gameplayPoints = 0;

let numberFormat = 'standard'; // Default number format

let lastPointsTime = {
    pistol: 0,
    smg: 0,
    shotgun: 0,
    sniperRifle: 0,
    ak47: 0,
    rocketLauncher: 0,
    tommyGun: 0,
    doubleBarrel: 0,
    uzi: 0,
    huntingRifle: 0
};

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

let selectedWeapons = {};
const weaponSFX = {};
const weaponIds = ['pistol', 'smg', 'shotgun', 'sniperRifle', 'ak47', 'rocketLauncher', 'tommyGun', 'doubleBarrel', 'uzi', 'huntingRifle'];
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
                touchGunPointsPerClick += 0.5 * getTotalPotencyUpgrades(); // Increases touch gun value based on the current potency levels of those weapons
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
                touchGunPointsPerClick += 5 * getTotalPotencyUpgrades();
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
                touchGunPointsPerClick += 50 * getTotalPotencyUpgrades();
            }
        },
        needMore: {
            cost: 1000000000000,
            effect: function() {
                touchGunPointsPerClick *= 5;
            }
        },
        fingerPistols: {
            cost: 10000000000000,
            effect: function() {
                pistolPointsPerShot *= 1.1 * getTotalTouchGunUpgrades(); // Increases pistol points per shot by 10% for each touch gun upgrade level purchased on any type
            }
        },
        superAwakenUpgrade: {
            cost: 100000000000000,
            effect: function() {}
        },
        trillionFingers: {
            cost: 400000000000000,
            effect: function() {
                touchGunPointsPerClick += 500 * getTotalPotencyUpgrades();
            }
        },
        // Add more upgrades for touchGun here
    },
    pistol: {
        biggerBullets: {
            cost: 1000,
            effect: function() {
                pistolPointsPerShot *= 2; // Doubles the amount of points per shot
                pistolDamage *= 2; // Doubles the damage per shot
            }
        },
        largerCalibre: {
            cost: 200000,
            effect: function() {
                pistolPointsPerShot *= 3; // Triples the amount of points per shot
                pistolDamage *= 3; // Triples the damage per shot
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
                pistolDamage *= 3; // Triples the damage per shot
            }
        },
        metalPiercing: {
            cost: 100000000,
            effect: function() {
                pistolPointsPerShot *= 4; // Quadruples the amount of points per shot
                pistolDamage *= 4; // Quadruples the damage per shot
            }
        },
        specializedMechanisms: {
            cost: 3000000000,
            effect: function() {
                pistolPointsPerShot *= 4; // Quadruples the amount of points per shot
                pistolDamage *= 4; // Quadruples the damage per shot
            }
        },
        fineTuning: {
            cost: 10000000000,
            effect: function() {
                pistolPointsPerShot *= 1.5;
                pistolDamage *= 1.5;
                pistolFireRate -= 100;
            }
        },
        versatileGunshots: {
            cost: 100000000000,
            effect: function() {
                pistolPointsPerShot *= 5; // Quintuples the amount of points per shot
                pistolDamage *= 5; // Quintuples the damage per shot
            }
        },
        empowered: {
            cost: 1000000000000,
            effect: function() {
                pistolPointsPerShot *= 5; // Quintuples the amount of points per shot
                pistolDamage *= 5; // Quintuples the damage per shot
            }
        },
        oneHitBullets: {
            cost: 25000000000000,
            effect: function() {
                pistolPointsPerShot *= 6; // Sextuples the amount of points per shot
                pistolDamage *= 6; // Sextuples the damage per shot
            }
        },
        // Add more upgrades for pistol here
    },
    smg: {
        betterSpread: {
            cost: 10000,
            effect: function() {
                smgPointsPerShot *= 2;
                smgDamage *= 2;
            }
        },
        strongHold: {
            cost: 1500000,
            effect: function() {
                smgPointsPerShot *= 3;
                smgDamage *= 3;
            }
        },
        pressureBullets: {
            cost: 22500000,
            effect: function() {
                smgPointsPerShot *= 3;
                smgDamage *= 3;
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
                smgDamage *= 4;
            }
        },
        autoAimer: {
            cost: 10000000000,
            effect: function() {
                smgPointsPerShot *= 4;
                smgDamage *= 4;
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
                smgDamage *= 5;
            }
        },
        inescapableBarrage: {
            cost: 2500000000000,
            effect: function() {
                smgPointsPerShot *= 5;
                smgDamage *= 5;
            }
        },
        neverMissBarrage: {
            cost: 50000000000000,
            effect: function() {
                smgPointsPerShot *= 6;
                smgDamage *= 6;
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
                shotgunDamage *= 2;
            }
        },
        devastatingBurst: {
            cost: 200000000,
            effect: function() {
                shotgunPointsPerShot *= 3;
                shotgunDamage *= 3;
            }
        },
        megaBurst: {
            cost: 2500000000,
            effect: function() {
                shotgunPointsPerShot *= 3;
                shotgunDamage *= 3;
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
                shotgunDamage *= 4;
            }
        },
        omegaBurst: {
            cost: 2000000000000,
            effect: function() {
                shotgunPointsPerShot *= 4;
                shotgunDamage *= 4;
            }
        },
        teraBurst: {
            cost: 20000000000000,
            effect: function() {
                shotgunPointsPerShot *= 5;
                shotgunDamage *= 5;
            }
        },
        ultimatumBurst: {
            cost: 250000000000000,
            effect: function() {
                shotgunPointsPerShot *= 5;
                shotgunDamage *= 5;
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
                sniperRifleDamage *= 2;
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
                sniperRifleDamage *= 3;
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
                sniperRifleDamage *= 3;
            }
        },
        infraredScope: {
            cost: 750000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 2;
                sniperRifleDamage *= 2;
                sniperRifleCriticalDamageMultiplier *= 1.5;
            }
        },
        electroshockTracers: {
            cost: 3000000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 4;
                sniperRifleDamage *= 4;
            }
        },
        lethalTracers: {
            cost: 30000000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 4;
                sniperRifleDamage *= 4;
            }
        },
        heatseekingSensors: {
            cost: 200000000000000,
            effect: function() {
                sniperRiflePointsPerShot *= 3;
                sniperRifleDamage *= 3;
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
                ak47Damage *= 2;
            }
        },
        staggeringBullets: {
            cost: 800000000,
            effect: function() {
                ak47PointsPerShot *= 3;
                ak47Damage *= 3;
            }
        },
        rippingBullets: {
            cost: 17500000000,
            effect: function() {
                ak47PointsPerShot *= 3;
                ak47Damage *= 3;
            }
        },
        vehementBullets: {
            cost: 150000000000,
            effect: function() {
                ak47PointsPerShot *= 4;
                ak47Damage *= 4;
            }
        },
        overbearingVelocity: {
            cost: 1500000000000,
            effect: function() {
                ak47PointsPerShot *= 4;
                ak47Damage *= 4;
            }
        },
        poweredVelocity: {
            cost: 7500000000000,
            effect: function() {
                ak47PointsPerShot *= 2;
                ak47Damage *= 2;
            }
        },
        instantaneousVelocity: {
            cost: 75000000000000,
            effect: function() {
                ak47PointsPerShot *= 5;
                ak47Damage *= 5;
            }
        },
        spikyBullets: {
            cost: 750000000000000,
            effect: function() {
                ak47PointsPerShot *= 5;
                ak47Damage *= 6;
            }
        },
        ferociousBullets: {
            cost: 10000000000000000,
            effect: function() {
                ak47PointsPerShot *= 6;
                ak47Damage *= 6;
            }
        },
        unfathomablePressure: {
            cost: 150000000000000000,
            effect: function() {
                ak47PointsPerShot *= 6;
                ak47Damage *= 6;
            }
        },
        // Add more upgrades for ak47 here
    },
    rocketLauncher: {
        potentRockets: {
            cost: 150000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 2;
                rocketLauncherDamage *= 2;
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
                rocketLauncherDamage *= 3;
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
                rocketLauncherDamage *= 3;
            }
        },
        shatteringExplosions: {
            cost: 5000000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 4;
                rocketLauncherDamage *= 4;
            }
        },
        napalmRockets: {
            cost: 40000000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 4;
                rocketLauncherDamage *= 4;
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
                rocketLauncherDamage *= 5;
            }
        },
        kamikaze: {
            cost: 5000000000000000,
            effect: function() {
                rocketLauncherPointsPerShot *= 2;
                rocketLauncherDamage *= 2;
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
                tommyGunDamage *= 2;
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
                tommyGunDamage *= 3;
            }
        },
        vehementBurst: {
            cost: 750000000000,
            effect: function() {
                tommyGunPointsPerShot *= 3;
                tommyGunDamage *= 3;
            }
        },
        theVector: {
            cost: 6000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 4;
                tommyGunDamage *= 4;
            }
        },
        dangerZone: {
            cost: 45000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 4;
                tommyGunDamage *= 4;
            }
        },
        dischargedRippers: {
            cost: 300000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 5;
                tommyGunDamage *= 5;
            }
        },
        unstoppableBarrage: {
            cost: 3000000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 5;
                tommyGunDamage *= 5;
            }
        },
        unavoidable: {
            cost: 20000000000000000,
            effect: function() {
                tommyGunPointsPerShot *= 3;
                tommyGunDamage *= 3;
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
                doubleBarrelDamage *= 2;
            }
        },
        arcSwitchingBarrels: {
            cost: 10000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 3;
                doubleBarrelDamage *= 3;
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
                doubleBarrelDamage *= 3;
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
                doubleBarrelDamage *= 4;
            }
        },
        tightShots: {
            cost: 1500000000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 4;
                doubleBarrelDamage *= 4;
            }
        },
        heavyForce: {
            cost: 15000000000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 5;
                doubleBarrelDamage *= 5;
            }
        },
        unbearableForce: {
            cost: 125000000000000000,
            effect: function() {
                doubleBarrelPointsPerShot *= 5;
                doubleBarrelDamage *= 5;
            }
        },
        doubleYeah: {
            cost: 875000000000000000,
            effect: function() {
                doubleBarrelBulletsPerShot *= 2;
            }
        },
        // Add more upgrades for doubleBarrel here
    },
    uzi: {
        focussedSpread: {
            cost: 7500000000,
            effect: function() {
                uziPointsPerShot *= 2;
                uziDamage *= 2;
            }
        },
        quickfiringSalvo: {
            cost: 60000000000,
            effect: function() {
                uziPointsPerShot *= 3;
                uziDamage *= 3;
            }
        },
        tinyRippers: {
            cost: 400000000000,
            effect: function() {
                uziPointsPerShot *= 3;
                uziDamage *= 3;
            }
        },
        circuitousSpread: {
            cost: 4500000000000,
            effect: function() {
                uziPointsPerShot *= 4;
                uziDamage *= 4;
            }
        },
        bulletOverload: {
            cost: 50000000000000,
            effect: function() {
                uziPointsPerShot *= 4;
                uziDamage *= 4;
            }
        },
        bulletDrizzle: {
            cost: 250000000000000,
            effect: function() {
                uziPointsPerShot *= 2;
                uziDamage *= 2;
            }
        },
        alwaysHitting: {
            cost: 2500000000000000,
            effect: function() {
                uziPointsPerShot *= 5;
                uziDamage *= 5;
            }
        },
        // Add more upgrades for uzi here
    },
    huntingRifle: {
        powerfulHunter: {
            cost: 35000000000,
            effect: function() {
                huntingRiflePointsPerShot *= 2;
                huntingRifleDamage *= 2;
            }
        },
        headHunter: {
            cost: 175000000000,
            effect: function() {
                huntingRifleCriticalDamageMultiplier += 0.5; // Increases the critical damage multiplier by 0.5
            }
        },
        noEscape: {
            cost: 500000000000,
            effect: function() {
                huntingRiflePointsPerShot *= 3;
                huntingRifleDamage *= 3;
            }
        },
        criminalHunter: {
            cost: 4000000000000,
            effect: function() {
                huntingRiflePointsPerShot *= 3;
                huntingRifleDamage *= 3;
            }
        },
        targetHunter: {
            cost: 35000000000000,
            effect: function() {
                huntingRiflePointsPerShot *= 4;
                huntingRifleDamage *= 4;
            }
        },
        longTracers: {
            cost: 225000000000000,
            effect: function() {
                huntingRiflePointsPerShot *= 4;
                huntingRifleDamage *= 4;
            }
        },
        titanicTracers: {
            cost: 1750000000000000,
            effect: function() {
                huntingRiflePointsPerShot *= 2;
                huntingRifleDamage *= 2;
                huntingRifleCriticalDamageMultiplier *= 2;
                huntingRifleCriticalShotChance -= 5;
            }
        },
        // Add more upgrades for huntingRifle here
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
    let pointsPerShot = touchGunPointsPerClick;
    shoot('touchGun', pointsPerShot, false, false);
    updatePointsDisplay();
}

// Function for automatic points generation based on weapon fire rates
function automaticPointsGeneration() {
    Object.entries(weapons).forEach(([weaponId, weapon]) => {
        if (weapon.purchased) {
            setInterval(function() {
                const currentTime = Date.now();
                if (currentTime - lastPointsTime[weaponId] >= weapon.stats.fireRate) {
                    // Calculate points per shot
                    let pointsPerShot = weapon.stats.pointsPerShot;
                    let critical = false;
                    let miss = false;

                    // For sniper rifles, check for critical hit
                    if (weaponId === 'sniperRifle') {
                        const criticalChance = Math.min(100, weapon.stats.criticalChance + sniperRifleCriticalShotLevel * 2);
                        if (criticalChance >= Math.random() * 100) {
                            // Critical shot
                            pointsPerShot *= weapon.stats.criticalDamage;
                            critical = true;
                        }
                    }

                    // For hunting rifles, check for critical hit
                    if (weaponId === 'huntingRifle') {
                        const criticalChance = Math.min(100, weapon.stats.criticalChance + huntingRifleCriticalShotLevel * 2);
                        if (criticalChance >= Math.random() * 100) {
                            // Critical shot
                            pointsPerShot *= weapon.stats.criticalDamage;
                            critical = true;
                        }
                    }

                    // For shotguns and double barrels, adjust points per shot based on bullets per shot
                    if (weaponId === 'shotgun' || weaponId === 'doubleBarrel') {
                        pointsPerShot *= weapon.stats.bulletsPerShot;
                    }

                    // For tommy guns, check for missed shots
                    if (weaponId === 'tommyGun') {
                        const inaccuracyChance = Math.min(100, 50 + tommyGunAccuracyLevel * -2);
                        if (inaccuracyChance >= Math.random() * 100) {
                            // missed shot
                            pointsPerShot *= weapon.stats.inaccuracyPenalty;
                            miss = true;
                        }
                    }

                    shoot(weaponId, pointsPerShot, critical, miss);
                    lastPointsTime[weaponId] = currentTime;
                }
            }, weapon.stats.fireRate); // Check according to each weapon's fire rate
        }
    });
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
        case 'smg':
        case 'shotgun':
        case 'sniperRifle':
        case 'ak47':
        case 'rocketLauncher':
        case 'tommyGun':
        case 'doubleBarrel':
        case 'uzi':
        case 'huntingRifle':
            if (!weapons[item].purchased) {
                purchaseWeapon(item);
            } else {
                alert(`${item.charAt(0).toUpperCase() + item.slice(1)} has already been purchased!`);
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
            purchaseUpgrade('sniperRiflePotency', sniperRiflePotencyLevel, sniperRiflePotencyUpgradeCost, 1.4, 120, 'potency');
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
            purchaseUpgrade('rocketLauncherSplashRadius', rocketLauncherSplashRadiusLevel, rocketLauncherSplashRadiusUpgradeCost, 50, 100, 'splashRadius');
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
        case 'uziFirerate':
            purchaseUpgrade('uziFirerate', uziFirerateLevel, uziFirerateUpgradeCost, 2.6, -2.5, 'firerate');
            break;
        case 'uziPotency':
            purchaseUpgrade('uziPotency', uziPotencyLevel, uziPotencyUpgradeCost, 1.4, 3000, 'potency');
            break;
        case 'huntingRifleFirerate':
            purchaseUpgrade('huntingRifleFirerate', huntingRifleFirerateLevel, huntingRifleFirerateUpgradeCost, 1.8, -100, 'firerate');
            break;
        case 'huntingRiflePotency':
            purchaseUpgrade('huntingRiflePotency', huntingRiflePotencyLevel, huntingRiflePotencyUpgradeCost, 1.4, 180000, 'potency');
            break;
        case 'huntingRifleCriticalShot':
            purchaseUpgrade('huntingRifleCriticalShot', huntingRifleCriticalShotLevel, huntingRifleCriticalShotUpgradeCost, 3.5, 2, 'criticalShotChance');
            break;
        case 'huntingRifleCriticalDamage':
            purchaseUpgrade('huntingRifleCriticalDamage', huntingRifleCriticalDamageLevel, huntingRifleCriticalDamageUpgradeCost, 5, 0.1, 'criticalDamage');
            break;
        default:
            console.error("Invalid item:", item);
    }
}

// Function to purchase a weapon
function purchaseWeapon(weaponId) {
    // Access the weapon directly from the weapons object using its ID
    const weapon = weapons[weaponId];
    if (!weapon) {
        console.error("Invalid weapon:", weaponId);
        return;
    }
    
    // Check if the weapon is already purchased
    if (weapon.purchased) {
        console.log(`${weapon.name} is already purchased.`);
        return;
    }
    
    // Check if the player has enough points to purchase the weapon
    if (points >= weapon.cost) {
        points -= weapon.cost;
        weapon.purchased = true;
        document.getElementById(`${weaponId}-purchase`).style.display = 'none';
        updatePointsDisplay();
        updateCostDisplay();
        updateSelectedWeaponsDisplay();
    } else {
        alert(`Not enough points to purchase ${weapon.name}!`);
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
                    valueIncrement += 0.5 * getTotalPotencyUpgrades();
                }
                if (upgrades.touchGun.antirestingCream.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.powerfulHands.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.millionFingers.bought) {
                    valueIncrement += 5 * getTotalPotencyUpgrades();
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
                    valueIncrement += 50 * getTotalPotencyUpgrades();
                }
                if (upgrades.touchGun.needMore.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.trillionFingers.bought) {
                    valueIncrement += 500 * getTotalPotencyUpgrades();
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
                    valueIncrement += 50 * getTotalPotencyUpgrades();
                }
                if (upgrades.touchGun.antirestingCream.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.powerfulHands.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.millionFingers.bought) {
                    valueIncrement += 500 * getTotalPotencyUpgrades();
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
                    valueIncrement += 5000 * getTotalPotencyUpgrades();
                }
                if (upgrades.touchGun.needMore.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.trillionFingers.bought) {
                    valueIncrement += 50000 * getTotalPotencyUpgrades();
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
                    valueIncrement += 5000 * getTotalPotencyUpgrades();
                }
                if (upgrades.touchGun.antirestingCream.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.powerfulHands.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.millionFingers.bought) {
                    valueIncrement += 50000 * getTotalPotencyUpgrades();
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
                    valueIncrement += 500000 * getTotalPotencyUpgrades();
                }
                if (upgrades.touchGun.needMore.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.trillionFingers.bought) {
                    valueIncrement += 5000000 * getTotalPotencyUpgrades();
                }
                touchGunPointsPerClick += valueIncrement;
                break;
           case 'pistolFirerate':
                if (level <= 20) {
                    pistolFirerateUpgradeCost = cost;
                    pistolFirerateLevel = level;
                    weapons.find(w => w.name === 'pistol').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for pistol fire rate upgrade.");
                    alert("Pistol's firing rate has been maxed out!");
                }
                break;
            case 'pistolPotency':
                pistolPotencyUpgradeCost = cost;
                pistolPotencyLevel = level;
                if (upgrades.pistol.biggerBullets.bought) valueIncrement *= 2;
                if (upgrades.pistol.largerCalibre.bought) valueIncrement *= 3;
                if (upgrades.pistol.louderFiring.bought) valueIncrement *= 3;
                if (upgrades.pistol.metalPiercing.bought) valueIncrement *= 4;
                if (upgrades.pistol.fineTuning.bought) valueIncrement *= 1.5;
                if (upgrades.pistol.versatileGunshots.bought) valueIncrement *= 5;
                if (upgrades.pistol.empowered.bought) valueIncrement *= 5;
                if (upgrades.pistol.oneHitBullets.bought) valueIncrement *= 6;
                if (upgrades.touchGun.fingerPistols.bought) valueIncrement *= 1.1 * getTotalTouchGunUpgrades();
                const pistol = weapons.find(w => w.name === 'pistol');
                pistol.stats.pointsPerShot += valueIncrement;
                pistol.stats.damage += valueIncrement * 0.5;
                break;
            case 'smgFirerate':
                if (level <= 10) {
                    smgFirerateUpgradeCost = cost;
                    smgFirerateLevel = level;
                    weapons.find(w => w.name === 'smg').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for smg fire rate upgrade.");
                    alert("SMG's firing rate has been maxed out!");
                }
                break;
            case 'smgPotency':
                smgPotencyUpgradeCost = cost;
                smgPotencyLevel = level;
                if (upgrades.smg.betterSpread.bought) valueIncrement *= 2;
                if (upgrades.smg.strongHold.bought) valueIncrement *= 3;
                if (upgrades.smg.pressureBullets.bought) valueIncrement *= 3;
                if (upgrades.smg.bashingRounds.bought) valueIncrement *= 4;
                if (upgrades.smg.autoAimer.bought) valueIncrement *= 4;
                if (upgrades.smg.metalPassers.bought) valueIncrement *= 5;
                if (upgrades.smg.inescapableBarrage.bought) valueIncrement *= 5;
                if (upgrades.smg.neverMissBarrage.bought) valueIncrement *= 6;
                const smg = weapons.find(w => w.name === 'smg');
                smg.stats.pointsPerShot += valueIncrement;
                smg.stats.damage += valueIncrement * 0.5;
                break;
            case 'shotgunFirerate':
                if (level <= 15) {
                    shotgunFirerateUpgradeCost = cost;
                    shotgunFirerateLevel = level;
                    weapons.find(w => w.name === 'shotgun').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for shotgun fire rate upgrade.");
                    alert("Shotgun's firing rate has been maxed out!");
                }
                break;
            case 'shotgunPotency':
                shotgunPotencyUpgradeCost = cost;
                shotgunPotencyLevel = level;
                if (upgrades.shotgun.powerfulBurst.bought) valueIncrement *= 2;
                if (upgrades.shotgun.devastatingBurst.bought) valueIncrement *= 3;
                if (upgrades.shotgun.megaBurst.bought) valueIncrement *= 3;
                if (upgrades.shotgun.gigaBurst.bought) valueIncrement *= 4;
                if (upgrades.shotgun.omegaBurst.bought) valueIncrement *= 4;
                if (upgrades.shotgun.teraBurst.bought) valueIncrement *= 5;
                if (upgrades.shotgun.ultimatumBurst.bought) valueIncrement *= 5;
                const shotgun = weapons.find(w => w.name === 'shotgun');
                shotgun.stats.pointsPerShot += valueIncrement;
                shotgun.stats.damage += valueIncrement * 0.5;
                break;
            case 'shotgunMultiFire':
                shotgunMultiFireUpgradeCost = cost;
                shotgunMultiFireLevel = level;
                if (upgrades.shotgun.scattershot.bought) valueIncrement *= 2;
                if (upgrades.shotgun.buckshot.bought) valueIncrement *= 2;
                weapons.find(w => w.name === 'shotgun').stats.bulletsPerShot += valueIncrement;
                break;
            case 'sniperRifleFirerate':
                if (level <= 10) {
                    sniperRifleFirerateUpgradeCost = cost;
                    sniperRifleFirerateLevel = level;
                    weapons.find(w => w.name === 'sniperRifle').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for sniper rifle fire rate upgrade.");
                    alert("Sniper Rifle's firing rate has been maxed out!");
                }
                break;
            case 'sniperRiflePotency':
                sniperRiflePotencyUpgradeCost = cost;
                sniperRiflePotencyLevel = level;
                if (upgrades.sniperRifle.cripplingShots.bought) valueIncrement *= 2;
                if (upgrades.sniperRifle.dangerousRifling.bought) valueIncrement *= 3;
                if (upgrades.sniperRifle.enhancedTracers.bought) valueIncrement *= 3;
                if (upgrades.sniperRifle.infraredScope.bought) valueIncrement *= 2;
                if (upgrades.sniperRifle.electroshockTracers.bought) valueIncrement *= 4;
                if (upgrades.sniperRifle.lethalTracers.bought) valueIncrement *= 4;
                if (upgrades.sniperRifle.heatseekingSensors.bought) valueIncrement *= 3;
                const sniperRifle = weapons.find(w => w.name === 'sniperRifle');
                sniperRifle.stats.pointsPerShot += valueIncrement;
                sniperRifle.stats.damage += valueIncrement * 0.5;
                break;
            case 'sniperRifleCriticalShot':
                sniperRifleCriticalShotUpgradeCost = cost;
                sniperRifleCriticalShotLevel = level;
                weapons.find(w => w.name === 'sniperRifle').stats.criticalChance += valueIncrement;
                break;
            case 'sniperRifleCriticalDamage':
                sniperRifleCriticalDamageUpgradeCost = cost;
                sniperRifleCriticalDamageLevel = level;
                if (upgrades.sniperRifle.infraredScope.bought) valueIncrement *= 1.5;
                weapons.find(w => w.name === 'sniperRifle').stats.criticalDamage += valueIncrement;
                break;
            case 'ak47Firerate':
                if (level <= 15) {
                    ak47FirerateUpgradeCost = cost;
                    ak47FirerateLevel = level;
                    weapons.find(w => w.name === 'ak47').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for ak47 fire rate upgrade.");
                    alert("AK-47's firing rate has been maxed out!");
                }
                break;
            case 'ak47Potency':
                ak47PotencyUpgradeCost = cost;
                ak47PotencyLevel = level;
                if (upgrades.ak47.heatTippedBullets.bought) valueIncrement *= 2;
                if (upgrades.ak47.staggeringBullets.bought) valueIncrement *= 3;
                if (upgrades.ak47.rippingBullets.bought) valueIncrement *= 3;
                if (upgrades.ak47.vehementBullets.bought) valueIncrement *= 4;
                if (upgrades.ak47.overbearingVelocity.bought) valueIncrement *= 4;
                if (upgrades.ak47.poweredVelocity.bought) valueIncrement *= 2;
                if (upgrades.ak47.instantaneousVelocity.bought) valueIncrement *= 5;
                if (upgrades.ak47.spikyBullets.bought) valueIncrement *= 5;
                if (upgrades.ak47.ferociousBullets.bought) valueIncrement *= 6;
                if (upgrades.ak47.unfathomablePressure.bought) valueIncrement *= 6;
                const ak47 = weapons.find(w => w.name === 'ak47');
                ak47.stats.pointsPerShot += valueIncrement;
                ak47.stats.damage += valueIncrement * 0.5;
                break;
            case 'rocketLauncherFirerate':
                if (level <= 15) {
                    rocketLauncherFirerateUpgradeCost = cost;
                    rocketLauncherFirerateLevel = level;
                    weapons.find(w => w.name === 'rocketLauncher').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for rocket launcher fire rate upgrade.");
                    alert("Rocket Launcher's firing rate has been maxed out!");
                }
                break;
            case 'rocketLauncherPotency':
                rocketLauncherPotencyUpgradeCost = cost;
                rocketLauncherPotencyLevel = level;
                if (upgrades.rocketLauncher.potentRockets.bought) valueIncrement *= 2;
                if (upgrades.rocketLauncher.repeatedExplosions.bought) valueIncrement *= 3;
                if (upgrades.rocketLauncher.extraGunpowder.bought) valueIncrement *= 3;
                if (upgrades.rocketLauncher.shatteringExplosions.bought) valueIncrement *= 4;
                if (upgrades.rocketLauncher.napalmRockets.bought) valueIncrement *= 4;
                if (upgrades.rocketLauncher.rampantTips.bought) valueIncrement *= 5;
                if (upgrades.rocketLauncher.kamikaze.bought) valueIncrement *= 2;
                const rocketLauncher = weapons.find(w => w.name === 'rocketLauncher');
                rocketLauncher.stats.pointsPerShot += valueIncrement;
                rocketLauncher.stats.damage += valueIncrement * 0.5;
                break;
            case 'rocketLauncherSplashRadius':
                if (level <= 5) {
                    rocketLauncherSplashRadiusUpgradeCost = cost;
                    rocketLauncherSplashRadiusLevel = level;
                    weapons.find(w => w.name === 'rocketLauncher').stats.splashRadius += valueIncrement;
                } else {
                    console.log("Maximum level reached for rocket launcher splash radius upgrade.");
                    alert("Rocket Launcher's splash radius has been maxed out!");
                }
                break;
            case 'rocketLauncherSplashDamage':
                rocketLauncherSplashDamageUpgradeCost = cost;
                rocketLauncherSplashDamageLevel = level;
                weapons.find(w => w.name === 'rocketLauncher').stats.splashDamage += valueIncrement;
                break;
            case 'tommyGunFirerate':
                if (level <= 20) {
                    tommyGunFirerateUpgradeCost = cost;
                    tommyGunFirerateLevel = level;
                    weapons.find(w => w.name === 'tommyGun').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for tommy gun fire rate upgrade.");
                    alert("Tommy Gun's firing rate has been maxed out!");
                }
                break;
            case 'tommyGunPotency':
                tommyGunPotencyUpgradeCost = cost;
                tommyGunPotencyLevel = level;
                if (upgrades.tommyGun.tightPressure.bought) valueIncrement *= 2;
                if (upgrades.tommyGun.powerfulOutcomes.bought) valueIncrement *= 3;
                if (upgrades.tommyGun.vehementBurst.bought) valueIncrement *= 3;
                if (upgrades.tommyGun.theVector.bought) valueIncrement *= 4;
                if (upgrades.tommyGun.dangerZone.bought) valueIncrement *= 4;
                if (upgrades.tommyGun.dischargedRippers.bought) valueIncrement *= 5;
                if (upgrades.tommyGun.unstoppableBarrage.bought) valueIncrement *= 5;
                if (upgrades.tommyGun.unavoidable.bought) valueIncrement *= 3;
                const tommyGun = weapons.find(w => w.name === 'tommyGun');
                tommyGun.stats.pointsPerShot += valueIncrement;
                tommyGun.stats.damage += valueIncrement * 0.5;
                break;
            case 'tommyGunAccuracy':
                tommyGunAccuracyUpgradeCost = cost;
                tommyGunAccuracyLevel = level;
                weapons.find(w => w.name === 'tommyGun').stats.accuracy += valueIncrement;
                break;
            case 'doubleBarrelFirerate':
                if (level <= 25) {
                    doubleBarrelFirerateUpgradeCost = cost;
                    doubleBarrelFirerateLevel = level;
                    weapons.find(w => w.name === 'doubleBarrel').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for double barrel fire rate upgrade.");
                    alert("Double Barrel's firing rate has been maxed out!");
                }
                break;
            case 'doubleBarrelPotency':
                doubleBarrelPotencyUpgradeCost = cost;
                doubleBarrelPotencyLevel = level;
                if (upgrades.doubleBarrel.lethalShots.bought) valueIncrement *= 2;
                if (upgrades.doubleBarrel.arcSwitchingBarrels.bought) valueIncrement *= 3;
                if (upgrades.doubleBarrel.energized.bought) valueIncrement *= 3;
                if (upgrades.doubleBarrel.clumpedShots.bought) valueIncrement *= 4;
                if (upgrades.doubleBarrel.tightShots.bought) valueIncrement *= 4;
                if (upgrades.doubleBarrel.heavyForce.bought) valueIncrement *= 5;
                if (upgrades.doubleBarrel.unbearableForce.bought) valueIncrement *= 5;
                const doubleBarrel = weapons.find(w => w.name === 'doubleBarrel');
                doubleBarrel.stats.pointsPerShot += valueIncrement;
                doubleBarrel.stats.damage += valueIncrement * 0.5;
                break;
            case 'doubleBarrelMultiFire':
                doubleBarrelMultiFireUpgradeCost = cost;
                doubleBarrelMultiFireLevel = level;
                if (upgrades.doubleBarrel.doubleTrouble.bought) valueIncrement *= 2;
                if (upgrades.doubleBarrel.doubleSwarm.bought) valueIncrement *= 2;
                if (upgrades.doubleBarrel.doubleYeah.bought) valueIncrement *= 2;
                weapons.find(w => w.name === 'doubleBarrel').stats.bulletsPerShot += valueIncrement;
                break;
            case 'uziFirerate':
                if (level <= 10) {
                    uziFirerateUpgradeCost = cost;
                    uziFirerateLevel = level;
                    weapons.find(w => w.name === 'uzi').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for uzi fire rate upgrade.");
                    alert("Uzi's firing rate has been maxed out!");
                }
                break;
            case 'uziPotency':
                uziPotencyUpgradeCost = cost;
                uziPotencyLevel = level;
                if (upgrades.uzi.focussedSpread.bought) valueIncrement *= 2;
                if (upgrades.uzi.quickfiringSalvo.bought) valueIncrement *= 3;
                if (upgrades.uzi.tinyRippers.bought) valueIncrement *= 3;
                if (upgrades.uzi.circuitousSpread.bought) valueIncrement *= 4;
                if (upgrades.uzi.bulletOverload.bought) valueIncrement *= 4;
                if (upgrades.uzi.bulletDrizzle.bought) valueIncrement *= 2;
                if (upgrades.uzi.alwaysHitting.bought) valueIncrement *= 5;
                const uzi = weapons.find(w => w.name === 'uzi');
                uzi.stats.pointsPerShot += valueIncrement;
                uzi.stats.damage += valueIncrement * 0.5;
                break;
            case 'huntingRifleFirerate':
                if (level <= 15) {
                    huntingRifleFirerateUpgradeCost = cost;
                    huntingRifleFirerateLevel = level;
                    weapons.find(w => w.name === 'huntingRifle').stats.fireRate += valueIncrement;
                } else {
                    console.log("Maximum level reached for hunting rifle fire rate upgrade.");
                    alert("Hunting Rifle's firing rate has been maxed out!");
                }
                break;
            case 'huntingRiflePotency':
                huntingRiflePotencyUpgradeCost = cost;
                huntingRiflePotencyLevel = level;
                if (upgrades.huntingRifle.powerfulHunter.bought) valueIncrement *= 2;
                if (upgrades.huntingRifle.noEscape.bought) valueIncrement *= 3;
                if (upgrades.huntingRifle.criminalHunter.bought) valueIncrement *= 3;
                if (upgrades.huntingRifle.targetHunter.bought) valueIncrement *= 4;
                if (upgrades.huntingRifle.longTracers.bought) valueIncrement *= 4;
                if (upgrades.huntingRifle.titanicTracers.bought) valueIncrement *= 2;
                const huntingRifle = weapons.find(w => w.name === 'huntingRifle');
                huntingRifle.stats.pointsPerShot += valueIncrement;
                huntingRifle.stats.damage += valueIncrement * 0.5;
                break;
            case 'huntingRifleCriticalShot':
                huntingRifleCriticalShotUpgradeCost = cost;
                huntingRifleCriticalShotLevel = level;
                weapons.find(w => w.name === 'huntingRifle').stats.criticalChance += valueIncrement;
                break;
            case 'huntingRifleCriticalDamage':
                huntingRifleCriticalDamageUpgradeCost = cost;
                huntingRifleCriticalDamageLevel = level;
                if (upgrades.huntingRifle.titanicTracers.bought) valueIncrement *= 2;
                weapons.find(w => w.name === 'huntingRifle').stats.criticalDamage += valueIncrement;
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

// Function to check if a weapon is purchased
function isWeaponPurchased(weaponId) {
    // Check if the weapon exists in the weapons object and if it's purchased
    return weapons.hasOwnProperty(weaponId) && weapons[weaponId].purchased;
}

// Function to update the display of selected weapon stats
function updateSelectedWeaponsDisplay(weaponId) {
    // Ensure that the weapon is valid
    if (!weaponIds.includes(weaponId)) {
        console.error("Invalid weapon:", weaponId);
        return;
    }

    // Set the purchased status of the weapon
    if (weapons.hasOwnProperty(weaponId)) {
        weapons[weaponId].purchased = true;
    } else {
        console.error("Invalid weapon:", weaponId);
        return;
    }

    // Iterate over each weapon selection box
    const selectionBoxes = document.querySelectorAll('.weapon-slot');
    selectionBoxes.forEach((selectionBox) => {
        // Get the ID of the selection box
        const boxId = selectionBox.id.replace('weapon-selection-', '');

        // Clear the options
        selectionBox.innerHTML = '';

        // Add default option "Select Weapon"
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select Weapon';
        selectionBox.appendChild(defaultOption);

        // Populate options based on purchased weapons
        weaponIds.forEach((weaponId) => {
            if (isWeaponPurchased(weaponId)) {
                const option = document.createElement('option');
                option.value = weaponId;
                option.textContent = weaponId.charAt(0).toUpperCase() + weaponId.slice(1); // Capitalize first letter
                selectionBox.appendChild(option);
            }
        });

        // Select the currently selected weapon if any
        const selectedWeapon = selectedWeapons[boxId];
        if (selectedWeapon) {
            selectionBox.value = selectedWeapon;
            // Disable options that are already selected
            selectionBox.querySelectorAll('option').forEach((option) => {
                if (Object.values(selectedWeapons).includes(option.value) && option.value !== selectedWeapon) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });
            // Update the display of weapon stats for the selected weapon
            updateWeaponStatsDisplay(boxId, selectedWeapon);
        }
    });

    // Log successful purchase
    console.log(`${weaponId} purchased successfully.`);
}

// Function to handle selecting a weapon
function selectWeapon(weaponId) {
    // Check if the weapon is purchased and not already selected
    if (weaponIds.includes(weaponId) && weapons[weaponId].purchased && !Object.values(selectedWeapons).includes(weaponId)) {
        // Add the weapon to the selected weapons
        const selectedBoxId = Object.keys(selectedWeapons).find(boxId => !selectedWeapons[boxId]);
        selectedWeapons[selectedBoxId] = weaponId;
        // Update the display of weapon stats for the selected weapon
        updateWeaponStatsDisplay(selectedBoxId, weaponId);
    }
}

// Function to update the display of weapon stats for the selected weapon
function updateWeaponStatsDisplay(boxId, weaponId) {
    // Get the corresponding weapon box element
    const box = document.getElementById(`${weaponId}-box`);

    // Check if box exists
    if (!box) {
        return;
    }

    // Get the weapon stats elements
    const currentHP = document.getElementById(`${weaponId}HP-value`);
    const currentDamage = document.getElementById(`${weaponId}Damage-value`);
    const currentRange = document.getElementById(`${weaponId}Range-value`);
    const currentAttackRate = document.getElementById(`${weaponId}AttackRate-value`);
    const currentDPS = document.getElementById(`${weaponId}DPS-value`);

    // Check if weapon stats elements exist
    if (!currentHP || !currentDamage || !currentRange || !currentAttackRate || !currentDPS) {
        console.error(`One or more weapon stats elements for ${weaponId} are missing.`);
        return;
    }

    // Update the weapon stats display
    currentHP.textContent = formatNumber(parseFloat(currentHP.textContent));
    currentDamage.textContent = formatNumber(parseFloat(currentDamage.textContent));
    currentRange.textContent = formatNumber(parseFloat(currentRange.textContent));
    currentAttackRate.textContent = formatNumber(parseFloat(currentAttackRate.textContent));
    currentDPS.textContent = formatNumber(parseFloat(currentDPS.textContent));

    // Update other weapon stats if needed...
}

// Function to update weapon and upgrade costs in the HTML
function updateCostDisplay(weaponId) {
    weaponIds.forEach(weaponId => {
        const weapon = weapons[weaponId];

        // Ensure the weapon exists
        if (!weapon) {
            console.error("Invalid weapon:", weaponId);
            return;
        }

        // Update cost display
        document.getElementById(`${weaponId}-cost`).textContent = formatNumber(weapon.cost);

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

        // Update display elements
        document.getElementById(`${weaponId}Firerate-value`).textContent = firerateValue + 'ms';
        document.getElementById(`${weaponId}Potency-value`).textContent = formatNumber(potencyValue);
        document.getElementById(`${weaponId}PPS-value`).textContent = formatNumber(pointsPerSecond);
        document.getElementById(`${weaponId}DPS-value`).textContent = formatNumber(damagePerSecond);
    });

    // Update other display elements
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
            return number.toExponential(6);
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
    return pistolPotencyLevel + smgPotencyLevel + shotgunPotencyLevel + sniperRiflePotencyLevel + ak47PotencyLevel + rocketLauncherPotencyLevel + tommyGunPotencyLevel + doubleBarrelPotencyLevel + uziPotencyLevel + huntingRiflePotencyLevel;
}

// Function to get total firerate upgrades
function getTotalFirerateUpgrades() {
    return pistolFirerateLevel + smgFirerateLevel + shotgunFirerateLevel + sniperRifleFirerateLevel + ak47FirerateLevel + rocketLauncherFirerateLevel + tommyGunFirerateLevel + doubleBarrelFirerateLevel + uziFirerateLevel + huntingRifleFirerateLevel;
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
    return sniperRifleCriticalShotLevel + huntingRifleCriticalShotLevel;
}

function getTotalCriticalDamageUpgrades() {
    return sniperRifleCriticalDamageLevel + huntingRifleCriticalDamageLevel;
}

// Functions to get total splash radius and damage upgrades
function getTotalSplashRadiusUpgrades() {
    return rocketLauncherSplashRadiusLevel;
}

function getTotalSplashDamageUpgrades() {
    return rocketLauncherSplashDamageLevel;
}

// Function to get total touch gun upgrades
function getTotalTouchGunUpgrades() {
    return touchGunLevel + awokenTouchGunLevel + superAwokenTouchGunLevel;
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

// Function to initialize battle features
function initializeBattle() {
    // Initialize selection boxes and weapon stats display
    updateSelectedWeaponsDisplay();

    // Add event listeners to selection boxes
    const selectionBoxes = document.querySelectorAll('.weapon-slot');
    selectionBoxes.forEach((selectionBox) => {
        selectionBox.addEventListener('change', function() {
            selectWeapon(this.value);
        });
    });

    // Other initialization tasks...
}

// Function to initialize sound effects
function initializeSoundEffects() {
    // Load or create SFX IDs for each weapon
    weaponSFX.touchGun = new Audio('sfx/touchgun.wav');
    weaponSFX.pistol = new Audio('sfx/pistol.wav');
    weaponSFX.smg = new Audio('sfx/smg.wav');
    weaponSFX.shotgun = new Audio('sfx/shotgun.wav');
    weaponSFX.sniperRifle = new Audio('sfx/sniper.wav');
    weaponSFX.ak47 = new Audio('sfx/ak47.wav');
    weaponSFX.rocketLauncher = new Audio('sfx/bazooka.wav');
    weaponSFX.tommyGun = new Audio('sfx/smg.wav');
    weaponSFX.doubleBarrel = new Audio('sfx/doublebarrel.wav');
    weaponSFX.uzi = new Audio('sfx/uzi.wav');
    weaponSFX.huntingRifle = new Audio('sfx/hunting_rifle.wav');
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
    floatingText.style.animation = 'floatUp 2s ease-out'; // Add animation for floating upwards

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
                splashText.classList.add('floating-text-splash');
                splashText.style.left = tCenterX + 'px';
                splashText.style.top = tCenterY + 'px';
                splashText.style.animation = 'floatUp 2s ease-out'; // Add animation for floating upwards
                floatingTextContainer.appendChild(splashText);
                setTimeout(() => {
                    splashText.remove();
                }, 1000); // Adjust the delay as needed
            }
        });
    }

    // Play sound effect based on weapon type
    switch (weaponId) {
        case 'touchGun':
            playWeaponSoundEffect('touchGun');
            break;
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
        case 'uzi':
            playWeaponSoundEffect('uzi');
            break;
        case 'huntingRifle':
            playWeaponSoundEffect('huntingRifle');
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
selectWeapon();

// Start earning points automatically for purchased weapons
setInterval(automaticPointsGeneration, 1000); // Check every second for points generation

// Interval timer to update cost display nearly instantly
setInterval(updateCostDisplay, 100);

// Function to update achievements display nearly instantly
function updateAchievements() {
    updateAchievementsDisplay();
    checkAndUpdateAchievements(); // Check and update achievements status
}
setInterval(updateAchievements, 100);

// Function to update statistics display nearly instantly
function updateStatistics() {
    updateStatisticsDisplay();
    setStatistics();
    calculateCompletionPercentage(); // Update achievement progress
}
setInterval(updateStatistics, 100);
// Function to update the battle display nearly instantly
function updateBattle() {
    selectWeapon();
}
setInterval(updateBattle, 100);
