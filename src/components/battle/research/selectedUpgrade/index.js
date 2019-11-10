import React from 'react';
import _ from 'lodash';
import { UPGRADE_PRICES, UPDADE_TRANSLATES, UPDADE_SYMBOLS, PLAYER_UPGRADES } from "../../../../services/boom-clicker-service";
import style from "./style.module.css";

const SelectedUpgrade = ({ isHidden, selectedUpgrade, playerUpgrades }) => {
    const name = _.get(UPDADE_TRANSLATES, selectedUpgrade, selectedUpgrade);
    const currentUpgrade = _.findLast(playerUpgrades, (upgrade) => upgrade.name === selectedUpgrade);
    const currentLevel = currentUpgrade ? currentUpgrade.level : 0;
    let price = undefined;
    if ((currentLevel + 1) <= 5) {
        price = UPGRADE_PRICES[currentLevel + 1];
    }
    const value = _.get(_.get(PLAYER_UPGRADES, selectedUpgrade, {}), currentLevel + 1, _.get(PLAYER_UPGRADES[selectedUpgrade], 5));
    price = `Стоимость ${price}`;

    const getFormattedValue = () => {
        const { prefix, postfix } = _.get(UPDADE_SYMBOLS, selectedUpgrade, {prefix: '', posfix: ''});
        return `${prefix}${value}${postfix}`;
    };

    return (
        <div className={`${style.wrapper} ${isHidden ? ` ${style.hidden}` : ''}`}>
            <div className={style.name}>{ name }</div>
            <div className={style.value}>{ getFormattedValue() }</div>
            {currentLevel < 5 && <div className={style.price}>{ price }</div>}
        </div>
    );
};

export default SelectedUpgrade;