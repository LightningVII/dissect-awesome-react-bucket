import ActionTypes from '../constants/Common.types';
import { handleActions } from 'redux-actions';

const defaultState = {
    open: false
}

export default handleActions({
    [ActionTypes.SET_MENU_STATE](state: any, action: any) {
        const {open} = action.payload
        return { ...state, open }
    }
}, defaultState);
