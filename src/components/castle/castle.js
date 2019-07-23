import React, { Component } from 'react';
import castle from './castle.png';
import './style.css';
import ProgressBar from "../progress-bar/progress-bar";
import { connect } from 'react-redux';

import { withBoomClickerService } from '../hoc';
import { castleLoaded, castleDamaged } from "../../actions";
import { bindActionCreators } from "redux";

class Castle extends Component {
    constructor(props) {
        super(props);
        this.takeDamage = this.takeDamage.bind(this);
    }

    componentDidMount() {
        const { boomClickerService } = this.props;
        const castle = boomClickerService.getCastle();

        this.props.castleLoaded(castle);
    }

    takeDamage() {
        this.props.castleDamaged(this.props.playerDamage);
    }

    render() {
        const { level, fullHealth, health, captured } = this.props;
        const healthPercent = Math.floor((health / fullHealth) * 100);
        return (
            <div className={"castle"}>
                <h1>Hello, i'm a castle!</h1>
                <span>Castle lvl: {level}</span>
                <span>Health: {health}/{fullHealth}</span>
                <img
                    onClick={!captured ? this.takeDamage: undefined}
                    className={"castle-img " + (captured ? "captured" : "")}
                    src={castle}
                    alt="Castle" />
                <ProgressBar
                    percentage={healthPercent}
                    className={"health-bar"} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.castle.level,
        fullHealth: state.castle.fullHealth,
        health: state.castle.health,
        captured: state.castle.captured,
        playerDamage: state.player.damage
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        castleLoaded,
        castleDamaged
    }, dispatch);
};

export default withBoomClickerService()(
    connect(mapStateToProps, mapDispatchToProps)(Castle)
);