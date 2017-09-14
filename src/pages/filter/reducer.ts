import ActionTypes from './actionTypes';
import FilterTypes from '../../constants/FilterTypes';
import { handleActions } from 'redux-actions';

const defaultState = FilterTypes.ALL;

export default handleActions(
    {
        [ActionTypes.SET_FILTER](state: any, { payload: { filter } }: any) {
            return filter;
        }
    },
    defaultState
);
