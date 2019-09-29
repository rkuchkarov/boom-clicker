import React, { useState } from 'react';
import icon from "./icon.png";
import './style.css';

const NextLevelButton = ({ handleClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="nextButton" onClick={handleClick}>
            <div className={`buttonLabel${isHovered ? ' buttonHovered' : ''}`}>
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