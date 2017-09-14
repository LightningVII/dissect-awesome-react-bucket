import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import Actions from '../actions';
import FilterTypes from '../../../constants/FilterTypes';
import { List } from 'material-ui/List';

const TodoList = ({ todos, toggleTodo, removeTodo }: any) => {
    return (
        <List>
            {todos.map((item: any) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    onToggle={() => toggleTodo(item.id)}
                    onRemove={() => removeTodo(item.id)}
                />
            ))}
        </List>
    );
};

const selectVisibleTodos = (todos: any, filter: any) => {
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
};

const mapStateToProps = (state: any) => {
    return {
        todos: selectVisibleTodos(state.todosState, state.filterState)
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
