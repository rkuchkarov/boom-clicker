import { takeLatest, call, put, fork, select } from 'redux-saga/effects'
import * as A from '../actions';
import * as service from "../services/boom-clicker-service";
import { getLevel } from "../selectors/selectors";
import battleSaga from "./battle";

function* fetchLevel() {
    try {
        const level = yield call(service.getLevel);
        yield put(A.levelLoaded(level));
    } catch (e) {
        console.log('error', e);
    }
}

function* fetchCastle() {
    try {
        const level = yield select(getLevel);
        const castle = yield call(service.getCastle, level);
        yield put(A.castleLoaded(castle));
    } catch (e) {
        console.log('error', e);
    }
}

function* fetchPlayer() {
    try {
        const player = yield call(service.getPlayer);
        yield put(A.playerLoaded(player));
    } catch (e) {
        console.log('error', e);
    }
}

function* watchBattlePage() {
    yield takeLatest(A.LEVEL_FETCH, fetchLevel);
    yield takeLatest(A.PLAYER_FETCH, fetchPlayer);
    yield takeLatest(A.CASTLE_FETCH, fetchCastle);
}

export default function* battlePageSaga() {
    yield fork(watchBattlePage);
    yield fork(battleSaga);
    yield takeLatest(A.BATTLE_START, battlePageFlow);
}

function* battlePageFlow() {
    yield put(A.resetState());
    yield put(A.levelFetch());
    yield put(A.castleFetch());
    yield put(A.playerFetch());
}