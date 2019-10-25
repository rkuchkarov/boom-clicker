import React from 'react';
import NextLevelButton from "../../battle/nextLevelButton";
import Overlay from "../../elements/overlay";
import './style.css';

const Reward = ({ reward: { gold, science }, battleTime, totalPlayerDamage, totalUnitsDamage, battlePrepare, researchOpened }) => (
    <>
        <Overlay type={'hard'} />
        <div className={"rewardWrapper"}>
            <div className={"rewardBlock"}>
                <div className={"rewardTitle"}>Победа!</div>
                <div className={"rewardDescription"}>Получено:
                    { gold && <div className={"rewardItem"}>{gold} золота</div> }
                    { science && <div className={"rewardItem"}>{science} науки</div> }
                </div>
                <div className={"rewardSummary"}>
                    <div className={"rewardPlayerDamage"}>Урона от игрока: {totalPlayerDamage}</div>
                    <div className={"rewardAssaultDamage"}>Урона от юнитов: {totalUnitsDamage}</div>
                    <div className={"rewardTime"}>Времени потрачено: {battleTime}</div>
                </div>
                <div className={'rewardFooter'}>
                    <div className={'openResearch'} onClick={researchOpened}>Исследования</div>
                    <NextLevelButton handleClick={battlePrepare} /></div>
            </div>
        </div>
    </>
);

export default Reward;