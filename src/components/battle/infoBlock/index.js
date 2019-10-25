import React from 'react';
import './style.css';

const InfoBlock = ({ level }) => (
    <div className={"infoBlock"}>
        <h1>Hello, i'm a castle!</h1>
        <h2>Текущий уровень {level}</h2>
    </div>
);

export default InfoBlock;