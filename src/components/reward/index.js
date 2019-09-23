import React from 'react';
import './style.css';
import NextLevelButton from "../battle/nextLevelButton";

const Reward = ({ reward: { gold, science }, battlePrepare }) => (
    <>
        <div className={"rewardBlack"}>
        </div>
        <div className={"rewardWrapper"}>
            <div className={"rewardBlock"}>
                <h1>Congratulations!</h1>
                <h2>You earned:</h2>
                <div>
                    <div className={"rewardItem"}>{gold} gold</div>
                    <div className={"rewardItem"}>{science} science</div>
                </div>
                <NextLevelButton handleClick={battlePrepare} />
            </div>
        </div>
    </>
);

export default Reward;