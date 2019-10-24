import React from 'react';
import './style.css';
import _ from "lodash";
import { UPGRADE_PRICES } from "../../../../services/boom-clicker-service";

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

    return (
        <div className={'upgradeWrapper'}>
            <div className={'upgradeName'}>{ name }</div>
            { _.map(upgrades, (value, level) => <div className={`levelDescription ${Number(level) === currentLevel ? '': 'notCurrent'}`}>{value}</div>)
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