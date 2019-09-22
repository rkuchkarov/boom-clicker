import React from 'react';
import './style.css';

const AssaultButton = ({ assault, playerUnits, captured, assaultStarted }) => {
    let buttonText = (assault && !captured) ? `${playerUnits} units` : "";
    buttonText = playerUnits >= 1 ? buttonText : "No units";
    const assaultDisabled = playerUnits <= 0 || assault || captured;

    return (
        <div className="assaultButton" onClick={assaultDisabled ? undefined : assaultStarted}>
            <div className={`round-button-circle${assaultDisabled ? " disabled" : ""}`}>
                <div className={`assaultButton assaultLink`}>{buttonText ? buttonText : "Assault!"}</div>
            </div>
        </div>
    );
};

export default AssaultButton;