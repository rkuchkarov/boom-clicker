const LEVELS = {
    1: {
        castle: {
            health: 50,
            fullHealth: 50,
            restore: 0,
            assaultDefense: 0
        },
        isTraining: true
    },
    2: {
        castle: {
            health: 75,
            fullHealth: 75,
            restore: 0,
            assaultDefense: 1
        },
        isTraining: true
    },
    3: {
        castle: {
            health: 100,
            fullHealth: 100,
            restore: 0,
            assaultDefense: 1
        },
        isTraining: true
    },
    4: {
        castle: {
            health: 125,
            fullHealth: 125,
            restore: 0.5,
            assaultDefense: 1
        },
        isTraining: true
    },
    5: {
        castle: {
            health: 200,
            fullHealth: 200,
            restore: 0.5,
            assaultDefense: 1
        },
        isTraining: true
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
        fullAssaultUnits: 10,
        assaultUnitsRestore: 1
    },
    5: {
        damage: 12,
        criticalChance: 50,
        criticalDamage: 200,
        reloadTime: 8000,
        assaultUnits: 12,
        assaultUnitDamage: 0.6,
        fullAssaultUnits: 10,
        assaultUnitsRestore: 1
    }
};

let currentLevel = 0;
let currentPlayerLevel = 0;
export const getLevel = () => {
    currentLevel += 1;
    if (!LEVELS[currentLevel]) {
        currentLevel = 1
    }
    return currentLevel;
};

export const getCastle = (level) => {
    return LEVELS[level];
};

export const getPlayer = () => {
    currentPlayerLevel += 1;
    if (!PLAYER_LEVELS[currentPlayerLevel]) {
        currentPlayerLevel = 1;
    }
    return {
        ...PLAYER_LEVELS[currentPlayerLevel],
        level: currentPlayerLevel
    }
};

export const getReward = () => (
    {
        gold: 200,
        science: 3
}
);