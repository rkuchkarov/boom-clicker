import React from 'react';
import _ from 'lodash';
import Overlay from "../../elements/overlay";
import UpgradeSection from "./upgradeSection";
import style from "./style.module.css";
import SelectedUpgrade from "./selectedUpgrade";
import UpgradesList from "./upgradesList";

const Research = ({ gold, upgrades, playerUpgrades, upgradeBuy, battlePrepare }) => {
    return (
        <>
            <Overlay type={'hard'} />
            <div className={style.wrapper}>
                <div className={style.block}>
                    <div className={style.title}>Улучшения и исследования</div>
                    <SelectedUpgrade />
                    <UpgradesList upgrades={upgrades} playerUpgrades={playerUpgrades} gold={gold} />
                    <div className={style.nextLevel} onClick={battlePrepare} />
                </div>
            </div>
        </>
    );
};

export default Research;