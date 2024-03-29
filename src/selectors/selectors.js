import _ from 'lodash';
import {formatTime} from "../utils/time";

export const getLevel = (state) => _.get(state, 'level');
export const getUpgrades = (state) => _.get(state, 'upgrades');
export const getBattleTime = (state) => formatTime(_.get(state, 'battleTime'));
export const getIsTraining = (state) => _.get(state, 'isTraining');
export const getIsResearch = (state) => _.get(state, 'isResearchScreen');
export const getIsBattleFinished = (state) => _.get(state, 'isBattleFinished');
export const getIsCastleCaptured = (state) => _.get(state, 'isCastleCaptured');
export const getCastleHealth = (state) => _.round(_.get(state, 'castle.health'), 1);
export const getCastleRestore = (state) => _.round(_.get(state, 'castle.restore'), 1);
export const getCastleFullHealth = (state) => _.round(_.get(state, 'castle.fullHealth'), 1);
export const getPlayerGold = (state) => _.round(_.get(state, 'player.gold'), 0);
export const getPlayerUpgrades = (state) => _.get(state, 'player.upgrades');
export const getPlayerDamage = (state) => _.round(_.get(state, 'player.damage'), 1);
export const getPlayerCriticalChance = (state) => _.round(_.get(state, 'player.criticalChance'), 1);
export const getPlayerCriticalDamage = (state) => _.round(_.get(state, 'player.criticalDamage'), 1);
export const getPlayerUnitDamage = (state) => _.round(_.get(state, 'player.assaultUnitDamage'), 1);
export const getPlayerUnits = (state) => Math.floor(_.get(state, 'player.assaultUnits'));
export const getAssaultUnits = (state) => _.round(_.get(state, 'player.assaultUnits'), 1);
export const getFullAssaultUnits = (state) => _.round(_.get(state, 'player.fullAssaultUnits'));
export const getPlayerReloadTime = (state) => _.get(state, 'player.reloadTime');
export const getPlayerReloadTimeRemaining = (state) => _.get(state, 'player.reloadTimeRemaining');
export const getIsPlayerReloading = (state) => _.get(state, 'player.isReloading');
export const getIsAssault = (state) => _.get(state, 'player.isAssault');
export const getReward = (state) => _.get(state, 'reward');
export const getSelectedUpgrade = (state) => _.get(state, 'selectedUpgrade');
export const getTotalPlayerDamage = (state) => _.round(_.get(state, 'totalPlayerDamage'), 1);
export const getTotalUnitsDamage = (state) => _.round(_.get(state, 'totalUnitsDamage'), 1);
export const getAssaultUnitsRestore = (state) => _.round(_.get(state, 'player.assaultUnitsRestore'), 1);