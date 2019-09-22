const LEVELS = {
    1: {
        health: 50,
        fullHealth: 50,
        restore: 0,
        assaultDefense: 0
    },
    2: {
        health: 75,
        fullHealth: 75,
        restore: 1,
        assaultDefense: 1
    },
    3: {
        health: 100,
        fullHealth: 100,
        restore: 0,
        assaultDefense: 1
    },
    4: {
        health: 125,
        fullHealth: 125,
        restore: 1,
        assaultDefense: 1
    },
    5: {
        health: 200,
        fullHealth: 200,
        restore: 1,
        assaultDefense: 1
    }
};

const PLAYER_LEVELS = {
    1: {
        damage: 10,
        reloadTime: 10,
        assaultUnits: 10,
        assaultUnitDamage: 0.5
    },
    2: {
        damage: 12,
        reloadTime: 10,
        assaultUnits: 10,
        assaultUnitDamage: 0.5
    },
    3: {
        damage: 12,
        reloadTime: 8,
        assaultUnits: 10,
        assaultUnitDamage: 0.5
    },
    4: {
        damage: 12,
        reloadTime: 8,
        assaultUnits: 10,
        assaultUnitDamage: 0.5
    },
    5: {
        damage: 12,
        reloadTime: 8,
        assaultUnits: 10,
        assaultUnitDamage: 0.5
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