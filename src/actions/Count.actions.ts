import ActionTypes from '../constants/Count.typs';
import { createActions } from 'redux-actions';

export default createActions({
    [ActionTypes.INCREMENT]: (payload: any) => payload,
    [ActionTypes.DECREMENT]: ({ caption, count }: any) => {
        return {caption, count: -count}
    }
});