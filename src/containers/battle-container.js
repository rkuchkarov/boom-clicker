import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as selectors from "../selectors/selectors";
import Battle from "../components/battle";
import Reward from "../components/reward";
import { assaultStarted, battlePrepare, playerAttack } from "../actions";

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
            isBattle,
            playerUnits,
            level,
            assaultStarted,
            playerDamage,
            reloadTime,
            reloadTimeRemaining,
            playerUnitDamage,
            castleFullHealth,
            castleHealth,
            battlePrepare,
            playerAttack,
            reward
        } = this.props;

        return(
            <>
                { !isBattle && <Reward reward={reward} battlePrepare={battlePrepare}/> }
                <Battle
                    playerUnits={playerUnits}
                    isAssault={isAssault}
                    isReloading={isReloading}
                    isCastleCaptured={isCastleCaptured}
                    level={level}
                    assaultStarted={assaultStarted}
                    playerAttack={playerAttack}
                    playerDamage={playerDamage}
                    reloadTime={reloadTime}
                    reloadTimeRemaining={reloadTimeRemaining}
                    playerUnitDamage={playerUnitDamage}
                    castleFullHealth={castleFullHealth}
                    castleHealth={castleHealth}
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
        isBattle: selectors.getIsBattle(state),
        level: selectors.getLevel(state),
        castleHealth: selectors.getCastleHealth(state),
        castleFullHealth: selectors.getCastleFullHealth(state),
        playerDamage: selectors.getPlayerDamage(state),
        playerUnits: selectors.getPlayerUnits(state),
        playerUnitDamage: selectors.getPlayerUnitDamage(state),
        reloadTime: selectors.getPlayerReloadTime(state),
        reloadTimeRemaining: selectors.getPlayerReloadTimeRemaining(state),
        reward: selectors.getReward(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        assaultStarted,
        battlePrepare,
        playerAttack
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleContainer);