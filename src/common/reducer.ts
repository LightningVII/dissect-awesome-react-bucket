import ActionTypes from './actionTypes';
import { handleActions } from 'redux-actions';

const defaultState = {
  menu: { open: false },
  bottomNav: { selectedIndex: 0 }
};

export default handleActions(
  {
    [ActionTypes.SET_MENU_STATE](state: any, action: any) {
      const { menu } = state,
        { open } = action.payload;
      const newState = { ...state, menu: { ...menu, open } };
      return newState;
    },
    [ActionTypes.SET_BOTTOM_NAV_STATE](state: any, action: any) {
      const { bottomNav } = state,
        { selectedIndex } = action.payload;
      return { ...state, bottomNav: { ...bottomNav, selectedIndex } };
    }
  },
  defaultState
);
