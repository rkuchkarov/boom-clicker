import React from 'react';
import icon from "./icon.png";
import './style.css';

const NextLevelButton = ({ handleClick }) => {
    return (
        <div className="button" onClick={handleClick}>
            <div className="label">
            Next level
            </div>
            <img
                className="arrow"
                src={icon}
                alt="next level"
            />
        </div>
    );
};

export default NextLevelButton;