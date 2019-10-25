import _ from 'lodash';
import { decreaseNumByPercentage, increaseNumByPercentage } from "../utils/percent";
const LEVELS = {
    1: {
        castle: {
            health: 50,
            fullHealth: 50,
            restore: 0,
            assaultDefense: 0
        },
        isTraining: false
    },
    2: {
        castle: {
            health: 75,
            fullHealth: 75,
            restore: 0,
            assaultDefense: 1
        },
        isTraining: false
    },
    3: {
        castle: {
            health: 100,
            fullHealth: 100,
            restore: 0,
            assaultDefense: 1
        },
        isTraining: false
    },
    4: {
        castle: {
            health: 125,
            fullHealth: 125,
            restore: 0.5,
            assaultDefense: 1
        },
        isTraining: false
    },
    5: {
        castle: {
            health: 200,
            fullHealth: 200,
            restore: 0.5,
            assaultDefense: 1
        },
        isTraining: false
    }
};

const PLAYER_LEVELS = {
    1: {
        damage: 10,
        criticalChance: 0,
        criticalDamage: 200,
        reloadTime: 10000,
        assaultUnits: 10,
        fullAssaultUnits: 10,
        assaultUnitsRestore: 0,
        assaultUnitDamage: 0.5
    },
    2: {
        damage: 12,
        criticalChance: 0,
        criticalDamage: 200,
        reloadTime: 10000,
        assaultUnits: 10,
        assaultUnitDamage: 0.5,
        fullAssaultUnits: 10,
        assaultUnitsRestore: 1
    },
    3: {
        damage: 12,
        criticalChance: 0,
        criticalDamage: 200,
        reloadTime: 8000,
        assaultUnits: 10,
        assaultUnitDamage: 0.5,
        fullAssaultUnits: 10,
        assaultUnitsRestore: 1
    },
    4: {
        damage: 12,
        criticalChance: 0,
        criticalDamage: 200,
        reloadTime: 8000,
        assaultUnits: 12,
        assaultUnitDamage: 0.6,
        fullAssaultUnits: 12,
        assaultUnitsRestore: 1
    },
    5: {
        damage: 12,
        criticalChance: 50,
        criticalDamage: 200,
        reloadTime: 8000,
        assaultUnits: 12,
        assaultUnitDamage: 0.6,
        fullAssaultUnits: 12,
        assaultUnitsRestore: 1
    }
};

const PLAYER_UPGRADES = {
    damageIncrease : {
        1: 20,
        2: 40,
        3: 60,
        4: 80,
        5: 100
    },
    reloadTimeReduce: {
        1: -10,
        2: -20,
        3: -30,
        4: -40,
        5: -50
    },
    criticalChanceIncrease: {
        1: 2,
        2: 4,
        3: 6,
        4: 8,
        5: 10
    },
    criticalDamageIncrease: {
        1: 10,
        2: 20,
        3: 30,
        4: 40,
        5: 50
    },
    assaultUnitDamageIncrease: {
        1: 20,
        2: 40,
        3: 60,
        4: 80,
        5: 100
    },
    fullAssaultUnitsIncrease: {
        1: 20,
        2: 40,
        3: 60,
        4: 80,
        5: 100
    },
    assaultUnitsRestoreIncrease: {
        1: 0.1,
        2: 0.2,
        3: 0.3,
        4: 0.4,
        5: 0.5
    }
};

export const UPGRADE_PRICES = {
    1: 40,
    2: 50,
    3: 65,
    4: 80,
    5: 100
};

export const UPDADE_TRANSLATES = {
    'damageIncrease': 'Урон от пушки',
    'reloadTimeReduce': 'Время перезарядки',
    'criticalChanceIncrease': 'Шанс критической атаки',
    'criticalDamageIncrease': 'Критический урон',
    'assaultUnitDamageIncrease': 'Урон от юнита',
    'fullAssaultUnitsIncrease': 'Количество юнитов',
    'assaultUnitsRestoreIncrease': 'Восстановление юнитов',
};

export const UPDADE_SYMBOLS = {
    'damageIncrease': {
        'prefix': '+',
        'postfix': '%',
    },
    'reloadTimeReduce': {
        'prefix': '',
        'postfix': '%',
    },
    'criticalChanceIncrease': {
        'prefix': '+',
        'postfix': '%',
    },
    'criticalDamageIncrease': {
        'prefix': '+',
        'postfix': '%',
    },
    'assaultUnitDamageIncrease': {
        'prefix': '+',
        'postfix': '%',
    },
    'fullAssaultUnitsIncrease': {
        'prefix': '+',
        'postfix': '%',
    },
    'assaultUnitsRestoreIncrease': {
        'prefix': '+',
        'postfix': '',
    },
};

let currentLevel = 0;
let currentPlayerLevel = 1;
let currentGold = 0;
let currentUpgrades = [];

