import React from 'react';
import './style.css';
import _ from "lodash";
import { UPGRADE_PRICES, UPDADE_TRANSLATES, UPDADE_SYMBOLS } from "../../../../services/boom-clicker-service";
import UpgradeSection from "../upgradeSection";


const UpgradesList = ({ upgrades, playerUpgrades, gold }) => {
    const upgradesMapped = _.map(upgrades, (value, prop) => ({ name: prop, upgrades: value }));

    return (
        <div className={'wrapper'}>
            { upgradesMapped.map(({ name, upgrades }) => {
                const currentUpgrade = _.findLast(playerUpgrades, (upgrade) => upgrade.name === name);
                return (<UpgradeSection gold={gold} upgrades={upgrades} currentUpgrade={currentUpgrade} />)
            })}
        </div>
    );
};

export default UpgradesList;