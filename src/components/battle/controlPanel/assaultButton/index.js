import React from 'react';
import './style.css';
import Button from "../../../button";

const AssaultButton = ({ isAssault, playerUnits, isCastleCaptured, assaultStarted }) => {
    let buttonText = (isAssault && !isCastleCaptured) ? `${playerUnits} units` : "";
    buttonText = playerUnits >= 1 ? buttonText : "No units";
    const assaultDisabled = playerUnits <= 0 || isAssault || isCastleCaptured;

    return (
        <Button
            handleClick={assaultDisabled ? undefined : assaultStarted}
            label={buttonText ? buttonText : "Assault!"}
            isDisabled={assaultDisabled}
        />
    );
};

export default AssaultButton;