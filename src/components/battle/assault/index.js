import React, { useState } from 'react';
import { getPercentage } from "../../../utils/percent";

import assaultBar from './assaultBar.png';
import assaultAttack from './assaultAttack.png';
import assaultAttacking from './assaultAttacking.png';
import assaultAttackHover from './assaultAttackHover.png';
import style from "./style.module.css";
const UNITS_HEIGHT = 217;

const AssaultHud = ({ isCastleCaptured, isAssault, playerUnits, playerFullUnits, onAssault }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverOn = () => {
        setIsHovered(true);
    };
    const hoverOff = () => {
        setIsHovered(false);
    };

    const aliveUnitsPercent = getPercentage(playerUnits, playerFullUnits);
    const unitsBarHeight = (UNITS_HEIGHT / 100) * aliveUnitsPercent;

    const assaultButtonImage = isAssault ? assaultAttacking : isHovered ? assaultAttackHover : assaultAttack;
    const assaultDisabled = playerUnits <= 0 || isAssault || isCastleCaptured;

    return (
        <div className={style.wrapper}>
            <div className={isAssault ? style.assaultAttackingBar : style.assaultRestoreBar} style={{ height: `${unitsBarHeight}px` }} />
            <img alt={'assaultBar'} className={style.assaultBar} src={assaultBar} />
            <img
                alt={'assaultButton'}
                onTouchStart={hoverOn}
                onMouseDown={hoverOn}
                onMouseUp={hoverOff}
                onTouchEnd={hoverOff}
                onClick={assaultDisabled ? undefined : onAssault}
                className={style.assaultAttack}
                src={assaultButtonImage}
            />
            <span className={`${style.count}${isAssault ? ` ${style.attack}` : ''}`}>{`${playerUnits}/${playerFullUnits}`}</span>
        </div>
    );
};
export default AssaultHud;