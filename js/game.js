let weapons = {
    "pistol": {
        "name": "Pistol",
		"image": "assets/images/pistol.png",
        "purchased": false,
        "cost": 10,
        "stats": {
            "pointsPerShot": 1,
            "fireRate": 1000,
            "hp": 10,
			"hpMax": 10,
            "damage": 1,
            "range": 60,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 30
        }
    },
    "smg": {
        "name": "SMG",
		"image": "assets/images/smg.png",
        "purchased": false,
        "cost": 100,
        "stats": {
            "pointsPerShot": 1,
            "fireRate": 200,
            "hp": 20,
			"hpMax": 20,
            "damage": 1,
            "range": 50,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 45
        },
    },
    "shotgun": {
        "name": "Shotgun",
		"image": "assets/images/shotgun.png",
        "purchased": false,
        "cost": 500,
        "stats": {
            "pointsPerShot": 4,
            "fireRate": 1500,
            "hp": 50,
			"hpMax": 50,
            "damage": 4,
            "range": 30,
            "accuracy": 100,
            "bulletsPerShot": 3,
			"walkingSpeed": 60
          }
    },
    "sniperRifle": {
        "name": "Sniper Rifle",
		"image": "assets/images/sniper_rifle.png",
        "purchased": false,
        "cost": 7500,
        "stats": {
            "pointsPerShot": 120,
            "fireRate": 4000,
            "hp": 30,
			"hpMax": 30,
            "damage": 60,
            "range": 100,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 15,
            "criticalChance": 25,
            "criticalDamage": 2,
          }
    },
    "ak47": {
        "name": "AK-47",
		"image": "assets/images/ak47.png",
        "purchased": false,
        "cost": 60000,
        "stats": {
            "pointsPerShot": 150,
            "fireRate": 500,
            "hp": 80,
			"hpMax": 80,
            "damage": 75,
            "range": 70,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 30
          }
    },
    "rocketLauncher": {
        "name": "Rocket Launcher",
		"image": "assets/images/rocket_launcher.png",
        "purchased": false,
        "cost": 400000,
        "stats": {
            "pointsPerShot": 1250,
            "fireRate": 5000,
            "hp": 60,
			"hpMax": 60,
            "damage": 625,
            "range": 90,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 10,
            "splashRadius": 500,
            "splashDamage": 0.4
          }
    },
    "tommyGun": {
        "name": "Tommy Gun",
		"image": "assets/images/tommy_gun.png",
        "purchased": false,
        "cost": 2500000,
        "stats": {
            "pointsPerShot": 600,
            "fireRate": 150,
            "hp": 150,
			"hpMax": 150,
            "damage": 300,
            "range": 70,
            "accuracy": 50,
            "bulletsPerShot": 1,
			"walkingSpeed": 35,
            "inaccuracyPenalty": 0.5,
          }
    },
    "doubleBarrel": {
        "name": "Double Barrel",
		"image": "assets/images/double_barrel.png",
        "purchased": false,
        "cost": 30000000,
        "stats": {
            "pointsPerShot": 6000,
            "fireRate": 2000,
            "hp": 400,
			"hpMax": 400,
            "damage": 3000,
            "range": 40,
            "accuracy": 100,
            "bulletsPerShot": 2,
			"walkingSpeed": 55
          }
    },
    "uzi": {
        "name": "Uzi",
		"image": "assets/images/uzi.png",
        "purchased": false,
        "cost": 175000000,
        "stats": {
            "pointsPerShot": 4500,
            "fireRate": 75,
            "hp": 750,
			"hpMax": 750,
            "damage": 2250,
            "range": 40,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 75
          }
    },
    "huntingRifle": {
        "name": "Hunting Rifle",
		"image": "assets/images/hunting_rifle.png",
        "purchased": false,
        "cost": 1250000000,
        "stats": {
            "pointsPerShot": 250000,
            "fireRate": 3000,
            "hp": 500,
			"hpMax": 500,
            "damage": 125000,
            "range": 100,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 20,
            "criticalChance": 40,
            "criticalDamage": 1.5
          }
    },
	"musket": {
        "name": "Musket",
		"image": "assets/images/musket.png",
        "purchased": false,
        "cost": 8500000000,
        "stats": {
            "pointsPerShot": 750000,
            "fireRate": 1500,
            "hp": 750,
			"hpMax": 750,
            "damage": 375000,
            "range": 90,
            "accuracy": 100,
            "bulletsPerShot": 1,
			"walkingSpeed": 30
          }
    }
    // Add other weapons here
};
let enemies = {
    "basic": {
        "name": "Basic",
        "image": "assets/images/basic_enemy.png",
        "pointsPerKill": 10,
        "stats": {
            "hp": 10,
            "damage": 2,
            "range": 6,
            "walkingSpeed": 15,
            "attackRate": 750
        },
    },
    "fast": {
        "name": "Fast",
        "image": "assets/images/fast_enemy.png",
        "pointsPerKill": 5,
        "stats": {
            "hp": 5,
            "damage": 1,
            "range": 5,
            "walkingSpeed": 30,
            "attackRate": 500
        },
    },
    "tank": {
        "name": "Tank",
        "image": "assets/images/tanky_enemy.png",
        "pointsPerKill": 20,
        "stats": {
            "hp": 50,
            "damage": 1.5,
            "range": 8,
            "walkingSpeed": 5,
            "attackRate": 1000
        },
    },
	"healer": {
        "name": "Healer",
        "image": "assets/images/healing_enemy.png",
        "pointsPerKill": 30,
        "stats": {
            "hp": 20,
            "damage": 0.5,
            "range": 10,
            "walkingSpeed": 10,
            "attackRate": 1500,
			"healRate": 3000,
            "healAmount": 0.2,
			"healRange": 1000
        },
    },
    "boss": {
        "name": "Boss",
        "image": "assets/images/boss_enemy.png",
        "pointsPerKill": 500,
        "stats": {
            "hp": 1000,
            "damage": 10,
            "range": 10,
            "walkingSpeed": 5,
            "attackRate": 1000
        },
    }
    // Add other enemies here
};

let touchGunCost = 100;
let touchGunPointsPerClick = 1;
let touchGunLevel = 0;

let awokenTouchGunCost = 500000;
let awokenTouchGunLevel = 0;

let superAwokenTouchGunCost = 500000000000;
let superAwokenTouchGunLevel = 0;

let pistolFirerateUpgradeCost = 50;
let pistolPotencyUpgradeCost = 100;
let pistolHPUpgradeCost = 100;
let pistolFirerateLevel = 0;
let pistolPotencyLevel = 0;
let pistolHPLevel = 0;

let smgFirerateUpgradeCost = 600;
let smgPotencyUpgradeCost = 1200;
let smgHPUpgradeCost = 1000;
let smgFirerateLevel = 0;
let smgPotencyLevel = 0;
let smgHPLevel = 0;

let shotgunMultiFireUpgradeCost = 25000;
let shotgunFirerateUpgradeCost = 3750;
let shotgunPotencyUpgradeCost = 7500;
let shotgunHPUpgradeCost = 5000;
let shotgunFirerateLevel = 0;
let shotgunPotencyLevel = 0;
let shotgunMultiFireLevel = 0;
let shotgunHPLevel = 0;

let sniperRifleFirerateUpgradeCost = 32500;
let sniperRiflePotencyUpgradeCost = 65000;
let sniperRifleCriticalShotUpgradeCost = 75000;
let sniperRifleCriticalDamageUpgradeCost = 250000;
let sniperRifleHPUpgradeCost = 75000;
let sniperRifleFirerateLevel = 0;
let sniperRiflePotencyLevel = 0;
let sniperRifleCriticalShotLevel = 0;
let sniperRifleCriticalDamageLevel = 0;
let sniperRifleHPLevel = 0;

let ak47FirerateUpgradeCost = 175000;
let ak47PotencyUpgradeCost = 250000;
let ak47HPUpgradeCost = 600000;
let ak47FirerateLevel = 0;
let ak47PotencyLevel = 0;
let ak47HPLevel = 0;

let rocketLauncherFirerateUpgradeCost = 1000000;
let rocketLauncherPotencyUpgradeCost = 750000;
let rocketLauncherSplashRadiusUpgradeCost = 10000000;
let rocketLauncherSplashDamageUpgradeCost = 5000000;
let rocketLauncherHPUpgradeCost = 4000000;
let rocketLauncherFirerateLevel = 0;
let rocketLauncherPotencyLevel = 0;
let rocketLauncherSplashRadiusLevel = 0;
let rocketLauncherSplashDamageLevel = 0;
let rocketLauncherHPLevel = 0;

let tommyGunFirerateUpgradeCost = 12000000;
let tommyGunPotencyUpgradeCost = 8000000;
let tommyGunAccuracyUpgradeCost = 20000000;
let tommyGunHPUpgradeCost = 25000000;
let tommyGunFirerateLevel = 0;
let tommyGunPotencyLevel = 0;
let tommyGunAccuracyLevel = 0;
let tommyGunHPLevel = 0;

let doubleBarrelMultiFireUpgradeCost = 150000000;
let doubleBarrelFirerateUpgradeCost = 80000000;
let doubleBarrelPotencyUpgradeCost = 60000000;
let doubleBarrelHPUpgradeCost = 300000000;
let doubleBarrelFirerateLevel = 0;
let doubleBarrelPotencyLevel = 0;
let doubleBarrelMultiFireLevel = 0;
let doubleBarrelHPLevel = 0;

let uziFirerateUpgradeCost = 1000000000;
let uziPotencyUpgradeCost = 750000000;
let uziHPUpgradeCost = 1750000000;
let uziFirerateLevel = 0;
let uziPotencyLevel = 0;
let uziHPLevel = 0;

let huntingRifleFirerateUpgradeCost = 8000000000;
let huntingRiflePotencyUpgradeCost = 6000000000;
let huntingRifleCriticalShotUpgradeCost = 20000000000;
let huntingRifleCriticalDamageUpgradeCost = 30000000000;
let huntingRifleHPUpgradeCost = 12500000000;
let huntingRifleFirerateLevel = 0;
let huntingRiflePotencyLevel = 0;
let huntingRifleCriticalShotLevel = 0;
let huntingRifleCriticalDamageLevel = 0;
let huntingRifleHPLevel = 0;

let musketFirerateUpgradeCost = 40000000000;
let musketPotencyUpgradeCost = 30000000000;
let musketRangeUpgradeCost = 150000000000;
let musketHPUpgradeCost = 85000000000;
let musketFirerateLevel = 0;
let musketPotencyLevel = 0;
let musketRangeLevel = 0;
let musketHPLevel = 0;

let points = 0;
let totalPointsEarned = 0;

