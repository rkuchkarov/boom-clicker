import * as React from 'react';
import ProgressBar from "../../progress-bar/progress-bar";

import './style.css';

const Player = ({ level, playerDamage, isReloading, reloadTime, reloadTimeRemaining, playerUnits, playerUnitDamage}) => (
    <div className={'player'}>
        { isReloading ? (
            <ProgressBar
                value={reloadTimeRemaining}
                maxValue={reloadTime}
                type="value"
                className={'reloadBar'}
                prefix={"Reloading: "}
                postfix={""}
            />
        ) : (
            <div className={'playerInfo'}>
                <div>Player lvl: {level}</div>
                <div>Player dmg: {playerDamage}</div>
                <div>Player units: {playerUnits} ({playerUnits * playerUnitDamage} DPS)</div>
            </div>
        )}
    </div>
);

export default Player;