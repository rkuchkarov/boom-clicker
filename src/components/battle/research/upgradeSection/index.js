import React from 'react';
import _ from 'lodash';
import style from "./style.module.css";
import reloadTimeReduce from './reloadTimeReduce.png';
import damageIncrease from './damageIncrease.png';
import assaultUnitDamageIncrease from './assaultUnitDamageIncrease.png';
import criticalChanceIncrease from './criticalChanceIncrease.png';
import criticalDamageIncrease from './criticalDamageIncrease.png';
import fullAssaultUnitsIncrease from './fullAssaultUnitsIncrease.png';
import assaultUnitsRestoreIncrease from './assaultUnitsRestoreIncrease.png';
import { UPGRADE_PRICES } from "../../../../services/boom-clicker-service";

const UPGRADE_ICONS = {
    'damageIncrease': damageIncrease,
    'reloadTimeReduce': reloadTimeReduce,
    'criticalChanceIncrease': criticalChanceIncrease,
    'criticalDamageIncrease': criticalDamageIncrease,
    'assaultUnitDamageIncrease': assaultUnitDamageIncrease,
    'fullAssaultUnitsIncrease': fullAssaultUnitsIncrease,
    'assaultUnitsRestoreIncrease': assaultUnitsRestoreIncrease,
};

const UpgradeSection = ({ gold, name, selectedUpgrade, upgrades, upgradeBuy, upgradeSelect, currentUpgrade }) => {
    const currentLevel = currentUpgrade ? currentUpgrade.level : 0;
    let price = null;
    if ((currentLevel + 1) <= 5) {
        price = UPGRADE_PRICES[currentLevel + 1];
    }

    const isBuyAvailable = gold >= price;
    const isSelected = selectedUpgrade === name;
    const icon = _.get(UPGRADE_ICONS, name, damageIncrease);
    const handleClick = () => {
        upgradeSelect(name);
    };

    return (
        <div className={
            `${style.wrapper} ${isSelected ? ` ${style.selected}` : ''} 
            ${isBuyAvailable ? ` ${style.available}` : ''}
            ${currentLevel > 0 ? ` ${style.buyed}` : ''}
            `
        }
             onClick={handleClick}>
            <img alt={'upgradeIcon'} src={icon} className={style.icon}/>
            <div className={style.value}>{currentLevel}/5</div>
        </div>
    );
};

export default UpgradeSection;