import * as React from 'react';

import './style.css';
import _ from "lodash";

const Player = (
    { infoRef,
        level,
        playerDamage,
        playerCriticalChance,
        playerUnits,
        playerUnitDamage
    }) => (
    <div className={'player'}>
        <div ref={infoRef} className={'playerInfo'}>
            <div>Player lvl: {level}</div>
            <div>Player dmg: {playerDamage}</div>
            <div>Player critical chance: {playerCriticalChance}%</div>
            <div>Player units: {playerUnits} ({_.round(playerUnits * playerUnitDamage)} DPS)</div>
        </div>
    </div>
);

export default Player;