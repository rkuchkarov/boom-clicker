const initialState = {
    level: 1,
    castle: {
        health: 100,
        fullHealth: 100,
        captured: false,
        restore: 0,
        assaultDefense: 0
    },
    player: {
        level: 1,
        damage: 10,
        reloadTime: 10,
        reloadTimeRemaining: 0,
        reloading: false,
        assaultUnits: 10,
        assaultUnitDamage: 0.5,
        assaultTimeRemaining: 0,
        assaultTime: 5,
        assault: false
    }
};

const reducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {

        case 'LEVEL_LOADED':
            return {
                ...state,
                level: action.level
            };

        case 'PLAYER_LOADED':
                    return {
                        ...state,
                        player: { ...action.player, reloading: false, reloadTimeRemaining: 0, assaultTimeRemaining: 0}
                    };

        case 'RELOAD_SEC_PASSED':
            const newReloadTimeRemaining = state.player.reloadTimeRemaining -= 1;
            return {
                ...state,
                player: {
                    ...state.player,
                    reloadTimeRemaining: newReloadTimeRemaining
                }
            };

        case 'CASTLE_LOADED':
            return {
                ...state,
                castle: {
                    ...action.castle,
                    captured: false
                }
            };

        case 'CASTLE_DAMAGED':
            const newHealth = state.castle.health - action.damage;
            return {
                ...state,
                castle: {
                    ...state.castle,
                    health: newHealth,
                    fullHealth: state.castle.fullHealth,
                    captured: newHealth <= 0
                }
            };

        case 'CASTLE_RESTORED':
            let castleHealth = state.castle.health;
            if (castleHealth !== state.castle.fullHealth) {
                castleHealth = state.castle.health + state.castle.restore;
            }

            return {
                ...state,
                castle: {
                    ...state.castle,
                    health: castleHealth > state.castle.fullHealth ? state.castle.fullHealth : castleHealth
                }
            };

        case 'CASTLE_ASSAULT_REBUFF':
            return {
                ...state,
                player: {
                    ...state.player,
                    assaultUnits: state.player.assaultUnits - state.castle.assaultDefense
                }
            };

        case 'ASSAULT_SEC_PASSED':
            const newAssaultTimeRemaining = state.player.assaultTimeRemaining -= 1;
            console.log(newAssaultTimeRemaining);
            return {
                ...state,
                player: {
                    ...state.player,
                    assaultTimeRemaining: newAssaultTimeRemaining
                }
            };

        case 'PLAYER_RELOADING':
            return {
                ...state,
                player: { ...state.player, reloading: true, reloadTimeRemaining: state.player.reloadTime }
            };

        case 'ASSAULT_STARTED':
            return {
                ...state,
                player: { ...state.player, assault: true, assaultTimeRemaining: state.player.assaultTime }
            };

        case 'ASSAULT_FINISHED':
            return {
                ...state,
                player: { ...state.player, assault: false }
            };

        case 'PLAYER_RELOADED':
            return {
                ...state,
                player: { ...state.player, reloading: false }
            };

        case 'CASTLE_CAPTURED':
            return { ...state, level: state.level += 1 };

        default:
            return state;
    }
};

export default reducer;