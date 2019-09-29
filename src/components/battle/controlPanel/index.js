import React from 'react';
import ShotButton from "./shotButton";
import AssaultButton from "./assaultButton";

import './style.css';

const ControlPanel = (
    { isReloading,
        isAssault,
        isCastleCaptured,
        playerUnits,
        reloadTime,
        reloadTimeRemaining,
        onPlayerAttack,
        attackRef,
        assaultRef,
        assaultStarted
    }) => (
        <div className='controlPanel'>
            <ShotButton
                reloadTime={reloadTime}
                reloadTimeRemaining={reloadTimeRemaining}
                buttonRef={attackRef}
                isReloading={isReloading}
                isCastleCaptured={isCastleCaptured}
                handleClick={onPlayerAttack} />
            <AssaultButton
                isCastleCaptured={isCastleCaptured}
                buttonRef={assaultRef}
                isAssault={isAssault}
                playerUnits={playerUnits}
                assaultStarted={assaultStarted}
            />
        </div>
    )
;

export default ControlPanel;