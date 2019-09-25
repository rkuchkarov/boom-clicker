import React from 'react';
import Button from "../../../button";

import './style.css';

const ShotButton = ({ isReloading, isCastleCaptured, handleClick }) => {
    const isDisabled = isReloading || isCastleCaptured;

    return (
        <Button isDisabled={isDisabled} label={'Attack'} handleClick={isDisabled ? undefined : handleClick} />
    );
};

export default ShotButton;