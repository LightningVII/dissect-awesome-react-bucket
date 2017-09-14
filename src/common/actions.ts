import ActionTypes from './actionTypes';
import { createActions } from 'redux-actions';

export default createActions({
    [ActionTypes.SET_MENU_STATE]: (payload: any) => payload,
    [ActionTypes.SET_BOTTOM_NAV_STATE]: (payload: any) => payload
});