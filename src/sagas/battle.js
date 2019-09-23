import { delay, cancel, take, takeLatest, call, put, fork, select, takeEvery } from 'redux-saga/effects'
import _ from 'lodash';
import * as A from '../actions';
import * as selectors from "../selectors/selectors";
import {increaseNumByPercentage} from "../utils/percent";

const ONE_SECOND = 1000;

function* tickTask(tickSaga) {
    while (true) {
        yield call(tickSaga);
        yield delay(ONE_SECOND)
    }
}

function* timerTask(startAction, endAction, tickSaga) {
    while(true) {
        yield take(startAction);
        const task = yield fork(tickTask, tickSaga);
        yield take(endAction);
        yield cancel(task)
    }
}

function* assaultTick() {
    const playerUnitDamage = yield select(selectors.getPlayerUnitDamage);
    const playerUnits = yield select(selectors.getPlayerUnits);
    yield put(A.castleDamaged(playerUnitDamage * playerUnits));
    yield put(A.castleAssaultRebuff());
    yield put(A.assaultSecPassed());
    const captured = yield select(selectors.getIsCastleCaptured);
    const newPlayerUnits = yield select(selectors.getPlayerUnits);
    if (newPlayerUnits === 0 || captured) {
        yield put(A.assaultFinished());
    }
}

function* reloadGunTick() {
    const captured = yield select(selectors.getIsCastleCaptured);
    const reloadTimeRemaining = yield select(selectors.getPlayerReloadTimeRemaining);

    yield put(A.reloadSecPassed());
    if (reloadTimeRemaining <= 1 || captured) {
        yield put(A.playerReloaded());
    }
}

function* restoreCastleTick() {
    const castleRestore = yield select(selectors.getCastleRestore);
    yield put(A.castleRestore(castleRestore));
    const castleHealth = yield select(selectors.getCastleHealth);
    const castleFullHealth = yield select(selectors.getCastleFullHealth);
    if (castleHealth === castleFullHealth) {
        yield put(A.castleRestored());
    }
}

function* castleDamageSaga() {
    const castleHealth = yield select(selectors.getCastleHealth);
    if (castleHealth <= 0) {
        yield put(A.castleCaptured());
    }
}

function* playerAttackSaga() {
    const playerDamage = yield select(selectors.getPlayerDamage);
    const playerCriticalChance = yield select(selectors.getPlayerCriticalChance);
    const playerCriticalDamage = yield select(selectors.getPlayerCriticalDamage);

    const isCriticalHit = _.random(1, 100) <= playerCriticalChance;
    const finalDamage = isCriticalHit ? increaseNumByPercentage(playerDamage, playerCriticalDamage) : playerDamage;
    yield put(A.castleDamaged(finalDamage));
    yield put(A.playerReloading());
}

function* assaultSaga() {
    yield fork(timerTask, A.ASSAULT_STARTED, A.ASSAULT_FINISHED, assaultTick);
}

function* reloadSaga() {
    yield fork(timerTask, A.PLAYER_RELOADING, A.PLAYER_RELOADED, reloadGunTick);
}

function* restoreCastleSaga() {
    while(true) {
        yield take(A.CASTLE_DAMAGED);
        const task = yield fork(tickTask, restoreCastleTick);
        yield take([A.CASTLE_CAPTURED, A.CASTLE_RESTORED]);
        yield cancel(task)
    }
}

export default function* battleSaga() {
    yield fork(assaultSaga);
    yield fork(reloadSaga);
    yield fork(restoreCastleSaga);
    yield takeLatest(A.CASTLE_DAMAGED, castleDamageSaga);
    yield takeEvery(A.PLAYER_ATTACK, playerAttackSaga)
}
