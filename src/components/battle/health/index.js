import * as React from 'react';
import style from "./style.module.css";

import healthWrapper from './healthWrapper.png';
import { getPercentage } from "../../../utils/percent";
const HEALTH_WIDTH = 236;

const HealthHud = ({ health, fullHealth }) => {
    const healthPercent = getPercentage(health, fullHealth);
    const healthWidth = (HEALTH_WIDTH / 100) * healthPercent;

    return(
        <div className={style.wrapper}>
            <div className={style.healthBar} style={{ width: `${healthWidth}px` }} />
            <img className={style.healthWrapper} src={healthWrapper} />
        </div>
    );
};
export default HealthHud;