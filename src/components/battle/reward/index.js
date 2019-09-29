import React from 'react';
import NextLevelButton from "../../battle/nextLevelButton";
import Overlay from "../../elements/overlay";
import './style.css';

const Reward = ({ reward: { gold, science }, battleTime, totalPlayerDamage, totalUnitsDamage, battlePrepare }) => (
    <>
        <Overlay type={'hard'} />
        <div className={"rewardWrapper"}>
            <div className={"rewardBlock"}>
                <div className={"rewardTitle"}>Congratulations!</div>
                <div className={"rewardDescription"}>You earned:
                    <div className={"rewardItem"}>{gold} gold</div>
                    <div className={"rewardItem"}>{science} science</div>
                </div>
                <div className={"rewardSummary"}>
                    <div className={"rewardPlayerDamage"}>Total player damage: {totalPlayerDamage}</div>
                    <div className={"rewardAssaultDamage"}>Total assault damage: {totalUnitsDamage}</div>
                    <div className={"rewardTime"}>Time spend: {battleTime}</div>
                </div>
                <NextLevelButton handleClick={battlePrepare} />
            </div>
        </div>
    </>
);

export default Reward;