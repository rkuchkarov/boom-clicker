export default class BoomClickerService {

    getCastle() {
        return {
            level: 4,
            health: 125,
            fullHealth: 125,
            captured: false
        }
    };

    getPlayer() {
        return {
            level: 2,
            damage: 12
        }
    }
}