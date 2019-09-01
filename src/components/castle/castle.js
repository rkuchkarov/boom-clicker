import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBoomClickerService } from '../hoc';
import { castleLoaded } from "../../actions";
import { bindActionCreators } from "redux";
import castle from "./castle.png";
import './style.css';
import ProgressBar from "../progress-bar/progress-bar";

class Castle extends Component {

    componentDidMount() {
        const { boomClickerService, level } = this.props;
        const castle = boomClickerService.getCastle(level);

        this.props.castleLoaded(castle);
    }

    render() {
        const { isPlayerReloading, captured, handleClick, health, fullHealth} = this.props;
        return(
            <div className={"castle"}>
                <img
                    onClick={isPlayerReloading || captured ? undefined : handleClick}
                    className={"castle-img" + (isPlayerReloading ? " reloading" : "") + (captured ? " captured" : "")}
                    src={castle}
                    alt="Castle"
                />
                <ProgressBar
                    value={health}
                    maxValue={fullHealth}
                    type="valueWithMax"
                    className={"health-bar"}
                    prefix={""}
                    postfix={" HP"}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fullHealth: state.castle.fullHealth,
        health: state.castle.health,
        captured: state.castle.captured,
        level: state.level,
        isPlayerReloading: state.player.reloading
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        castleLoaded
    }, dispatch);
};

export default withBoomClickerService()(
    connect(mapStateToProps, mapDispatchToProps)(Castle)
);