import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { withBoomClickerService } from '../hoc';
import { playerLoaded } from "../../actions";
import ProgressBar from "../progress-bar/progress-bar";

class Player extends Component {
    componentDidMount() {
        const { boomClickerService } = this.props;
        const player = boomClickerService.getPlayer();

        this.props.playerLoaded(player);
    }

    render() {
        const {
            level,
            damage,
            reloading,
            reloadTime,
            reloadTimeRemaining,
            units,
            unitDamage
        } = this.props;
        return (
            <div className="player">
                {reloading? (
                    <ProgressBar
                        value={reloadTimeRemaining}
                        maxValue={reloadTime}
                        type="value"
                        className={"reload-bar"}
                        prefix={"Reloading: "}
                        postfix={""}
                    />
                ) : (
                    <div className="player-info">
                        <div>Player lvl: {level}</div>
                        <div>Player dmg: {damage}</div>
                        <div>Player units: {units} ({units * unitDamage} DPS)</div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ player }) => {
    return {
        level: player.level,
        damage: player.damage,
        reloading: player.reloading,
        reloadTime: player.reloadTime,
        reloadTimeRemaining: player.reloadTimeRemaining,
        units: player.assaultUnits,
        unitDamage: player.assaultUnitDamage
    };
};

const mapDispatchToProps = {
    playerLoaded
};

export default withBoomClickerService()(
    connect(mapStateToProps, mapDispatchToProps)(Player)
);