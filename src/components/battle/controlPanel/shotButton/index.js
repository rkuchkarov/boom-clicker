import React from 'react';
import Button from "../../../elements/button";
import {getPercentage} from "../../../../utils/percent";

const ShotButton = ({ isReloading, isCastleCaptured, reloadTimeRemaining, reloadTime, buttonRef, handleClick }) => {
    const isDisabled = isReloading || isCastleCaptured;
    const reloadPercent = 100 - getPercentage(reloadTimeRemaining, reloadTime);
    const label = isReloading ? 'Reloading...' : 'Attack';

    return (
        <>
            <Button percent={reloadPercent} ref={buttonRef} isDisabled={isDisabled} label={label} handleClick={isDisabled ? undefined : handleClick} />
        </>
    );
};

export default ShotButton;