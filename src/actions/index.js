export const RESET_STATE = 'RESET_STATE';
export const BATTLE_PREPARE = 'BATTLE_PREPARE';
export const BATTLE_START = 'BATTLE_START';
export const BATTLE_END = 'BATTLE_END';
export const LEVEL_FETCH = 'LEVEL_FETCH';
export const LEVEL_LOADED = 'LEVEL_LOADED';
export const PLAYER_FETCH = 'PLAYER_FETCH';
export const PLAYER_LOADED = 'PLAYER_LOADED';
export const PLAYER_ATTACK = 'PLAYER_ATTACK';
export const PLAYER_RELOADING = 'PLAYER_RELOADING';
export const RELOAD_SEC_PASSED = 'RELOAD_SEC_PASSED';
export const PLAYER_RELOADED = 'PLAYER_RELOADED';
export const CASTLE_FETCH = 'CASTLE_FETCH';
export const CASTLE_LOADED = 'CASTLE_LOADED';
export const CASTLE_DAMAGED = 'CASTLE_DAMAGED';
export const CASTLE_CAPTURED = 'CASTLE_CAPTURED';
export const CASTLE_RESTORE = 'CASTLE_RESTORE';
export const CASTLE_RESTORED = 'CASTLE_RESTORED';
export const CASTLE_ASSAULT_REBUFF = 'CASTLE_ASSAULT_REBUFF';
export const ASSAULT_STARTED = 'ASSAULT_STARTED';
export const ASSAULT_SEC_PASSED = 'ASSAULT_SEC_PASSED';
export const ASSAULT_FINISHED = 'ASSAULT_FINISHED';
export const REWARD_LOADED = 'REWARD_LOADED';

export const resetState = () => {
    return {
        type: RESET_STATE
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

export const battleEnd = () => {
    return {
        type: BATTLE_END
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

export const reloadSecPassed =() => {
    return {
        type: RELOAD_SEC_PASSED
    }
};

export const playerReloaded = () => {
    return {
        type: PLAYER_RELOADED
    }
};

export const playerAttack = () => {
    return {
        type: PLAYER_ATTACK
    }
};

export const castleFetch = () => {
    return {
        type: CASTLE_FETCH
    }
};

export const castleLoaded = (castle) => {
    return {
        type: CASTLE_LOADED,
        castle
    }
};

export const castleDamaged = (damage) => {
    return {
        type: CASTLE_DAMAGED,
        damage
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