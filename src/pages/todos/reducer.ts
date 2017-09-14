import ActionTypes from './actionTypes';
import { handleActions } from 'redux-actions';

const defaultState: Array<{}> = [];

interface TodoInterface {
    id: number;
    completed: boolean;
    text: string;
}

interface ActionInterface {
    payload: TodoInterface;
}

export default handleActions(
    {
        [ActionTypes.ADD_TODO](state: any, { payload }: ActionInterface) {
            return [payload, ...state];
        },
        [ActionTypes.TOGGLE_TODO](state: any, { payload: { id } }: any) {
            return state.map((todoItem: TodoInterface) => {
                if (todoItem.id === id) {
                    return { ...todoItem, completed: !todoItem.completed };
                } else {
                    return todoItem;
                }
            });
        },
        [ActionTypes.REMOVE_TODO](state: any, { payload: { id } }: any) {
            return state.filter(
                (todoItem: TodoInterface) => todoItem.id !== id
            );
        }
    },
    defaultState
);
