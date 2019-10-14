import { delay, cancel, take, call, fork } from 'redux-saga/effects'
export const TICK_TIME_MS = 100;
export const TICK_TIME_SEC = 1000;

export function* tickTask(tickSaga, tickTimeMs, delayBefore = false) {
    while (true) {
        if (delayBefore) {
            yield delay(tickTimeMs);
            yield call(tickSaga);
        } else {
            yield call(tickSaga);
            yield delay(tickTimeMs);
        }
    }
}

export function* timerTask(startAction, endAction, tickSaga, tickTimeMs = TICK_TIME_SEC) {
    while(true) {
        yield take(startAction);
        const task = yield fork(tickTask, tickSaga, tickTimeMs);
        yield take(endAction);
        yield cancel(task)
    }
}
