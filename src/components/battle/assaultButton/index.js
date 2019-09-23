import React from 'react';
import './style.css';

const AssaultButton = ({ isAssault, playerUnits, isCastleCaptured, assaultStarted }) => {
    let buttonText = (isAssault && !isCastleCaptured) ? `${playerUnits} units` : "";
    buttonText = playerUnits >= 1 ? buttonText : "No units";
    const assaultDisabled = playerUnits <= 0 || isAssault || isCastleCaptured;

    return (
        <div className="assaultButton" onClick={assaultDisabled ? undefined : assaultStarted}>
            <div className={`round-button-circle${assaultDisabled ? " disabled" : ""}`}>
                <div className={`assaultButton assaultLink`}>{buttonText ? buttonText : "Assault!"}</div>
            </div>
        </div>
    );
};

export default AssaultButton;