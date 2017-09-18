import * as React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import { selectVisibleTodos } from '../selector';
import { List } from 'material-ui/List';

/* 方法引用优化 避免重复创造新方法，参数传递通过增加元素属性的方式 */
const TodoList = ({ todos }: any) => {
    return (
        <List>
            {todos.map((item: any) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                />
            ))}
        </List>
    );
};

const mapStateToProps = (state: any) => ({
    todos: selectVisibleTodos(state)
});

/* 方案1 将Actions传入 子组件中 */
/* import Actions from '../actions';
export default connect(mapStateToProps, Actions)(TodoList); */

/* 方案2 子组件自己引入 Actions */
export default connect(mapStateToProps)(TodoList);
