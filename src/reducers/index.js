import * as A from '../actions';

const initialState = {
    level: 1,
    castle: {
        health: 100,
        fullHealth: 100,
        isCaptured: false,
        restore: 0,
        assaultDefense: 0
    },
    player: {
        level: 1,
        criticalChance: 0,
        criticalDamage: 200,
        damage: 10,
        reloadTime: 10,
        reloadTimeRemaining: 0,
        isReloading: false,
        assaultUnits: 10,
        assaultUnitDamage: 0.5,
        isAssault: false
    },
    reward: {
        gold: 0,
        science: 0
    },
    isBattle: false,
    isPlayerLoading: false,
    isCastleFetching: false,
    isLevelFetching: false
};

const reducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {

        case A.RESET_STATE:
            return initialState;

        case A.LEVEL_FETCH:
            return {
                ...state,
                isLevelFetching: true
            };

        case A.LEVEL_LOADED:
            return {
                ...state,
                level: action.level,
                isLevelFetching: false
            };

        case A.PLAYER_FETCH:
            return {
                ...state,
                isPlayerLoading: true
            };

        case A.PLAYER_LOADED:
            return {
                ...state,
                isPlayerLoading: false,
                player: {
                    ...action.player,
                    isReloading: false,
                    reloadTimeRemaining: 0
                }
            };

        case A.RELOAD_SEC_PASSED:
            return {
                ...state,
                player: {
                    ...state.player,
                    reloadTimeRemaining: state.player.reloadTimeRemaining - 1
                }
            };

        case A.CASTLE_FETCH:
            return {
                ...state,
                isCastleFetching: true
            };

        case A.CASTLE_LOADED:
            return {
                ...state,
                castle: {
                    ...action.castle,
                    isCaptured: false
                },
                isCastleFetching: false
            };

        case A.CASTLE_DAMAGED:
            const newHealth = state.castle.health - action.damage;

            return {
                ...state,
                castle: {
                    ...state.castle,
                    health: newHealth > 0 ? newHealth : 0
                }
            };

        case A.CASTLE_RESTORE:
            return {
                ...state,
                castle: {
                    ...state.castle,
                    health: state.castle.health + action.restoreHP
                }
            };

        case A.CASTLE_ASSAULT_REBUFF:
            return {
                ...state,
                player: {
                    ...state.player,
                    assaultUnits: state.player.assaultUnits - state.castle.assaultDefense
                }
            };

        case A.PLAYER_RELOADING:
            return {
                ...state,
                player: {
                    ...state.player,
                    isReloading: true,
                    reloadTimeRemaining: state.player.reloadTime
                }
            };

        case A.ASSAULT_STARTED:
            return {
                ...state,
                player: { ...state.player, isAssault: true }
            };

        case A.ASSAULT_FINISHED:
            return {
                ...state,
                player: { ...state.player, isAssault: false }
            };

        case A.PLAYER_RELOADED:
            return {
                ...state,
                player: { ...state.player, isReloading: false }
            };

        case A.CASTLE_CAPTURED:
            return {
                ...state,
                castle: { ...state.castle, isCaptured: true }
            };

        case A.REWARD_LOADED:
            return {
                ...state,
                reward: action.reward
            };

        case A.BATTLE_START:
            return {
                ...state,
                isBattle: true
            };

        case A.BATTLE_END:
            return {
                ...state,
                isBattle: false
            };

        default:
            return state;
    }
};

export default reducer;