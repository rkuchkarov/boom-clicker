import React from 'react';
import './style.css';
import _ from "lodash";
import UpgradeSection from "../upgradeSection";


const UpgradesList = ({ selectedUpgrade, upgrades, playerUpgrades, gold, upgradeSelect }) => {
    const upgradesMapped = _.map(upgrades, (value, prop) => ({ name: prop, upgrades: value }));

    return (
        <div className={'wrapper'}>
            { upgradesMapped.map(({ name, upgrades }) => {
                const currentUpgrade = _.findLast(playerUpgrades, (upgrade) => upgrade.name === name);
                return (<UpgradeSection key={name} selectedUpgrade={selectedUpgrade} upgradeSelect={upgradeSelect} gold={gold} upgrades={upgrades} name={name} currentUpgrade={currentUpgrade} />)
            })}
        </div>
    );
};

export default UpgradesList;