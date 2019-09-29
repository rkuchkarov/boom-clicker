import React, { useRef } from "react";
import InfoBlock from "./infoBlock";
import Castle from "./castle";
import ControlPanel from "./controlPanel";
import Player from "./player";
import TrainingPopup from "./trainingPopup";

import './style.css';

const Battle = (
    {
        isReloading,
        isCastleCaptured,
        isTraining,
        isAssault,
        level,
        castleHealth,
        castleFullHealth,
        playerAttack,
        reloadTime,
        playerDamage,
        playerCriticalChance,
        reloadTimeRemaining,
        playerUnits,
        playerUnitDamage,
        battleTime,
        assaultStarted,
        battleStart,
        trainingFinished
    }) => {
    const onEndTraining = () => {
        trainingFinished();
        battleStart()
    };

    const playerInfoRef = useRef(null);
    const castleRef = useRef(null);
    const attackRef = useRef(null);
    const assaultRef = useRef(null);

    return (
        <>
            {isTraining &&
                <TrainingPopup
                    playerInfoRef={playerInfoRef}
                    castleRef={castleRef}
                    attackRef={attackRef}
                    assaultRef={assaultRef}
                    level={level}
                    onClose={onEndTraining}
                />}
            <div className={"wrapper"}>
                <div className={"timer"}>{battleTime}</div>
                <InfoBlock level={level} />
                <Castle
                    ref={castleRef}
                    isPlayerReloading={isReloading}
                    isCastleCaptured={isCastleCaptured}
                    health={castleHealth}
                    fullHealth={castleFullHealth}
                />
                <Player
                    level={level}
                    playerDamage={playerDamage}
                    playerCriticalChance={playerCriticalChance}
                    playerUnits={playerUnits}
                    playerUnitDamage={playerUnitDamage}
                    infoRef={playerInfoRef}
                />
                <ControlPanel
                    isReloading={isReloading}
                    onPlayerAttack={playerAttack}
                    isCastleCaptured={isCastleCaptured}
                    isAssault={isAssault}
                    reloadTime={reloadTime}
                    reloadTimeRemaining={reloadTimeRemaining}
                    playerUnits={playerUnits}
                    assaultStarted={assaultStarted}
                    attackRef={attackRef}
                    assaultRef={assaultRef}
                />
            </div>
        </>
    );
};

export default Battle;