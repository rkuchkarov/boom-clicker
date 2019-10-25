import React from 'react';
import _ from 'lodash';
import Overlay from "../../elements/overlay";
import UpgradeSection from "./upgradeSection";
import './style.css';

const Research = ({ gold, upgrades, playerUpgrades, upgradeBuy, researchClosed }) => {
    const upgradesMapped = _.map(upgrades, (value, prop) => ({ name: prop, upgrades: value }));
    return (
        <>
            <Overlay type={'hard'} />
            <div className={"researchWrapper"}>
                <div className={"researchBlock"}>
                    <div className={'closeResearch'} onClick={researchClosed}>Закрыть</div>
                    <div className={"researchCurrentGold"}>Золото: <b>{gold}</b></div>
                    <div className={'upgradesList'}>
                        { upgradesMapped.map(({ name, upgrades }) => {
                            const currentUpgrade = _.findLast(playerUpgrades, (upgrade) => upgrade.name === name);
                            return (<UpgradeSection gold={gold} name={name} upgrades={upgrades} upgradeBuy={upgradeBuy} currentUpgrade={currentUpgrade} />)
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Research;