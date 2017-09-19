import ActionTypes from './actionTypes';
import { takeEvery, call, put } from 'redux-saga/effects';
function* countSaga() {
    try {
        const res = yield call(fetch, 'https://way.jd.com/jisuapi/driverexamQuery?type=c1&subject=1&pagesize=20&pagenum=1&sort=normal&appkey=f05e9fdfdf7647ca4d08051ef942626c');
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
