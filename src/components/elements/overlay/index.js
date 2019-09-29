import React from 'react';
import './style.css';

const Overlay = ({ type }) => (
    <div className={`overlay${type === 'hard' ? ' hard' : ' light' }`}/>
);

export default Overlay;