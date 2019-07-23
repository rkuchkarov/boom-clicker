const playerLoaded = (player) => {
    return {
        type: 'PLAYER_LOADED',
        player
    }
};

const castleLoaded = (castle) => {
    return {
        type: 'CASTLE_LOADED',
        castle
    }
};

const castleDamaged = (damage) => {
    return {
        type: 'CASTLE_DAMAGED',
        damage
    }
};

export {
    playerLoaded,
    castleLoaded,
    castleDamaged
};