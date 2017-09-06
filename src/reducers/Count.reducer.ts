import ActionTypes from '../constants/Count.typs';
import { handleActions, combineActions } from 'redux-actions';

const defaultState = {
    count: 0
}

export default handleActions({
    [combineActions(ActionTypes.INCREMENT, ActionTypes.DECREMENT)](state: any, {payload: { caption, count } }: any){
        return { ...state, [caption]: (state[caption] || 0) + count }
    }
}, defaultState);

