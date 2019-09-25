import React from 'react';

import './style.css';

const Button = ({ isDisabled, label, handleClick }) => {
    return (
        <div className={`circle${isDisabled ? ' disabled' : ''}`} onClick={isDisabled ? undefined : handleClick}>
            <div className='label'>{label}</div>
        </div>
    );
};

export default Button;