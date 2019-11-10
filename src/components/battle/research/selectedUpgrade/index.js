import React from 'react';
import style from "./style.module.css";

const SelectedUpgrade = ({  }) => {
    const name = 'Увеличение урона пушки';
    const value = 'Урон +2';
    const price = 'Стоимость 170';

    return (
        <div className={style.wrapper}>
            <div className={style.name}>{ name }</div>
            <div className={style.value}>{ value }</div>
            <div className={style.price}>{ price }</div>
        </div>
    );
};

export default SelectedUpgrade;