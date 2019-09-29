import React from 'react';
import './style.css';
import Button from "../../../elements/button";

const AssaultButton = ({ isAssault ,buttonRef, playerUnits, isCastleCaptured, assaultStarted }) => {
    let buttonText = (isAssault && !isCastleCaptured) ? `${playerUnits} units` : "";
    buttonText = playerUnits >= 1 ? buttonText : "No units";
    const assaultDisabled = playerUnits <= 0 || isAssault || isCastleCaptured;

    return (
        <Button
            ref={buttonRef}
            handleClick={assaultDisabled ? undefined : assaultStarted}
            label={buttonText ? buttonText : "Assault!"}
            isDisabled={assaultDisabled}
        />
    );
};

export default AssaultButton;