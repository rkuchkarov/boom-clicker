import React from 'react';
import _ from 'lodash';
import Popup from "./Popup";

const TrainingPopup = ({playerInfoRef, castleRef, attackRef, assaultRef, level, onClose}) => {
    const trainingScreens = {
        1: [{
                title: 'Добро пожаловать, полководец!',
                description: 'Это твой первый уровень. И т.к. ты полководец, тебе нужно захватывать вражеские замки. ' +
                    'Давай я тебе расскажу, чё тут кого.',
                buttonText: 'Далее'
            },
            {
                title: 'Замок',
                description: 'У вражеского замка есть показатель целостности замковых укреплений, ' +
                    'который уменьшается после выстрела игрока. При снижении показателя целостности ' +
                    'замковых стен до нуля замок считается захваченным.',
                ref: castleRef,
                buttonText: 'Далее'
            },
            {
                title: 'Пушка',
                description: 'У тебя есть пушка. После выстрела ей нужно время, чтобы перезарядиться.',
                ref: attackRef,
                buttonText: 'Далее'
            },
            {
                title: 'Штурмовики',
                description: 'Так же у тебя есть войско. Оно жрёт, срет, а ещё очень быстро уменьшает ' +
                    'показатель целостности замковых укреплений.',
                ref: assaultRef,
                buttonText: 'Далее'
            },
            {
                title: 'Поехали?',
                description: 'А теперь давай, покажи, на что ты способен, щенок!',
                buttonText: 'В бой!'
            }],
        2: [{
            title: 'Твой второй уровень!',
            description: 'Ну как? Навалял? Или навалил? Сейчас ещё кое что расскажу, слушай внимательно.',
            buttonText: 'Далее'
        },
            {
                title: 'Про штурмовиков',
                description: 'Когда твой штурм-отряд атакует замок, замок атакует твой штурм-отряд. ' +
                    'Обрати внимание, как будет снижаться количество штурмовиков во время штурма.',
                ref: playerInfoRef,
                buttonText: 'Далее'
            },
            {
                title: 'Пушка (12 > 10)',
                description: 'А ещё мощь твоей пушки немного выросла!',
                ref: playerInfoRef,
                buttonText: 'В бой!'
            }],
        3: [{
                title: 'Неплохо, неплохо',
                description: 'Твоя пушка стала быстрее перезаряжаться. Попробуй.',
                buttonText: 'Попробовать'
        }],
        4: [{
                title: 'Очередной замок',
                description: 'А у этого замка есть защитники. Они восстанавливают стены. ' +
                    'Так что запасись провизией, чтобы хватило на осаду.',
                buttonText: 'В бой!'
        }],
        5: [{
                title: 'Босс',
                description: 'Ты только посмотри на эту громадину! Да это же пиздец! Придется постараться.',
                buttonText: 'Страшно'
        },
            {
                title: 'Криты!!1!',
                description: 'Пока ты спал (а враг качался) мы научили твою пушку критовать. ' +
                    'И в этом раунде мы сделаем тебе повышенный шанс крита.',
                ref: playerInfoRef,
                buttonText: 'В бой!'
            }]
    };
    const screens = _.get(trainingScreens, level);

    return (
        <>
            { screens && <Popup screens={screens} onClose={onClose}/>}
        </>);
};

export default TrainingPopup;