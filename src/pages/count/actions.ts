import ActionTypes from './actionTypes';
import { createActions } from 'redux-actions';

export default createActions({
    [ActionTypes.INCREMENT]: (payload: any) => payload,
    [ActionTypes.DECREMENT]: ({ caption, count }: any) => {
        return { caption, count: -count };
    },
    [ActionTypes.FETCH_COUNT_REQUESTED]: (payload: any) => payload,
    [ActionTypes.FETCH_COUNT_SUCCEEDED]: (payload: any) => payload,
    [ActionTypes.FETCH_COUNT_FAILED]: (payload: any) => payload
});