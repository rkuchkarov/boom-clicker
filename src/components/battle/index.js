import React from "react";
import InfoBlock from "./infoBlock";
import Castle from "./castle";
import ControlPanel from "./controlPanel";
import Player from "./player";

import './style.css';

const Battle = (
    {
        level,
        isReloading,
        isCastleCaptured,
        castleHealth,
        castleFullHealth,
        playerAttack,
        reloadTime,
        playerDamage,
        reloadTimeRemaining,
        playerUnits,
        playerUnitDamage,
        isAssault,
        assaultStarted
    }) => (
    <div className={"wrapper"}>
        <InfoBlock level={level} />
        <Castle
            isPlayerReloading={isReloading}
            isCastleCaptured={isCastleCaptured}
            health={castleHealth}
            fullHealth={castleFullHealth}
        />
        <Player
            isReloading={isReloading}
            level={level}
            reloadTime={reloadTime}
            playerDamage={playerDamage}
            reloadTimeRemaining={reloadTimeRemaining}
            playerUnits={playerUnits}
            playerUnitDamage={playerUnitDamage}
        />
        <ControlPanel
            isReloading={isReloading}
            onPlayerAttack={playerAttack}
            isCastleCaptured={isCastleCaptured}
            isAssault={isAssault}
            playerUnits={playerUnits}
            assaultStarted={assaultStarted}
        />
    </div>
);

export default Battle;