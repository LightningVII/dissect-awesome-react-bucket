import ActionTypes from './actionTypes';
import { takeEvery, call, put } from 'redux-saga/effects';
function* countSaga() {
    try {
        const res = yield call(fetch, '/api/city');
        const data = yield res.json();
        yield put({
            type: ActionTypes.FETCH_COUNT_SUCCEEDED,
            payload: {
                data
            }
        });
    } catch (error) {
        yield put({ type: ActionTypes.FETCH_COUNT_FAILED, error });
    }
}

export function* watchCountFetch() {
    yield takeEvery(ActionTypes.FETCH_COUNT_REQUESTED, countSaga);
}
