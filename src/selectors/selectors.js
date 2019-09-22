import _ from 'lodash';

export const getLevel = (state) => _.get(state, 'level');
export const getIsCastleCaptured = (state) => _.get(state, 'castle.isCaptured');
export const getCastleHealth = (state) => _.get(state, 'castle.health');
export const getCastleFullHealth = (state) => _.get(state, 'castle.fullHealth');
export const getPlayerDamage = (state) => _.get(state, 'player.damage');
export const getPlayerUnitDamage = (state) => _.get(state, 'player.assaultUnitDamage');
export const getPlayerUnits = (state) => _.get(state, 'player.assaultUnits');
export const getPlayerReloadTime = (state) => _.get(state, 'player.reloadTime');
export const getPlayerReloadTimeRemaining = (state) => _.get(state, 'player.reloadTimeRemaining');
export const getIsPlayerReloading = (state) => _.get(state, 'player.isReloading');
export const getIsAssault = (state) => _.get(state, 'player.isAssault');
