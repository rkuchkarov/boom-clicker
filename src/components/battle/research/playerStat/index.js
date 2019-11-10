import React from 'react';
import goldIcon from './gold.png';
import style from "./style.module.css";

const PlayerStat = (
    {   gold,
        playerDamage,
        reloadTime,
        playerCriticalChance,
        playerCriticalDamage,
        playerFullUnits,
        playerUnitDamage,
        playerUnitsRestore
    }) => {

    return (
        <div className={`${style.wrapper}`}>
            <div>
                {gold}
                <img className={style.gold} src={goldIcon} alt={'gold'} />
            </div>
            <div>Урон {playerDamage}</div>
            <div>Перезар. {reloadTime / 1000}s</div>
            <div>Крт шанс {playerCriticalChance}%</div>
            <div>Крт урон {playerCriticalDamage}%</div>
            <div>Юниты {playerFullUnits}</div>
            <div>Урн юнитов {playerUnitDamage}</div>
            <div>Восст. юнитов {playerUnitsRestore}</div>
        </div>
    );
};

export default PlayerStat;