import React, { useState } from 'react';
import _ from "lodash";
import { getPercentage } from "../../../utils/percent";

import attackButton from './attackButton.png';
import attackButtonHover from './attackButtonHover.png';
import style from "./style.module.css";

const AttackButton = ({ isCastleCaptured, isReloading, reloadTime, reloadTimeRemaining, onAttack }) =>  {
    const [isHovered, setIsHovered] = useState(false);
    const hoverOn = () => {
        setIsHovered(true);
    };
    const hoverOff = () => {
        setIsHovered(false);
    };
    const attackButtonImage = isReloading ? attackButton : isHovered ? attackButtonHover : attackButton;
    const timeForUI = (reloadTimeRemaining / 1000).toFixed(1);
    const reloadPercent = 100 - getPercentage(reloadTimeRemaining, reloadTime);
    const attackHeight = _.round((80 / 100) * reloadPercent);

    return (
        <div className={style.wrapper} >
            {isReloading && <div className={style.attackButtonDisabled} />}
            <div
                className={style.attackButton}
                onTouchStart={hoverOn}
                onMouseDown={hoverOn}
                onMouseUp={hoverOff}
                onTouchEnd={hoverOff}
                onClick={ isReloading || isCastleCaptured ? undefined : onAttack}
                style={{ height: `${attackHeight}px`, backgroundImage: `url(${attackButtonImage})` }}
            />
            {isReloading && <div className={style.time}>{timeForUI} сек</div>}
        </div>
    );
};
export default AttackButton;