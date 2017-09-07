import ActionTypes from '../constants/Common.types';
import { createActions } from 'redux-actions';

export default createActions({
    [ActionTypes.SET_MENU_STATE]: (payload: any) => payload
});