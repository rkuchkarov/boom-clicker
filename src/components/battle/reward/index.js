import React from 'react';
import Overlay from "../../elements/overlay";
import goldIcon from './gold.png';
import style from "./style.module.css";

const Reward = ({ reward: { gold },  battlePrepare, researchOpened }) => (
    <>
        <Overlay type={'light'} />
        <div className={style.wrapper}>
            <div className={style.reward}>+{gold} <img alt={'gold'} className={style.icon} src={goldIcon}/></div>
            <div className={style.science} onClick={researchOpened} />
            <div className={style.victory} />
            <div className={style.nextLevel} onClick={battlePrepare} />
        </div>
    </>
);

export default Reward;