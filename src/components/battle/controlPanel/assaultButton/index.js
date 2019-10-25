import React from 'react';
import './style.css';
import Button from "../../../elements/button";

const AssaultButton = ({ isAssault ,buttonRef, playerUnits, isCastleCaptured, assaultStarted }) => {
    let buttonText = (isAssault && !isCastleCaptured) ? `${playerUnits} юнитов` : "";
    buttonText = playerUnits >= 1 ? buttonText : "Нет юнитов";
    const assaultDisabled = playerUnits <= 0 || isAssault || isCastleCaptured;

    return (
        <Button
            ref={buttonRef}
            handleClick={assaultDisabled ? undefined : assaultStarted}
            label={buttonText ? buttonText : "Штурм"}
            isDisabled={assaultDisabled}
        />
    );
};

export default AssaultButton;