let numberFormat = 'standard'; // Default number format

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
	{ name: "Target Sextillionaire", description: "Reach 1,000,000,000,000,000,000,000 points.", condition: () => points >= 1000000000000000000000, achieved: false },
	{ name: "My First Weapon", description: "Purchase a weapon.", condition: () => getTotalWeapons() > 0, achieved: false },
	{ name: "Extreme Firepower", description: "Purchase 10 weapons.", condition: () => getTotalWeapons() >= 10, achieved: false },
	{ name: "Power Shot", description: "Reach a total PPS of 1,000.", condition: () => getTotalPPS() >= 1000, achieved: false },
	{ name: "Lethal Shot", description: "Reach a total PPS of 10,000.", condition: () => getTotalPPS() >= 10000, achieved: false },
	{ name: "Mega Shot", description: "Reach a total PPS of 1,000,000.", condition: () => getTotalPPS() >= 1000000, achieved: false },
	{ name: "Giga Shot", description: "Reach a total PPS of 1,000,000,000.", condition: () => getTotalPPS() >= 1000000000, achieved: false },
    { name: "Potency Leveller", description: "Upgrade the stat 'Potency' a total of 10 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 10, achieved: false },
    { name: "Potency Expert", description: "Upgrade the stat 'Potency' a total of 100 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 100, achieved: false },
    { name: "Potency Master", description: "Upgrade the stat 'Potency' a total of 500 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 500, achieved: false },
    { name: "Potency Grandmaster", description: "Upgrade the stat 'Potency' a total of 1,000 times (for any weapon type).", condition: () => getTotalPotencyUpgrades() >= 1000, achieved: false },
    { name: "Firerate Leveller", description: "Upgrade the stat 'Firerate' a total of 10 times (for any weapon type).", condition: () => getTotalFirerateUpgrades() >= 10, achieved: false },
    { name: "Firerate Expert", description: "Upgrade the stat 'Firerate' a total of 100 times (for any weapon type).", condition: () => getTotalFirerateUpgrades() >= 100, achieved: false },
	{ name: "Weapon Forger", description: "Purchase a 'Big Upgrade' on any weapon type (including Touch Gun).", condition: () => getTotalBigUpgrades() > 0, achieved: false },
    { name: "Weapon Crafter", description: "Purchase 10 different types of big upgrades on any weapon (including Touch Gun).", condition: () => getTotalBigUpgrades() >= 10, achieved: false },
    { name: "Weapon Smelter", description: "Purchase 50 different types of big upgrades on any weapon (including Touch Gun).", condition: () => getTotalBigUpgrades() >= 50, achieved: false },
	{ name: "Weapon Tinkerer", description: "Purchase 100 different types of big upgrades on any weapon (including Touch Gun).", condition: () => getTotalBigUpgrades() >= 100, achieved: false },
    { name: "Bullet Storm", description: "Upgrade the stat 'Multi-Fire' a total of 5 times (only for Shotguns and Double Barrels).", condition: () => getTotalMultiFireUpgrades() >= 5, achieved: false },
    { name: "Bullet Hell", description: "Upgrade the stat 'Multi-Fire' a total of 25 times (only for Shotguns and Double Barrels).", condition: () => getTotalMultiFireUpgrades() >= 25, achieved: false },
	{ name: "Deadly Shot", description: "Upgrade the stat 'Critical Chance' a total of 5 times (only for sniper weapons).", condition: () => getTotalCriticalShotUpgrades() >= 5, achieved: false },
	{ name: "Deadly Precision", description: "Upgrade the stat 'Critical Chance' a total of 25 times (only for sniper weapons).", condition: () => getTotalCriticalShotUpgrades() >= 25, achieved: false }
];

let statistics = {
    totalLifetimePoints: 0,
    totalWeaponsPurchased: 0,
    totalBigUpgradesPurchased: 0,
	totalAchievementsAchieved: 0,
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

let prestigeLevels = [
    { name: "None", cost: 0, multiplier: 1 },
    { name: "Bronze", cost: 1e9, multiplier: 2 },
    { name: "Silver", cost: 1e11, multiplier: 4 },
    { name: "Gold", cost: 1e13, multiplier: 8 },
    { name: "Iron", cost: 1e15, multiplier: 16 },
    { name: "Diamond", cost: 1e17, multiplier: 32 },
	{ name: "Jade", cost: 1e19, multiplier: 64 },
	{ name: "Ruby", cost: 1e21, multiplier: 128 },
	{ name: "Aquamarine", cost: 1e23, multiplier: 256 }
];

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
    huntingRifle: 0,
	musket: 0
};

let weaponTimers = {};

const weaponInitialStats = {};

for (const weaponId in weapons) {
    weaponInitialStats[weaponId] = { ...weapons[weaponId].stats };
}

let selectedWeapons = {};
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
            effect: function() {}
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
        heavyFingers: {
            cost: 1000000000000000,
            effect: function() {
                touchGunPointsPerClick *= 4;
            }
        },
        magicHands: {
            cost: 20000000000000000,
            effect: function() {
                touchGunPointsPerClick *= 6;
            }
        },
        // Add more upgrades for touchGun here
    },
    pistol: {
        biggerBullets: {
            cost: 1000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 2; // Doubles the amount of points per shot
                weapons.pistol.stats.damage *= 2; // Doubles the damage per shot
            }
        },
		moreResistant: {
            cost: 3000,
            effect: function() {
                weapons.pistol.stats.hp *= 2; // Doubles the amount of HP
                weapons.pistol.stats.hpMax *= 2; // Doubles the amount of maximum HP
            }
        },
        largerCalibre: {
            cost: 40000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 3; // Triples the amount of points per shot
                weapons.pistol.stats.damage *= 3; // Triples the damage per shot
            }
        },
        easierReloading: {
            cost: 200000,
            effect: function() {
                weapons.pistol.stats.fireRate -= 150; // Reduces the fire rate speed (in milliseconds) for the pistol
            }
        },
		armouredBody: {
            cost: 500000,
            effect: function() {
                weapons.pistol.stats.hp *= 2; // Doubles the amount of HP
                weapons.pistol.stats.hpMax *= 2; // Doubles the amount of maximum HP
            }
        },
        louderFiring: {
            cost: 1000000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 3; // Triples the amount of points per shot
                weapons.pistol.stats.damage *= 3; // Triples the damage per shot
            }
        },
        metalPiercing: {
            cost: 20000000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 4; // Quadruples the amount of points per shot
                weapons.pistol.stats.damage *= 4; // Quadruples the damage per shot
            }
        },
        specializedMechanisms: {
            cost: 400000000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 4; // Quadruples the amount of points per shot
                weapons.pistol.stats.damage *= 4; // Quadruples the damage per shot
            }
        },
        fineTuning: {
            cost: 1500000000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 1.5;
                weapons.pistol.stats.damage *= 1.5;
                weapons.pistol.stats.fireRate -= 100;
            }
        },
        versatileGunshots: {
            cost: 25000000000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 5; // Quintuples the amount of points per shot
                weapons.pistol.stats.damage *= 5; // Quintuples the damage per shot
            }
        },
        empowered: {
            cost: 350000000000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 5; // Quintuples the amount of points per shot
                weapons.pistol.stats.damage *= 5; // Quintuples the damage per shot
            }
        },
        oneHitBullets: {
            cost: 7500000000000,
            effect: function() {
                weapons.pistol.stats.pointsPerShot *= 6; // Sextuples the amount of points per shot
                weapons.pistol.stats.damage *= 6; // Sextuples the damage per shot
            }
        },
        // Add more upgrades for pistol here
    },
    smg: {
        betterSpread: {
            cost: 10000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 2;
                weapons.smg.stats.damage *= 2;
            }
        },
		moreResistant: {
            cost: 30000,
            effect: function() {
                weapons.smg.stats.hp *= 2;
                weapons.smg.stats.hpMax *= 2;
            }
        },
        strongHold: {
            cost: 500000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 3;
                weapons.smg.stats.damage *= 3;
            }
        },
        pressureBullets: {
            cost: 6000000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 3;
                weapons.smg.stats.damage *= 3;
            }
        },
		armouredBody: {
            cost: 7500000,
            effect: function() {
                weapons.smg.stats.hp *= 2;
                weapons.smg.stats.hpMax *= 2;
            }
        },
        wickedAimer: {
            cost: 25000000,
            effect: function() {
                weapons.smg.stats.fireRate *= 0.8;
            }
        },
        bashingRounds: {
            cost: 250000000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 4;
                weapons.smg.stats.damage *= 4;
            }
        },
        autoAimer: {
            cost: 3000000000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 4;
                weapons.smg.stats.damage *= 4;
            }
        },
        lightweight: {
            cost: 15000000000,
            effect: function() {
                weapons.smg.stats.fireRate *= 0.85;
            }
        },
        metalPassers: {
            cost: 75000000000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 5;
                weapons.smg.stats.damage *= 5;
            }
        },
        inescapableBarrage: {
            cost: 1000000000000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 5;
                weapons.smg.stats.damage *= 5;
            }
        },
        neverMissBarrage: {
            cost: 25000000000000,
            effect: function() {
                weapons.smg.stats.pointsPerShot *= 6;
                weapons.smg.stats.damage *= 6;
            }
        },
        // Add more upgrades for smg here
    },
    shotgun: {
        moreBarrels: {
            cost: 100000,
            effect: function() {
                weapons.shotgun.stats.bulletsPerShot += 2; // Increases the number of barrels by 2
            }
        },
		moreResistant: {
            cost: 200000,
            effect: function() {
                weapons.shotgun.stats.hp *= 2;
                weapons.shotgun.stats.hpMax *= 2;
            }
        },
        powerfulBurst: {
            cost: 1500000,
            effect: function() {
                weapons.shotgun.stats.pointsPerShot *= 2;
                weapons.shotgun.stats.damage *= 2;
            }
        },
        devastatingBurst: {
            cost: 50000000,
            effect: function() {
                weapons.shotgun.stats.pointsPerShot *= 3;
                weapons.shotgun.stats.damage *= 3;
            }
        },
		armouredBody: {
            cost: 75000000,
            effect: function() {
                weapons.shotgun.stats.hp *= 2;
                weapons.shotgun.stats.hpMax *= 2;
            }
        },
        megaBurst: {
            cost: 650000000,
            effect: function() {
                weapons.shotgun.stats.pointsPerShot *= 3;
                weapons.shotgun.stats.damage *= 3;
            }
        },
        scattershot: {
            cost: 20000000000,
            effect: function() {
                weapons.shotgun.stats.bulletsPerShot *= 2; // Multiplies the number of barrels by 2
            }
        },
        gigaBurst: {
            cost: 80000000000,
            effect: function() {
                weapons.shotgun.stats.pointsPerShot *= 4;
                weapons.shotgun.stats.damage *= 4;
            }
        },
        omegaBurst: {
            cost: 800000000000,
            effect: function() {
                weapons.shotgun.stats.pointsPerShot *= 4;
                weapons.shotgun.stats.damage *= 4;
            }
        },
        teraBurst: {
            cost: 10000000000000,
            effect: function() {
                weapons.shotgun.stats.pointsPerShot *= 5;
                weapons.shotgun.stats.damage *= 5;
            }
        },
        ultimatumBurst: {
            cost: 150000000000000,
            effect: function() {
                weapons.shotgun.stats.pointsPerShot *= 5;
                weapons.shotgun.stats.damage *= 5;
            }
        },
        buckshot: {
            cost: 600000000000000,
            effect: function() {
                weapons.shotgun.stats.bulletsPerShot *= 2;
            }
        },
        // Add more upgrades for shotgun here
    },
    sniperRifle: {
        deadlyPrecision: {
            cost: 1500000,
            effect: function() {
                weapons.sniperRifle.stats.criticalDamage += 1; // Increases the critical damage multiplier by 1
            }
        },
		moreResistant: {
            cost: 2500000,
            effect: function() {
                weapons.sniperRifle.stats.hp *= 2;
                weapons.sniperRifle.stats.hpMax *= 2;
            }
        },
        cripplingShots: {
            cost: 12500000,
            effect: function() {
                weapons.sniperRifle.stats.pointsPerShot *= 2;
                weapons.sniperRifle.stats.damage *= 2;
            }
        },
        headShot: {
            cost: 250000000,
            effect: function() {
                weapons.sniperRifle.stats.criticalDamage += 2;
            }
        },
		armouredBody: {
            cost: 250000000,
            effect: function() {
                weapons.sniperRifle.stats.hp *= 2;
                weapons.sniperRifle.stats.hpMax *= 2;
            }
        },
        dangerousRifling: {
            cost: 1111000000,
            effect: function() {
                weapons.sniperRifle.stats.pointsPerShot *= 3;
                weapons.sniperRifle.stats.damage *= 3;
            }
        },
        luckyShot: {
            cost: 7777000000,
            effect: function() {
                weapons.sniperRifle.stats.criticalChance += 10; // Increases the critical chance by an additional 10%
            }
        },
        enhancedTracers: {
            cost: 40000000000,
            effect: function() {
                weapons.sniperRifle.stats.pointsPerShot *= 3;
                weapons.sniperRifle.stats.damage *= 3;
            }
        },
        infraredScope: {
            cost: 300000000000,
            effect: function() {
                weapons.sniperRifle.stats.pointsPerShot *= 2;
                weapons.sniperRifle.stats.damage *= 2;
                weapons.sniperRifle.stats.criticalDamage *= 1.5;
            }
        },
        electroshockTracers: {
            cost: 2000000000000,
            effect: function() {
                weapons.sniperRifle.stats.pointsPerShot *= 4;
                weapons.sniperRifle.stats.damage *= 4;
            }
        },
        lethalTracers: {
            cost: 20000000000000,
            effect: function() {
                weapons.sniperRifle.stats.pointsPerShot *= 4;
                weapons.sniperRifle.stats.damage *= 4;
            }
        },
        heatseekingSensors: {
            cost: 120000000000000,
            effect: function() {
                weapons.sniperRifle.stats.pointsPerShot *= 3;
                weapons.sniperRifle.stats.damage *= 3;
                weapons.sniperRifle.stats.criticalChance += 5;
            }
        },
        // Add more upgrades for sniperRifle here
    },
    ak47: {
        heatTippedBullets: {
            cost: 8000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 2;
                weapons.ak47.stats.damage *= 2;
            }
        },
		moreResistant: {
            cost: 12000000,
            effect: function() {
                weapons.ak47.stats.hp *= 2;
                weapons.ak47.stats.hpMax *= 2;
            }
        },
        staggeringBullets: {
            cost: 200000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 3;
                weapons.ak47.stats.damage *= 3;
            }
        },
        rippingBullets: {
            cost: 3500000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 3;
                weapons.ak47.stats.damage *= 3;
            }
        },
		armouredBody: {
            cost: 5000000000,
            effect: function() {
                weapons.ak47.stats.hp *= 2;
                weapons.ak47.stats.hpMax *= 2;
            }
        },
        vehementBullets: {
            cost: 50000000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 4;
                weapons.ak47.stats.damage *= 4;
            }
        },
        overbearingVelocity: {
            cost: 750000000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 4;
                weapons.ak47.stats.damage *= 4;
            }
        },
        poweredVelocity: {
            cost: 4000000000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 2;
                weapons.ak47.stats.damage *= 2;
            }
        },
        instantaneousVelocity: {
            cost: 40000000000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 5;
                weapons.ak47.stats.damage *= 5;
            }
        },
        spikyBullets: {
            cost: 400000000000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 5;
                weapons.ak47.stats.damage *= 5;
            }
        },
        ferociousBullets: {
            cost: 6000000000000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 6;
                weapons.ak47.stats.damage *= 6;
            }
        },
        unfathomablePressure: {
            cost: 90000000000000000,
            effect: function() {
                weapons.ak47.stats.pointsPerShot *= 6;
                weapons.ak47.stats.damage *= 6;
            }
        },
        // Add more upgrades for ak47 here
    },
    rocketLauncher: {
        potentRockets: {
            cost: 75000000,
            effect: function() {
                weapons.rocketLauncher.stats.pointsPerShot *= 2;
                weapons.rocketLauncher.stats.damage *= 2;
            }
        },
		moreResistant: {
            cost: 100000000,
            effect: function() {
                weapons.rocketLauncher.stats.hp *= 2;
                weapons.rocketLauncher.stats.hpMax *= 2;
            }
        },
        violentExplosions: {
            cost: 1000000000,
            effect: function() {
                weapons.rocketLauncher.stats.splashDamage += 0.2;
            }
        },
        repeatedExplosions: {
            cost: 5000000000,
            effect: function() {
                weapons.rocketLauncher.stats.pointsPerShot *= 3;
                weapons.rocketLauncher.stats.damage *= 3;
            }
        },
		armouredBody: {
            cost: 15000000000,
            effect: function() {
                weapons.rocketLauncher.stats.hp *= 2;
                weapons.rocketLauncher.stats.hpMax *= 2;
            }
        },
        biggerExplosions: {
            cost: 75000000000,
            effect: function() {
                weapons.rocketLauncher.stats.splashRadius += 150;
            }
        },
        extraGunpowder: {
            cost: 200000000000,
            effect: function() {
                weapons.rocketLauncher.stats.pointsPerShot *= 3;
                weapons.rocketLauncher.stats.damage *= 3;
            }
        },
        shatteringExplosions: {
            cost: 2500000000000,
            effect: function() {
                weapons.rocketLauncher.stats.pointsPerShot *= 4;
                weapons.rocketLauncher.stats.damage *= 4;
            }
        },
        napalmRockets: {
            cost: 25000000000000,
            effect: function() {
                weapons.rocketLauncher.stats.pointsPerShot *= 4;
                weapons.rocketLauncher.stats.damage *= 4;
            }
        },
        impulsiveExplosions: {
            cost: 100000000000000,
            effect: function() {
                weapons.rocketLauncher.stats.splashDamage += 0.2;
            }
        },
        rampantTips: {
            cost: 500000000000000,
            effect: function() {
                weapons.rocketLauncher.stats.pointsPerShot *= 5;
                weapons.rocketLauncher.stats.damage *= 5;
            }
        },
        kamikaze: {
            cost: 3000000000000000,
            effect: function() {
                weapons.rocketLauncher.stats.pointsPerShot *= 2;
                weapons.rocketLauncher.stats.damage *= 2;
                weapons.rocketLauncher.stats.splashRadius += 150;
            }
        },
        // Add more upgrades for rocketLauncher here
    },
    tommyGun: {
        preciseAccuracy: {
            cost: 350000000,
            effect: function() {
                weapons.tommyGun.stats.accuracy += 10; // Reduces the inaccuracy chance of the tommy gun
            }
        },
		moreResistant: {
            cost: 600000000,
            effect: function() {
                weapons.tommyGun.stats.hp *= 2;
                weapons.tommyGun.stats.hpMax *= 2;
            }
        },
        tightPressure: {
            cost: 1250000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 2;
                weapons.tommyGun.stats.damage *= 2;
            }
        },
        lessPunishing: {
            cost: 5000000000,
            effect: function() {
                 weapons.tommyGun.stats.inaccuracyPenalty += 0.17; // Reduces the accuracy penalty of the tommy gun
            }
        },
		armouredBody: {
            cost: 10000000000,
            effect: function() {
                weapons.tommyGun.stats.hp *= 2;
                weapons.tommyGun.stats.hpMax *= 2;
            }
        },
        powerfulOutcomes: {
            cost: 30000000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 3;
                weapons.tommyGun.stats.damage *= 3;
            }
        },
        vehementBurst: {
            cost: 150000000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 3;
                weapons.tommyGun.stats.damage *= 3;
            }
        },
        theVector: {
            cost: 1500000000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 4;
                weapons.tommyGun.stats.damage *= 4;
            }
        },
        dangerZone: {
            cost: 17500000000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 4;
                weapons.tommyGun.stats.damage *= 4;
            }
        },
        dischargedRippers: {
            cost: 200000000000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 5;
                weapons.tommyGun.stats.damage *= 5;
            }
        },
        unstoppableBarrage: {
            cost: 2500000000000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 5;
                weapons.tommyGun.stats.damage *= 5;
            }
        },
        unavoidable: {
            cost: 15000000000000000,
            effect: function() {
                weapons.tommyGun.stats.pointsPerShot *= 3;
                weapons.tommyGun.stats.damage *= 3;
                weapons.tommyGun.stats.accuracy += 10;
            }
        },
        // Add more upgrades for tommyGun here
    },
    doubleBarrel: {
        lethalShots: {
            cost: 1000000000,
            effect: function() {
                weapons.doubleBarrel.stats.pointsPerShot *= 2;
                weapons.doubleBarrel.stats.damage *= 2;
            }
        },
		moreResistant: {
            cost: 1500000000,
            effect: function() {
                weapons.doubleBarrel.stats.hp *= 2;
                weapons.doubleBarrel.stats.hpMax *= 2;
            }
        },
        arcSwitchingBarrels: {
            cost: 10000000000,
            effect: function() {
                weapons.doubleBarrel.stats.pointsPerShot *= 3;
                weapons.doubleBarrel.stats.damage *= 3;
            }
        },
        doubleTrouble: {
            cost: 200000000000,
            effect: function() {
                weapons.doubleBarrel.stats.bulletsPerShot *= 2;
            }
        },
		armouredBody: {
            cost: 300000000000,
            effect: function() {
                weapons.doubleBarrel.stats.hp *= 2;
                weapons.doubleBarrel.stats.hpMax *= 2;
            }
        },
        energized: {
            cost: 1000000000000,
            effect: function() {
                weapons.doubleBarrel.stats.pointsPerShot *= 3;
                weapons.doubleBarrel.stats.damage *= 3;
            }
        },
        doubleSwarm: {
            cost: 50000000000000,
            effect: function() {
                weapons.doubleBarrel.stats.bulletsPerShot *= 2;
            }
        },
        clumpedShots: {
            cost: 150000000000000,
            effect: function() {
                weapons.doubleBarrel.stats.pointsPerShot *= 4;
                weapons.doubleBarrel.stats.damage *= 4;
            }
        },
        tightShots: {
            cost: 1000000000000000,
            effect: function() {
                weapons.doubleBarrel.stats.pointsPerShot *= 4;
                weapons.doubleBarrel.stats.damage *= 4;
            }
        },
        heavyForce: {
            cost: 10000000000000000,
            effect: function() {
                weapons.doubleBarrel.stats.pointsPerShot *= 5;
                weapons.doubleBarrel.stats.damage *= 5;
            }
        },
        unbearableForce: {
            cost: 85000000000000000,
            effect: function() {
                weapons.doubleBarrel.stats.pointsPerShot *= 5;
                weapons.doubleBarrel.stats.damage *= 5;
            }
        },
        doubleYeah: {
            cost: 650000000000000000,
            effect: function() {
                weapons.doubleBarrel.stats.bulletsPerShot *= 2;
            }
        },
        // Add more upgrades for doubleBarrel here
    },
    uzi: {
        focussedSpread: {
            cost: 7500000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 2;
                weapons.uzi.stats.damage *= 2;
            }
        },
		moreResistant: {
            cost: 8750000000,
            effect: function() {
                weapons.uzi.stats.hp *= 2;
                weapons.uzi.stats.hpMax *= 2;
            }
        },
        quickfiringSalvo: {
            cost: 55000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 3;
                weapons.uzi.stats.damage *= 3;
            }
        },
        tinyRippers: {
            cost: 350000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 3;
                weapons.uzi.stats.damage *= 3;
            }
        },
		armouredBody: {
            cost: 400000000000,
            effect: function() {
                weapons.uzi.stats.hp *= 2;
                weapons.uzi.stats.hpMax *= 2;
            }
        },
        circuitousSpread: {
            cost: 3000000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 4;
                weapons.uzi.stats.damage *= 4;
            }
        },
        bulletOverload: {
            cost: 35000000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 4;
                weapons.uzi.stats.damage *= 4;
            }
        },
        bulletDrizzle: {
            cost: 150000000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 2;
                weapons.uzi.stats.damage *= 2;
            }
        },
        alwaysHitting: {
            cost: 1500000000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 5;
                weapons.uzi.stats.damage *= 5;
            }
        },
        cantDodgeThis: {
            cost: 15000000000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 5;
                weapons.uzi.stats.damage *= 5;
            }
        },
        bulletFletcher: {
            cost: 225000000000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 6;
                weapons.uzi.stats.damage *= 6;
            }
        },
        easyToUse: {
            cost: 3000000000000000000,
            effect: function() {
                weapons.uzi.stats.pointsPerShot *= 6;
                weapons.uzi.stats.damage *= 6;
            }
        },
        // Add more upgrades for uzi here
    },
    huntingRifle: {
        powerfulHunter: {
            cost: 35000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 2;
                weapons.huntingRifle.stats.damage *= 2;
            }
        },
		moreResistant: {
            cost: 45000000000,
            effect: function() {
                weapons.huntingRifle.stats.hp *= 2;
                weapons.huntingRifle.stats.hpMax *= 2;
            }
        },
        headHunter: {
            cost: 125000000000,
            effect: function() {
                weapons.huntingRifle.stats.criticalDamage += 0.5; // Increases the critical damage multiplier by 0.5
            }
        },
        noEscape: {
            cost: 400000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 3;
                weapons.huntingRifle.stats.damage *= 3;
            }
        },
		armouredBody: {
            cost: 800000000000,
            effect: function() {
                weapons.huntingRifle.stats.hp *= 2;
                weapons.huntingRifle.stats.hpMax *= 2;
            }
        },
        criminalHunter: {
            cost: 3000000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 3;
                weapons.huntingRifle.stats.damage *= 3;
            }
        },
        targetHunter: {
            cost: 25000000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 4;
                weapons.huntingRifle.stats.damage *= 4;
            }
        },
        longTracers: {
            cost: 175000000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 4;
                weapons.huntingRifle.stats.damage *= 4;
            }
        },
        titanicTracers: {
            cost: 1250000000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 2;
                weapons.huntingRifle.stats.damage *= 2;
                weapons.huntingRifle.stats.criticalDamage *= 2;
                weapons.huntingRifle.stats.criticalChance -= 5;
            }
        },
        beastHunter: {
            cost: 87500000000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 5;
                weapons.huntingRifle.stats.damage *= 5;
            }
        },
        markedTracers: {
            cost: 75000000000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 5;
                weapons.huntingRifle.stats.damage *= 5;
            }
        },
        masterHunting: {
            cost: 550000000000000000,
            effect: function() {
                weapons.huntingRifle.stats.pointsPerShot *= 3;
                weapons.huntingRifle.stats.damage *= 3;
                weapons.huntingRifle.stats.criticalDamage *= 1.5;
            }
        },
        // Add more upgrades for huntingRifle here
    },
	musket: {
        harderSlugs: {
            cost: 100000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 2;
                weapons.musket.stats.damage *= 2;
            }
        },
		moreResistant: {
            cost: 150000000000,
            effect: function() {
                weapons.musket.stats.hp *= 2;
                weapons.musket.stats.hpMax *= 2;
            }
        },
        metalSlugs: {
            cost: 2000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 3;
                weapons.musket.stats.damage *= 3;
            }
        },
        ironSlugs: {
            cost: 14000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 3;
                weapons.musket.stats.damage *= 3;
            }
        },
		armouredBody: {
            cost: 15000000000000,
            effect: function() {
                weapons.musket.stats.hp *= 2;
                weapons.musket.stats.hpMax *= 2;
            }
        },
        blowShot: {
            cost: 125000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 4;
                weapons.musket.stats.damage *= 4;
            }
        },
        exceededReach: {
            cost: 750000000000000,
            effect: function() {
                weapons.uzi.stats.range += 1;
            }
        },
        miniCannonballs: {
            cost: 1750000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 4;
                weapons.musket.stats.damage *= 4;
            }
        },
        leadPoisoning: {
            cost: 20000000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 5;
                weapons.musket.stats.damage *= 5;
            }
        },
        acidicSlugs: {
            cost: 250000000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 5;
                weapons.musket.stats.damage *= 5;
            }
        },
		penetrativeSlugs: {
            cost: 3500000000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 6;
                weapons.musket.stats.damage *= 6;
            }
        },
		robustMechanisms: {
            cost: 40000000000000000000,
            effect: function() {
                weapons.musket.stats.pointsPerShot *= 6;
                weapons.musket.stats.damage *= 6;
            }
        },
        // Add more upgrades for musket here
    }
    // Add more weapons and upgrades as needed
};

