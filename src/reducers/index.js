import * as A from '../actions';

const initialState = {
    level: 1,
    castle: {
        health: 100,
        fullHealth: 100,
        restore: 0,
        assaultDefense: 0
    },
    player: {
        level: 1,
        criticalChance: 0,
        criticalDamage: 200,
        damage: 10,
        reloadTime: 10000,
        reloadTimeRemaining: 0,
        isReloading: false,
        assaultUnitsRestore: 1,
        assaultUnits: 10,
        fullAssaultUnits: 10,
        assaultUnitDamage: 0.5,
        isAssault: false,
        gold: 0,
        upgrades: []
    },
    reward: {
        gold: 0,
        science: 0
    },
    battleTime: 0,
    isBattleFinished: false,
    isTraining: false,
    isResearchScreen: false,
    isPlayerLoading: false,
    isCastleCaptured: false,
    isCastleFetching: false,
    isLevelFetching: false,
    totalPlayerDamage: 0,
    totalUnitsDamage: 0,
    upgrades: [],
    selectedUpgrade: null
};

const reducer = (state = initialState, action) => {
    // console.log(action, state);
    switch (action.type) {

        case A.RESET_STATE:
            return initialState;

        case A.UPGRADES_LOADED:
            return {
                ...state,
                upgrades: action.upgrades
            };

        case A.RESEARCH_OPENED:
            return {
                ...state,
                isResearchScreen: true
            };

        case A.RESEARCH_CLOSED:
            return {
                ...state,
                isResearchScreen: false
            };

        case A.BATTLE_SEC_PASSED:
            return {
                ...state,
                battleTime: state.battleTime + 1
            };

        case A.UPGRADE_SELECTED:
            return {
                ...state,
                selectedUpgrade: action.name
            };

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

        case A.RELOAD_TICK_PASSED:
            return {
                ...state,
                player: {
                    ...state.player,
                    reloadTimeRemaining: state.player.reloadTimeRemaining - 100
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
                ...action.castle,
                isCastleFetching: false
            };

        case A.CASTLE_DAMAGED:
            const newHealth = state.castle.health - action.damage;
            const newState = {
                ...state,
                castle: {
                    ...state.castle,
                    health: newHealth > 0 ? newHealth : 0
                }
            };
            if (action.source === 'player') {
                return {
                    ...newState,
                    totalPlayerDamage: newState.totalPlayerDamage + action.damage
                };
            }

            return {
                ...newState,
                totalUnitsDamage: newState.totalUnitsDamage + action.damage
            };

        case A.CASTLE_RESTORE:
            const newCastleHealth = state.castle.health  + action.restoreHP;

            return {
                ...state,
                castle: {
                    ...state.castle,
                    health: newCastleHealth > state.castle.fullHealth  ? state.castle.fullHealth : newCastleHealth
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
                isCastleCaptured: true
            };

        case A.REWARD_LOADED:
            return {
                ...state,
                reward: action.reward
            };

        case A.BATTLE_START:
            return {
                ...state,
                isBattleFinished: false
            };

        case A.BATTLE_FINISHED:
            return {
                ...state,
                isBattleFinished: true
            };

        case A.TRAINING_STARTED:
            return {
                ...state,
                isTraining: true
            };

        case A.TRAINING_FINISHED:
            return {
                ...state,
                isTraining: false
            };

        case A.ASSAULT_UNITS_RESTORE:
            const newAssaultUnits = state.player.assaultUnits  + action.unitsRestore;

            return {
                ...state,
                player: {
                    ...state.player,
                    assaultUnits:  newAssaultUnits > state.player.fullAssaultUnits  ? state.player.fullAssaultUnits : newAssaultUnits
                }
            };

        default:
            return state;
    }
};

export default reducer;