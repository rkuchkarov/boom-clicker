import React, { useState } from 'react';
import _ from 'lodash';
import Overlay from "../../../elements/overlay";

import './style.css';

const Popup = ({ screens, onClose}) => {
    const [screenNumber, setScreenNumber] = useState(0);
    const handleClick = () => {
        if (ref && ref.current) {
            ref.current.classList.remove('highlightElement')
        }
        const screensSize = screens.length;
        if (screenNumber < screensSize - 1) {
            setScreenNumber(screenNumber + 1);
        } else {
            onClose();
        }
    };

    const title = _.get(screens[screenNumber], 'title');
    const description = _.get(screens[screenNumber], 'description');
    const buttonText = _.get(screens[screenNumber], 'buttonText');
    const ref = _.get(screens[screenNumber], 'ref');

    if (ref && ref.current) {
        ref.current.classList.add('highlightElement')
    }

    return (
        <>
            <Overlay type={'light'} />
            <div className={"trainingWrapper"}>
                <div className={'text'}>
                    <div className={'title'}>{title}</div>
                    <div className={'description'}>{description}</div>
                </div>
                <div className={'trainingButton'} onClick={handleClick}>{buttonText}</div>
            </div>
        </>
    );
};

export default Popup;