let currentWave = 0;
let currentWeapons = [];
let activeEnemies = [];
let battleInProgress = false;
const lastFiredTimes = {};
const lastAttackedTimes = {};
const lastHealedTimes = {};
let lastFrameTime = 0;

const defaultEnemies = {
    "basic": {
        "name": "Basic Enemy",
        "image": "assets/images/basic_enemy.png",
        "pointsPerKill": 10,
        "stats": {
            "hp": 10,
            "damage": 2,
            "range": 6,
            "walkingSpeed": 15,
            "attackRate": 750
        },
    },
    "fast": {
        "name": "Fast Enemy",
        "image": "assets/images/fast_enemy.png",
        "pointsPerKill": 5,
        "stats": {
            "hp": 5,
            "damage": 1,
            "range": 5,
            "walkingSpeed": 30,
            "attackRate": 500
        },
    },
    "tank": {
        "name": "Tanky Enemy",
        "image": "assets/images/tanky_enemy.png",
        "pointsPerKill": 20,
        "stats": {
            "hp": 50,
            "damage": 1.5,
            "range": 8,
            "walkingSpeed": 5,
            "attackRate": 1000
        },
    },
	"healer": {
        "name": "Healer",
        "image": "assets/images/healing_enemy.png",
        "pointsPerKill": 30,
        "stats": {
            "hp": 20,
            "damage": 0.5,
            "range": 10,
            "walkingSpeed": 10,
            "attackRate": 1500,
			"healRate": 3000,
            "healAmount": 0.2,
			"healRange": 1000
        },
    },
    "boss": {
        "name": "Boss Enemy",
        "image": "assets/images/boss_enemy.png",
        "pointsPerKill": 500,
        "stats": {
            "hp": 1000,
            "damage": 10,
            "range": 10,
            "walkingSpeed": 5,
            "attackRate": 1000
        }
    }
};

let fingerPistolsMultiplier = 1;
let initialPistolStats = {
    pointsPerShot: weapons.pistol.stats.pointsPerShot,
    damage: weapons.pistol.stats.damage
};

// Function to update points display
function updatePointsDisplay() {
    const scoreValueMain = document.getElementById('score-value-main');
    const scoreValueUpgrades = document.getElementById('score-value-upgrades');
	const scoreValueBattle = document.getElementById('score-value-battle');
	const totalPPSMain = document.getElementById('total-pps-main');
    const totalPPSUpgrades = document.getElementById('total-pps-upgrades');
	const totalDPSBattle = document.getElementById('total-dps-battle');

    // Update main tab points display
    if (scoreValueMain) {
        scoreValueMain.textContent = formatNumber(points);
    }

    // Update upgrades tab points display
    if (scoreValueUpgrades) {
        scoreValueUpgrades.textContent = formatNumber(points);
    }
	
	// Update battle tab points display
    if (scoreValueBattle) {
        scoreValueBattle.textContent = formatNumber(points);
    }
	
	// Calculate total PPS
    const totalPPS = getTotalPPS();

    // Update main tab total PPS display
    if (totalPPSMain) {
        totalPPSMain.textContent = formatNumber(totalPPS);
    }
	
	// Update main tab total PPS display
    if (totalPPSUpgrades) {
        totalPPSUpgrades.textContent = formatNumber(totalPPS);
    }
	
	// Calculate total PPS
    const totalDPS = getTotalDPS();

    // Update upgrades tab total PPS display
    if (totalDPSBattle) {
        totalDPSBattle.textContent = formatNumber(totalDPS);
    }
}

// Function to handle clicking the earn points button
function earnPoints() {
    let pointsPerShot = touchGunPointsPerClick;
    shoot('touchGun', pointsPerShot, false, false);
    updatePointsDisplay();
    totalPointsEarned += pointsPerShot;
    updateLifetimePointsDisplay();
}

