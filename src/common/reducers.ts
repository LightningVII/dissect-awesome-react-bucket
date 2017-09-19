import { combineReducers } from 'redux';
import countState from '../pages/count/reducer';
import todosState from '../pages/todos/reducer';
import filterState from '../pages/filter/reducer';
import commonState from '../common/reducer';

export default combineReducers({
    todosState,
    filterState,
    countState,
    commonState
});

