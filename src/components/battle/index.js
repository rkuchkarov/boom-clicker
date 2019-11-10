import React, {useRef} from "react";
import TrainingPopup from "./trainingPopup";
import AssaultHud from "./assault";
import HealthHud from "./health";
import AttackButton from "./attackButton";
import style from './style.module.css';

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
        reloadTimeRemaining,
        playerUnits,
        playerFullUnits,
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
            </div>
        </div>
    );
};

export default Battle;