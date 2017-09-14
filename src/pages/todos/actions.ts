import ActionTypes from './actionTypes';
import { createActions } from 'redux-actions';
let nextTodoId: number = 0;
export default createActions({
    [ActionTypes.ADD_TODO]: (text: string) => {
        return { completed: false, id: nextTodoId++, text };
    },
    [ActionTypes.TOGGLE_TODO]: (id: number) => ({ id }),
    [ActionTypes.REMOVE_TODO]: (id: number) => ({ id })
});
