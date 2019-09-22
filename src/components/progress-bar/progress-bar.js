import React, { Component } from 'react';
import './style.css'
import {getPercentage} from "../../utils/percent";

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: 100,
            value: props.value,
            maxValue: props.maxValue
        };
    }

    componentDidUpdate(oldProps) {
        const oldValue = oldProps.value;
        const oldMaxValue = oldProps.maxValue;
        const {value, maxValue} = this.props;
        const oldPercentage = getPercentage(oldValue, oldMaxValue);
        const newPercentage = getPercentage(value, maxValue);
        if(oldPercentage !== newPercentage) {
            this.setState({ percentage: newPercentage < 0 ? 0 : newPercentage})
        }
    }

    render() {
        const { className, type, value, maxValue, prefix, postfix } = this.props;
        const { percentage } = this.state;
        let barValue = percentage;
        if (type === 'value') {
            barValue = value;
        } else if (type === 'valueWithMax') {
            barValue = `${value}/${maxValue}`;
        }
        return (
            <div  className={`progress-bar ${ className }` }>
                <div className="filler" style={{ width: `${percentage}%` }}/>
                <span className={"bar-value"}>{prefix}{barValue}{postfix}</span>
            </div>
        )
    }
}