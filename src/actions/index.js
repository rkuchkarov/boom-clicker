export const levelLoaded = (level) => {
    return {
        type: 'LEVEL_LOADED',
        level
    }
};


export const playerLoaded = (player) => {
    return {
        type: 'PLAYER_LOADED',
        player
    }
};

export const playerReloading = () => {
    return {
        type: 'PLAYER_RELOADING'
    }
};

export const reloadSecPassed =() => {
    return {
        type: 'RELOAD_SEC_PASSED'
    }
};

export const playerReloaded = () => {
    return {
        type: 'PLAYER_RELOADED'
    }
};

export const castleLoaded = (castle) => {
    return {
        type: 'CASTLE_LOADED',
        castle
    }
};

export const castleDamaged = (damage) => {
    return {
        type: 'CASTLE_DAMAGED',
        damage
    }
};

export const castleCaptured = () => {
    return {
        type: 'CASTLE_CAPTURED'
    }
};

export const castleRestored = () => {
    return {
        type: 'CASTLE_RESTORED'
    }
};

export const castleAssaultRebuff = () => {
    return {
        type: 'CASTLE_ASSAULT_REBUFF'
    }
};

export const assaultStarted = () => {
    return {
        type: 'ASSAULT_STARTED'
    }
};

export const assaultSecPassed = () => {
    return {
        type: 'ASSAULT_SEC_PASSED'
    }
};

export const assaultFinished = () => {
    return {
        type: 'ASSAULT_FINISHED'
    }
};