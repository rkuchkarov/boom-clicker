import React, { useState } from 'react';

import './style.css';

const Button = React.forwardRef(({ isDisabled, label, percent = 0, handleClick }, ref) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    return (
        <div
            style={{ backgroundImage: `linear-gradient(0deg, transparent ${percent}%, #cfdcec 0%)`}}
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`circle${isDisabled ? ' disabled' : ''}`}
            onClick={isDisabled ? undefined : handleClick} >
            <div
                className={`circleCenter${isDisabled ? ' disabled' : ''} ${isHovered ? ' circleHovered' : ''}`}
            >
                <div className='label'>{label}</div>
             </div>
        </div>
    );
});

export default Button;