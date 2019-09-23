import * as React from 'react';
import ProgressBar from "../../progress-bar/progress-bar";
import castle from "./castle.png";

import './style.css';

const Castle = ({ isPlayerReloading, isCastleCaptured, handleClick, health, fullHealth }) => (
    <div className={"castle"}>
        <img
            onClick={isPlayerReloading || isCastleCaptured ? undefined : handleClick}
            className={"castle-img" + (isPlayerReloading ? " reloading" : "") + (isCastleCaptured ? " captured" : "")}
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
);

export default Castle;