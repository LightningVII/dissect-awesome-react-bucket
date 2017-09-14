import ActionTypes from './actionTypes';
import { handleActions, combineActions } from 'redux-actions';

const defaultState = {
    count: 0,
    result: []
};

export default handleActions(
    {
        [combineActions(ActionTypes.INCREMENT, ActionTypes.DECREMENT)](
            state: any,
            { payload: { caption, count } }: any
        ) {
            return { ...state, [caption]: (state[caption] || 0) + count };
        },
        [ActionTypes.FETCH_COUNT_SUCCEEDED](state: any, action: any) {
            const { data: { result = [] } } = action.payload;
            return { ...state, result: result };
        }
    },
    defaultState
);
