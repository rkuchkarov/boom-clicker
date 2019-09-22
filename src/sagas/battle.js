import { delay, cancel, take, takeLatest, call, put, fork, select } from 'redux-saga/effects'
import * as A from '../actions';
import * as selectors from "../selectors/selectors";

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
    yield put(A.castleRestore());
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
}