// Function for automatic points generation based on weapon fire rates
function automaticPointsGeneration() {
    // Object to store weapon timers
    weaponTimers = {};

    Object.keys(weapons).forEach(weaponId => {
        const weapon = weapons[weaponId];
        if (weapon && weapon.purchased) {
            // Initialize the lastPointsTime for the weapon if not already initialized
            if (!lastPointsTime[weaponId]) {
                lastPointsTime[weaponId] = Date.now();
            }

            // Create a new setInterval timer for the weapon
            weaponTimers[weaponId] = setInterval(function() {
                const currentTime = Date.now();
                if (currentTime - lastPointsTime[weaponId] >= weapon.stats.fireRate) {
                    // Calculate points per shot
                    let pointsPerShot = weapon.stats.pointsPerShot;
                    let critical = false;
                    let miss = false;

                    // For sniper rifles, check for critical hit
                    if (weaponId === 'sniperRifle' || weaponId === 'huntingRifle') {
                        const criticalChance = Math.min(100, weapon.stats.criticalChance);
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
                        const inaccuracyChance = Math.min(100, 100 - weapon.stats.accuracy);
                        if (inaccuracyChance >= Math.random() * 100) {
                            // Missed shot
                            pointsPerShot *= weapon.stats.inaccuracyPenalty;
                            miss = true;
                        }
                    }

                    // Trigger the shoot function with appropriate parameters
                    shoot(weaponId, pointsPerShot, critical, miss);
                    lastPointsTime[weaponId] = currentTime;

                    // Increment lifetime points
                    totalPointsEarned += pointsPerShot;
                    updateLifetimePointsDisplay(); // Update lifetime points display
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
		case 'musket':
            if (!weapons[item].purchased) {
                purchaseWeapon(item);
            } else {
                console.log(`${item.charAt(0).toUpperCase() + item.slice(1)} has already been purchased!`);
                alert(`${item.charAt(0).toUpperCase() + item.slice(1)} has already been purchased!`);
            }
            break;
        case 'pistolFirerate':
            purchaseUpgrade('pistolFirerate', pistolFirerateLevel, pistolFirerateUpgradeCost, 1.8, -25, 'firerate');
            break;
        case 'pistolPotency':
            purchaseUpgrade('pistolPotency', pistolPotencyLevel, pistolPotencyUpgradeCost, 1.4, 1, 'potency');
            break;
		case 'pistolHP':
            purchaseUpgrade('pistolHP', pistolHPLevel, pistolHPUpgradeCost, 1.3, 1, 'hp');
            break;
        case 'smgFirerate':
            purchaseUpgrade('smgFirerate', smgFirerateLevel, smgFirerateUpgradeCost, 2.2, -10, 'firerate');
            break;
        case 'smgPotency':
            purchaseUpgrade('smgPotency', smgPotencyLevel, smgPotencyUpgradeCost, 1.4, 1, 'potency');
            break;
		case 'smgHP':
            purchaseUpgrade('smgHP', smgHPLevel, smgHPUpgradeCost, 1.3, 2, 'hp');
            break;
        case 'shotgunFirerate':
            purchaseUpgrade('shotgunFirerate', shotgunFirerateLevel, shotgunFirerateUpgradeCost, 2, -50, 'firerate');
            break;
        case 'shotgunPotency':
            purchaseUpgrade('shotgunPotency', shotgunPotencyLevel, shotgunPotencyUpgradeCost, 1.4, 4, 'potency');
            break;
		case 'shotgunHP':
            purchaseUpgrade('shotgunHP', shotgunHPLevel, shotgunHPUpgradeCost, 1.3, 5, 'hp');
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
		case 'sniperRifleHP':
            purchaseUpgrade('sniperRifleHP', sniperRifleHPLevel, sniperRifleHPUpgradeCost, 1.3, 3, 'hp');
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
		case 'ak47HP':
            purchaseUpgrade('ak47HP', ak47HPLevel, ak47HPUpgradeCost, 1.3, 8, 'hp');
            break;
        case 'rocketLauncherFirerate':
            purchaseUpgrade('rocketLauncherFirerate', rocketLauncherFirerateLevel, rocketLauncherFirerateUpgradeCost, 2, -200, 'firerate');
            break;
        case 'rocketLauncherPotency':
            purchaseUpgrade('rocketLauncherPotency', rocketLauncherPotencyLevel, rocketLauncherPotencyUpgradeCost, 1.4, 1250, 'potency');
            break;
		case 'rocketLauncherHP':
            purchaseUpgrade('rocketLauncherHP', rocketLauncherHPLevel, rocketLauncherHPUpgradeCost, 1.3, 6, 'hp');
            break;
        case 'rocketLauncherSplashRadius':
            purchaseUpgrade('rocketLauncherSplashRadius', rocketLauncherSplashRadiusLevel, rocketLauncherSplashRadiusUpgradeCost, 50, 150, 'splashRadius');
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
		case 'tommyGunHP':
            purchaseUpgrade('tommyGunHP', tommyGunHPLevel, tommyGunHPUpgradeCost, 1.3, 15, 'hp');
            break;
        case 'tommyGunAccuracy':
            purchaseUpgrade('tommyGunAccuracy', tommyGunAccuracyLevel, tommyGunAccuracyUpgradeCost, 2.5, 2, 'accuracy');
            break;
        case 'doubleBarrelFirerate':
            purchaseUpgrade('doubleBarrelFirerate', doubleBarrelFirerateLevel, doubleBarrelFirerateUpgradeCost, 1.8, -50, 'firerate');
            break;
        case 'doubleBarrelPotency':
            purchaseUpgrade('doubleBarrelPotency', doubleBarrelPotencyLevel, doubleBarrelPotencyUpgradeCost, 1.4, 6000, 'potency');
            break;
		case 'doubleBarrelHP':
            purchaseUpgrade('doubleBarrelHP', doubleBarrelHPLevel, doubleBarrelHPUpgradeCost, 1.3, 40, 'hp');
            break;
        case 'doubleBarrelMultiFire':
            purchaseUpgrade('doubleBarrelMultiFire', doubleBarrelMultiFireLevel, doubleBarrelMultiFireUpgradeCost, 10, 2, 'multiFire');
            break;
        case 'uziFirerate':
            purchaseUpgrade('uziFirerate', uziFirerateLevel, uziFirerateUpgradeCost, 2.6, -2.5, 'firerate');
            break;
        case 'uziPotency':
            purchaseUpgrade('uziPotency', uziPotencyLevel, uziPotencyUpgradeCost, 1.4, 4500, 'potency');
            break;
		case 'uziHP':
            purchaseUpgrade('uziHP', uziHPLevel, uziHPUpgradeCost, 1.3, 75, 'hp');
            break;
        case 'huntingRifleFirerate':
            purchaseUpgrade('huntingRifleFirerate', huntingRifleFirerateLevel, huntingRifleFirerateUpgradeCost, 1.8, -100, 'firerate');
            break;
        case 'huntingRiflePotency':
            purchaseUpgrade('huntingRiflePotency', huntingRiflePotencyLevel, huntingRiflePotencyUpgradeCost, 1.4, 250000, 'potency');
            break;
		case 'huntingRifleHP':
            purchaseUpgrade('huntingRifleHP', huntingRifleHPLevel, huntingRifleHPUpgradeCost, 1.3, 50, 'hp');
            break;
        case 'huntingRifleCriticalShot':
            purchaseUpgrade('huntingRifleCriticalShot', huntingRifleCriticalShotLevel, huntingRifleCriticalShotUpgradeCost, 3.5, 2, 'criticalShotChance');
            break;
        case 'huntingRifleCriticalDamage':
            purchaseUpgrade('huntingRifleCriticalDamage', huntingRifleCriticalDamageLevel, huntingRifleCriticalDamageUpgradeCost, 5, 0.1, 'criticalDamage');
            break;
		case 'musketFirerate':
            purchaseUpgrade('musketFirerate', musketFirerateLevel, musketFirerateUpgradeCost, 2, -50, 'firerate');
            break;
        case 'musketPotency':
            purchaseUpgrade('musketPotency', musketPotencyLevel, musketPotencyUpgradeCost, 1.4, 750000, 'potency');
            break;
		case 'musketHP':
            purchaseUpgrade('musketHP', musketHPLevel, musketHPUpgradeCost, 1.3, 75, 'hp');
            break;
		case 'musketRange':
            purchaseUpgrade('musketRange', musketRangeLevel, musketRangeUpgradeCost, 6, 10, 'range');
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
		updateLoadoutSelection();
    } else {
        console.log(`Not enough points to purchase ${weapon.name}!`);
        alert(`Not enough points to purchase ${weapon.name}!`);
    }
}

// Detect weapon stats from the weapons.json
function getWeaponStats(weaponName) {
    const weapon = weapons[weaponName];
    return weapon ? weapon.stats : null;
}

// Function to purchase an upgrade
function purchaseUpgrade(upgradeType, level, cost, costMultiplier, valueIncrement, upgradeCategory) {
    if (points >= cost) {
        points -= cost;
        cost *= costMultiplier;
        level++;

        // Get the current prestige level
        const currentPrestigeLevel = parseInt(localStorage.getItem('prestigeLevel')) || 0;
        const prestigeMultiplier = prestigeLevels[currentPrestigeLevel].multiplier;
        
        switch (upgradeType) {
            case 'touchGun':
            case 'touchGunAwaken':
            case 'touchGunSuperAwaken':
                // Adjust valueIncrement based on prestige multiplier
                valueIncrement *= prestigeMultiplier;
                if (upgrades.touchGun.pointyFingers.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.ambidextrous.bought) {
                    valueIncrement *= 2;
                }
                if (upgrades.touchGun.thousandFingers.bought) {
                    valueIncrement += (upgradeType === 'touchGun') ? 0.5 : (upgradeType === 'touchGunAwaken') ? 50 : 5000;
                }
                if (upgrades.touchGun.antirestingCream.bought) {
                    valueIncrement *= 3;
                }
                if (upgrades.touchGun.powerfulHands.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.millionFingers.bought) {
                    valueIncrement += (upgradeType === 'touchGun') ? 5 : (upgradeType === 'touchGunAwaken') ? 500 : 50000;
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
                    valueIncrement += (upgradeType === 'touchGun') ? 50 : (upgradeType === 'touchGunAwaken') ? 5000 : 500000;
                }
                if (upgrades.touchGun.needMore.bought) {
                    valueIncrement *= 5;
                }
                if (upgrades.touchGun.trillionFingers.bought) {
                    valueIncrement += (upgradeType === 'touchGun') ? 500 : (upgradeType === 'touchGunAwaken') ? 50000 : 5000000;
                }
                if (upgrades.touchGun.heavyFingers.bought) {
                    valueIncrement *= 4;
                }
                if (upgrades.touchGun.magicHands.bought) {
                    valueIncrement *= 6;
                }
                touchGunPointsPerClick += valueIncrement;

                // Update touch gun level and cost variables
                if (upgradeType === 'touchGun') {
                    touchGunLevel = level;
                    touchGunCost = cost;
                } else if (upgradeType === 'touchGunAwaken') {
                    awokenTouchGunLevel = level;
                    awokenTouchGunCost = cost;
                } else if (upgradeType === 'touchGunSuperAwaken') {
                    superAwokenTouchGunLevel = level;
                    superAwokenTouchGunCost = cost;
                }
                break;

            default:
                let weaponId = upgradeType.replace(/Firerate|Potency|HP|MultiFire|SplashRadius|SplashDamage|CriticalShot|CriticalDamage|Accuracy|Range/, '');
                let stats = getWeaponStats(weaponId);

                if (!stats) {
                    console.error("Invalid weapon:", weaponId);
                    return;
                }

                if (weapons[weaponId]) {
                    switch (true) {
                        case upgradeType.endsWith('Firerate'):
                            if (weaponId === 'pistol') {
                                if (level <= 20) {
                                    pistolFirerateUpgradeCost = cost;
                                    pistolFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for pistol fire rate.");
                                    alert("Pistol's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'smg') {
                                if (level <= 10) {
                                    smgFirerateUpgradeCost = cost;
                                    smgFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for smg fire rate.");
                                    alert("SMG's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'shotgun') {
                                if (level <= 15) {
                                    shotgunFirerateUpgradeCost = cost;
                                    shotgunFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for shotgun fire rate.");
                                    alert("Shotgun's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'sniperRifle') {
                                if (level <= 10) {
                                    sniperRifleFirerateUpgradeCost = cost;
                                    sniperRifleFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for sniper rifle fire rate.");
                                    alert("Sniper Rifle's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'ak47') {
                                if (level <= 15) {
                                    ak47FirerateUpgradeCost = cost;
                                    ak47FirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for ak-47 fire rate.");
                                    alert("AK-47's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'rocketLauncher') {
                                if (level <= 15) {
                                    rocketLauncherFirerateUpgradeCost = cost;
                                    rocketLauncherFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for rocket launcher fire rate.");
                                    alert("Rocket Launcher's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'tommyGun') {
                                if (level <= 20) {
                                    tommyGunFirerateUpgradeCost = cost;
                                    tommyGunFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for tommy gun fire rate.");
                                    alert("Tommy Gun's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'doubleBarrel') {
                                if (level <= 25) {
                                    doubleBarrelFirerateUpgradeCost = cost;
                                    doubleBarrelFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for double barrel fire rate.");
                                    alert("Double Barrel's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'uzi') {
                                if (level <= 10) {
                                    uziFirerateUpgradeCost = cost;
                                    uziFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for uzi fire rate.");
                                    alert("Uzi's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'huntingRifle') {
                                if (level <= 15) {
                                    huntingRifleFirerateUpgradeCost = cost;
                                    huntingRifleFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for hunting rifle fire rate.");
                                    alert("Hunting Rifle's firing rate has been maxed out!");
                                }
                            } else if (weaponId === 'musket') {
                                if (level <= 15) {
                                    musketFirerateUpgradeCost = cost;
                                    musketFirerateLevel = level;
                                    updateFirerate(stats, valueIncrement, upgrades[weaponId], weaponId);
                                } else {
                                    console.log("Maximum level reached for musket fire rate.");
                                    alert("Musket's firing rate has been maxed out!");
                                }
                            }
                            break;
                        
                        case upgradeType.endsWith('Potency'):
                            if (weaponId === 'pistol') {
                                pistolPotencyUpgradeCost = cost;
                                pistolPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'smg') {
                                smgPotencyUpgradeCost = cost;
                                smgPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'shotgun') {
                                shotgunPotencyUpgradeCost = cost;
                                shotgunPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'sniperRifle') {
                                sniperRiflePotencyUpgradeCost = cost;
                                sniperRiflePotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'ak47') {
                                ak47PotencyUpgradeCost = cost;
                                ak47PotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'rocketLauncher') {
                                rocketLauncherPotencyUpgradeCost = cost;
                                rocketLauncherPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'tommyGun') {
                                tommyGunPotencyUpgradeCost = cost;
                                tommyGunPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'doubleBarrel') {
                                doubleBarrelPotencyUpgradeCost = cost;
                                doubleBarrelPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'uzi') {
                                uziPotencyUpgradeCost = cost;
                                uziPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'huntingRifle') {
                                huntingRiflePotencyUpgradeCost = cost;
                                huntingRiflePotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'musket') {
                                musketPotencyUpgradeCost = cost;
                                musketPotencyLevel = level;
                                updatePotency(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;
							
						case upgradeType.endsWith('HP'):
							if (weaponId === 'pistol') {
                                pistolHPUpgradeCost = cost;
                                pistolHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'smg') {
                                smgHPUpgradeCost = cost;
                                smgHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'shotgun') {
                                shotgunHPUpgradeCost = cost;
                                shotgunHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'sniperRifle') {
                                sniperRifleHPUpgradeCost = cost;
                                sniperRifleHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'ak47') {
                                ak47HPUpgradeCost = cost;
                                ak47HPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'rocketLauncher') {
                                rocketLauncherHPUpgradeCost = cost;
                                rocketLauncherHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'tommyGun') {
                                tommyGunHPUpgradeCost = cost;
                                tommyGunHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'doubleBarrel') {
                                doubleBarrelHPUpgradeCost = cost;
                                doubleBarrelHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'uzi') {
                                uziHPUpgradeCost = cost;
                                uziHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'huntingRifle') {
                                huntingRifleHPUpgradeCost = cost;
                                huntingRifleHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'musket') {
                                musketHPUpgradeCost = cost;
                                musketHPLevel = level;
                                updateHP(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;

                        case upgradeType.endsWith('MultiFire'):
                            if (weaponId === 'shotgun') {
                                shotgunMultiFireUpgradeCost = cost;
                                shotgunMultiFireLevel = level;
                                updateMultiFire(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'doubleBarrel') {
                                doubleBarrelMultiFireUpgradeCost = cost;
                                doubleBarrelMultiFireLevel = level;
                                updateMultiFire(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;

                        case upgradeType.endsWith('SplashRadius'):
                            if (weaponId === 'rocketLauncher') {
                                rocketLauncherSplashRadiusUpgradeCost = cost;
                                rocketLauncherSplashRadiusLevel = level;
                                updateSplashRadius(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;

                        case upgradeType.endsWith('SplashDamage'):
                            if (weaponId === 'rocketLauncher') {
                                rocketLauncherSplashDamageUpgradeCost = cost;
                                rocketLauncherSplashDamageLevel = level;
                                updateSplashDamage(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;

                        case upgradeType.endsWith('CriticalShot'):
                            if (weaponId === 'sniperRifle') {
                                sniperRifleCriticalShotUpgradeCost = cost;
                                sniperRifleCriticalShotLevel = level;
                                updateCriticalChance(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'huntingRifle') {
                                huntingRifleCriticalShotUpgradeCost = cost;
                                huntingRifleCriticalShotLevel = level;
                                updateCriticalChance(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;

                        case upgradeType.endsWith('CriticalDamage'):
                            if (weaponId === 'sniperRifle') {
                                sniperRifleCriticalDamageUpgradeCost = cost;
                                sniperRifleCriticalDamageLevel = level;
                                updateCriticalDamage(stats, valueIncrement, upgrades[weaponId], weaponId);
                            } else if (weaponId === 'huntingRifle') {
                                huntingRifleCriticalDamageUpgradeCost = cost;
                                huntingRifleCriticalDamageLevel = level;
                                updateCriticalDamage(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;

                        case upgradeType.endsWith('Accuracy'):
                            if (weaponId === 'tommyGun') {
                                tommyGunAccuracyUpgradeCost = cost;
                                tommyGunAccuracyLevel = level;
                                updateAccuracy(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;
						
						case upgradeType.endsWith('Range'):
                            if (weaponId === 'musket') {
                                musketRangeUpgradeCost = cost;
                                musketRangeLevel = level;
                                updateRange(stats, valueIncrement, upgrades[weaponId], weaponId);
                            }
                            break;

                        default:
                            console.error("Invalid upgradeType:", upgradeType);
                            return;
                    }
                } else {
                    console.error("Invalid upgradeType:", upgradeType);
                }
        }
        updatePointsDisplay();
        updateCostDisplay();
    } else {
        alert(`Not enough points to upgrade ${upgradeType}!`);
    }
}

// Updates firerate from the upgradeType 'firerate'
function updateFirerate(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
        case 'pistol':
            break;
        case 'smg':
            if (weaponUpgrades.wickedAimer?.bought) valueIncrement *= 0.8;
            if (weaponUpgrades.lightweight?.bought) valueIncrement *= 0.85;
            break;
        case 'shotgun':
        case 'sniperRifle':
        case 'ak47':
        case 'rocketLauncher':
        case 'tommyGun':
        case 'doubleBarrel':
        case 'uzi':
        case 'huntingRifle':
		case 'musket':
            break;
        default:
            break;
    }

    stats.fireRate += valueIncrement;
}

// Updates potency from the upgradeType 'potency'
function updatePotency(stats, valueIncrement, weaponUpgrades, weapon) {
    // Get the current prestige level
    const currentPrestigeLevel = parseInt(localStorage.getItem('prestigeLevel')) || 0;
    const prestigeMultiplier = prestigeLevels[currentPrestigeLevel].multiplier;

    // Adjust valueIncrement based on prestige multiplier
    valueIncrement *= prestigeMultiplier;
    
    switch (weapon) {
        case 'pistol':
            if (weaponUpgrades.biggerBullets?.bought) valueIncrement *= 2;
            if (weaponUpgrades.largerCalibre?.bought) valueIncrement *= 3;
            if (weaponUpgrades.louderFiring?.bought) valueIncrement *= 3;
            if (weaponUpgrades.metalPiercing?.bought) valueIncrement *= 4;
            if (weaponUpgrades.fineTuning?.bought) valueIncrement *= 1.5;
            if (weaponUpgrades.versatileGunshots?.bought) valueIncrement *= 5;
            if (weaponUpgrades.empowered?.bought) valueIncrement *= 5;
            if (weaponUpgrades.oneHitBullets?.bought) valueIncrement *= 6;
            if (upgrades.touchGun?.fingerPistols?.bought) valueIncrement *= Math.pow(1.1, getTotalTouchGunUpgrades());
            break;
        case 'smg':
            if (weaponUpgrades.betterSpread?.bought) valueIncrement *= 2;
            if (weaponUpgrades.strongHold?.bought) valueIncrement *= 3;
            if (weaponUpgrades.pressureBullets?.bought) valueIncrement *= 3;
            if (weaponUpgrades.bashingRounds?.bought) valueIncrement *= 4;
            if (weaponUpgrades.autoAimer?.bought) valueIncrement *= 4;
            if (weaponUpgrades.metalPassers?.bought) valueIncrement *= 5;
            if (weaponUpgrades.inescapableBarrage?.bought) valueIncrement *= 5;
            if (weaponUpgrades.neverMissBarrage?.bought) valueIncrement *= 6;
            break;
        case 'shotgun':
            if (weaponUpgrades.powerfulBurst?.bought) valueIncrement *= 2;
            if (weaponUpgrades.devastatingBurst?.bought) valueIncrement *= 3;
            if (weaponUpgrades.megaBurst?.bought) valueIncrement *= 3;
            if (weaponUpgrades.gigaBurst?.bought) valueIncrement *= 4;
            if (weaponUpgrades.omegaBurst?.bought) valueIncrement *= 4;
            if (weaponUpgrades.teraBurst?.bought) valueIncrement *= 5;
            if (weaponUpgrades.ultimatumBurst?.bought) valueIncrement *= 5;
            break;
        case 'sniperRifle':
            if (weaponUpgrades.cripplingShots?.bought) valueIncrement *= 2;
            if (weaponUpgrades.dangerousRifling?.bought) valueIncrement *= 3;
            if (weaponUpgrades.enhancedTracers?.bought) valueIncrement *= 3;
            if (weaponUpgrades.infraredScope?.bought) valueIncrement *= 2;
            if (weaponUpgrades.electroshockTracers?.bought) valueIncrement *= 4;
            if (weaponUpgrades.lethalTracers?.bought) valueIncrement *= 4;
            if (weaponUpgrades.heatseekingSensors?.bought) valueIncrement *= 3;
            break;
        case 'ak47':
            if (weaponUpgrades.heatTippedBullets?.bought) valueIncrement *= 2;
            if (weaponUpgrades.staggeringBullets?.bought) valueIncrement *= 3;
            if (weaponUpgrades.rippingBullets?.bought) valueIncrement *= 3;
            if (weaponUpgrades.vehementBullets?.bought) valueIncrement *= 4;
            if (weaponUpgrades.overbearingVelocity?.bought) valueIncrement *= 4;
            if (weaponUpgrades.poweredVelocity?.bought) valueIncrement *= 2;
            if (weaponUpgrades.instantaneousVelocity?.bought) valueIncrement *= 5;
            if (weaponUpgrades.spikyBullets?.bought) valueIncrement *= 5;
            if (weaponUpgrades.ferociousBullets?.bought) valueIncrement *= 6;
            if (weaponUpgrades.unfathomablePressure?.bought) valueIncrement *= 6;
            break;
        case 'rocketLauncher':
            if (weaponUpgrades.potentRockets?.bought) valueIncrement *= 2;
            if (weaponUpgrades.repeatedExplosions?.bought) valueIncrement *= 3;
            if (weaponUpgrades.extraGunpowder?.bought) valueIncrement *= 3;
            if (weaponUpgrades.shatteringExplosions?.bought) valueIncrement *= 4;
            if (weaponUpgrades.napalmRockets?.bought) valueIncrement *= 4;
            if (weaponUpgrades.rampantTips?.bought) valueIncrement *= 5;
            if (weaponUpgrades.kamikaze?.bought) valueIncrement *= 2;
            break;
        case 'tommyGun':
            if (weaponUpgrades.tightPressure?.bought) valueIncrement *= 2;
            if (weaponUpgrades.powerfulOutcomes?.bought) valueIncrement *= 3;
            if (weaponUpgrades.vehementBurst?.bought) valueIncrement *= 3;
            if (weaponUpgrades.theVector?.bought) valueIncrement *= 4;
            if (weaponUpgrades.dangerZone?.bought) valueIncrement *= 4;
            if (weaponUpgrades.dischargedRippers?.bought) valueIncrement *= 5;
            if (weaponUpgrades.unstoppableBarrage?.bought) valueIncrement *= 5;
            if (weaponUpgrades.unavoidable?.bought) valueIncrement *= 3;
            break;
        case 'doubleBarrel':
            if (weaponUpgrades.lethalShots?.bought) valueIncrement *= 2;
            if (weaponUpgrades.arcSwitchingBarrels?.bought) valueIncrement *= 3;
            if (weaponUpgrades.energized?.bought) valueIncrement *= 3;
            if (weaponUpgrades.clumpedShots?.bought) valueIncrement *= 4;
            if (weaponUpgrades.tightShots?.bought) valueIncrement *= 4;
            if (weaponUpgrades.heavyForce?.bought) valueIncrement *= 5;
            if (weaponUpgrades.unbearableForce?.bought) valueIncrement *= 5;
            break;
        case 'uzi':
            if (weaponUpgrades.focussedSpread?.bought) valueIncrement *= 2;
            if (weaponUpgrades.quickfiringSalvo?.bought) valueIncrement *= 3;
            if (weaponUpgrades.tinyRippers?.bought) valueIncrement *= 3;
            if (weaponUpgrades.circuitousSpread?.bought) valueIncrement *= 4;
            if (weaponUpgrades.bulletOverload?.bought) valueIncrement *= 4;
            if (weaponUpgrades.bulletDrizzle?.bought) valueIncrement *= 2;
            if (weaponUpgrades.alwaysHitting?.bought) valueIncrement *= 5;
            if (weaponUpgrades.cantDodgeThis?.bought) valueIncrement *= 5;
            if (weaponUpgrades.bulletFletcher?.bought) valueIncrement *= 6;
            if (weaponUpgrades.easyToUse?.bought) valueIncrement *= 6;
            break;
        case 'huntingRifle':
            if (weaponUpgrades.powerfulHunter?.bought) valueIncrement *= 2;
            if (weaponUpgrades.noEscape?.bought) valueIncrement *= 3;
            if (weaponUpgrades.criminalHunter?.bought) valueIncrement *= 3;
            if (weaponUpgrades.targetHunter?.bought) valueIncrement *= 4;
            if (weaponUpgrades.longTracers?.bought) valueIncrement *= 4;
            if (weaponUpgrades.titanicTracers?.bought) valueIncrement *= 2;
            if (weaponUpgrades.beastHunter?.bought) valueIncrement *= 5;
            if (weaponUpgrades.markedTracers?.bought) valueIncrement *= 5;
            if (weaponUpgrades.masterHunting?.bought) valueIncrement *= 3;
            break;
		case 'musket':
		    if (weaponUpgrades.harderSlugs?.bought) valueIncrement *= 2;
            if (weaponUpgrades.metalSlugs?.bought) valueIncrement *= 3;
            if (weaponUpgrades.ironSlugs?.bought) valueIncrement *= 3;
            if (weaponUpgrades.blowShot?.bought) valueIncrement *= 4;
            if (weaponUpgrades.miniCannonballs?.bought) valueIncrement *= 4;
            if (weaponUpgrades.leadPoisoning?.bought) valueIncrement *= 5;
            if (weaponUpgrades.acidicSlugs?.bought) valueIncrement *= 5;
			if (weaponUpgrades.penetrativeSlugs?.bought) valueIncrement *= 6;
			if (weaponUpgrades.robustMechanisms?.bought) valueIncrement *= 6;
		    break;
        default:
            break;
    }

    stats.pointsPerShot += valueIncrement;
    stats.damage += valueIncrement * 0.5;
}

// Updates hp from the upgradeType 'hp'
function updateHP(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
        case 'pistol':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'smg':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'shotgun':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'sniperRifle':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'ak47':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'rocketLauncher':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'tommyGun':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'doubleBarrel':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'uzi':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        case 'huntingRifle':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
		case 'musket':
		    if (weaponUpgrades.moreResistant?.bought) valueIncrement *= 2;
            if (weaponUpgrades.armouredBody?.bought) valueIncrement *= 2;
			break;
        default:
            break;
    }

    stats.hpMax += valueIncrement;
}

// Updates multifire from the upgradeType 'multiFire'
function updateMultiFire(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
        case 'pistol':
        case 'smg':
            break;
        case 'shotgun':
            if (weaponUpgrades.scattershot?.bought) valueIncrement *= 2;
            if (weaponUpgrades.buckshot?.bought) valueIncrement *= 2;
            break;
        case 'sniperRifle':
        case 'ak47':
        case 'rocketLauncher':
        case 'tommyGun':
            break;
        case 'doubleBarrel':
            if (weaponUpgrades.doubleTrouble?.bought) valueIncrement *= 2;
            if (weaponUpgrades.doubleSwarm?.bought) valueIncrement *= 2;
            if (weaponUpgrades.doubleYeah?.bought) valueIncrement *= 2;
            break;
        case 'uzi':
        case 'huntingRifle':
		case 'musket':
            break;
        default:
            break;
    }

    stats.bulletsPerShot += valueIncrement;
}

// Updates other special upgrade stats for weapons (splash radius/damage, critical chance/damage, etc.)
function updateSplashRadius(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
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
		case 'musket':
            break;
        default:
            break;
    }

    stats.splashRadius += valueIncrement;
}

function updateSplashDamage(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
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
		case 'musket':
            break;
        default:
            break;
    }

    stats.splashDamage += valueIncrement;
}

function updateCriticalChance(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
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
		case 'musket':
            break;
        default:
            break;
    }

    stats.criticalChance += valueIncrement;
}

function updateCriticalDamage(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
        case 'pistol':
        case 'smg':
        case 'shotgun':
            break;
        case 'sniperRifle':
            if (weaponUpgrades.infraredScope?.bought) valueIncrement *= 1.5;
            break;
        case 'ak47':
        case 'rocketLauncher':
        case 'tommyGun':
        case 'doubleBarrel':
        case 'uzi':
            break;
        case 'huntingRifle':
            if (weaponUpgrades.titanicTracers?.bought) valueIncrement *= 2;
            if (weaponUpgrades.masterHunting?.bought) valueIncrement *= 1.5;
            break;
		case 'musket':
		    break;
        default:
            break;
    }

    stats.criticalDamage += valueIncrement;
}

function updateAccuracy(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
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
		case 'musket':
            break;
        default:
            break;
    }

    stats.accuracy += valueIncrement;
}

function updateRange(stats, valueIncrement, weaponUpgrades, weapon) {
    switch (weapon) {
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
		case 'musket':
            break;
        default:
            break;
    }

    stats.range += valueIncrement;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    const pistolPointsPerSecond = (weapons.pistol.stats.pointsPerShot / weapons.pistol.stats.fireRate) * 1000; // Convert fire rate from milliseconds to seconds
    const pistolDamagePerSecond = (weapons.pistol.stats.damage / weapons.pistol.stats.fireRate) * 1000; // Convert fire rate from milliseconds to seconds
    const smgPointsPerSecond = (weapons.smg.stats.pointsPerShot / weapons.smg.stats.fireRate) * 1000;
    const smgDamagePerSecond = (weapons.smg.stats.damage / weapons.smg.stats.fireRate) * 1000;
    const shotgunPointsPerSecond = (weapons.shotgun.stats.pointsPerShot * weapons.shotgun.stats.bulletsPerShot / weapons.shotgun.stats.fireRate) * 1000;
    const shotgunDamagePerSecond = (weapons.shotgun.stats.damage * weapons.shotgun.stats.bulletsPerShot / weapons.shotgun.stats.fireRate) * 1000;
    const sniperRiflePointsPerSecond = (weapons.sniperRifle.stats.pointsPerShot / weapons.sniperRifle.stats.fireRate) * 1000;
    const sniperRifleDamagePerSecond = (weapons.sniperRifle.stats.damage / weapons.sniperRifle.stats.fireRate) * 1000;
    const ak47PointsPerSecond = (weapons.ak47.stats.pointsPerShot / weapons.ak47.stats.fireRate) * 1000;
    const ak47DamagePerSecond = (weapons.ak47.stats.damage / weapons.ak47.stats.fireRate) * 1000;
    const rocketLauncherPointsPerSecond = (weapons.rocketLauncher.stats.pointsPerShot / weapons.rocketLauncher.stats.fireRate) * 1000;
    const rocketLauncherDamagePerSecond = (weapons.rocketLauncher.stats.damage / weapons.rocketLauncher.stats.fireRate) * 1000;
    const tommyGunPointsPerSecond = (weapons.tommyGun.stats.pointsPerShot / weapons.tommyGun.stats.fireRate) * 1000;
    const tommyGunDamagePerSecond = (weapons.tommyGun.stats.damage / weapons.tommyGun.stats.fireRate) * 1000;
    const doubleBarrelPointsPerSecond = (weapons.doubleBarrel.stats.pointsPerShot * weapons.doubleBarrel.stats.bulletsPerShot / weapons.doubleBarrel.stats.fireRate) * 1000;
    const doubleBarrelDamagePerSecond = (weapons.doubleBarrel.stats.damage * weapons.doubleBarrel.stats.bulletsPerShot / weapons.doubleBarrel.stats.fireRate) * 1000;
    const uziPointsPerSecond = (weapons.uzi.stats.pointsPerShot / weapons.uzi.stats.fireRate) * 1000;
    const uziDamagePerSecond = (weapons.uzi.stats.damage / weapons.uzi.stats.fireRate) * 1000;
    const huntingRiflePointsPerSecond = (weapons.huntingRifle.stats.pointsPerShot / weapons.huntingRifle.stats.fireRate) * 1000;
    const huntingRifleDamagePerSecond = (weapons.huntingRifle.stats.damage / weapons.huntingRifle.stats.fireRate) * 1000;
	const musketPointsPerSecond = (weapons.musket.stats.pointsPerShot / weapons.musket.stats.fireRate) * 1000;
    const musketDamagePerSecond = (weapons.musket.stats.damage / weapons.musket.stats.fireRate) * 1000;

    for (const weaponId in weapons) {
        const weapon = weapons[weaponId];
		const costElement = document.getElementById(`${weaponId}-cost`);
        const purchaseElement = document.getElementById(`${weaponId}-purchase`);
		const potencyElement = document.getElementById(`${weaponId}Potency-value`);
		const fireRateElement = document.getElementById(`${weaponId}Firerate-value`);
		const multiFireElement = document.getElementById(`${weaponId}MultiFire-value`);
		const accuracyElement = document.getElementById(`${weaponId}Accuracy-value`);
		const criticalChanceElement = document.getElementById(`${weaponId}CriticalChance-value`);
		const criticalDamageElement = document.getElementById(`${weaponId}CriticalDamage-value`);
		const splashRadiusElement = document.getElementById(`${weaponId}SplashRadius-value`);
		const splashDamageElement = document.getElementById(`${weaponId}SplashDamage-value`);
		const hpElement = document.getElementById(`${weaponId}HP-value`);
		const damageElement = document.getElementById(`${weaponId}Damage-value`);
		const rangeElement = document.getElementById(`${weaponId}Range-value`);
		const attackRateElement = document.getElementById(`${weaponId}AttackRate-value`);
		const walkingSpeedElement = document.getElementById(`${weaponId}WalkingSpeed-value`);
		const multiShotElement = document.getElementById(`${weaponId}MultiShot-value`);

        if (costElement) {
            costElement.textContent = formatNumber(weapon.cost);
        }

        if (purchaseElement) {
            if (weapon.purchased) {
                purchaseElement.style.display = 'none';
            } else {
                purchaseElement.style.display = 'inline-block';
            }
        }
		
		if (potencyElement) {
            potencyElement.textContent = formatNumber(weapon.stats.pointsPerShot);
        }
		
		if (fireRateElement) {
            fireRateElement.textContent = weapon.stats.fireRate + 'ms';
        }
		
		if (multiFireElement) {
            multiFireElement.textContent = weapon.stats.bulletsPerShot;
        }
		
		if (accuracyElement) {
            accuracyElement.textContent = weapon.stats.accuracy;
        }
		
		if (criticalChanceElement) {
            criticalChanceElement.textContent = weapon.stats.criticalChance;
        }
		
		if (criticalDamageElement) {
            criticalDamageElement.textContent = weapon.stats.criticalDamage;
        }
		
		if (splashRadiusElement) {
            splashRadiusElement.textContent = weapon.stats.splashRadius;
        }
		
		if (splashDamageElement) {
            splashDamageElement.textContent = weapon.stats.splashDamage;
        }
		
		if (hpElement) {
            hpElement.textContent = formatNumber(weapon.stats.hpMax);
        }
		
		if (damageElement) {
            damageElement.textContent = formatNumber(weapon.stats.damage);
        }
		
		if (rangeElement) {
            rangeElement.textContent = formatNumber(weapon.stats.range);
        }
		
		if (attackRateElement) {
            attackRateElement.textContent = weapon.stats.fireRate + 'ms';
        }
		
		if (walkingSpeedElement) {
            walkingSpeedElement.textContent = weapon.stats.walkingSpeed;
        }
		
		if (multiShotElement) {
            multiShotElement.textContent = weapon.stats.bulletsPerShot;
        }
    }
    
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
	document.getElementById('pistolHP-cost').textContent = formatNumber(pistolHPUpgradeCost);
    document.getElementById('pistolFirerate-level').textContent = pistolFirerateLevel;
    document.getElementById('pistolPotency-level').textContent = pistolPotencyLevel;
    document.getElementById('pistolPPS-value').textContent = formatNumber(pistolPointsPerSecond);
    document.getElementById('pistolDPS-value').textContent = formatNumber(pistolDamagePerSecond);
    
    document.getElementById('smgFirerate-cost').textContent = formatNumber(smgFirerateUpgradeCost);
    document.getElementById('smgPotency-cost').textContent = formatNumber(smgPotencyUpgradeCost);
	document.getElementById('smgHP-cost').textContent = formatNumber(smgHPUpgradeCost);
    document.getElementById('smgFirerate-level').textContent = smgFirerateLevel;
    document.getElementById('smgPotency-level').textContent = smgPotencyLevel;
    document.getElementById('smgPPS-value').textContent = formatNumber(smgPointsPerSecond);
    document.getElementById('smgDPS-value').textContent = formatNumber(smgDamagePerSecond);
    
    document.getElementById('shotgunFirerate-cost').textContent = formatNumber(shotgunFirerateUpgradeCost);
    document.getElementById('shotgunPotency-cost').textContent = formatNumber(shotgunPotencyUpgradeCost);
    document.getElementById('shotgunMultiFire-cost').textContent = formatNumber(shotgunMultiFireUpgradeCost);
	document.getElementById('shotgunHP-cost').textContent = formatNumber(shotgunHPUpgradeCost);
    document.getElementById('shotgunFirerate-level').textContent = shotgunFirerateLevel;
    document.getElementById('shotgunPotency-level').textContent = shotgunPotencyLevel;
    document.getElementById('shotgunMultiFire-level').textContent = shotgunMultiFireLevel;
    document.getElementById('shotgunPPS-value').textContent = formatNumber(shotgunPointsPerSecond);
    document.getElementById('shotgunDPS-value').textContent = formatNumber(shotgunDamagePerSecond);
    
    document.getElementById('sniperRifleFirerate-cost').textContent = formatNumber(sniperRifleFirerateUpgradeCost);
    document.getElementById('sniperRiflePotency-cost').textContent = formatNumber(sniperRiflePotencyUpgradeCost);
    document.getElementById('sniperRifleCriticalShot-cost').textContent = formatNumber(sniperRifleCriticalShotUpgradeCost);
    document.getElementById('sniperRifleCriticalDamage-cost').textContent = formatNumber(sniperRifleCriticalDamageUpgradeCost);
	document.getElementById('sniperRifleHP-cost').textContent = formatNumber(sniperRifleHPUpgradeCost);
    document.getElementById('sniperRifleFirerate-level').textContent = sniperRifleFirerateLevel;
    document.getElementById('sniperRiflePotency-level').textContent = sniperRiflePotencyLevel;
    document.getElementById('sniperRifleCriticalShot-level').textContent = sniperRifleCriticalShotLevel;
    document.getElementById('sniperRifleCriticalDamage-level').textContent = sniperRifleCriticalDamageLevel;
    document.getElementById('sniperRiflePPS-value').textContent = formatNumber(sniperRiflePointsPerSecond);
    document.getElementById('sniperRifleCriticalChance-value-battle').textContent = weapons.sniperRifle.stats.criticalChance;
    document.getElementById('sniperRifleCriticalDamage-value-battle').textContent = weapons.sniperRifle.stats.criticalDamage;
    document.getElementById('sniperRifleDPS-value').textContent = formatNumber(sniperRifleDamagePerSecond);

    document.getElementById('ak47Firerate-cost').textContent = formatNumber(ak47FirerateUpgradeCost);
    document.getElementById('ak47Potency-cost').textContent = formatNumber(ak47PotencyUpgradeCost);
	document.getElementById('ak47HP-cost').textContent = formatNumber(ak47HPUpgradeCost);
    document.getElementById('ak47Firerate-level').textContent = ak47FirerateLevel;
    document.getElementById('ak47Potency-level').textContent = ak47PotencyLevel;
    document.getElementById('ak47PPS-value').textContent = formatNumber(ak47PointsPerSecond);
    document.getElementById('ak47DPS-value').textContent = formatNumber(ak47DamagePerSecond);

    document.getElementById('rocketLauncherFirerate-cost').textContent = formatNumber(rocketLauncherFirerateUpgradeCost);
    document.getElementById('rocketLauncherPotency-cost').textContent = formatNumber(rocketLauncherPotencyUpgradeCost);
    document.getElementById('rocketLauncherSplashRadius-cost').textContent = formatNumber(rocketLauncherSplashRadiusUpgradeCost);
    document.getElementById('rocketLauncherSplashDamage-cost').textContent = formatNumber(rocketLauncherSplashDamageUpgradeCost);
	document.getElementById('rocketLauncherHP-cost').textContent = formatNumber(rocketLauncherHPUpgradeCost);
    document.getElementById('rocketLauncherFirerate-level').textContent = rocketLauncherFirerateLevel;
    document.getElementById('rocketLauncherPotency-level').textContent = rocketLauncherPotencyLevel;
    document.getElementById('rocketLauncherSplashRadius-level').textContent = rocketLauncherSplashRadiusLevel;
    document.getElementById('rocketLauncherSplashDamage-level').textContent = rocketLauncherSplashDamageLevel;
    document.getElementById('rocketLauncherSplashRadius-value-battle').textContent = weapons.rocketLauncher.stats.splashRadius * 0.5;
    document.getElementById('rocketLauncherSplashDamage-value-battle').textContent = weapons.rocketLauncher.stats.splashDamage;
    document.getElementById('rocketLauncherPPS-value').textContent = formatNumber(rocketLauncherPointsPerSecond);
    document.getElementById('rocketLauncherDPS-value').textContent = formatNumber(rocketLauncherDamagePerSecond);

    document.getElementById('tommyGunFirerate-cost').textContent = formatNumber(tommyGunFirerateUpgradeCost);
    document.getElementById('tommyGunPotency-cost').textContent = formatNumber(tommyGunPotencyUpgradeCost);
    document.getElementById('tommyGunAccuracy-cost').textContent = formatNumber(tommyGunAccuracyUpgradeCost);
	document.getElementById('tommyGunHP-cost').textContent = formatNumber(tommyGunHPUpgradeCost);
    document.getElementById('tommyGunFirerate-level').textContent = tommyGunFirerateLevel;
    document.getElementById('tommyGunPotency-level').textContent = tommyGunPotencyLevel;
    document.getElementById('tommyGunAccuracy-level').textContent = tommyGunAccuracyLevel;
    document.getElementById('tommyGunPPS-value').textContent = formatNumber(tommyGunPointsPerSecond);
    document.getElementById('tommyGunDPS-value').textContent = formatNumber(tommyGunDamagePerSecond);

    document.getElementById('doubleBarrelFirerate-cost').textContent = formatNumber(doubleBarrelFirerateUpgradeCost);
    document.getElementById('doubleBarrelPotency-cost').textContent = formatNumber(doubleBarrelPotencyUpgradeCost);
    document.getElementById('doubleBarrelMultiFire-cost').textContent = formatNumber(doubleBarrelMultiFireUpgradeCost);
	document.getElementById('doubleBarrelHP-cost').textContent = formatNumber(doubleBarrelHPUpgradeCost);
    document.getElementById('doubleBarrelFirerate-level').textContent = doubleBarrelFirerateLevel;
    document.getElementById('doubleBarrelPotency-level').textContent = doubleBarrelPotencyLevel;
    document.getElementById('doubleBarrelMultiFire-level').textContent = doubleBarrelMultiFireLevel;
    document.getElementById('doubleBarrelPPS-value').textContent = formatNumber(doubleBarrelPointsPerSecond);
    document.getElementById('doubleBarrelDPS-value').textContent = formatNumber(doubleBarrelDamagePerSecond);

    document.getElementById('uziFirerate-cost').textContent = formatNumber(uziFirerateUpgradeCost);
    document.getElementById('uziPotency-cost').textContent = formatNumber(uziPotencyUpgradeCost);
	document.getElementById('uziHP-cost').textContent = formatNumber(uziHPUpgradeCost);
    document.getElementById('uziFirerate-level').textContent = uziFirerateLevel;
    document.getElementById('uziPotency-level').textContent = uziPotencyLevel;
    document.getElementById('uziPPS-value').textContent = formatNumber(uziPointsPerSecond);
    document.getElementById('uziDPS-value').textContent = formatNumber(uziDamagePerSecond);

    document.getElementById('huntingRifleFirerate-cost').textContent = formatNumber(huntingRifleFirerateUpgradeCost);
    document.getElementById('huntingRiflePotency-cost').textContent = formatNumber(huntingRiflePotencyUpgradeCost);
    document.getElementById('huntingRifleCriticalShot-cost').textContent = formatNumber(huntingRifleCriticalShotUpgradeCost);
    document.getElementById('huntingRifleCriticalDamage-cost').textContent = formatNumber(huntingRifleCriticalDamageUpgradeCost);
	document.getElementById('huntingRifleHP-cost').textContent = formatNumber(huntingRifleHPUpgradeCost);
    document.getElementById('huntingRifleFirerate-level').textContent = huntingRifleFirerateLevel;
    document.getElementById('huntingRiflePotency-level').textContent = huntingRiflePotencyLevel;
    document.getElementById('huntingRifleCriticalShot-level').textContent = huntingRifleCriticalShotLevel;
    document.getElementById('huntingRifleCriticalDamage-level').textContent = huntingRifleCriticalDamageLevel;
    document.getElementById('huntingRiflePPS-value').textContent = formatNumber(huntingRiflePointsPerSecond);
	document.getElementById('huntingRifleCriticalChance-value-battle').textContent = weapons.huntingRifle.stats.criticalChance;
    document.getElementById('huntingRifleCriticalDamage-value-battle').textContent = weapons.huntingRifle.stats.criticalDamage;
    document.getElementById('huntingRifleDPS-value').textContent = formatNumber(huntingRifleDamagePerSecond);
	
	document.getElementById('musketFirerate-cost').textContent = formatNumber(musketFirerateUpgradeCost);
    document.getElementById('musketPotency-cost').textContent = formatNumber(musketPotencyUpgradeCost);
	document.getElementById('musketRange-cost').textContent = formatNumber(musketRangeUpgradeCost);
	document.getElementById('musketHP-cost').textContent = formatNumber(musketHPUpgradeCost);
    document.getElementById('musketFirerate-level').textContent = musketFirerateLevel;
    document.getElementById('musketPotency-level').textContent = musketPotencyLevel;
	document.getElementById('musketRange-level').textContent = musketRangeLevel;
    document.getElementById('musketPPS-value').textContent = formatNumber(musketPointsPerSecond);
    document.getElementById('musketDPS-value').textContent = formatNumber(musketDamagePerSecond);

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
	if (musketFirerateLevel === 15) {
        const musketFirerateLevelDisplay = document.getElementById('musketFirerate-level');
        if (musketFirerateLevelDisplay) {
            musketFirerateLevelDisplay.textContent = "Max";
        }
        const musketFirerateCostDisplay = document.getElementById('musketFirerate-cost');
        if (musketFirerateCostDisplay) {
            musketFirerateCostDisplay.textContent = "MAX";
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

    // Properly update the big upgrade cost values on format
    const upgradeOptions = document.querySelectorAll('.upgrade-option');
    upgradeOptions.forEach(upgradeOption => {
        const weapon = upgradeOption.classList[1]; // Get the weapon type from the class
        const upgradeId = upgradeOption.id.split('-')[1]; // Get the upgrade ID from the element ID
        const upgradeData = upgrades[weapon][upgradeId]; // Get the upgrade data from the upgrades object
        const costElement = upgradeOption.querySelector('.upgrade-cost');
        
        if (costElement && upgradeData) {
            if (upgradeData.bought) {
                costElement.textContent = "Bought!"; // Update the cost display to indicate "Bought!"
            } else {
                const formattedCost = formatNumber(upgradeData.cost); // Format the cost using the formatNumber function
                costElement.textContent = `Cost: ${formattedCost}`; // Update the cost display
            }
        }
    });

    // Properly update the prestige cost values on format
    let currentPrestigeLevel = parseInt(localStorage.getItem('prestigeLevel')) || 0;

    // Determine the next prestige cost
    let nextPrestigeLevel = prestigeLevels[currentPrestigeLevel + 1];
    let nextPrestigeCost = nextPrestigeLevel ? nextPrestigeLevel.cost : 'MAX';

    // Update the display with the formatted next prestige cost
    let nextPrestigeCostElement = document.getElementById('next-prestige-cost');
    if (nextPrestigeCostElement) {
        nextPrestigeCostElement.textContent = nextPrestigeCost === 'MAX' ? nextPrestigeCost : formatNumber(nextPrestigeCost);
    }

    // Update the prestige button text if not at the maximum prestige level
    if (currentPrestigeLevel < prestigeLevels.length - 1) {
        document.getElementById('prestige-button').textContent = "Prestige to " + prestigeLevels[currentPrestigeLevel + 1].name;
    } else {
        document.getElementById('prestige-button').textContent = "MAX PRESTIGE";
    }
	
	document.getElementById('wave-counter').innerText = `${currentWave}`;
	
	updateFingerPistols();
}

// Function to format numbers into units
function formatNumber(number) {
    if (typeof number !== 'number' || isNaN(number)) return '0';

    if (number === 0) return '0';

    if (numberFormat === 'standard') {
        const suffixes = ['', 'k', 'M', 'B', 'T', 'Qd', 'Qn', 'Sx', 'Sp', 'O', 'N', 'Dc', 'UD', 'DD', 'TD', 'QdD', 'QnD', 'SxD', 'SpD', 'OcD', 'NoD', 'Vg', 'UV', 'DV', 'TV', 'QdV', 'QnV', 'SxV', 'SpV', 'OcV', 'NoV', 'Trg', 'UTr', 'DTr'];
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
        const longSuffixes = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion', ' decillion', ' undecillion', ' duodecillion', ' tredecillion', ' quattuordecillion', ' quindecillion', ' sexdecillion', 'septendecillion', ' octodecillion', ' novemdecillion', ' vigintillion', ' unvigintillion', ' duovigintillion', ' tresvigintillion', ' quattuorvigintillion', ' quinvigintillion', ' sexvigintillion', ' septenvigintillion', ' octovigintillion', ' novemvigintillion', ' trigintillion', ' untrigintillion', ' duotrigintillion'];
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
    return pistolPotencyLevel + smgPotencyLevel + shotgunPotencyLevel + sniperRiflePotencyLevel + ak47PotencyLevel + rocketLauncherPotencyLevel + tommyGunPotencyLevel + doubleBarrelPotencyLevel + uziPotencyLevel + huntingRiflePotencyLevel + musketPotencyLevel;
}

// Function to get total firerate upgrades
function getTotalFirerateUpgrades() {
    return pistolFirerateLevel + smgFirerateLevel + shotgunFirerateLevel + sniperRifleFirerateLevel + ak47FirerateLevel + rocketLauncherFirerateLevel + tommyGunFirerateLevel + doubleBarrelFirerateLevel + uziFirerateLevel + huntingRifleFirerateLevel + musketFirerateLevel;
}

// Function to get total multifire upgrades
function getTotalMultiFireUpgrades() {
    return shotgunMultiFireLevel + doubleBarrelMultiFireLevel;
}

// Function to get total accuracy upgrades
function getTotalAccuracyUpgrades() {
    return tommyGunAccuracyLevel;
}

// Function to get total range upgrades
function getTotalRangeUpgrades() {
    return musketRangeLevel;
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

// Function to get the total amount of points per second from all weapons
function getTotalPPS() {
    let totalPPS = 0;

    // Iterate over each weapon
    Object.values(weapons).forEach(weapon => {
        // Check if the weapon is purchased
        if (weapon.purchased) {
            // Calculate PPS only for purchased weapons
            const pointsPerShot = weapon.stats.pointsPerShot;
            const fireRate = weapon.stats.fireRate;
            const bulletsPerShot = weapon.stats.bulletsPerShot || 1; // Default to 1 bullet per shot if not specified
            const fireRateInSeconds = fireRate / 1000; // Convert fire rate from milliseconds to seconds

            // Calculate PPS for the weapon
            const weaponPPS = (pointsPerShot * bulletsPerShot) / fireRateInSeconds;

            // Add the weapon's PPS to the total
            totalPPS += weaponPPS;
        }
    });

    return totalPPS;
}

// Function to get the total amount of points per second from all weapons
function getTotalDPS() {
    let totalDPS = 0;

    // Iterate over each weapon
    Object.values(weapons).forEach(weapon => {
        // Check if the weapon is purchased
        if (weapon.purchased) {
            // Calculate DPS only for purchased weapons
            const pointsPerShot = weapon.stats.damage;
            const fireRate = weapon.stats.fireRate;
            const bulletsPerShot = weapon.stats.bulletsPerShot || 1; // Default to 1 bullet per shot if not specified
            const fireRateInSeconds = fireRate / 1000; // Convert fire rate from milliseconds to seconds

            // Calculate PPS for the weapon
            const weaponDPS = (pointsPerShot * bulletsPerShot) / fireRateInSeconds;

            // Add the weapon's PPS to the total
            totalDPS += weaponDPS;
        }
    });

    return totalDPS;
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

// Function to initialize sound effects
function initializeSoundEffects() {
    // Load or create SFX IDs for each weapon
    weaponSFX.touchGun = new Audio('assets/sfx/touchgun.wav');
    weaponSFX.pistol = new Audio('assets/sfx/pistol.wav');
    weaponSFX.smg = new Audio('assets/sfx/smg.wav');
    weaponSFX.shotgun = new Audio('assets/sfx/shotgun.wav');
    weaponSFX.sniperRifle = new Audio('assets/sfx/sniper.wav');
    weaponSFX.ak47 = new Audio('assets/sfx/ak47.wav');
    weaponSFX.rocketLauncher = new Audio('assets/sfx/bazooka.wav');
    weaponSFX.tommyGun = new Audio('assets/sfx/smg.wav');
    weaponSFX.doubleBarrel = new Audio('assets/sfx/doublebarrel.wav');
    weaponSFX.uzi = new Audio('assets/sfx/uzi.wav');
    weaponSFX.huntingRifle = new Audio('assets/sfx/hunting_rifle.wav');
	weaponSFX.musket = new Audio('assets/sfx/ak47.wav');
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

// Function to handle shooting
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
        statistics.totalLifetimePoints += pointsPerShot; // Update total lifetime points
        updatePointsDisplay();
        updateLifetimePointsDisplay();
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
            if (distanceX <= weapons.rocketLauncher.stats.splashRadius && distanceY <= weapons.rocketLauncher.stats.splashRadius && !(distanceX === 0 && distanceY === 0)) {
				// Get the current prestige level
                const currentPrestigeLevel = parseInt(localStorage.getItem('prestigeLevel')) || 0;
                const prestigeMultiplier = prestigeLevels[currentPrestigeLevel].multiplier;
				
                // Apply splash damage
                const splashDamage = weapons.rocketLauncher.stats.pointsPerShot * weapons.rocketLauncher.stats.splashDamage * prestigeMultiplier; // 40% of points per shot
                points += splashDamage;
                statistics.totalLifetimePoints += splashDamage; // Update total lifetime points with splash damage
                updatePointsDisplay();
                updateLifetimePointsDisplay();

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
		case 'musket':
            playWeaponSoundEffect('musket');
            break;
        default:
            break;
    }
}

// Function to get the total number of weapons purchased
function getTotalWeaponsPurchased() {
    if (!weapons || typeof weapons !== 'object') {
        return { purchased: 0, total: 0 };
    }

    let totalWeaponsPurchased = 0;
    let totalWeapons = Object.keys(weapons).length;

    for (let weaponId in weapons) {
        if (weapons[weaponId].purchased) {
            totalWeaponsPurchased++;
        }
    }

    return { purchased: totalWeaponsPurchased, total: totalWeapons };
}

// Function to update the total weapons purchased display
function updateTotalWeaponsPurchasedDisplay() {
    const totalWeaponsData = getTotalWeaponsPurchased();
    const totalWeaponsPurchasedElement = document.getElementById('total-weapons-purchased');
    if (totalWeaponsPurchasedElement) {
        totalWeaponsPurchasedElement.textContent = `${totalWeaponsData.purchased}/${totalWeaponsData.total}`;
    }
}

// Function to get the total number of big upgrades purchased
function getTotalWeapons() {
    // Loop through all weapon objects and count the total number of weapons purchased
    var totalBoughtWeapons = 0;

    // Iterate over each weapon in the upgrades object
    for (let weaponId in weapons) {
        if (weapons[weaponId].purchased) {
            totalBoughtWeapons++;
        }
    }

    return totalBoughtWeapons;
}

// Function to get the total number of big upgrades purchased
function getTotalBigUpgradesPurchased() {
    // Initialize variables to count the total number of big upgrades purchased and available
    let totalBigUpgradesPurchased = 0;
    let totalBigUpgradesAvailable = 0;

    // Iterate over each weapon in the upgrades object
    for (const weapon in upgrades) {
        // Count the number of upgrades for the current weapon
        const upgradesForWeapon = Object.keys(upgrades[weapon]).length;
        totalBigUpgradesAvailable += upgradesForWeapon;

        // Iterate over each upgrade option for the current weapon
        for (const upgrade in upgrades[weapon]) {
            // Retrieve the upgrade data
            const upgradeData = upgrades[weapon][upgrade];

            // Check if the upgrade is bought
            if (upgradeData.bought) {
                totalBigUpgradesPurchased++;
            }
        }
    }

    // Return the ratio of big upgrades purchased to available as a string
    return `${totalBigUpgradesPurchased}/${totalBigUpgradesAvailable}`;
}


// Function to get the total number of achievements achieved
function getTotalAchievementsAchieved() {
    // Initialize a variable to count the number of achievements achieved
    let totalAchievementsAchieved = 0;

    // Iterate over each achievement
    achievements.forEach(achievement => {
        // Check if the achievement has been achieved
        if (achievement.achieved) {
            // Increment the total count of achievements achieved
            totalAchievementsAchieved++;
        }
    });

    // Return a string representing the ratio of achievements achieved to total achievements
    return `${totalAchievementsAchieved}/${achievements.length}`;
}

// Function to handle prestige
function prestige() {
    // Get the current prestige level
    let currentPrestigeLevel = parseInt(localStorage.getItem('prestigeLevel')) || 0;

    // Check if the player has reached the maximum prestige level
    if (currentPrestigeLevel >= prestigeLevels.length - 1) {
        alert("You have reached the maximum prestige level!");
        return;
    }

    // Get the details of the next prestige level
    let nextPrestigeLevel = prestigeLevels[currentPrestigeLevel + 1]; // Increment by 1 for next level

    // Check if the player has enough points to prestige
    let currentPoints = points;
    if (currentPoints < nextPrestigeLevel.cost) {
        alert("You don't have enough points to prestige!");
        return;
    }

    // Prompt confirmation before prestige
    var confirmation = confirm("Are you sure you want to prestige your progress? This will reset all your weapons and upgrades as well as your points.");

    if (!confirmation) {
        return;
    }

    // Deduct the cost of prestige from the points
    currentPoints -= nextPrestigeLevel.cost;
    points = currentPoints;

    // Update the prestige level
    currentPrestigeLevel++;
    localStorage.setItem('prestigeLevel', currentPrestigeLevel);

    // Get the total multiplier based on the current prestige level
    let totalMultiplier = prestigeLevels[currentPrestigeLevel].multiplier;

    // Perform the soft reset; resets everything but prestige
    points = 0;

    // Reset weapon variables and upgrades
    for (const weaponId in weapons) {
        weapons[weaponId].purchased = false;
        if (weaponInitialStats[weaponId]) {
            weapons[weaponId].stats = { ...weaponInitialStats[weaponId] };
            // Apply the prestige multiplier to the weapon stats
            weapons[weaponId].stats.pointsPerShot *= totalMultiplier;
            weapons[weaponId].stats.damage *= totalMultiplier;
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
	
	// Increases points per kill via prestige multiplier
    for (const enemyId in enemies) {
        enemies[enemyId].pointsPerKill *= totalMultiplier;
    }

    // Reset touch gun big upgrades
    const touchGunUpgrades = [
        'pointyFingers', 'ambidextrous', 'thousandFingers', 'antirestingCream',
        'powerfulHands', 'awakenUpgrade', 'millionFingers', 'stingingTaps',
        'gotToTap', 'fingerSwarm', 'billionFingers', 'needMore', 'fingerPistols',
        'superAwakenUpgrade', 'trillionFingers', 'heavyFingers', 'magicHands'
    ];
    touchGunUpgrades.forEach(upgrade => {
        upgrades.touchGun[upgrade].bought = false;
    });

    touchGunCost = 100;
    touchGunPointsPerClick = 1 * totalMultiplier; // Apply the prestige multiplier
    touchGunLevel = 0;

    awokenTouchGunCost = 500000;
    awokenTouchGunLevel = 0;

    superAwokenTouchGunCost = 500000000000;
    superAwokenTouchGunLevel = 0;

    // Reset other weapon upgrade costs and levels
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
	
	enemies = JSON.parse(JSON.stringify(defaultEnemies));
    localStorage.setItem('enemies', JSON.stringify(defaultEnemies));
	
	currentWave = 0;
    activeEnemies = [];
    currentWeapons = [];
	battleInProgress = false;

    // Update the HTML to display the new prestige level and cost
    document.getElementById('prestige-level').textContent = nextPrestigeLevel.name;
    document.getElementById('multiplier').textContent = 'x' + nextPrestigeLevel.multiplier;
    let nextPrestigeCostFormatted = formatNumber(nextPrestigeLevel.cost);
    document.getElementById('next-prestige-cost').textContent = nextPrestigeCostFormatted;

    // Update the prestige button text if not at the maximum prestige level
    if (currentPrestigeLevel < prestigeLevels.length - 1) {
        document.getElementById('prestige-button').textContent = "Prestige to " + prestigeLevels[currentPrestigeLevel + 1].name;
    } else {
        document.getElementById('prestige-button').textContent = "MAX PRESTIGE";
    }

    // Format and update points display
    document.getElementById('score-value-main').textContent = formatNumber(currentPoints);
    document.getElementById('score-value-upgrades').textContent = formatNumber(currentPoints);

    // Update and reinitialize the interfaces
    updatePointsDisplay();
    updateCostDisplay();
    updateAchievements();
    updateStatistics();
    initializeUpgradeCosts();
    saveGameState();
}

// Call the prestige function when the page loads to update the button text and prestige level display
window.onload = function() {
    let currentPrestigeLevel = parseInt(localStorage.getItem('prestigeLevel')) || 0;
    if (currentPrestigeLevel < prestigeLevels.length - 1) {
        document.getElementById('prestige-button').textContent = "Prestige to " + prestigeLevels[currentPrestigeLevel + 1].name;
    } else {
        document.getElementById('prestige-button').textContent = "Coming Soon!";
    }
    document.getElementById('prestige-level').textContent = prestigeLevels[currentPrestigeLevel].name;

    let nextPrestigeCostElement = document.getElementById('next-prestige-cost');
    if (nextPrestigeCostElement) {
        let nextPrestigeCost = prestigeLevels[currentPrestigeLevel + 1] ? prestigeLevels[currentPrestigeLevel + 1].cost : 'MAX';
        nextPrestigeCostElement.textContent = nextPrestigeCost === 'MAX' ? nextPrestigeCost : formatNumber(nextPrestigeCost);
    }

    let currentPoints = points;
    document.getElementById('score-value-main').textContent = formatNumber(currentPoints);
    document.getElementById('score-value-upgrades').textContent = formatNumber(currentPoints);
};

function updateStatisticsDisplay() {
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement) {
        lifetimePointsElement.textContent = formatNumber(statistics.totalLifetimePoints);
    }

    const totalWeaponsPurchasedElement = document.getElementById('total-weapons-purchased');
    if (totalWeaponsPurchasedElement) {
        totalWeaponsPurchasedElement.textContent = statistics.totalWeaponsPurchased;
    }

    const totalBigUpgradesElement = document.getElementById('total-big-upgrades');
    if (totalBigUpgradesElement) {
        totalBigUpgradesElement.textContent = statistics.totalBigUpgradesPurchased;
    }
	
	const totalAchievementsElement = document.getElementById('total-achievements-achieved');
    if (totalAchievementsElement) {
        totalAchievementsElement.textContent = statistics.totalAchievementsAchieved;
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
			{ name: 'Range Upgrades', key: 'totalRangeUpgrades' }
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
    // Calculate and assign the total lifetime points display
    statistics.totalLifetimePoints = totalPointsEarned;

    // Calculate and assign the total weapons purchased
    statistics.totalWeaponsPurchased = getTotalWeaponsPurchased();
    
    // Calculate and assign the total big upgrades purchased
    statistics.totalBigUpgradesPurchased = getTotalBigUpgradesPurchased();
	
	// Calculate and assign the total achievements achieved
    statistics.totalAchievementsAchieved = getTotalAchievementsAchieved();

    // Calculate and assign other statistics based on game data
    statistics.totalPotencyUpgrades = getTotalPotencyUpgrades();
    statistics.totalFirerateUpgrades = getTotalFirerateUpgrades();
    statistics.totalMultiFireUpgrades = getTotalMultiFireUpgrades();
    statistics.totalAccuracyUpgrades = getTotalAccuracyUpgrades();
    statistics.totalCriticalShotUpgrades = getTotalCriticalShotUpgrades();
    statistics.totalCriticalDamageUpgrades = getTotalCriticalDamageUpgrades();
    statistics.totalSplashRadiusUpgrades = getTotalSplashRadiusUpgrades();
    statistics.totalSplashDamageUpgrades = getTotalSplashDamageUpgrades();
	statistics.totalRangeUpgrades = getTotalRangeUpgrades();

    // Update the statistics display
    updateStatisticsDisplay();
}

// Function to update lifetime points display
function updateLifetimePointsDisplay() {
    const lifetimePointsElement = document.getElementById('lifetime-points');
    if (lifetimePointsElement) {
        lifetimePointsElement.textContent = formatNumber(statistics.totalLifetimePoints);
    }
}

// Function to update the loadout selection
function updateLoadoutSelection() {
    const loadoutContainer = document.getElementById('loadout-selection');
    loadoutContainer.innerHTML = ''; // Clear existing content

    const weaponOptions = Object.keys(weapons).filter(weaponId => weapons[weaponId].purchased);

    for (let i = 0; i < 6; i++) {
        const select = document.createElement('select');
        select.className = 'weapon-slot';
        select.dataset.slotIndex = i;
        select.onchange = handleWeaponSelection;

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = 'Select Weapon';
        select.appendChild(defaultOption);

        weaponOptions.forEach(weaponId => {
            const option = document.createElement('option');
            option.value = weaponId;
            option.textContent = weapons[weaponId].name;
            select.appendChild(option);
        });

        loadoutContainer.appendChild(select);
    }
}

// Function to update and handle the weapon selection
function handleWeaponSelection() {
    const selectedWeapons = new Set();
    const selects = document.querySelectorAll('.weapon-slot');

    currentWeapons = []; // Clear currentWeapons array

    selects.forEach(select => {
        if (select.value) {
            selectedWeapons.add(select.value);
            currentWeapons.push({ ...weapons[select.value], id: select.value }); // Add selected weapon to currentWeapons
        }
    });

    selects.forEach(select => {
        const selectedValue = select.value;
        const options = select.options;

        for (let i = 0; i < options.length; i++) {
            if (options[i].value && selectedWeapons.has(options[i].value) && options[i].value !== selectedValue) {
                options[i].disabled = true;
            } else {
                options[i].disabled = false;
            }
        }
    });
}

function startBattle() {
    if (battleInProgress) return;

    if (currentWeapons.length === 0) {
        alert('You must select at least one weapon in your loadout to start the battle.');
        return;
    }
	
	for (const weaponId in weapons) {
        weapons[weaponId].stats.hp = weapons[weaponId].stats.hpMax;
    }

    currentWave++;
    document.getElementById('wave-counter').innerText = `${currentWave}`;
    document.getElementById('game-status').innerText = 'Game Status: In Progress';
	const startBattleBtn = document.getElementById('start-battle-btn');
	const startBattleBtnRect = startBattleBtn.getBoundingClientRect();
	const surrenderBtn = document.getElementById('surrender-btn');
	surrenderBtn.style.display = 'block';

    // Position the surrender button slightly below the start battle button
    surrenderBtn.style.position = 'absolute';
    surrenderBtn.style.top = `${startBattleBtnRect.top - 100}px`; // Adjust the spacing as needed
    surrenderBtn.style.left = `${startBattleBtnRect.left}px`; // Align the left edge with the start battle button
    
    battleInProgress = true;
    activeEnemies = generateEnemies(currentWave);

    updateBattlefield();
    battleLoop();
	
	// Start the battle loop by requesting the first animation frame
    requestAnimationFrame(battleLoop);
}

function surrenderBattle() {
    battleInProgress = false;
    currentWave = Math.max(0, currentWave - 1);
    document.getElementById('wave-counter').innerText = `${currentWave}`;
    document.getElementById('game-status').innerText = 'Game Status: Surrendered';
    document.getElementById('surrender-btn').style.display = 'none';
    clearBattlefield();
}

function scaleHP(stat, wave) {
    const scaledHP = stat * Math.pow(1.4, wave - 1);
    return isNaN(scaledHP) || !isFinite(scaledHP) ? 0 : Math.max(scaledHP, 0);
}

function scaleDamage(stat, wave) {
    const scaledDamage = stat * Math.pow(1.2, wave - 1);
    return isNaN(scaledDamage) || !isFinite(scaledDamage) ? 0 : Math.max(scaledDamage, 0);
}

function generateEnemies(wave) {
    let enemiesList = [];
    const bossWaveInterval = 10; // Spawn a boss every 10 waves
    const baseEnemyCount = Math.ceil(wave / 5); // Increase density every 5 waves

    if (wave % bossWaveInterval === 0 && enemies["boss"]) {
        const bossStats = enemies["boss"].stats;
        enemiesList.push({
            id: `boss-${wave}`,
            type: "boss",
            name: enemies["boss"].name,
            stats: {
                hp: scaleHP(bossStats.hp, wave),
                damage: scaleDamage(bossStats.damage, wave),
                range: bossStats.range,
                walkingSpeed: bossStats.walkingSpeed,
                attackRate: bossStats.attackRate,
                hpMax: scaleHP(bossStats.hp, wave)
            },
            image: enemies["boss"].image,
            pointsPerKill: enemies["boss"].pointsPerKill,
        });
    } else {
        const enemyCount = baseEnemyCount + Math.floor(wave / bossWaveInterval);
        for (let i = 0; i < enemyCount; i++) {
            const enemyType = getRandomEnemyType(wave);
            const enemyStats = enemies[enemyType].stats;
            enemiesList.push({
                id: `${enemyType}-${i}-${wave}`,
                type: enemyType,
                name: enemies[enemyType].name,
                stats: {
                    hp: scaleHP(enemyStats.hp, wave),
                    damage: scaleDamage(enemyStats.damage, wave),
                    range: enemyStats.range,
                    walkingSpeed: enemyStats.walkingSpeed,
                    attackRate: enemyStats.attackRate,
                    hpMax: scaleHP(enemyStats.hp, wave)
                },
                image: enemies[enemyType].image,
                pointsPerKill: enemies[enemyType].pointsPerKill,
            });
        }
        if (wave >= 6 && Math.random() < 0) {
            const healerStats = enemies["healer"].stats;
            enemiesList.push({
                id: `healer-${wave}`,
                type: "healer",
                name: enemies["healer"].name,
                stats: {
                    hp: scaleHP(healerStats.hp, wave),
                    damage: scaleDamage(healerStats.damage, wave),
                    range: healerStats.range,
                    walkingSpeed: healerStats.walkingSpeed,
                    attackRate: healerStats.attackRate,
                    healRate: healerStats.healRate,
                    healAmount: healerStats.healAmount,
					healRange: healerStats.healRange,
                    hpMax: scaleHP(healerStats.hp, wave)
                },
                image: enemies["healer"].image,
                pointsPerKill: enemies["healer"].pointsPerKill,
            });
        }
    }

    return enemiesList;
}

function getRandomEnemyType(wave) {
    const enemyTypes = Object.keys(enemies).filter(type => type !== "boss" && type !== "healer");
    if (wave >= 6) {
        enemyTypes.push("healer");
    }
    const randomIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randomIndex];
}

function updateBattlefield() {
    const battlefield = document.getElementById('battlefield');
    battlefield.innerHTML = ''; // Clear previous state

    const battlefieldHeight = battlefield.offsetHeight;
    const battlefieldWidth = battlefield.offsetWidth;
    const weaponStartY = battlefieldHeight - 150;
    const weaponRowSpacing = 150;
    const weaponColSpacing = 150;
    const weaponsPerRow = 3;

    currentWeapons.forEach((weapon, index) => {
        const weaponDiv = document.createElement('div');
        weaponDiv.className = 'battlefield-entity weapon';
        weaponDiv.id = `weapon-${weapon.id}`; // Ensure unique ID

        const row = Math.floor(index / weaponsPerRow);
        const col = index % weaponsPerRow;

        weaponDiv.style.left = `${col * weaponColSpacing + 50}px`; // Adjust for start position
        weaponDiv.style.top = `${weaponStartY - (row * weaponRowSpacing)}px`;

        weaponDiv.innerHTML = `
            <img src="${weapon.image}" alt="${weapon.name}">
            <div class="hp-bar">
                <div class="hp-bar-inner" style="width: 100%;"></div>
            </div>
            <p>${weapon.name} (HP: <span class="hp-current">${formatNumber(weapon.stats.hp)}</span>/<span class="hp-max">${formatNumber(weapon.stats.hpMax)}</span>)</p>`;
        battlefield.appendChild(weaponDiv);
    });

    const enemiesPerRow = 5;
	const enemySpacingX = 150; // Horizontal spacing between enemies
    const enemySpacingY = 150; // Vertical spacing between enemies
	const enemyStartX = battlefieldWidth - (enemiesPerRow * enemySpacingX); // Starting X position for enemies
    activeEnemies.forEach((enemy, index) => {
        const enemyDiv = document.createElement('div');
        enemyDiv.className = 'battlefield-entity enemy';
        enemyDiv.id = `enemy-${enemy.id}`; // Ensure unique ID

        const row = Math.floor(index / enemiesPerRow);
        const col = index % enemiesPerRow;

        enemyDiv.style.left = `${col * enemySpacingX + enemyStartX}px`; // Adjust for start position
        enemyDiv.style.top = `${row * enemySpacingY + 200}px`; // Adjust for vertical spacing

        const formattedHp = formatNumber(enemy.stats.hp);
        const formattedHpMax = formatNumber(enemy.stats.hpMax);

        enemyDiv.innerHTML = `
            <img src="${enemy.image}" alt="${enemy.name}">
            <div class="hp-bar">
                <div class="hp-bar-inner" style="width: 100%;"></div>
            </div>
            <p>${enemy.name} (HP: <span class="hp-current">${formattedHp}</span>/<span class="hp-max">${formattedHpMax}</span>)</p>`;
        enemyDiv.enemyData = enemy; // Attach enemy data for further reference
        battlefield.appendChild(enemyDiv);
    });
}

function clearBattlefield() {
    const battlefield = document.getElementById('battlefield');
    battlefield.innerHTML = ''; // Clear all elements
}

function getProjectileImage(weaponType) {
    switch (weaponType) {
        case 'pistol':
        case 'ak47':
            return 'assets/images/projectiles/bullet.png';
        case 'smg':
        case 'tommyGun':
		case 'uzi':
            return 'assets/images/projectiles/small_bullet.png';
        case 'sniperRifle':
        case 'huntingRifle':
            return 'assets/images/projectiles/tracer.png';
        case 'rocketLauncher':
            return 'assets/images/projectiles/rocket.png';
        case 'shotgun':
        case 'doubleBarrel':
            return 'assets/images/projectiles/shotgun_shell.png';
        case 'musket':
            return 'assets/images/projectiles/metal_slug.png';
        default:
            return '';
    }
}

function shootProjectile(weapon, weaponDiv, enemyDiv) {
    if (!enemyDiv) {
        console.error("Enemy is undefined.");
        return;
    }

    const battlefield = document.getElementById('battlefield');
    const projectileImage = getProjectileImage(weapon.id);
    const projectileDiv = document.createElement('div');
    projectileDiv.className = 'projectile';
    projectileDiv.style.left = weaponDiv.style.left;
    projectileDiv.style.top = weaponDiv.style.top;
    projectileDiv.innerHTML = `<img src="${projectileImage}" alt="Projectile">`;
    battlefield.appendChild(projectileDiv);

    let projectileLeft = parseInt(projectileDiv.style.left);
    const enemyLeft = parseInt(enemyDiv.style.left);
    const speed = 15; // Adjust speed as necessary for desired gameplay

    function moveProjectile() {
        projectileLeft += speed;
        projectileDiv.style.left = `${projectileLeft}px`;

        if (Math.abs(projectileLeft - enemyLeft) <= 10) {
            battlefield.removeChild(projectileDiv);
            
            // Apply splash damage if rocket launcher
            if (weapon.id === 'rocketLauncher') {
                applySplashDamage(weapon, enemyDiv);
            } else {
                applyDirectDamage(weapon, enemyDiv);
            }
        } else {
            requestAnimationFrame(moveProjectile);
        }
    }

    requestAnimationFrame(moveProjectile);
}

function applyDirectDamage(weapon, enemyDiv) {
    const enemyId = enemyDiv.id.split('-')[1]; // Extract enemy ID
    const enemy = activeEnemies.find(e => e.id === enemyDiv.id.split('enemy-')[1]); // Correctly extract enemy ID
    if (enemy) {
        let damage = weapon.stats.damage;
		const floatingTextContainer = document.getElementById('floating-damage-number-container');
        const floatingText = document.createElement('div');
		floatingText.textContent = formatNumber(damage);
		floatingText.classList.add('floating-text');
		floatingText.style.position = 'absolute';
		
		// Calculate the position of the enemy's face
		const enemyBoundingBox = enemyDiv.getBoundingClientRect();
        const enemyFaceX = enemyBoundingBox.left + enemyBoundingBox.width / 2;
        const enemyFaceY = enemyBoundingBox.top;
		
		// Set the position of the floating text to appear in front of the enemy's face
        floatingText.style.left = `${enemyFaceX}px`;
        floatingText.style.top = `${enemyFaceY}px`;
		
		// Add animation for floating upwards
        floatingText.style.animation = 'floatUp 2s ease-out';

        // Append the floating text to the battlefield
        floatingTextContainer.appendChild(floatingText);
        if (weapon.id === 'sniperRifle' || weapon.id === 'huntingRifle') {
            // Calculate critical hit
            const criticalChance = Math.min(100, weapon.stats.criticalChance);
            const criticalMultiplier = weapon.stats.criticalDamage;
            if (criticalChance >= Math.random() * 100) {
                damage *= criticalMultiplier;
                console.log(`${weapon.id} landed a critical hit!`);
                floatingText.textContent = ' Crit! ' + formatNumber(damage);
                floatingText.classList.add('critical');
				floatingText.style.position = 'absolute';
            }
        }
        enemy.stats.hp -= damage;
        updateHpBar(enemyDiv, enemy.stats);
        if (enemy.stats.hp <= 0) {
            activeEnemies = activeEnemies.filter(e => e.id !== enemy.id);
            const wave = currentWave;
            const pointsPerKill = enemy.pointsPerKill * Math.pow(1.3, wave - 1);
            points += pointsPerKill;
            updatePointsDisplay();
            console.log(`${enemy.id} was eliminated by ${weapon.id}`);
            enemyDiv.remove();
        }
		setTimeout(() => {
            floatingText.remove();
        }, 1000);
    }
}

function applySplashDamage(weapon, targetEnemyDiv) {
    const splashRadius = weapon.stats.splashRadius * 0.5;
    const splashDamage = weapon.stats.splashDamage * weapon.stats.damage;

    // Get the position of the target enemy
    const targetEnemyRect = targetEnemyDiv.getBoundingClientRect();
    const targetEnemyX = targetEnemyRect.left + targetEnemyRect.width / 2;
    const targetEnemyY = targetEnemyRect.top + targetEnemyRect.height / 2;

    // Apply direct damage to the target enemy
    applyDirectDamage(weapon, targetEnemyDiv);

    // Loop through active enemies to check for splash damage
    activeEnemies.forEach(enemy => {
        const enemyDiv = document.getElementById(`enemy-${enemy.id}`);
        if (enemyDiv && enemyDiv !== targetEnemyDiv) { // Exclude the target enemy
            const enemyRect = enemyDiv.getBoundingClientRect();
            const enemyX = enemyRect.left + enemyRect.width / 2;
            const enemyY = enemyRect.top + enemyRect.height / 2;

            // Calculate distance between target enemy and current enemy
            const distanceX = Math.abs(targetEnemyX - enemyX);
            const distanceY = Math.abs(targetEnemyY - enemyY);
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // Check if current enemy is within splash radius
            if (distance <= splashRadius && !(distanceX === 0 && distanceY === 0)) {
                // Apply splash damage
                const totalSplashDamage = splashDamage; // Splash damage is already scaled with weapon's damage
                enemy.stats.hp -= totalSplashDamage;
                updateHpBar(enemyDiv, enemy.stats);

                // Show splash damage text for each affected enemy
                const splashTextContainer = document.getElementById('floating-damage-number-container');
                const splashText = document.createElement('div');
                splashText.textContent = '-' + formatNumber(totalSplashDamage);
                splashText.classList.add('floating-text-splash');
                splashText.style.position = 'absolute';

                // Set the position of the splash text to appear in front of the enemy's face
                splashText.style.left = `${enemyX}px`;
                splashText.style.top = `${enemyY}px`;

                // Add animation for floating upwards
                splashText.style.animation = 'floatUp 2s ease-out';

                // Append the splash text to the battlefield
                splashTextContainer.appendChild(splashText);

                // Check if the enemy is defeated
                if (enemy.stats.hp <= 0) {
                    console.log(`${enemy.id} was eliminated by splash damage from ${weapon.id}`);
                    activeEnemies = activeEnemies.filter(e => e.id !== enemy.id);
                    enemyDiv.remove();
                }

                // Remove the splash text after a certain duration
                setTimeout(() => {
                    splashText.remove();
                }, 1000);
            }
        }
    });
}

function battleLoop(timestamp) {
    if (!battleInProgress) return;

    // Calculate the delta time (time elapsed since the last frame)
    const deltaTime = (timestamp - lastFrameTime) / 1000; // Convert to seconds
    lastFrameTime = timestamp;

    // Handle weapon movements and attacks
    currentWeapons.forEach((weapon, weaponIndex) => {
        const weaponDiv = document.getElementById(`weapon-${weapon.id}`);
        if (weaponDiv && weapon.stats.hp > 0) {
            let closestEnemy = null;
            let minDistance = Infinity;

            activeEnemies.forEach(enemy => {
                const enemyDiv = document.getElementById(`enemy-${enemy.id}`);
                if (enemyDiv && enemy.stats.hp > 0) {
                    let enemyLeft = parseInt(enemyDiv.style.left);
                    let weaponLeft = parseInt(weaponDiv.style.left);

                    let distance = Math.abs(weaponLeft - enemyLeft);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestEnemy = enemy;
                    }
                }
            });

            if (closestEnemy) {
                const enemyDiv = document.getElementById(`enemy-${closestEnemy.id}`);
                let enemyLeft = parseInt(enemyDiv.style.left);
                let weaponLeft = parseInt(weaponDiv.style.left);

                const movementSpeed = weapon.stats.walkingSpeed * deltaTime * 10; // Adjust speed multiplier as necessary

                if (weaponLeft < enemyLeft - weapon.stats.range * 10) {
                    weaponDiv.style.left = `${weaponLeft + movementSpeed}px`;
                } else if (weaponLeft > enemyLeft + weapon.stats.range * 10) {
                    weaponDiv.style.left = `${weaponLeft - movementSpeed}px`;
                } else {
                    const currentTime = new Date().getTime();
                    const lastFired = lastFiredTimes[weapon.id] || 0;

                    if (currentTime - lastFired >= weapon.stats.fireRate) {
                        shootProjectile(weapon, weaponDiv, enemyDiv);
                        lastFiredTimes[weapon.id] = currentTime;
                    }
                }
            }
        }
    });

    // Handle enemy movements and attacks
    activeEnemies.forEach((enemy, enemyIndex) => {
        const enemyDiv = document.getElementById(`enemy-${enemy.id}`);
        if (enemyDiv && enemy.stats.hp > 0) {
            if (enemy.type === 'healer') {
                handleHealerBehavior(enemy, enemyDiv, deltaTime);
            } else {
                let closestWeapon = null;
                let minDistance = Infinity;

                currentWeapons.forEach(weapon => {
                    const weaponDiv = document.getElementById(`weapon-${weapon.id}`);
                    if (weaponDiv && weapon.stats.hp > 0) {
                        let weaponLeft = parseInt(weaponDiv.style.left);
                        let enemyLeft = parseInt(enemyDiv.style.left);

                        let distance = Math.abs(enemyLeft - weaponLeft);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestWeapon = weapon;
                        }
                    }
                });

                if (closestWeapon) {
                    const weaponDiv = document.getElementById(`weapon-${closestWeapon.id}`);
                    let weaponLeft = parseInt(weaponDiv.style.left);
                    let enemyLeft = parseInt(enemyDiv.style.left);

                    const movementSpeed = enemy.stats.walkingSpeed * deltaTime * 10; // Adjust speed multiplier as necessary

                    if (enemyLeft > weaponLeft + enemy.stats.range * 10) {
                        enemyDiv.style.left = `${enemyLeft - movementSpeed}px`;
                    } else if (enemyLeft < weaponLeft - enemy.stats.range * 10) {
                        enemyDiv.style.left = `${enemyLeft + movementSpeed}px`;
                    } else {
                        const currentTime = new Date().getTime();
                        const lastAttacked = lastAttackedTimes[enemy.id] || 0;

                        if (currentTime - lastAttacked >= enemy.stats.attackRate) {
                            closestWeapon.stats.hp -= enemy.stats.damage;
                            updateHpBar(weaponDiv, closestWeapon.stats);
                            lastAttackedTimes[enemy.id] = currentTime;

                            // Floating damage text
                            const floatingTextContainer = document.getElementById('floating-damage-number-container');
                            const floatingText = document.createElement('div');
                            floatingText.textContent = formatNumber(enemy.stats.damage);
                            floatingText.classList.add('floating-text');
                            floatingText.style.position = 'absolute';

                            // Calculate the position of the weapon's face
                            const weaponBoundingBox = weaponDiv.getBoundingClientRect();
                            const weaponFaceX = weaponBoundingBox.left + weaponBoundingBox.width / 2;
                            const weaponFaceY = weaponBoundingBox.top;

                            // Set the position of the floating text to appear in front of the weapon's face
                            floatingText.style.left = `${weaponFaceX}px`;
                            floatingText.style.top = `${weaponFaceY}px`;

                            // Add animation for floating upwards
                            floatingText.style.animation = 'floatUp 2s ease-out';

                            // Append the floating text to the battlefield
                            floatingTextContainer.appendChild(floatingText);

                            if (closestWeapon.stats.hp <= 0) {
                                console.log(`${closestWeapon.id} was eliminated by ${enemy.id}`);
                                currentWeapons = currentWeapons.filter(w => w.id !== closestWeapon.id);
                                weaponDiv.remove();
                            }
                            setTimeout(() => {
                                floatingText.remove();
                            }, 1000);
                        }
                    }
                }
            }
        }
    });

    // Check if all enemies are defeated
    if (activeEnemies.length === 0) {
        battleInProgress = false;
        document.getElementById('game-status').innerText = 'Game Status: Victory!';
        document.getElementById('surrender-btn').style.display = 'none';
        return;
    }

    // Check if all weapons are defeated
    if (currentWeapons.length === 0) {
        battleInProgress = false;
        currentWave = Math.max(1, currentWave - 1); // Decrease wave but not below 1
        document.getElementById('game-status').innerText = 'Game Status: Defeat!';
        document.getElementById('surrender-btn').style.display = 'none';
        return;
    }

    // Request the next animation frame
    requestAnimationFrame(battleLoop);
}

function handleHealerBehavior(enemy, enemyDiv, deltaTime) {
    const currentTime = new Date().getTime();
    const lastHealed = lastHealedTimes[enemy.id] || 0;

    if (currentTime - lastHealed >= enemy.stats.healRate) {
        activeEnemies.forEach(ally => {
            const allyDiv = document.getElementById(`enemy-${ally.id}`);
            if (allyDiv && ally.stats.hp > 0 && ally.id !== enemy.id) {
                let healerLeft = parseInt(enemyDiv.style.left);
                let allyLeft = parseInt(allyDiv.style.left);

                // Check if the ally is within healing range
                if (Math.abs(healerLeft - allyLeft) <= enemy.stats.healRange) {
                    const healAmount = ally.stats.hpMax * enemy.stats.healAmount;
                    ally.stats.hp = Math.min(ally.stats.hpMax, ally.stats.hp + healAmount);
                    updateHpBar(allyDiv, ally.stats);

                    // Display healing text
                    const healingTextContainer = document.getElementById('floating-heal-number-container');
                    const healingText = document.createElement('div');
                    healingText.textContent = `+${formatNumber(healAmount)}`;
                    healingText.classList.add('floating-text');
                    healingText.classList.add('healing-text');
                    healingText.style.position = 'absolute';

                    // Calculate the position of the ally's face
                    const allyBoundingBox = allyDiv.getBoundingClientRect();
                    const allyFaceX = allyBoundingBox.left + allyBoundingBox.width / 2;
                    const allyFaceY = allyBoundingBox.top;

                    // Set the position of the floating text to appear in front of the ally's face
                    healingText.style.left = `${allyFaceX}px`;
                    healingText.style.top = `${allyFaceY}px`;

                    // Add animation for floating upwards
                    healingText.style.animation = 'floatUp 2s ease-out';

                    // Append the healing text to the battlefield
                    healingTextContainer.appendChild(healingText);

                    setTimeout(() => {
                        healingText.remove();
                    }, 1000);
                }
            }
        });
        lastHealedTimes[enemy.id] = currentTime;
    }

    // Movement and attacking logic
    let closestWeapon = null;
    let minWeaponDistance = Infinity;

    currentWeapons.forEach(weapon => {
        const weaponDiv = document.getElementById(`weapon-${weapon.id}`);
        if (weaponDiv && weapon.stats.hp > 0) {
            let weaponLeft = parseInt(weaponDiv.style.left);
            let enemyLeft = parseInt(enemyDiv.style.left);

            let distance = Math.abs(enemyLeft - weaponLeft);
            if (distance < minWeaponDistance) {
                minWeaponDistance = distance;
                closestWeapon = weapon;
            }
        }
    });

    if (closestWeapon) {
        const weaponDiv = document.getElementById(`weapon-${closestWeapon.id}`);
        let weaponLeft = parseInt(weaponDiv.style.left);
        let enemyLeft = parseInt(enemyDiv.style.left);

        const movementSpeed = enemy.stats.walkingSpeed * deltaTime * 10; // Adjust speed multiplier as necessary

        if (enemyLeft > weaponLeft + enemy.stats.range * 10) {
            enemyDiv.style.left = `${enemyLeft - movementSpeed}px`;
        } else if (enemyLeft < weaponLeft - enemy.stats.range * 10) {
            enemyDiv.style.left = `${enemyLeft + movementSpeed}px`;
        } else {
            const lastAttacked = lastAttackedTimes[enemy.id] || 0;

            if (currentTime - lastAttacked >= enemy.stats.attackRate) {
                closestWeapon.stats.hp -= enemy.stats.damage;
                updateHpBar(weaponDiv, closestWeapon.stats);
                lastAttackedTimes[enemy.id] = currentTime;

                // Floating damage text
                const floatingTextContainer = document.getElementById('floating-damage-number-container');
                const floatingText = document.createElement('div');
                floatingText.textContent = formatNumber(enemy.stats.damage);
                floatingText.classList.add('floating-text');
                floatingText.style.position = 'absolute';

                // Calculate the position of the weapon's face
                const weaponBoundingBox = weaponDiv.getBoundingClientRect();
                const weaponFaceX = weaponBoundingBox.left + weaponBoundingBox.width / 2;
                const weaponFaceY = weaponBoundingBox.top;

                // Set the position of the floating text to appear in front of the weapon's face
                floatingText.style.left = `${weaponFaceX}px`;
                floatingText.style.top = `${weaponFaceY}px`;

                // Add animation for floating upwards
                floatingText.style.animation = 'floatUp 2s ease-out';

                // Append the floating text to the battlefield
                floatingTextContainer.appendChild(floatingText);

                if (closestWeapon.stats.hp <= 0) {
                    console.log(`${closestWeapon.id} was eliminated by ${enemy.id}`);
                    currentWeapons = currentWeapons.filter(w => w.id !== closestWeapon.id);
                    weaponDiv.remove();
                }
                setTimeout(() => {
                    floatingText.remove();
                }, 1000);
            }
        }
    }
}

function updateHpBar(entityDiv, stats) {
    const hpBarInner = entityDiv.querySelector('.hp-bar-inner');
    const hpCurrent = entityDiv.querySelector('.hp-current');
    const hpMax = entityDiv.querySelector('.hp-max');
    const hpPercentage = (stats.hp / stats.hpMax) * 100;
    hpBarInner.style.width = `${hpPercentage}%`;
    hpCurrent.textContent = formatNumber(stats.hp);
    hpMax.textContent = formatNumber(stats.hpMax);
}

function getEquippedWeapons() {
    return Object.values(weapons).filter(weapon => weapon.purchased);
}

function updateFingerPistols() {
    if (upgrades.touchGun.fingerPistols.bought) {
        // Calculate the new multiplier based on the total touch gun upgrades
        let newMultiplier = Math.pow(1.1, getTotalTouchGunUpgrades());
        fingerPistolsMultiplier = newMultiplier;
    } else {
        // If the upgrade is not bought, reset the multiplier
        fingerPistolsMultiplier = 1;
    }
    updatePistolStats();
}

function updatePistolStats() {
	if (upgrades.touchGun.fingerPistols.bought) {
        // Reset stats to initial values
        weapons.pistol.stats.pointsPerShot = initialPistolStats.pointsPerShot;
        weapons.pistol.stats.damage = initialPistolStats.damage;

        // Apply big upgrades
        let valueIncrement = 1;
        let weaponUpgrades = upgrades.pistol;
        if (weaponUpgrades.biggerBullets?.bought) valueIncrement *= 2;
        if (weaponUpgrades.largerCalibre?.bought) valueIncrement *= 3;
        if (weaponUpgrades.louderFiring?.bought) valueIncrement *= 3;
        if (weaponUpgrades.metalPiercing?.bought) valueIncrement *= 4;
	    if (weaponUpgrades.specializedMechanisms?.bought) valueIncrement *= 4;
        if (weaponUpgrades.fineTuning?.bought) valueIncrement *= 1.5;
        if (weaponUpgrades.versatileGunshots?.bought) valueIncrement *= 5;
        if (weaponUpgrades.empowered?.bought) valueIncrement *= 5;
        if (weaponUpgrades.oneHitBullets?.bought) valueIncrement *= 6;

        // Apply the combined multiplier for points per shot and damage
        weapons.pistol.stats.pointsPerShot *= valueIncrement * fingerPistolsMultiplier;
        weapons.pistol.stats.damage *= valueIncrement * fingerPistolsMultiplier;

        // Apply the potency multiplier
        let potencyMultiplier = 1 + pistolPotencyLevel;
        weapons.pistol.stats.pointsPerShot *= potencyMultiplier;
        weapons.pistol.stats.damage *= potencyMultiplier;
	}
}

// Function to initialize upgrade costs with proper formatting
function initializeUpgradeCosts() {
    // Iterate over all upgrade options
    const upgradeOptions = document.querySelectorAll('.upgrade-option');
    upgradeOptions.forEach(upgradeOption => {
        const weapon = upgradeOption.classList[1]; // Get the weapon type from the class
        const upgradeId = upgradeOption.id.split('-')[1]; // Get the upgrade ID from the element ID
        const upgradeData = upgrades[weapon][upgradeId]; // Get the upgrade data from the upgrades object
        const costElement = upgradeOption.querySelector('.upgrade-cost');
        
        if (costElement && upgradeData) {
            const formattedCost = formatNumber(upgradeData.cost); // Format the cost using the formatNumber function
            costElement.textContent = `Cost: ${formattedCost}`; // Update the cost display
        }
    });

    // Update the next prestige cost
    const nextPrestigeCostElement = document.getElementById('next-prestige-cost');
    if (nextPrestigeCostElement) {
        const nextPrestigeCostText = nextPrestigeCostElement.textContent.trim();
        const nextPrestigeCost = parseInt(nextPrestigeCostText.replace(/\D/g, ''), 10);
        const formattedNextPrestigeCost = formatNumber(nextPrestigeCost);
        nextPrestigeCostElement.textContent = formattedNextPrestigeCost;
    }

    // Update prestige level and multiplier
    const currentPrestigeLevel = parseInt(localStorage.getItem('prestigeLevel')) || 0;
    if (currentPrestigeLevel < prestigeLevels.length) {
        document.getElementById('prestige-level').textContent = prestigeLevels[currentPrestigeLevel].name;
        document.getElementById('multiplier').textContent = 'x' + prestigeLevels[currentPrestigeLevel].multiplier;
    }
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
    updateLoadoutSelection();
}

// Function to initialize statistics data
function initializeStatistics() {
    setStatistics();
}

// Function to initialize the game's UI
function initializeUI() {
    updateCostDisplay();
    updateAchievementsDisplay();
    updateStatisticsDisplay();
    updateLifetimePointsDisplay();
	updateFingerPistols();

    // Start earning points automatically for purchased weapons
    setInterval(automaticPointsGeneration, 1000); // Check every second for points generation
    
    // Interval timer to update cost display nearly instantly
    setInterval(updateCostDisplay, 100);
}

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
    updateTotalWeaponsPurchasedDisplay();
    calculateCompletionPercentage(); // Update achievement progress
}
setInterval(updateStatistics, 100);