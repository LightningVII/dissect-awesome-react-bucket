import { combineReducers } from 'redux'
import countState from './Count.reducer';
import commonState from './Common.reducer';

export default combineReducers({
    countState,
    commonState
})