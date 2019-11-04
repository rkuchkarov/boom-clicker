import React, { useState } from 'react';
import style from "./style.module.css";

import attackButton from './attackButton.png';
import attackButtonHover from './attackButtonHover.png';
import attackButtonDisabled from './attackButtonDisabled.png';

const AttackButton = ({ isReloading, onAttack }) =>  {
    const [isHovered, setIsHovered] = useState(false);
    const hoverOn = () => {
        setIsHovered(true);
    };
    const hoverOff = () => {
        setIsHovered(false);
    };
    const attackButtonImage = isReloading ? attackButtonDisabled : isHovered ? attackButtonHover : attackButton;

    return (
        <div
            className={style.wrapper}
            onTouchStart={hoverOn}
            onMouseDown={hoverOn}
            onMouseUp={hoverOff}
            onTouchEnd={hoverOff}
            onClick={ isReloading ? undefined : onAttack}
        >
            <img className={style.attackButton} src={attackButtonImage} />
        </div>
    );
};
export default AttackButton;