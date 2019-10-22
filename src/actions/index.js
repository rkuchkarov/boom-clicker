export const RESET_STATE = 'RESET_STATE';
export const RESEARCH_OPENED = 'RESEARCH_OPENED';
export const RESEARCH_CLOSED = 'RESEARCH_CLOSED';
export const TRAINING_STARTED = 'TRAINING_STARTED';
export const TRAINING_FINISHED = 'TRAINING_FINISHED';
export const BATTLE_PREPARE = 'BATTLE_PREPARE';
export const BATTLE_START = 'BATTLE_START';
export const BATTLE_FINISHED = 'BATTLE_FINISHED';
export const LEVEL_FETCH = 'LEVEL_FETCH';
export const LEVEL_LOADED = 'LEVEL_LOADED';
export const PLAYER_FETCH = 'PLAYER_FETCH';
export const PLAYER_LOADED = 'PLAYER_LOADED';
export const PLAYER_UP_LEVEL = 'PLAYER_UP_LEVEL';
export const PLAYER_ATTACK = 'PLAYER_ATTACK';
export const ASSAULT_ATTACK = 'ASSAULT_ATTACK';
export const PLAYER_RELOADING = 'PLAYER_RELOADING';
export const RELOAD_TICK_PASSED = 'RELOAD_TICK_PASSED';
export const PLAYER_RELOADED = 'PLAYER_RELOADED';
export const CASTLE_FETCH = 'CASTLE_FETCH';
export const CASTLE_LOADED = 'CASTLE_LOADED';
export const CASTLE_DAMAGED = 'CASTLE_DAMAGED';
export const CASTLE_CAPTURED = 'CASTLE_CAPTURED';
export const CASTLE_RESTORE = 'CASTLE_RESTORE';
export const CASTLE_RESTORED = 'CASTLE_RESTORED';
export const CASTLE_ASSAULT_REBUFF = 'CASTLE_ASSAULT_REBUFF';
export const ASSAULT_UNITS_RESTORED = 'ASSAULT_UNITS_RESTORED';
export const ASSAULT_UNITS_RESTORE = 'ASSAULT_UNITS_RESTORE';
export const UPGRADES_LOADED = 'UPGRADES_LOADED';
export const UPGRADE_BUY = 'UPGRADE_BUY';
export const ASSAULT_STARTED = 'ASSAULT_STARTED';
export const ASSAULT_SEC_PASSED = 'ASSAULT_SEC_PASSED';
export const ASSAULT_FINISHED = 'ASSAULT_FINISHED';
export const REWARD_LOADED = 'REWARD_LOADED';
export const BATTLE_SEC_PASSED = 'BATTLE_SEC_PASSED';

export const upgradeBuy = (name) => {
    return {
        type: UPGRADE_BUY,
        name
    }
};

export const assaultUnitsRestored = () => {
    return {
        type: ASSAULT_UNITS_RESTORED
    }
};

export const researchOpened = () => {
    return {
        type: RESEARCH_OPENED
    }
};

export const researchClosed = () => {
    return {
        type: RESEARCH_CLOSED
    }
};

export const assaultUnitsRestore = (unitsRestore) => {
    return {
        type: ASSAULT_UNITS_RESTORE,
        unitsRestore
    }
};

export const upgradesLoaded = (upgrades) => {
    return {
        type: UPGRADES_LOADED,
        upgrades
    }
};

export const resetState = () => {
    return {
        type: RESET_STATE
    }
};

export const battleSecPassed = () => {
    return {
        type: BATTLE_SEC_PASSED
    }
};

export const trainingStarted = () => {
    return {
        type: TRAINING_STARTED
    }
};

export const trainingFinished = () => {
    return {
        type: TRAINING_FINISHED
    }
};

export const battlePrepare = () => {
    return {
        type: BATTLE_PREPARE
    }
};

export const battleStart = () => {
    return {
        type: BATTLE_START
    }
};

export const battleFinished = () => {
    return {
        type: BATTLE_FINISHED
    }
};

export const levelFetch = () => {
    return {
        type: LEVEL_FETCH
    }
};

export const levelLoaded = (level) => {
    return {
        type: LEVEL_LOADED,
        level
    }
};

export const playerFetch = () => {
    return {
        type: PLAYER_FETCH
    }
};

export const playerLoaded = (player) => {
    return {
        type: PLAYER_LOADED,
        player
    }
};

export const playerReloading = () => {
    return {
        type: PLAYER_RELOADING
    }
};

export const reloadTickPassed =() => {
    return {
        type: RELOAD_TICK_PASSED
    }
};

export const playerReloaded = () => {
    return {
        type: PLAYER_RELOADED
    }
};

export const assaultAttack = (damage) => {
    return {
        type: ASSAULT_ATTACK,
        damage
    }
};

export const playerAttack = (damage) => {
    return {
        type: PLAYER_ATTACK,
        damage
    }
};

export const castleFetch = () => {
    return {
        type: CASTLE_FETCH
    }
};

export const upPlayerLevel = () => {
    return {
        type: PLAYER_UP_LEVEL
    }
};

export const castleLoaded = (castle) => {
    return {
        type: CASTLE_LOADED,
        castle
    }
};

export const castleDamaged = (damage, source) => {
    return {
        type: CASTLE_DAMAGED,
        damage,
        source
    }
};

export const castleCaptured = () => {
    return {
        type: CASTLE_CAPTURED
    }
};

export const castleRestore = (restoreHP) => {
    return {
        type: CASTLE_RESTORE,
        restoreHP
    }
};

export const castleRestored = () => {
    return {
        type: CASTLE_RESTORED
    }
};

export const castleAssaultRebuff = () => {
    return {
        type: CASTLE_ASSAULT_REBUFF
    }
};

export const assaultStarted = () => {
    return {
        type: ASSAULT_STARTED
    }
};

export const assaultSecPassed = () => {
    return {
        type: ASSAULT_SEC_PASSED
    }
};

export const assaultFinished = () => {
    return {
        type: ASSAULT_FINISHED
    }
};

export const rewardLoaded = (reward) => {
    return {
        type: REWARD_LOADED,
        reward
    }
};