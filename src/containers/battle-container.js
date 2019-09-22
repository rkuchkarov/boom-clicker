import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Player from "../components/player/player";
import Castle from "../components/castle/castle";
import InfoBlock from "../components/infoBlock";
import AssaultButton from "../components/assaultButton";
import * as selectors from "../selectors/selectors";
import { castleDamaged, playerReloading, assaultStarted, battleStart } from "../actions";
import NextLevelButton from "../components/nextLevelButton";

class BattleContainer extends Component {
    constructor(props) {
        super(props);
        this.hitCastle = this.hitCastle.bind(this);
        props.battleStart();
    }

    hitCastle() {
        const { playerDamage, castleDamaged, playerReloading } = this.props;
        castleDamaged(playerDamage);
        playerReloading();
    }

    render() {
        const {
            assault,
            captured,
            playerUnits,
            level,
            assaultStarted,
            playerDamage,
            reloadTime,
            reloading,
            reloadTimeRemaining,
            playerUnitDamage,
            castleFullHealth,
            castleHealth,
            battleStart
        } = this.props;

        return(
            <div>
                <InfoBlock level={level} />
                <Castle
                    isPlayerReloading={reloading}
                    captured={captured}
                    health={castleHealth}
                    fullHealth={castleFullHealth}
                    handleClick={this.hitCastle}
                />
                <Player
                    level={level}
                    reloadTime={reloadTime}
                    reloading={reloading}
                    playerDamage={playerDamage}
                    reloadTimeRemaining={reloadTimeRemaining}
                    playerUnits={playerUnits}
                    playerUnitDamage={playerUnitDamage}
                />
                {captured ? (
                    <NextLevelButton handleClick={battleStart} />
                ): (
                    <AssaultButton
                        captured={captured}
                        assault={assault}
                        playerUnits={playerUnits}
                        assaultStarted={assaultStarted}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        captured: selectors.getIsCastleCaptured(state),
        level: selectors.getLevel(state),
        castleHealth: selectors.getCastleHealth(state),
        castleFullHealth: selectors.getCastleFullHealth(state),
        playerDamage: selectors.getPlayerDamage(state),
        playerUnits: selectors.getPlayerUnits(state),
        playerUnitDamage: selectors.getPlayerUnitDamage(state),
        reloadTime: selectors.getPlayerReloadTime(state),
        reloading: selectors.getIsPlayerReloading(state),
        assault: selectors.getIsAssault(state),
        reloadTimeRemaining: selectors.getPlayerReloadTimeRemaining(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        castleDamaged,
        playerReloading,
        assaultStarted,
        battleStart
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleContainer);