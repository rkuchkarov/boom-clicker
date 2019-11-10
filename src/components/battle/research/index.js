import React from 'react';
import _ from 'lodash';
import Overlay from "../../elements/overlay";
import style from "./style.module.css";
import SelectedUpgrade from "./selectedUpgrade";
import UpgradesList from "./upgradesList";
import {UPGRADE_PRICES} from "../../../services/boom-clicker-service";
import PlayerStat from "./playerStat";

const Research = (
    {
        gold,
        playerDamage,
        playerCriticalChance,
        reloadTime,
        playerFullUnits,
        playerUnitDamage,
        playerCriticalDamage,
        playerUnitsRestore,
        upgrades,
        playerUpgrades,
        upgradeBuy,
        battlePrepare,
        selectedUpgrade,
        upgradeSelect
    }) => {
    const handleUpgrade = () => {
        upgradeBuy(selectedUpgrade);
    };

    const currentUpgrade = _.findLast(playerUpgrades, (upgrade) => upgrade.name === selectedUpgrade);
    const currentLevel = currentUpgrade ? currentUpgrade.level : 0;
    let price = null;
    if ((currentLevel + 1) <= 5) {
        price = UPGRADE_PRICES[currentLevel + 1];
    }

    const isBuyAvailable = _.isNull(selectedUpgrade) ? false : currentLevel > 4 ? false : gold >= price;

    return (
        <>
            <Overlay type={'hard'} />
            <div className={style.wrapper}>
                <div className={style.block}>
                    <div className={style.title}>Улучшения и исследования</div>
                    <SelectedUpgrade isHidden={_.isNull(selectedUpgrade)} selectedUpgrade={selectedUpgrade} playerUpgrades={playerUpgrades} />
                    <UpgradesList selectedUpgrade={selectedUpgrade} upgradeSelect={upgradeSelect} upgrades={upgrades} playerUpgrades={playerUpgrades} gold={gold} />
                    <PlayerStat
                        gold={gold}
                        playerDamage={playerDamage}
                        playerCriticalChance={playerCriticalChance}
                        reloadTime={reloadTime}
                        playerFullUnits={playerFullUnits}
                        playerUnitDamage={playerUnitDamage}
                        playerCriticalDamage={playerCriticalDamage}
                        playerUnitsRestore={playerUnitsRestore}
                    />
                    <div className={style.nextLevel} onClick={battlePrepare} />
                    <div className={style.gerb} />
                    { isBuyAvailable &&<div className={style.buy} onClick={handleUpgrade}/> }
                </div>
            </div>
        </>
    );
};

export default Research;