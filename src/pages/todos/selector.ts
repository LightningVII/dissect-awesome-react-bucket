import { createSelector } from 'reselect';
import FilterTypes from '../../constants/FilterTypes';

const getFilter = (state: any) => state.filterState;
const getTodos = (state: any) => state.todosState;

export const selectVisibleTodos = createSelector(
    [getFilter, getTodos],
    (filter: any, todos: any) => {
        switch (filter) {
            case FilterTypes.ALL:
                return todos;
            case FilterTypes.COMPLETED:
                return todos.filter((item: any) => item.completed);
            case FilterTypes.UNCOMPLETED:
                return todos.filter((item: any) => !item.completed);
            default:
                throw new Error('unsupported filter');
        }
    }
);
