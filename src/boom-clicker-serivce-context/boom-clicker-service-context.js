import React from 'react';

const {
    Provider: BoomClickerServiceProvider,
    Consumer: BoomClickerServiceConsumer
} = React.createContext();

export {
    BoomClickerServiceConsumer,
    BoomClickerServiceProvider
}