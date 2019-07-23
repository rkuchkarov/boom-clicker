const initialState = {
    castle: {
        level: 1,
        health: 100,
        fullHealth: 100,
        captured: false
    },
    player: {
        level: 1,
        damage: 10
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'PLAYER_LOADED':
            return {
                ...state,
                player: action.player
            };


        case 'CASTLE_LOADED':
            return {
                ...state,
                castle: action.castle
            };

        case 'CASTLE_DAMAGED':
            const newHealth = state.castle.health - action.damage;
            return {
                ...state,
                castle: {
                    level: state.castle.level,
                    health: newHealth,
                    fullHealth: state.castle.fullHealth,
                    captured: newHealth <= 0
                }
            };
        default:
            return state;
    }
};

export default reducer;