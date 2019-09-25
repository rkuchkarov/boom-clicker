import React from 'react';
import ShotButton from "./shotButton";
import AssaultButton from "./assaultButton";

import './style.css';

const ControlPanel = (
    { isReloading,
        isAssault,
        isCastleCaptured,
        playerUnits,
        onPlayerAttack,
        assaultStarted
    }) => (
        <div className='controlPanel'>
            <ShotButton isReloading={isReloading} isCastleCaptured={isCastleCaptured} handleClick={onPlayerAttack} />
            <AssaultButton
                isCastleCaptured={isCastleCaptured}
                isAssault={isAssault}
                playerUnits={playerUnits}
                assaultStarted={assaultStarted}
            />
        </div>
    )
;

export default ControlPanel;