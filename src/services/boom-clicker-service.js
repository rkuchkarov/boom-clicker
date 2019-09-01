const LEVELS = {
    1: {
        health: 50,
        fullHealth: 50,
        restore: 0,
        assaultDefense: 0
    },
    2: {
        health: 75,
        fullHealth: 75,
        restore: 1,
        assaultDefense: 1
    },
    3: {
        health: 100,
        fullHealth: 100,
        restore: 0,
        assaultDefense: 0
    },
    4: {
        health: 125,
        fullHealth: 125,
        restore: 0,
        assaultDefense: 0
    },
    5: {
        health: 200,
        fullHealth: 200,
        restore: 0,
        assaultDefense: 0
    }
};

export default class BoomClickerService {

    getLevel() {
        return 2
    }

    getCastle(level) {
        return LEVELS[level];
    };

    getPlayer() {
        return {
            level: 2,
            damage: 12,
            reloadTime: 2,
            assaultTime: 5,
            assaultUnits: 10,
            assaultUnitDamage: 0.5
        }
    }
}