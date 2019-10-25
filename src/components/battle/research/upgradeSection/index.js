import React from 'react';
import './style.css';
import _ from "lodash";
import { UPGRADE_PRICES, UPDADE_TRANSLATES, UPDADE_SYMBOLS } from "../../../../services/boom-clicker-service";


const UpgradeSection = ({ gold, name, upgrades, upgradeBuy, currentUpgrade }) => {
    const onClickHandler = () => {
        upgradeBuy(name)
    };

    const currentLevel = currentUpgrade ? currentUpgrade.level : 0;
    let price = null;
    if ((currentLevel + 1) <= 5) {
        price = UPGRADE_PRICES[currentLevel + 1];
    }

    const isBuyAvailable = gold >= price;
    const getFormattedValue = (value) => {
        const { prefix, postfix } = _.get(UPDADE_SYMBOLS, name, {prefix: '', posfix: ''});
        return `${prefix}${value}${postfix}`;
    };


    return (
        <div className={'upgradeWrapper'}>
            <div className={'upgradeName'}>{ _.get(UPDADE_TRANSLATES, name, name) }</div>
            { _.map(upgrades, (value, level) => (
                <div className={`levelDescription ${Number(level) === currentLevel ? '': 'notCurrent'}`}>
                    {getFormattedValue(value)}
                </div>))
            }
            { currentLevel < 5 &&
                <div
                    className={`buyButton${isBuyAvailable ? '': ' buyNotAvailable'}`}
                    onClick={isBuyAvailable ? onClickHandler : undefined }>Купить ({price})</div>
            }
        </div>
    );
};

export default UpgradeSection;