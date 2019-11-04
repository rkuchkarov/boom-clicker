import * as React from 'react';
import ProgressBar from "../../elements/progress-bar/progress-bar";
import castle from "./castle.png";

import './style.css';

const Castle = React.forwardRef(({ isPlayerReloading, isCastleCaptured, health, fullHealth }, ref) => (
    <div ref={ref} className={"castle"}>
        <ProgressBar
            value={health}
            maxValue={fullHealth}
            type="valueWithMax"
            className={"health-bar"}
            prefix={""}
            postfix={" HP"}
        />
    </div>
));
export default Castle;