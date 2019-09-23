import _ from 'lodash';

export const getLevel = (state) => _.get(state, 'level');
export const getIsBattle = (state) => _.get(state, 'isBattle');
export const getIsCastleCaptured = (state) => _.get(state, 'castle.isCaptured');
export const getCastleHealth = (state) => _.round(_.get(state, 'castle.health'));
export const getCastleRestore = (state) => _.round(_.get(state, 'castle.restore'));
export const getCastleFullHealth = (state) => _.round(_.get(state, 'castle.fullHealth'));
export const getPlayerDamage = (state) => _.round(_.get(state, 'player.damage'));
export const getPlayerCriticalChance = (state) => _.round(_.get(state, 'player.criticalChance'));
export const getPlayerCriticalDamage = (state) => _.round(_.get(state, 'player.criticalDamage'));
export const getPlayerUnitDamage = (state) => _.round(_.get(state, 'player.assaultUnitDamage'));
export const getPlayerUnits = (state) => _.get(state, 'player.assaultUnits');
export const getPlayerReloadTime = (state) => _.get(state, 'player.reloadTime');
export const getPlayerReloadTimeRemaining = (state) => _.get(state, 'player.reloadTimeRemaining');
export const getIsPlayerReloading = (state) => _.get(state, 'player.isReloading');
export const getIsAssault = (state) => _.get(state, 'player.isAssault');
export const getReward = (state) => _.get(state, 'reward');
