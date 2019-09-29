import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as selectors from "../selectors/selectors";
import Battle from "../components/battle";
import Reward from "../components/battle/reward";
import { assaultStarted, battlePrepare, battleStart, playerAttack, trainingFinished } from "../actions";

class BattleContainer extends Component {
    constructor(props) {
        super(props);
        props.battlePrepare();
    }

    render() {
        const {
            isAssault,
            isReloading,
            isCastleCaptured,
            isBattleFinished,
            isTraining,
            playerUnits,
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
            battleTime
        } = this.props;

        return(
            <>
                { isBattleFinished &&
                <Reward
                    totalPlayerDamage={totalPlayerDamage}
                    totalUnitsDamage={totalUnitsDamage}
                    reward={reward} battleTime={battleTime}
                    battlePrepare={battlePrepare}
                /> }
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
                    battleStart={battleStart}
                    trainingFinished={trainingFinished}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isCastleCaptured: selectors.getIsCastleCaptured(state),
        isReloading: selectors.getIsPlayerReloading(state),
        isAssault: selectors.getIsAssault(state),
        isBattleFinished: selectors.getIsBattleFinished(state),
        isTraining: selectors.getIsTraining(state),
        level: selectors.getLevel(state),
        castleHealth: selectors.getCastleHealth(state),
        castleFullHealth: selectors.getCastleFullHealth(state),
        playerDamage: selectors.getPlayerDamage(state),
        playerUnits: selectors.getPlayerUnits(state),
        playerCriticalChance: selectors.getPlayerCriticalChance(state),
        playerUnitDamage: selectors.getPlayerUnitDamage(state),
        reloadTime: selectors.getPlayerReloadTime(state),
        reloadTimeRemaining: selectors.getPlayerReloadTimeRemaining(state),
        reward: selectors.getReward(state),
        battleTime: selectors.getBattleTime(state),
        totalPlayerDamage: selectors.getTotalPlayerDamage(state),
        totalUnitsDamage: selectors.getTotalUnitsDamage(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        assaultStarted,
        battlePrepare,
        playerAttack,
        battleStart,
        trainingFinished
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleContainer);