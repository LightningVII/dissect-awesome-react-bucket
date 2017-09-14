import ActionTypes from './actionTypes';
import { createActions } from 'redux-actions';

export default createActions({
    [ActionTypes.SET_FILTER]: (filter: any) => ({ filter })
});
