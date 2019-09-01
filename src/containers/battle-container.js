import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import {
    levelLoaded,
    castleLoaded,
    castleCaptured,
    castleDamaged,
    playerReloaded,
    playerReloading,
    reloadSecPassed, castleRestored, assaultStarted, castleAssaultRebuff, assaultSecPassed, assaultFinished
} from "../actions";
import { withBoomClickerService } from "../components/hoc";
import { bindActionCreators } from "redux";
import Player from "../components/player/player";
import Castle from "../components/castle/castle";

class BattleContainer extends Component {
    constructor(props) {
        super(props);
        const timer = setInterval(() => {
            props.castleRestored();
        }, 1000);
        this.state = {
            restoreCastleTimer: timer,
            assaultTimer: null
        };
        this.hitCastle = this.hitCastle.bind(this);
        this.reloadGun = this.reloadGun.bind(this);
        this.startAssault = this.startAssault.bind(this);
    }

    componentDidMount() {
        const { boomClickerService } = this.props;
        const level = boomClickerService.getLevel();

        this.props.levelLoaded(level);
        const castle = boomClickerService.getCastle(level);

        this.props.castleLoaded(castle);
    }

    componentDidUpdate() {
        const {castleHealth} = this.props;
        if (castleHealth <= 0) {
            clearInterval(this.state.restoreCastleTimer);
        }
    }

    hitCastle() {
        const { playerDamage, castleDamaged } = this.props;
        castleDamaged(playerDamage);
        this.reloadGun();
    }

    reloadGun() {
        const { playerReloading, reloadSecPassed } = this.props;
        playerReloading();
        const timer = setInterval(() => {
            const { reloadTimeRemaining, playerReloaded, captured } = this.props;
            reloadSecPassed();
            if (reloadTimeRemaining <= 1 || captured) {
                clearInterval(timer);
                playerReloaded();
            }
        }, 1000)
    }

    startAssault() {
        const {assaultStarted, playerUnitDamage, castleDamaged, assaultSecPassed, castleAssaultRebuff } = this.props;
        assaultStarted();
        const timer = setInterval(() => {
            const {assaultTimeRemaining, assaultFinished, playerUnits, captured} = this.props;
            castleDamaged(playerUnitDamage * playerUnits);
            castleAssaultRebuff();
            assaultSecPassed();
            if (assaultTimeRemaining <= 1 || playerUnits <= 0 || captured) {
                clearInterval(timer);
                assaultFinished();
            }
        }, 1000);
        this.setState( {assaultTimer: timer})
    }

    render() {
        const {assault, assaultTimeRemaining, captured, playerUnits, level} = this.props;
        let buttonText = (assault && !captured) ? `${assaultTimeRemaining}` : "";
        buttonText = playerUnits > 1 ? buttonText : "Нет отрядов";
        const assaultDisabled = playerUnits <= 0 || assault || captured;
        return(
            <div>
                <div className={"infoBlock"}>
                    <h1>Hello, i'm a castle!</h1>
                    <h2>Current level {level}</h2>
                </div>
                <Castle handleClick={this.hitCastle} />
                <Player/>
                <div className="assaultButton" onClick={assaultDisabled ? undefined : this.startAssault}>
                    <div className={`round-button-circle${assaultDisabled ? " disabled" : ""}`}>
                        <a href="#" className={`assaultButton assaultLink`}>{buttonText ? buttonText : "Штурм"}</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        captured: state.castle.captured,
        level: state.level,
        castleHealth: state.castle.health,
        playerDamage: state.player.damage,
        playerUnits: state.player.assaultUnits,
        playerUnitDamage: state.player.assaultUnitDamage,
        reloadTime: state.player.reloadTime,
        reloading: state.player.reloading,
        assault: state.player.assault,
        reloadTimeRemaining: state.player.reloadTimeRemaining,
        assaultTimeRemaining: state.player.assaultTimeRemaining
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        levelLoaded,
        castleLoaded,
        castleDamaged,
        castleCaptured,
        playerReloaded,
        reloadSecPassed,
        playerReloading,
        castleRestored,
        assaultStarted,
        castleAssaultRebuff,
        assaultSecPassed,
        assaultFinished
    }, dispatch);
};

export default withBoomClickerService()(
    connect(mapStateToProps, mapDispatchToProps)(BattleContainer)
);