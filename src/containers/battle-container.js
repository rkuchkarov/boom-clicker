import React, {Component, useState} from 'react';
import { connect } from 'react-redux';
import Fullscreen from "react-full-screen";
import { bindActionCreators } from "redux";
import * as selectors from "../selectors/selectors";
import Battle from "../components/battle";
import Reward from "../components/battle/reward";
import {
    assaultStarted,
    battlePrepare,
    battleStart,
    playerAttack, researchClosed,
    researchOpened,
    trainingFinished,
    upgradeBuy
} from "../actions";
import Research from "../components/battle/research";
import style from './style.module.css';

class BattleContainer extends Component {
    constructor(props) {
        super(props);
        props.battlePrepare();
        this.state = { isFullScreen: false};
    }

    onToggleFullScreen = () => {
        const {isFullScreen} = this.state;
        this.setState({isFullScreen: !isFullScreen});
    };

    render() {
        const {
            isAssault,
            isReloading,
            isResearch,
            isCastleCaptured,
            isBattleFinished,
            isTraining,
            playerUnits,
            playerFullUnits,
            level,
            assaultStarted,
            playerDamage,
            playerCriticalChance,
            reloadTime,
            reloadTimeRemaining,
            playerUnitDamage,
            castleFullHealth,
            castleHealth,
            battlePrepare,
            battleStart,
            playerAttack,
            trainingFinished,
            reward,
            totalPlayerDamage,
            totalUnitsDamage,
            battleTime,
            researchOpened,
            researchClosed,
            playerGold,
            playerUpgrades,
            upgrades,
            upgradeBuy
        } = this.props;

        const isRewardScreen = isBattleFinished && !isResearch;
        const {isFullScreen} = this.state;

        return(
            <Fullscreen enabled={isFullScreen}>
                <div className={style.fullscreen} onClick={this.onToggleFullScreen}/>
                { isRewardScreen &&
                <Reward
                    totalPlayerDamage={totalPlayerDamage}
                    totalUnitsDamage={totalUnitsDamage}
                    reward={reward} battleTime={battleTime}
                    battlePrepare={battlePrepare}
                    researchOpened={researchOpened}
                /> }
                { isResearch &&
                    <Research
                        gold={playerGold}
                        playerUpgrades={playerUpgrades}
                        upgrades={upgrades}
                        upgradeBuy={upgradeBuy}
                        battlePrepare={battlePrepare}
                    />
                }
                <Battle
                    battleTime={battleTime}
                    playerUnits={playerUnits}
                    isAssault={isAssault}
                    isReloading={isReloading}
                    isTraining={isTraining}
                    isCastleCaptured={isCastleCaptured}
                    level={level}
                    assaultStarted={assaultStarted}
                    playerAttack={playerAttack}
                    playerDamage={playerDamage}
                    playerCriticalChance={playerCriticalChance}
                    reloadTime={reloadTime}
                    reloadTimeRemaining={reloadTimeRemaining}
                    playerUnitDamage={playerUnitDamage}
                    castleFullHealth={castleFullHealth}
                    castleHealth={castleHealth}
                    playerFullUnits={playerFullUnits}
                    battleStart={battleStart}
                    trainingFinished={trainingFinished}
                />
            </Fullscreen>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isCastleCaptured: selectors.getIsCastleCaptured(state),
        isResearch: selectors.getIsResearch(state),
        isReloading: selectors.getIsPlayerReloading(state),
        isAssault: selectors.getIsAssault(state),
        isBattleFinished: selectors.getIsBattleFinished(state),
        isTraining: selectors.getIsTraining(state),
        level: selectors.getLevel(state),
        castleHealth: selectors.getCastleHealth(state),
        castleFullHealth: selectors.getCastleFullHealth(state),
        playerDamage: selectors.getPlayerDamage(state),
        playerUnits: selectors.getPlayerUnits(state),
        playerFullUnits: selectors.getFullAssaultUnits(state),
        playerCriticalChance: selectors.getPlayerCriticalChance(state),
        playerUnitDamage: selectors.getPlayerUnitDamage(state),
        reloadTime: selectors.getPlayerReloadTime(state),
        reloadTimeRemaining: selectors.getPlayerReloadTimeRemaining(state),
        reward: selectors.getReward(state),
        battleTime: selectors.getBattleTime(state),
        totalPlayerDamage: selectors.getTotalPlayerDamage(state),
        totalUnitsDamage: selectors.getTotalUnitsDamage(state),
        playerGold: selectors.getPlayerGold(state),
        playerUpgrades: selectors.getPlayerUpgrades(state),
        upgrades: selectors.getUpgrades(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        assaultStarted,
        battlePrepare,
        playerAttack,
        battleStart,
        trainingFinished,
        researchOpened,
        researchClosed,
        upgradeBuy
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleContainer);