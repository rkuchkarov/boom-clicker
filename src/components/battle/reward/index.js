import React from 'react';
import Overlay from "../../elements/overlay";
import style from "./style.module.css";

const Reward = ({ reward: { gold, science }, battleTime, totalPlayerDamage, totalUnitsDamage, battlePrepare, researchOpened }) => (
    <>
        <Overlay type={'light'} />
        <div className={style.wrapper}>
            <div className={style.science} onClick={researchOpened} />
            <div className={style.victory} />

                {/*<div className={'rewardFooter'}>*/}
                {/*    <div className={'openResearch'} onClick={researchOpened}>Исследования</div>*/}
                {/*    <NextLevelButton handleClick={battlePrepare} /></div>*/}
            <div className={style.nextLevel} onClick={battlePrepare} />
        </div>
    </>
);

export default Reward;