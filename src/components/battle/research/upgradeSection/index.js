import React from 'react';
import style from "./style.module.css";
import reloadTimeReduce from './reloadTimeReduce.png';
import { UPGRADE_PRICES, UPDADE_TRANSLATES, UPDADE_SYMBOLS } from "../../../../services/boom-clicker-service";

const UpgradeSection = ({ gold, name, upgrades, upgradeBuy, currentUpgrade }) => {

    const currentLevel = currentUpgrade ? currentUpgrade.level : 0;
    let price = null;
    if ((currentLevel + 1) <= 5) {
        price = UPGRADE_PRICES[currentLevel + 1];
    }

    const isBuyAvailable = gold >= price;


    return (
        <div className={style.wrapper}>
            <div style={{ backgroundImage: `url(${reloadTimeReduce})` }} className={style.icon}/>
            <div className={style.value}>{currentLevel}/5</div>
        </div>
    );
};

export default UpgradeSection;