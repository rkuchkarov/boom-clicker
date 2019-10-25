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
            {/*<div>Player lvl: {level}</div>*/}
            <div>Урон от пушки: {playerDamage}</div>
            <div>Шанс крита: {playerCriticalChance}%</div>
            <div>Количество юнитов: {playerUnits} ({_.round(playerUnits * playerUnitDamage, 1)} DPS)</div>
        </div>
    </div>
);

export default Player;