import React, { Component, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';

import { withBoomClickerService } from '../hoc';
import { playerLoaded } from "../../actions";

class Player extends Component {

    componentDidMount() {
        const { boomClickerService } = this.props;
        const player = boomClickerService.getPlayer();

        this.props.playerLoaded(player);
    }

    render() {
        const { level, damage } = this.props;
        return (
            <Fragment>
                <div>Player lvl: {level}</div>
                <div>Player dmg: {damage}</div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ player }) => {
    return {
        level: player.level,
        damage: player.damage
    };
};

const mapDispatchToProps = {
    playerLoaded
};

export default withBoomClickerService()(
    connect(mapStateToProps, mapDispatchToProps)(Player)
);