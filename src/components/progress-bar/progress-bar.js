import React, { Component } from 'react';
import './style.css'

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: props.percentage
        };
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props;
        if(oldProps.percentage !== newProps.percentage) {
            this.setState({ percentage: newProps.percentage < 0 ? 0 : newProps.percentage})
        }
    }

    render() {
        const {percentage} = this.state;
        return (
            <div className="progress-bar">
                <div className="filler" style={{ width: `${percentage}%` }}/>
                <span className={"bar-value"}>{percentage}%</span>
            </div>
        )
    }
}