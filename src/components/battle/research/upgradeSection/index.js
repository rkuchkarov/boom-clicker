import React from 'react';
import './style.css';
import _ from "lodash";

const UpgradeSection = ({ name, upgrades, upgradeBuy, currentUpgrade }) => {
    const onClickHandler = () => {
        upgradeBuy(name)
    };

    const currentLevel = currentUpgrade ? currentUpgrade.level : 0;
    return (
        <div className={'upgradeWrapper'}>
            <div className={'upgradeName'}>{ name }</div>
            { _.map(upgrades, (value, level) => <div className={`levelDescription ${Number(level) === currentLevel ? '': 'notCurrent'}`}>{value}</div>)
            }
            { currentLevel < 5 && <div className={'buyButton'} onClick={onClickHandler}>Купить</div> }
        </div>
    );
};

export default UpgradeSection;