const getGold = () => currentGold;

export const getUpgrades = () => PLAYER_UPGRADES;

const getCurrentUpgrades = () => currentUpgrades;

const getCurrentUpgradeByName = (name) => _.find(getCurrentUpgrades(), (upgrade) => upgrade.name === name);

const setUpgrade = (name) => {
    const upgradeIndex = _.findIndex(getCurrentUpgrades(), (upgrade) => upgrade.name === name);
    if (upgradeIndex >= 0) {
        const currentUpgradeLevel = getCurrentUpgradeByName(name).level;
        currentUpgrades[upgradeIndex] = { name, level: currentUpgradeLevel + 1 }
    } else {
        currentUpgrades.push({ name, level: 1 });
    }
};

const updatePlayerWithUpgradePercentage = (player, playerField, upgradeName, upgradeLevel) => {
    const upgradeValue = PLAYER_UPGRADES[upgradeName][upgradeLevel];
    if (upgradeValue > 0) {
        player[playerField] = player[playerField] + increaseNumByPercentage(player[playerField], upgradeValue);
    } else {
        console.log(upgradeValue);
        player[playerField] = decreaseNumByPercentage(player[playerField], upgradeValue);
    }
};

const updatePlayerWithUpgradeValue = (player, playerField, upgradeName, upgradeLevel) => {
    const upgradeValue = PLAYER_UPGRADES[upgradeName][upgradeLevel];
    player[playerField] = player[playerField] + upgradeValue;
};

export const buyUpgrade = (name) => {
    const currentUpgrade = getCurrentUpgradeByName(name);
    const price = currentUpgrade ? UPGRADE_PRICES[currentUpgrade.level + 1] : UPGRADE_PRICES[1];
    currentGold -= price;
    setUpgrade(name);
};

export const getGeneratedLevel = () => {
    currentLevel += 1;
    return currentLevel;
};


export const getLevel = () => {
    currentLevel += 1;
    if (!LEVELS[currentLevel]) {
        currentLevel = 1
    }
    return currentLevel;
};

export const getGeneratedCastle = () => {
    const castle = {
        castle: {
            health: 50,
            fullHealth: 50,
            restore: 0,
            assaultDefense: 0
        },
        isTraining: false
    };
    currentUpgrades.forEach(( upgrade ) => {
        const newCastleHealth = castle.castle.health + (upgrade.level * 20);
        castle.castle.health = newCastleHealth;
        castle.castle.fullHealth = newCastleHealth;
    });
    return castle;
};

export const getCastle = (level) => {
    return LEVELS[level];
};

export const upPlayerLevel = () => {
    currentPlayerLevel += 1;
    if (!PLAYER_LEVELS[currentPlayerLevel]) {
        currentPlayerLevel = 1;
    }
};

export const getPlayer = () => {
    console.log(currentPlayerLevel);
    const PLAYER = {
        ...PLAYER_LEVELS[currentPlayerLevel],
        level: currentPlayerLevel,
        gold: getGold(),
        upgrades: getCurrentUpgrades()
    };

    if (currentUpgrades) {
        currentUpgrades.forEach((upgrade) => {
            switch (upgrade.name) {
                case 'damageIncrease':
                    updatePlayerWithUpgradePercentage(PLAYER, 'damage', upgrade.name, upgrade.level);
                    break;
                case 'reloadTimeReduce':
                    updatePlayerWithUpgradePercentage(PLAYER, 'reloadTime', upgrade.name, upgrade.level);
                    break;
                case 'criticalChanceIncrease':
                    updatePlayerWithUpgradeValue(PLAYER, 'criticalChance', upgrade.name, upgrade.level);
                    break;
                case 'criticalDamageIncrease':
                    updatePlayerWithUpgradePercentage(PLAYER, 'criticalDamage', upgrade.name, upgrade.level);
                    break;
                case 'assaultUnitDamageIncrease':
                    updatePlayerWithUpgradePercentage(PLAYER, 'assaultUnitDamage', upgrade.name, upgrade.level);
                    break;
                case 'fullAssaultUnitsIncrease':
                    updatePlayerWithUpgradePercentage(PLAYER, 'assaultUnits', upgrade.name, upgrade.level);
                    updatePlayerWithUpgradePercentage(PLAYER, 'fullAssaultUnits', upgrade.name, upgrade.level);
                    break;
                case 'assaultUnitsRestoreIncrease':
                    updatePlayerWithUpgradeValue(PLAYER, 'assaultUnitsRestore', upgrade.name, upgrade.level);
                    break;
                default:
                    return;
            }
        })
    }

    return PLAYER;
};

export const getReward = () => {
    const rewardGold = 20;
    currentGold += rewardGold;
    return (
        {
            gold: rewardGold
        }
    );
};