import React, {useRef, useState} from "react";
import InfoBlock from "./infoBlock";
import Castle from "./castle";
import ControlPanel from "./controlPanel";
import Player from "./player";
import TrainingPopup from "./trainingPopup";

import style from './style.module.css';
import AssaultHud from "./assault";
import HealthHud from "./health";
import AttackButton from "./attackButton";

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
        playerFullUnits,
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
        <div className={style.wrapper}>
            {isTraining &&
                <TrainingPopup
                    playerInfoRef={playerInfoRef}
                    castleRef={castleRef}
                    attackRef={attackRef}
                    assaultRef={assaultRef}
                    level={level}
                    onClose={onEndTraining}
                />}
            <div>
                {/*<div className={style.timer}>{battleTime}</div>*/}
                {!isCastleCaptured && (
                    <>
                        <AssaultHud
                            isAssault={isAssault}
                            playerUnits={playerUnits}
                            playerFullUnits={playerFullUnits}
                            onAssault={assaultStarted}
                            isCastleCaptured={isCastleCaptured}
                        />
                        <HealthHud health={castleHealth} fullHealth={castleFullHealth} />
                        <AttackButton
                            onAttack={playerAttack}
                            isReloading={isReloading}
                            reloadTime={reloadTime}
                            reloadTimeRemaining={reloadTimeRemaining}
                            isCastleCaptured={isCastleCaptured}
                        />
                    </>)}
                {/*<ControlPanel*/}
                {/*    isReloading={isReloading}*/}
                {/*    onPlayerAttack={playerAttack}*/}
                {/*    isCastleCaptured={isCastleCaptured}*/}
                {/*    isAssault={isAssault}*/}
                {/*    reloadTime={reloadTime}*/}
                {/*    reloadTimeRemaining={reloadTimeRemaining}*/}
                {/*    playerUnits={playerUnits}*/}
                {/*    assaultStarted={assaultStarted}*/}
                {/*    attackRef={attackRef}*/}
                {/*    assaultRef={assaultRef}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default Battle;